# Bonnie Malone - Midlife Metabolism Quiz

## What's REALLY Slowing Your Midlife Metabolism? [QUIZ]

This repository contains a quiz implementation for Bonnie Malone's "Killer Framework" that helps users identify their specific midlife metabolism blocker pattern.

## Quiz Structure

The quiz follows the Killer Framework pattern with 11 engaging questions that help identify which of the four metabolism blockers is most dominant for the user:

1. **The Stress Spiral**: The hidden metabolism saboteur that masquerades as "just life"
2. **The Hormone Havoc**: The invisible but powerful metabolic game-changer of midlife
3. **The Outdated Operating System**: The hidden reason your once-effective approaches now backfire
4. **The Disconnection Dilemma**: The invisible gap between your mind and body that's sabotaging your metabolism

## Implementation Details

### Key Files

- `research/midlife-metabolism-research.md`: Detailed research on the four metabolism blocker patterns
- `content/midlife-metabolism-quiz.md`: Quiz content including questions, options, results, and follow-up scripts
- `src/data/killerQuizData.ts`: TypeScript implementation of the quiz data structure
- `src/hooks/useKillerQuiz.ts`: React hook that manages quiz state and logic

### Technical Features

- **Reverse Scoring Mechanism**: Questions 3, 6, and 9 are reverse-scored to prevent users from recognizing patterns
- **Name Personalization**: Questions 2, 5, and 8 include name personalization for a more engaging experience
- **Tie Resolution**: Random selection from tied metabolism types ensures consistent results
- **Secondary Type Identification**: The quiz calculates both primary and secondary metabolism types

### Result Types

Each result includes:

- Type name and description
- Detailed explanation of the pattern
- Scientific impact on metabolism
- Timeline for potential transformation
- Specific metabolism practices recommended

## Integration

The quiz is integrated into the application using the `useKillerQuiz` React hook which handles:

- Quiz state management
- Answer collection
- Result calculation
- Form submission
- Result display

## Image Assets

Result images are stored in `public/images/quiz/` with the following files:

- `stress-spiral.jpg`
- `hormone-havoc.jpg`
- `outdated-os.jpg`
- `disconnection-dilemma.jpg`
# Bonnie-Malone-Midlife-Metabolism
