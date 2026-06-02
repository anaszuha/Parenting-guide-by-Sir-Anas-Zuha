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
// TANTRUMS
// =====================================================

{
  id: "tantrum",

  priority: 10,

  type: "problem",

  animation: "calm_talk",

  tags: [
    "tantrum",
    "tantrums",
    "screaming",
    "crying",
    "meltdown",
    "stubborn",
    "throws things"
  ],

  ageRange: [2, 12],

  response: (ctx) => {

    let text = `
PROBLEM: Child Tantrums

Possible Causes:
- Frustration
- Hunger
- Tiredness
- Feeling unheard

Parent Actions:
1. Stay calm.
2. Ensure safety.
3. Acknowledge feelings.
4. Avoid shouting.
5. Discuss behavior later.
`;

    if (ctx.age <= 5) {

      text += `
Young Child Strategy:
- Offer limited choices.
- Keep routines predictable.
- Use simple language.
`;

    } else {

      text += `
Older Child Strategy:
- Teach emotional vocabulary.
- Teach problem solving.
`;
    }

    text += `
Expected Outcome:
- Better emotional control
- Fewer tantrums
`;

    return text;
  }
},




// =====================================================
// ANXIETY
// =====================================================

{
  id: "anxiety",

  priority: 10,

  type: "problem",

  animation: "confidence",

  tags: [
    "anxiety",
    "anxious",
    "stress",
    "stressed",
    "panic",
    "worried",
    "fear",
    "nervous"
  ],

  ageRange: [4, 18],

  response: (ctx) => {

    let text = `
PROBLEM: Child Anxiety

Possible Causes:
- Fear of failure
- Bullying
- Academic pressure
- Family stress

Parent Actions:
1. Listen calmly.
2. Validate feelings.
3. Avoid criticism.
4. Build confidence gradually.
5. Maintain stability at home.
`;

    if (ctx.age <= 10) {

      text += `
Young Child Strategy:
- Use stories and play.
- Reassure frequently.
- Teach calm breathing.
`;

    } else {

      text += `
Teen Strategy:
- Encourage open discussion.
- Teach stress management.
- Respect privacy and independence.
`;
    }

    text += `
Expected Outcome:
- Better emotional safety
- Reduced anxiety
`;

    return text;
  }
},




// =====================================================
// FUTURE GOAL / CAREER CONFUSION
// =====================================================

{
  id: "future_goal",

  priority: 8,

  type: "goal",

  animation: "confidence",

  tags: [
    "future",
    "career",
    "goal",
    "ambition",
    "confused",
    "does not know what to become",
    "unclear future"
  ],

  ageRange: [10, 18],

  response: (ctx) => {

    return `
GOAL: Help Child Discover Future Direction

Parent Actions:

1. Do not force a profession.

2. Avoid repeatedly asking:
Doctor or Engineer?

3. Expose child to:
- Science
- Technology
- Arts
- Business
- Sports

4. Observe natural interests.

5. Encourage exploration.

6. Focus on skills instead of titles.

Parenting Principle:
Do not pre-condition the child.
Allow interests to emerge naturally.

Expected Outcome:
- Better self-awareness
- Reduced career anxiety
- Stronger motivation
`;
  }
},




// =====================================================
// COMMUNICATION SKILLS
// =====================================================

{
  id: "communication",

  priority: 8,

  type: "goal",

  animation: "confidence",

  tags: [
    "communication",
    "speaking",
    "english",
    "accent",
    "public speaking",
    "talking skills"
  ],

  ageRange: [4, 18],

  response: (ctx) => {

    return `
GOAL: Improve Communication Skills

Parent Actions:

1. Hold daily conversations.

2. Read books together.

3. Encourage storytelling.

4. Allow child to express opinions.

5. Avoid interrupting constantly.

6. Encourage presentations and speeches.

7. Give responsibilities requiring communication.

Expected Outcome:
- Better confidence
- Better expression
- Better speaking ability
`;
  }
},




// =====================================================
// RESPONSIBILITY
// =====================================================

{
  id: "responsibility",

  priority: 8,

  type: "goal",

  animation: "confidence",

  tags: [
    "responsibility",
    "lazy",
    "laziness",
    "procrastination",
    "dependent"
  ],

  ageRange: [5, 18],

  response: (ctx) => {

    return `
GOAL: Build Responsibility

Parent Actions:

1. Give age-appropriate responsibilities.

2. Allow child to help in:
- Shopping
- Cleaning
- Organizing

3. Allow decision making.

4. Let child experience consequences safely.

5. Appreciate effort.

Expected Outcome:
- Independence
- Responsibility
- Better life skills
`;
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
