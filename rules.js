const rules = [

  // =====================================================
  // LOW MARKS
  // =====================================================

  {
    id: "low_marks",

    priority: 7,

    type: "problem",

    animation: "study",

    tags: [
      "bad marks",
      "low marks",
      "failed",
      "poor result",
      "exam",
      "study weak"
    ],

    ageRange: [5, 18],

    response: (ctx) => {

      let text = `
PROBLEM: Poor Academic Performance

Possible Causes:
- Fear of failure
- Weak fundamentals
- Pressure
- Anxiety
`;

      if (ctx.age <= 8) {

        text += `
Young Child Strategy:
- Make learning playful
- Use stories and games
- Avoid punishment
`;

      } else if (ctx.age <= 13) {

        text += `
Middle Age Strategy:
- Build study routine
- Encourage consistency
- Help organize homework
`;

      } else {

        text += `
Teen Strategy:
- Discuss future goals calmly
- Teach time management
- Encourage self-discipline
`;

      }

      text += `
Parent Actions:
1. Appreciate effort
2. Avoid humiliation
3. Avoid comparison
4. Build confidence gradually

Expected Outcome:
- Better study consistency
`;

      return text;
    }
  },



  // =====================================================
  // BULLYING
  // =====================================================

  {
    id: "bullying",

    priority: 9,

    type: "problem",

    animation: "bullying",

    tags: [
      "bullied",
      "bullying",
      "teased",
      "harassed"
    ],

    ageRange: [5, 18],

    response: (ctx) => {

      return `
PROBLEM: Child Being Bullied

Parent Actions:
1. Listen calmly
2. Never blame child
3. Inform school if necessary
4. Build confidence
5. Teach assertive communication

Expected Outcome:
- Improved confidence
- Better emotional safety
`;
    }
  },



  // =====================================================
  // MOBILE ADDICTION
  // =====================================================

  {
    id: "mobile_addiction",

    priority: 7,

    type: "problem",

    animation: "mobile",

    tags: [
      "mobile",
      "phone",
      "screen",
      "youtube",
      "games"
    ],

    ageRange: [3, 18],

    response: (ctx) => {

      return `
PROBLEM: Mobile / Screen Addiction

Parent Actions:
1. Set consistent limits
2. Replace screen time with activities
3. Encourage sports and hobbies
4. Avoid excessive parental phone usage

Expected Outcome:
- Reduced dependency
- Better attention span
`;
    }
  },



  // =====================================================
  // CONFIDENCE
  // =====================================================

  {
    id: "confidence",

    priority: 6,

    type: "goal",

    animation: "confidence",

    tags: [
      "confidence",
      "shy",
      "hesitant",
      "fearful"
    ],

    ageRange: [3, 18],

    response: (ctx) => {

      return `
GOAL: Build Confidence

Parent Actions:
1. Avoid comparison
2. Encourage participation
3. Give responsibilities
4. Respect child dignity
5. Allow decision making

Expected Outcome:
- Better self-expression
- Reduced social fear
`;
    }
  },



  // =====================================================
  // LYING
  // =====================================================

  {
    id: "lying",

    priority: 8,

    type: "problem",

    animation: "calm_talk",

    tags: [
      "lying",
      "lies",
      "dishonest",
      "hiding truth"
    ],

    ageRange: [4, 18],

    response: (ctx) => {

      return `
PROBLEM: Lying Behavior

Possible Causes:
- Fear of punishment
- Lack of trust

Parent Actions:
1. Stay calm
2. Ask WHY child lied
3. Reward honesty
4. Avoid humiliation

Expected Outcome:
- Better honesty
- Increased trust
`;
    }
  },



  // =====================================================
  // AGGRESSION
  // =====================================================

  {
    id: "aggression",

    priority: 9,

    type: "problem",

    animation: "anger",

    tags: [
      "aggressive",
      "hitting",
      "violent",
      "anger",
      "fighting"
    ],

    ageRange: [3, 18],

    response: (ctx) => {

      return `
PROBLEM: Aggressive Behavior

Parent Actions:
1. Stay calm
2. Stop harmful behavior safely
3. Teach emotional vocabulary
4. Encourage sports
5. Model calm conflict resolution

Expected Outcome:
- Better emotional regulation
- Reduced aggression
`;
    }
  }

];




// =====================================================
// ANIMATIONS
// =====================================================

const animations = {

  calm_talk:
    "https://assets2.lottiefiles.com/packages/lf20_touohxv0.json",

  study:
    "https://assets9.lottiefiles.com/packages/lf20_myejiggj.json",

  bullying:
    "https://assets2.lottiefiles.com/packages/lf20_x62chJ.json",

  confidence:
    "https://assets1.lottiefiles.com/packages/lf20_49rdyysj.json",

  mobile:
    "https://assets10.lottiefiles.com/packages/lf20_2LdLki.json",

  anger:
    "https://assets4.lottiefiles.com/packages/lf20_tll0j4bb.json"
};
