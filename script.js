function handleInput() {

  const age =
    parseInt(document.getElementById("age").value);

  const gender =
    document.getElementById("gender").value;

  const region =
    document.getElementById("region").value;

  const input =
    document
      .getElementById("inputBox")
      .value
      .toLowerCase();

  const output =
    document.getElementById("output");


  // VALIDATION

  if (!age || age < 1) {

    output.innerText =
      "Please enter valid child age.";

    return;
  }

  if (input.trim() === "") {

    output.innerText =
      "Please describe parenting problem or goal.";

    return;
  }


  // LOADING MESSAGE

  output.innerText =
    "Analyzing parenting situation...";


  // CHILD CONTEXT

  const ctx = {
    age: age,
    gender: gender,
    region: region
  };


  // SMALL DELAY FOR UX

  setTimeout(() => {

    const result = findRule(input, ctx);

    output.innerText = result;

  }, 500);
}




// =====================================================
// FIND RULE
// =====================================================

function findRule(input, ctx) {

  for (let rule of rules) {


    // AGE FILTER

    if (
      ctx.age < rule.ageRange[0] ||
      ctx.age > rule.ageRange[1]
    ) {
      continue;
    }


    // MATCH SCORE

    let score = 0;

    for (let tag of rule.tags) {

      if (
        input.includes(tag) ||
        tag.includes(input)
      ) {
        score++;
      }
    }


    // MATCH FOUND

    if (score > 0) {

      if (rule.animation) {
        loadAnimation(rule.animation);
      }

      return rule.response(ctx);
    }
  }


  // DEFAULT

  return `
No exact parenting rule matched.

General Parenting Principles:

1. Respect child dignity
2. Avoid comparison
3. Encourage independence
4. Listen calmly
5. Avoid humiliation
6. Build trust before control
7. Encourage communication
8. Teach through participation
9. Model good behavior yourself
10. Support emotional safety
`;
}




// =====================================================
// LOAD ANIMATION
// =====================================================

function loadAnimation(animationName) {

  const container =
    document.getElementById("animationBox");

  container.innerHTML = "";

  lottie.loadAnimation({

    container: container,

    renderer: "svg",

    loop: true,

    autoplay: true,

    path: animations[animationName]
  });
}




// =====================================================
// ENTER KEY SUPPORT
// =====================================================

document
  .getElementById("inputBox")
  .addEventListener("keydown", function(event) {

    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {

      event.preventDefault();

      handleInput();
    }
});
