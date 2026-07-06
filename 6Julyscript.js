// =====================================================
// HANDLE INPUT
// =====================================================

function handleInput() {

  const age    = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const region = document.getElementById("region").value;
  const input  = document.getElementById("inputBox").value.toLowerCase();
  const btn    = document.getElementById("analyzeBtn");

  // VALIDATION
  if (!age || age < 1) {
    showError("Please enter a valid child age.");
    return;
  }
  if (input.trim() === "") {
    showError("Please describe your child's situation first.");
    return;
  }

  // BUTTON LOADING STATE
  btn.querySelector(".btn-text").style.display    = "none";
  btn.querySelector(".btn-loading").style.display = "inline";
  btn.disabled = true;

  // CHILD CONTEXT
  const ctx = { age, gender, region };

  setTimeout(() => {

    const rule   = findRule(input, ctx);
    const result = rule ? rule.response(ctx) : null;
    const type   = rule ? rule.type : "problem";

    // Hide form, show result
    document.getElementById("analyzerSection").style.display = "none";
    const resultSection = document.getElementById("resultSection");
    resultSection.style.display = "block";

    // Load animation
    if (rule && rule.animation) {
      loadAnimation(rule.animation);
    } else {
      document.getElementById("animationBox").style.display = "none";
    }

    // Render output
    const output = document.getElementById("output");
    if (result) {
      output.innerHTML = renderResult(result, type);
    } else {
      output.innerHTML = renderDefault();
    }

    // Reset button
    btn.querySelector(".btn-text").style.display    = "inline";
    btn.querySelector(".btn-loading").style.display = "none";
    btn.disabled = false;

    // Scroll to result
    resultSection.scrollIntoView({ behavior: "smooth", block: "start" });

  }, 600);
}


// =====================================================
// SHOW ERROR
// =====================================================

function showError(msg) {
  const output = document.getElementById("output");
  const resultSection = document.getElementById("resultSection");
  document.getElementById("analyzerSection").style.display = "none";
  resultSection.style.display = "block";
  document.getElementById("animationBox").style.display = "none";
  output.innerHTML = `
    <div style="text-align:center;padding:40px 20px;">
      <div style="font-size:3rem;margin-bottom:16px;">⚠️</div>
      <p style="color:#c0392b;font-size:1.05rem;font-weight:700;">${msg}</p>
      <button class="analyze-again-btn" style="margin-top:24px;max-width:300px;" onclick="analyzeAgain()">← Try Again</button>
    </div>
  `;
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}


// =====================================================
// FIND RULE  (score + priority weighted)
// =====================================================

function findRule(input, ctx) {

  let bestMatch = null;
  let bestScore = 0;

  for (let rule of rules) {

    if (ctx.age < rule.ageRange[0] || ctx.age > rule.ageRange[1]) continue;

    let score = 0;
    for (let tag of rule.tags) {
      if (input.includes(tag) || tag.includes(input)) score++;
    }

    if (score > 0) {
      const weighted = score * 10 + rule.priority;
      if (weighted > bestScore) {
        bestScore  = weighted;
        bestMatch  = rule;
      }
    }
  }

  return bestMatch;
}


// =====================================================
// RENDER RESULT  — converts plain text → rich HTML
// =====================================================

function renderResult(text, type) {

  const lines  = text.split("\n").map(l => l.trim()).filter(l => l !== "");
  const badge  = type === "problem"
    ? `<span class="result-type-badge badge-problem">⚠ Problem Identified</span>`
    : `<span class="result-type-badge badge-goal">🎯 Goal Guidance</span>`;

  let html      = "";
  let title     = "";
  let buffer    = [];
  let blockType = null; // "causes" | "actions" | "strategy" | "outcome" | "principle" | "general"

  function flushBlock() {
    if (!buffer.length) return;
    if (blockType === "causes") {
      html += `<div class="result-block">
        <div class="block-label">🔍 Possible Causes</div>
        <ul>${buffer.map(l => `<li>${l}</li>`).join("")}</ul>
      </div>`;
    } else if (blockType === "actions") {
      html += `<div class="result-block blue">
        <div class="block-label">✅ Parent Actions</div>
        <ol>${buffer.map(l => `<li>${l}</li>`).join("")}</ol>
      </div>`;
    } else if (blockType === "strategy") {
      html += `<div class="strategy-block">
        <div class="strategy-label">💡 Age-Specific Strategy</div>
        <ul>${buffer.map(l => `<li>${l}</li>`).join("")}</ul>
      </div>`;
    } else if (blockType === "outcome") {
      html += `<div class="outcome-block">
        <div class="block-label">🌱 Expected Outcome</div>
        <ul>${buffer.map(l => `<li>${l}</li>`).join("")}</ul>
      </div>`;
    } else if (blockType === "principle") {
      html += `<div class="principle-quote">
        <strong>📖 Parenting Principle</strong><br><br>
        ${buffer.join("<br>")}
      </div>`;
    } else {
      html += `<div class="result-block gold">
        <div class="block-label">ℹ️ Understanding</div>
        <ul>${buffer.map(l => `<li>${l}</li>`).join("")}</ul>
      </div>`;
    }
    buffer = [];
  }

  for (let line of lines) {

    const up = line.toUpperCase();

    // Title line (PROBLEM: ... or GOAL: ...)
    if (up.startsWith("PROBLEM:") || up.startsWith("GOAL:")) {
      title = line.replace(/^(PROBLEM:|GOAL:)/i, "").trim();
      continue;
    }

    // Section headers
    if (/^possible causes/i.test(line)) {
      flushBlock(); blockType = "causes"; continue;
    }
    if (/^parent actions/i.test(line)) {
      flushBlock(); blockType = "actions"; continue;
    }
    if (/^(young child strategy|older child strategy|middle age strategy|teen strategy|strategy for age|age-specific strategy)/i.test(line)) {
      flushBlock(); blockType = "strategy"; continue;
    }
    if (/^expected outcome/i.test(line)) {
      flushBlock(); blockType = "outcome"; continue;
    }
    if (/^parenting principle/i.test(line)) {
      flushBlock(); blockType = "principle"; continue;
    }
    if (/^understanding/i.test(line)) {
      flushBlock(); blockType = "general"; continue;
    }

    // Strip list markers and numbering
    const clean = line.replace(/^[-•]\s*/, "").replace(/^\d+\.\s*/, "").trim();
    if (clean) buffer.push(clean);
  }

  flushBlock();

  return `
    <h2 class="result-title">${title || "Parenting Guidance"}</h2>
    ${badge}
    ${html}
  `;
}


// =====================================================
// DEFAULT RESPONSE (no rule matched)
// =====================================================

function renderDefault() {
  return `
    <h2 class="result-title">General Parenting Wisdom</h2>
    <span class="result-type-badge badge-goal">📚 General Guidance</span>
    <div class="result-block">
      <div class="block-label">ℹ️ No specific rule matched — here are core principles</div>
      <ul>
        <li>Respect child dignity at all times</li>
        <li>Avoid comparing your child to others</li>
        <li>Encourage independence through real responsibilities</li>
        <li>Listen calmly before reacting</li>
        <li>Never humiliate your child — in private or public</li>
        <li>Build trust before expecting obedience</li>
        <li>Encourage open communication daily</li>
        <li>Teach through participation, not lectures</li>
        <li>Model the behavior you want to see</li>
        <li>Support emotional safety at home</li>
      </ul>
    </div>
    <div class="principle-quote">
      💡 Try describing your situation more specifically — for example: <em>"child throws tantrums"</em>, <em>"low marks in school"</em>, or <em>"addicted to mobile phone"</em>.
    </div>
  `;
}


// =====================================================
// LOAD ANIMATION
// =====================================================

function loadAnimation(animationName) {

  const container = document.getElementById("animationBox");
  container.style.display = "block";
  container.innerHTML = "";

  lottie.loadAnimation({
    container: container,
    renderer:  "svg",
    loop:      true,
    autoplay:  true,
    path:      animations[animationName]
  });
}


// =====================================================
// ENTER KEY SUPPORT
// =====================================================

document.getElementById("inputBox").addEventListener("keydown", function(e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleInput();
  }
});
