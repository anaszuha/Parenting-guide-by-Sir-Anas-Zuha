function handleInput() {

  const age = parseInt(document.getElementById("age").value);

  const gender = document.getElementById("gender").value;

  const region = document.getElementById("region").value;

  const input = document
    .getElementById("inputBox")
    .value
    .toLowerCase();

  const output = document.getElementById("output");


  // VALIDATION

  if (!age || age < 1) {

    output.innerText = "Please enter valid child age.";

    return;
  }


  if (input.trim() === "") {

    output.innerText =
      "Please describe parenting problem or goal.";

    return;
  }


  // CHILD CONTEXT

  const ctx = {
    age: age,
    gender: gender,
    region: region
  };


  // FIND RULE

  const result = findRule(input, ctx);

  output.innerText = result;
}



// =====================================================
// RULE MATCH ENGINE
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


    // KEYWORD MATCHING

    for (let tag of rule.tags) {

      if (
  input.includes(tag) ||
  tag.includes(input)
) {

        return rule.response(ctx);
      }
    }
  }


  // DEFAULT RESPONSE

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

Suggestion:
Add this new behavior into rules.js later.
`;
}
