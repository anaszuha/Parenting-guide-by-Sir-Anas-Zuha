const rules = [

  // =====================================================
  // LOW MARKS
  // =====================================================

  {
    id: "low_marks",

    tags: [
      "bad marks",
      "low marks",
      "failed",
      "poor result",
      "exam"
    ],

    ageRange: [5, 18],

    response: (ctx) => {

      let text = `
PROBLEM: Poor Academic Performance

Child Context:
Age: ${ctx.age}
Gender: ${ctx.gender}
Culture: ${ctx.region}

Possible Causes:
- Fear of failure
- Weak fundamentals
- Excessive pressure
- Anxiety
`;

      if (ctx.age <= 8) {

        text += `
Young Child Strategy:
- Make learning playful
- Use stories and games
- Avoid harsh punishment
`;

      } else if (ctx.age <= 13) {

        text += `
Middle Age Strategy:
- Build daily study habits
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


      if (ctx.region === "asian") {

        text += `
Cultural Note:
- Reduce comparison pressure
- Balance academics with emotional wellbeing
`;

      }


      if (ctx.gender === "boy") {

        text += `
Observation:
- Boys may express frustration through avoidance or aggression
`;

      } else {

        text += `
Observation:
- Girls may internalize stress emotionally
`;

      }


      text += `
Parent Actions:
1. Appreciate effort
2. Avoid humiliation
3. Avoid comparison
4. Build confidence gradually

Expected Outcome:
- Reduced exam fear
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

    tags: [
      "bullied",
      "bullying",
      "teased",
      "harassed"
    ],

    ageRange: [5, 18],

    response: (ctx) => {

      let text = `
PROBLEM: Child Being Bullied

Possible Effects:
- Fear
- Anxiety
- Social withdrawal
- Low confidence
`;

      if (ctx.age <= 10) {

        text += `
Young Child Strategy:
- Reassure emotional safety
- Inform teachers quickly
- Teach simple confident responses
`;

      } else {

        text += `
Teen Strategy:
- Teach assertive communication
- Build resilience
- Teach safe conflict handling
`;

      }

      text += `
Parent Actions:
1. Listen calmly
2. Never blame child
3. Build confidence
4. Encourage supportive friendships

Expected Outcome:
- Improved confidence
- Better emotional safety
`;

      return text;
    }
  },



  // =====================================================
  // MOBILE ADDICTION
  // =====================================================

  {
    id: "mobile_addiction",

    tags: [
      "mobile",
      "phone",
      "screen",
      "youtube",
      "games"
    ],

    ageRange: [3, 18],

    response: (ctx) => {

      let text = `
PROBLEM: Screen / Mobile Addiction

Possible Causes:
- Dopamine dependency
- Boredom
- Lack of alternatives
`;

      if (ctx.age <= 8) {

        text += `
Young Child Strategy:
- Increase physical play
- Reduce passive screen exposure
- Use family activities
`;

      } else {

        text += `
Older Child Strategy:
- Teach self-control gradually
- Encourage hobbies and sports
- Explain screen effects
`;

      }

      text += `
Parent Actions:
1. Set consistent limits
2. Replace habit instead of only banning
3. Model balanced screen use yourself

Expected Outcome:
- Reduced dependency
- Better attention span
`;

      return text;
    }
  },



  // =====================================================
  // CONFIDENCE
  // =====================================================

  {
    id: "confidence",

    tags: [
      "confidence",
      "shy",
      "hesitant",
      "fearful"
    ],

    ageRange: [3, 18],

    response: (ctx) => {

      let text = `
GOAL: Build Confidence
`;

      if (ctx.age <= 8) {

        text += `
Young Child Strategy:
- Encourage exploration
- Allow small decisions
- Appreciate effort often
`;

      } else {

        text += `
Teen Strategy:
- Give responsibility
- Encourage independent thinking
- Respect opinions
`;

      }

      text += `
Parent Actions:
1. Avoid comparison
2. Avoid public criticism
3. Encourage participation
4. Respect child dignity

Expected Outcome:
- Better self-expression
- Reduced social fear
`;

      return text;
    }
  },



  // =====================================================
  // LYING
  // =====================================================

  {
    id: "lying",

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
- Avoiding embarrassment

Parent Actions:
1. Stay calm
2. Ask WHY the child lied
3. Focus on honesty
4. Reward truthfulness
5. Avoid humiliation

Expected Outcome:
- Increased trust
- Better honesty
`;
    }
  },



  // =====================================================
  // AGGRESSION
  // =====================================================

  {
    id: "aggression",

    tags: [
      "aggressive",
      "hitting",
      "violent",
      "anger",
      "fighting"
    ],

    ageRange: [3, 18],

    response: (ctx) => {

      let text = `
PROBLEM: Aggressive Behavior

Possible Causes:
- Emotional frustration
- Feeling unheard
- Learned aggressive behavior
`;

      if (ctx.gender === "boy") {

        text += `
Observation:
- Boys may externalize frustration physically more often
`;

      }

      text += `
Parent Actions:
1. Stay calm
2. Stop harmful behavior safely
3. Teach emotional vocabulary
4. Encourage sports and activity
5. Model calm conflict resolution

Expected Outcome:
- Better emotional regulation
- Reduced aggression
`;

      return text;
    }
  }

];