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
  },

// =====================================================
// MISBEHAVIOR - TODDLER (Age 2-4)
// =====================================================

{
  id: "misbehavior_toddler",

  priority: 9,

  type: "problem",

  animation: "calm_talk",

  tags: [
    "misbehaving",
    "misbehavior",
    "misbehaves",
    "bad behavior",
    "fights",
    "fighting",
    "fight",
    "abusing",
    "abusive",
    "bad language",
    "naughty",
    "disobedient",
    "not listening",
    "biting",
    "hitting others",
    "throwing food",
    "refuses to sleep",

  ],

  ageRange: [2, 4],

  response: (ctx) => {

    return `
PROBLEM: Misbehavior in Toddler (Age 2–4)

Understanding:
At this age, misbehavior is normal.
The child is exploring your boundaries.
Language skills are still developing.
They cannot fully express needs.

Possible Causes:
- Hunger or tiredness
- Seeking attention
- Frustration from inability to communicate
- Copying observed behavior

Parent Actions:
1. Stay calm — never shout or hit.
2. Get down to child's eye level.
3. Use short, simple sentences.
4. Redirect attention to a different activity.
5. Maintain consistent daily routines.
6. Give limited choices to build cooperation.
   Example: Do you want water or juice?
7. Appreciate good behavior immediately.
8. Avoid saying NO too frequently.
   Replace with a positive alternative.

Parenting Principle:
The child understands everything.
There is always a reason behind behavior.
Find the reason instead of punishing.

Expected Outcome:
- Reduced misbehavior over time
- Better cooperation
- Stronger parent-child bond
`;
  }
},




// =====================================================
// MISBEHAVIOR - EARLY CHILDHOOD (Age 5-8)
// =====================================================

{
  id: "misbehavior_early",

  priority: 9,

  type: "problem",

  animation: "calm_talk",

  tags: [
    "misbehaving",
    "misbehavior",
    "misbehaves",
    "bad behavior",
    "fights",
    "fighting",
    "fight",
    "abusing",
    "abusive",
    "bad language",
    "rude",
    "disrespectful",
    "not obeying",
    "arguing",
    "answering back",
    "defiant",
    "ignoring parents"
  ],

  ageRange: [5, 8],

  response: (ctx) => {

    return `
PROBLEM: Misbehavior in Early Childhood (Age 5–8)

Understanding:
Child is testing your boundaries actively.
This is a normal developmental phase.
They respond better to reasoning than punishment.

Possible Causes:
- Seeking independence
- Imitating peers or media
- Feeling unheard or disrespected
- Inconsistent rules at home

Parent Actions:
1. Listen before reacting.
2. Explain WHY a rule exists.
   Example: We sleep early so our brain grows strong.
3. Hold a calm discussion, not a lecture.
4. Allow child input in small decisions.
5. Respect the child — speak as you want to be spoken to.
6. Avoid public humiliation.
7. Give natural consequences where safe.
   Example: If you skip dinner, you will feel hungry.
8. Model the behavior you expect.

Parenting Principle:
Respect the child the way you want them to become.
If you want a confident child, treat them with confidence.

Expected Outcome:
- More cooperative behavior
- Better self-discipline
- Improved mutual respect
`;
  }
},




// =====================================================
// MISBEHAVIOR - PRETEEN (Age 9-12)
// =====================================================

{
  id: "misbehavior_preteen",

  priority: 9,

  type: "problem",

  animation: "calm_talk",

  tags: [
    "misbehaving",
    "misbehavior",
    "misbehaves",
    "bad behavior",
    "fights",
    "fighting",
    "fight",
    "abusing",
    "abusive",
    "bad language",
    "back answering",
    "ignoring",
    "rude behavior",
    "stubborn preteen",
    "defiant child",
    "disrespect",
    "not following rules"
  ],

  ageRange: [9, 12],

  response: (ctx) => {

    return `
PROBLEM: Misbehavior in Preteen (Age 9–12)

Understanding:
Child is developing a strong personal identity.
Peer influence increases significantly.
They need respect more than commands.

Possible Causes:
- Peer pressure
- Desire for independence
- Feeling controlled or compared
- Stress from school or social life

Parent Actions:
1. Have a structured argument session.
   Listen to the child's reasoning fully.
2. Decide together based on strongest argument.
   Do not simply impose your authority.
3. Avoid comparison with siblings or other children.
4. Give meaningful responsibilities at home.
   Example: Let them manage Eid shopping budget.
5. Allow natural consequences for harmless choices.
6. Acknowledge their growing maturity openly.
7. Make family duties enjoyable together.
   Example: Everyone cleans the house together today.

Parenting Principle:
Do not impose your choice unless there is real harm.
Let the child experience and learn from safe mistakes.

Expected Outcome:
- Reduced power struggles
- Better sense of responsibility
- Stronger family respect
`;
  }
},




// =====================================================
// MISBEHAVIOR - TEENAGER (Age 13-18)
// =====================================================

{
  id: "misbehavior_teen",

  priority: 9,

  type: "problem",

  animation: "calm_talk",

  tags: [
    "teenager misbehaving",
    "misbehaves",
    "fights",
    "bad behavior",
    "fighting",
    "fight",
    "abusing",
    "abusive",
    "bad language",
    "teen rude",
    "teenage defiance",
    "teen rebellion",
    "disrespectful teenager",
    "teen not listening",
    "teenager ignoring parents",
    "teen attitude"
  ],

  ageRange: [13, 18],

  response: (ctx) => {

    return `
PROBLEM: Misbehavior in Teenager (Age 13–18)

Understanding:
Teenagers are forming adult identity.
They need autonomy, not authority.
Harsh control leads to rebellion or withdrawal.

Possible Causes:
- Feeling disrespected or not trusted
- Peer influence and social pressure
- Academic or emotional stress
- Observing inconsistent behavior in parents

Parent Actions:
1. Treat them as young adults, not children.
2. Share your own life experiences openly.
3. Hold debate-style discussions on disagreements.
   Decide based on logic, not rank.
4. Do not corrupt your own example.
   Avoid: cutting queues, unfair use of resources,
   dishonest shortcuts in front of them.
5. Allow personal choices in style, hobbies, and preferences.
6. Set only safety-based non-negotiables clearly.
7. Pray for them and dream big with them.
8. Remind them of their potential regularly.

Parenting Principle:
The child is always watching — like a camera recording.
Your behavior is their biggest lesson.

Expected Outcome:
- Reduced rebellion
- Stronger mutual trust
- Better adult decision making
`;
  }
},




// =====================================================
// READING DIFFICULTY - UNDER AGE
// =====================================================

{
  id: "reading_difficulty",

  priority: 8,

  type: "problem",

  animation: "study",

  tags: [
    "cannot read",
    "reading",
    "reading problem",
    "slow reader",
    "does not like reading",
    "reading difficulty",
    "struggles with words",
    "letter recognition",
    "reading delay"
  ],

  ageRange: [3, 10],

  response: (ctx) => {

    let text = `
PROBLEM: Reading Difficulty in Young Child

Understanding:
Reading readiness varies per child.
Forcing too early can create a lasting fear of reading.
The goal is to make reading enjoyable, not pressured.

Possible Causes:
- Introduced to reading too formally too early
- Lack of exposure to books at home
- Possible learning difference (dyslexia etc.)
- Low confidence or fear of making mistakes
`;

    if (ctx.age <= 5) {

      text += `
Strategy for Age 3–5:
- Read aloud to the child daily.
- Point at pictures and describe them together.
- Use alphabet songs and rhymes.
- Do not force letter memorization under pressure.
- Let the child hold and explore books freely.
`;

    } else if (ctx.age <= 7) {

      text += `
Strategy for Age 6–7:
- Use phonics-based learning games.
- Read together — alternate sentences.
- Allow child to choose their own books.
- Celebrate every small reading success.
- Never mock mispronunciation.
`;

    } else {

      text += `
Strategy for Age 8–10:
- Identify if a learning difference is present.
  Consult a specialist if delays persist.
- Use audiobooks alongside physical books.
- Match reading material to child's interests.
- Build a small home book collection.
`;
    }

    text += `
Parent Actions:
1. Make books visible and accessible at home.
2. Read yourself — model reading behavior.
3. Visit libraries or book fairs together.
4. Never label child as slow or weak reader.
5. Celebrate curiosity over perfection.

Expected Outcome:
- Growing interest in reading
- Improved literacy over time
- Stronger vocabulary and imagination
`;

    return text;
  }
},




// =====================================================
// WRITING DIFFICULTY - UNDER AGE
// =====================================================

{
  id: "writing_difficulty",

  priority: 8,

  type: "problem",

  animation: "study",

  tags: [
    "cannot write",
    "writing",
    "writing problem",
    "messy handwriting",
    "writing delay",
    "does not like writing",
    "struggles with pencil",
    "writing difficulty",
    "letter formation"
  ],

  ageRange: [3, 10],

  response: (ctx) => {

    let text = `
PROBLEM: Writing Difficulty in Young Child

Understanding:
Writing requires fine motor skill development.
Each child develops this at their own pace.
Pressure and punishment make it worse, not better.

Possible Causes:
- Fine motor skills still developing
- Introduced to formal writing too early
- Anxiety about making mistakes
- Weak hand grip strength
`;

    if (ctx.age <= 5) {

      text += `
Strategy for Age 3–5:
- Use playdough, clay, and drawing freely.
- Practice with large crayons and chalk.
- Do not focus on correct letter formation yet.
- Make writing a play activity, not a school task.
`;

    } else if (ctx.age <= 7) {

      text += `
Strategy for Age 6–7:
- Trace letters with finger before pencil.
- Use dotted letter worksheets playfully.
- Praise effort, never criticize shape.
- Keep writing sessions short and positive.
`;

    } else {

      text += `
Strategy for Age 8–10:
- Check pencil grip and correct gently.
- Use lined notebooks with wide spacing.
- Allow printed (block) letters if cursive is hard.
- Consult school if difficulty is significant.
`;
    }

    text += `
Parent Actions:
1. Provide drawing and coloring tools at home.
2. Encourage free drawing without correction.
3. Never tear or discard child's written work.
4. Display their writing proudly at home.
5. Avoid comparison with other children.

Expected Outcome:
- Improved fine motor skills
- Better writing confidence
- Gradual improvement in handwriting
`;

    return text;
  }
},




// =====================================================
// SPEAKING / SPEECH DELAY - UNDER AGE
// =====================================================

{
  id: "speaking_difficulty",

  priority: 9,

  type: "problem",

  animation: "confidence",

  tags: [
    "not speaking",
    "speech delay",
    "late talker",
    "cannot speak clearly",
    "stuttering",
    "speaking problem",
    "unclear speech",
    "mute child",
    "does not talk"
  ],

  ageRange: [1, 8],

  response: (ctx) => {

    let text = `
PROBLEM: Speaking Difficulty or Speech Delay

Understanding:
Speech development timelines vary widely.
A child who speaks late can still develop fully.
Early support makes a significant difference.

Possible Causes:
- Hearing issue (get hearing checked first)
- Bilingual home environment (normal and temporary)
- Excessive screen time replacing conversation
- Insufficient verbal interaction at home
- Possible speech or language delay requiring support
`;

    if (ctx.age <= 3) {

      text += `
Strategy for Age 1–3:
- Talk to the child constantly throughout the day.
- Name objects clearly: This is a cup. This is water.
- Sing nursery rhymes and repeat them daily.
- Reduce screen time significantly.
- Respond to every sound or gesture the child makes.
- Do not speak for the child — give them time to try.
`;

    } else if (ctx.age <= 5) {

      text += `
Strategy for Age 4–5:
- Have back-and-forth conversations daily.
- Ask open questions: What did you see today?
- Read picture books and ask the child to describe them.
- Play pretend games that require speaking.
- If speech is very unclear, consult a speech therapist.
`;

    } else {

      text += `
Strategy for Age 6–8:
- Encourage the child to speak in full sentences.
- Never complete their sentences for them.
- Allow them to order food, ask shopkeepers etc.
- Involve in family discussions.
- If stuttering is present, consult a specialist calmly.
`;
    }

    text += `
Parent Actions:
1. Get hearing assessed if speech is significantly delayed.
2. Reduce screen time and increase face-to-face talk.
3. Never mock, mimic, or laugh at speech errors.
4. Consult a speech therapist if delay persists.
5. Praise every speaking attempt warmly.

Parenting Principle:
Give the child responsibilities that require speaking.
Example: Let them ask the shopkeeper for items themselves.
This builds both speech and confidence together.

Expected Outcome:
- Gradual improvement in speech clarity
- Better vocabulary and sentence formation
- Increased communication confidence
`;

    return text;
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
