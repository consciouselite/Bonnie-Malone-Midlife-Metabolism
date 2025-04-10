// Quiz title and subtitle
export const quizTitle = "What's REALLY Slowing Your Midlife Metabolism? [QUIZ]";
export const quizSubtitle =
  "The Truth About Why Your Body Isn't Responding Like It Used To (Even When You're Doing \"All The Right Things\")";

// Type definitions
interface QuizOption {
  text: string;
  type: string;
  icon: string;
}

interface Question {
  id: number;
  text: string;
  options: QuizOption[];
  includesName?: boolean;
}

interface MetabolismType {
  type: string;
  description: string;
  explanation: string;
  impact: string;
  timeline: string;
  solution: string;
  image?: string;
}

// Questions array with type indicators
export const killerQuestions: Question[] = [
  {
    id: 1,
    text: "Your friends invite you to dinner at a new restaurant. The appetizers look amazing but you're watching your weight. What's your FIRST thought?",
    options: [
      {
        text: "I'll skip lunch tomorrow to make up for tonight",
        type: "OutdatedOS",
        icon: "🍷",
      },
      {
        text: "Great, another thing to stress about while everyone else enjoys themselves",
        type: "StressSpiral",
        icon: "😩",
      },
      {
        text: "My body feels different lately... I can't predict how foods affect me anymore",
        type: "HormoneHavoc",
        icon: "🤔",
      },
      {
        text: "I need to check my calorie tracking app before I decide what I can have",
        type: "DisconnectionDilemma",
        icon: "📱",
      },
    ],
  },
  {
    id: 2,
    text: "[Name], it's 3pm and your energy is crashing HARD. What's your go-to solution?",
    includesName: true,
    options: [
      {
        text: "Another coffee... and maybe something sweet to get through the day",
        type: "StressSpiral",
        icon: "☕",
      },
      {
        text: "Push through it - my fitness tracker says I haven't hit my movement goals yet",
        type: "DisconnectionDilemma",
        icon: "📊",
      },
      {
        text: "Work out harder tomorrow to boost my metabolism back up",
        type: "OutdatedOS",
        icon: "🏋️",
      },
      {
        text: "Accept that my energy patterns have changed in midlife and rest if I need to",
        type: "HormoneHavoc",
        icon: "😴",
      },
    ],
  },
  {
    id: 3,
    text: "You step on the scale after a week of clean eating and extra workouts to find you've GAINED two pounds. Your honest reaction is:",
    options: [
      {
        text: "My body must be broken... maybe I need my thyroid checked",
        type: "HormoneHavoc",
        icon: "🔍",
      },
      {
        text: "I need to cut my calories even more drastically",
        type: "OutdatedOS",
        icon: "📉",
      },
      {
        text: "This is SO frustrating! I'll never get my old body back!",
        type: "StressSpiral",
        icon: "🤯",
      },
      {
        text: "The scale must be wrong - I've tracked everything perfectly",
        type: "DisconnectionDilemma",
        icon: "📱",
      },
    ],
  },
  {
    id: 4,
    text: "When it comes to your exercise routine lately, which sounds most like you?",
    options: [
      {
        text: "I'm pushing harder than ever but getting worse results and more exhaustion",
        type: "OutdatedOS",
        icon: "🏃‍♀️",
      },
      {
        text: "I know I should exercise but I'm honestly too tired most days",
        type: "StressSpiral",
        icon: "🧘‍♀️",
      },
      {
        text: "I follow my favorite fitness influencer's workouts but get distracted scrolling during rest periods",
        type: "DisconnectionDilemma",
        icon: "📲",
      },
      {
        text: "What used to energize me now leaves me wiped out for days",
        type: "HormoneHavoc",
        icon: "🤔",
      },
    ],
  },
  {
    id: 5,
    text: "[Name], which statement about sleep feels painfully true for you right now?",
    includesName: true,
    options: [
      {
        text: "I fall asleep fine but wake up sweating in the middle of the night",
        type: "HormoneHavoc",
        icon: "🔥",
      },
      {
        text: "My brain won't shut off - I'm exhausted but mentally wired",
        type: "StressSpiral",
        icon: "💭",
      },
      {
        text: "I need screens to unwind but then have trouble falling asleep",
        type: "DisconnectionDilemma",
        icon: "📺",
      },
      {
        text: "I keep the same sleep schedule I've always had, even though I'm more tired now",
        type: "OutdatedOS",
        icon: "⏰",
      },
    ],
  },
  {
    id: 6,
    text: "You're trying to be \"good\" with your diet. Which is your biggest struggle?",
    options: [
      {
        text: "Cravings that feel more intense than ever before",
        type: "HormoneHavoc",
        icon: "🍩",
      },
      {
        text: "I can't actually remember the last meal I ate without multitasking",
        type: "DisconnectionDilemma",
        icon: "🤔",
      },
      {
        text: "The diet that helped me lose weight in my 30s doesn't work anymore",
        type: "OutdatedOS",
        icon: "🥗",
      },
      {
        text: "Stress eating when life gets overwhelming",
        type: "StressSpiral",
        icon: "😫",
      },
    ],
  },
  {
    id: 7,
    text: "Which pop culture reference best describes your current metabolism situation?",
    options: [
      {
        text: "I feel like I'm in Groundhog Day - doing the same things but expecting different results",
        type: "OutdatedOS",
        icon: "🔄",
      },
      {
        text: "Like that Inside Out movie - my body's control panel has completely new operators",
        type: "HormoneHavoc",
        icon: "🧠",
      },
      {
        text: "\"The Social Dilemma\" hit too close to home - I'm constantly distracted from my own body signals",
        type: "DisconnectionDilemma",
        icon: "📵",
      },
      {
        text: "I'm living in 24/7 crisis mode like Jack Bauer, except it's my everyday life",
        type: "StressSpiral",
        icon: "⏰",
      },
    ],
  },
  {
    id: 8,
    text: "[Name], what's your relationship with hunger lately?",
    includesName: true,
    options: [
      {
        text: "I honestly can't tell if I'm actually hungry or just craving something",
        type: "DisconnectionDilemma",
        icon: "🤷‍♀️",
      },
      {
        text: "I eat at my scheduled meal times, regardless of whether I'm hungry or not",
        type: "OutdatedOS",
        icon: "📅",
      },
      {
        text: "I get irritable or shaky if I don't eat frequently",
        type: "StressSpiral",
        icon: "😠",
      },
      {
        text: "My appetite is all over the place - ravenous one day, nothing the next",
        type: "HormoneHavoc",
        icon: "🎢",
      },
    ],
  },
  {
    id: 9,
    text: "When you think about your metabolism compared to 10 years ago, which thought crosses your mind most?",
    options: [
      {
        text: "I just need to work harder to get the same results",
        type: "OutdatedOS",
        icon: "😤",
      },
      {
        text: "My hormones have completely hijacked my body",
        type: "HormoneHavoc",
        icon: "🧪",
      },
      {
        text: "Life is so much more stressful now - no wonder my body's rebelling",
        type: "StressSpiral",
        icon: "😰",
      },
      {
        text: "I need more data, more tracking, more information to crack the code",
        type: "DisconnectionDilemma",
        icon: "📲",
      },
    ],
  },
  {
    id: 10,
    text: "Weekend morning: you have no obligations until afternoon. What's your reality?",
    options: [
      {
        text: "I'm up tackling my to-do list - those emails won't answer themselves",
        type: "StressSpiral",
        icon: "📋",
      },
      {
        text: "Hitting the gym with the same intensity I've always used",
        type: "OutdatedOS",
        icon: "🏋️",
      },
      {
        text: "Scrolling social media in bed, then wondering where the morning went",
        type: "DisconnectionDilemma",
        icon: "📱",
      },
      {
        text: "I need way more sleep and recovery time than I used to",
        type: "HormoneHavoc",
        icon: "😴",
      },
    ],
  },
  {
    id: 11,
    text: "Be honest - which statement makes you think \"damn, that's me\"?",
    options: [
      {
        text: "I've tried literally everything but my body's storing fat like I'm preparing for hibernation",
        type: "HormoneHavoc",
        icon: "😳",
      },
      {
        text: "I secretly believe I just need more willpower to fix my metabolism",
        type: "OutdatedOS",
        icon: "🙄",
      },
      {
        text: "I'm constantly busy but can't remember the last time I felt truly relaxed",
        type: "StressSpiral",
        icon: "🤦‍♀️",
      },
      {
        text: "I spend more time reading about healthy habits than actually feeling what my body needs",
        type: "DisconnectionDilemma",
        icon: "👀",
      },
    ],
  },
];

// Metabolic Pattern definitions
export const metabolismTypes: MetabolismType[] = [
  {
    type: "The Stress Spiral",
    description: "The hidden metabolism saboteur that masquerades as \"just life.\"",
    explanation: "This isn't garden-variety stress - it's a constant physiological battle state your body enters when survival mode becomes your default setting. Your nervous system stays locked in a cortisol-driven response that directly blocks your metabolic function.",
    impact: "What's actually happening is brilliant but problematic: your body is prioritizing immediate energy access for \"emergencies\" over long-term metabolic efficiency. This made perfect sense when our ancestors faced actual tigers, but your body can't distinguish between deadline pressure and mortal danger.",
    timeline: "The shocking truth? Cortisol reduction practices show measurable metabolic shifts in just 14-21 days. Your body is desperate to recalibrate, but can't while perceiving constant threats.",
    solution: "The metabolism practices that will serve you best focus on nervous system regulation FIRST, before nutrition or exercise changes can actually work.",
    image: "https://example.com/stress-spiral.jpg",
  },
  {
    type: "The Hormone Havoc",
    description: "The invisible but powerful metabolic game-changer of midlife.",
    explanation: "This isn't just normal aging - it's a profound biochemical restructuring that transforms how your body produces energy, stores fat, and processes nutrients. Your hormonal system is undergoing changes that directly override your previous metabolic patterns.",
    impact: "What's actually happening is a sophisticated biological transition: your reproductive hormone shifts create a domino effect throughout your entire metabolic system. This is an intelligent adaptation, not a breakdown, but it requires a completely different approach.",
    timeline: "The surprising reality? Hormone-specific strategies show measurable metabolic improvement in 30-60 days when properly aligned with your body's new patterns.",
    solution: "The metabolism practices that will serve you best work WITH your changing hormones rather than fighting against this natural transition.",
    image: "https://example.com/hormone-havoc.jpg",
  },
  {
    type: "The Outdated Operating System",
    description: "The hidden reason your once-effective approaches now backfire.",
    explanation: "This isn't about trying harder - it's about recognizing that your metabolic software needs a complete update for midlife. The strategies that worked brilliantly in your 20s and 30s are now creating the exact opposite of your intended results.",
    impact: "What's actually happening is metabolic adaptation: your body has become highly efficient at protecting you from the very approaches you're using. It's not broken - it's actually too good at adapting to what you've been doing.",
    timeline: "The counterintuitive truth? Metabolic recalibration through pattern interruption shows measurable results in 21-45 days when you stop forcing outdated strategies.",
    solution: "The metabolism practices that will serve you best require a fundamentally different framework built specifically for your current metabolic reality.",
    image: "https://example.com/outdated-os.jpg",
  },
  {
    type: "The Disconnection Dilemma",
    description: "The invisible gap between your mind and body that's sabotaging your metabolism.",
    explanation: "This isn't about needing more willpower - it's about your nervous system's response to our hyper-stimulating, always-on environment. Your body's subtle signals get drowned out in the constant noise of modern life.",
    impact: "What's actually happening is a communication breakdown: the sophisticated feedback loops that should regulate hunger, energy, and recovery can't function when overridden by external stimuli and distractions.",
    timeline: "The unexpected reality? Mindful eating and deliberate tech boundary practices show measurable metabolic impact within 14-28 days by restoring these natural communication channels.",
    solution: "The metabolism practices that will serve you best focus on rebuilding your intuitive body intelligence rather than adding more external tracking or information.",
    image: "https://example.com/disconnection-dilemma.jpg",
  },
];

// Implement reverse scoring mechanism to prevent pattern recognition
// For questions 3, 6, 9, we'll score them in reverse order
const reverseQuestions = [3, 6, 9];

// Pattern-specific calculation logic
export const calculateResult = (answers: string[]) => {
  // Count frequency of each pattern in answers
  const patternCounts = {
    StressSpiral: 0,
    HormoneHavoc: 0,
    OutdatedOS: 0,
    DisconnectionDilemma: 0,
  };

  answers.forEach((answer, index) => {
    // Check if this question should be reverse scored
    if (reverseQuestions.includes(index + 1)) {
      // Apply reverse scoring logic
      // This is a simple example - you might want to implement more complex logic
      if (answer === "StressSpiral") patternCounts.DisconnectionDilemma += 1;
      else if (answer === "HormoneHavoc") patternCounts.OutdatedOS += 1;
      else if (answer === "OutdatedOS") patternCounts.HormoneHavoc += 1;
      else if (answer === "DisconnectionDilemma") patternCounts.StressSpiral += 1;
    } else {
      // Normal scoring
      patternCounts[answer] = (patternCounts[answer] || 0) + 1;
    }
  });

  // Find dominant pattern
  let dominantPattern = null;
  let maxCount = 0;

  Object.entries(patternCounts).forEach(([pattern, count]) => {
    if (count > maxCount) {
      dominantPattern = pattern;
      maxCount = count;
    }
  });

  // Handle ties by random selection (or could implement more sophisticated tie-breaking)
  const tiePatterns = Object.entries(patternCounts)
    .filter(([_, count]) => count === maxCount)
    .map(([pattern, _]) => pattern);
  
  if (tiePatterns.length > 1) {
    // Randomly select from tied patterns
    const randomIndex = Math.floor(Math.random() * tiePatterns.length);
    dominantPattern = tiePatterns[randomIndex];
  }

  // Map internal type names to display type names
  const typeMapping = {
    StressSpiral: "The Stress Spiral",
    HormoneHavoc: "The Hormone Havoc",
    OutdatedOS: "The Outdated Operating System",
    DisconnectionDilemma: "The Disconnection Dilemma",
  };

  // Find matching type profile
  return metabolismTypes.find(
    (type) => type.type === typeMapping[dominantPattern]
  );
}; 