# Branding Guidelines Report - Bonnie Malone Coaching

## Executive Summary

This report outlines the comprehensive branding system for Bonnie Malone's health and wellness coaching practice. The design system emphasizes gentle transformation, optimal health, and long-term weight loss while maintaining a soft, nurturing, and professional aesthetic suitable for middle-aged women seeking sustainable wellness solutions.

## 1. Color System Analysis

### Primary Color Palette (60%)

- **Soft Pink** (#FFE4E1)
  - Primary brand color representing nurturing energy and gentle transformation
  - Used for main navigation, headers, and key UI elements
  - Color scale:
    - 100: #FFF9F8
    - 200: #FFEFED
    - 300: #FFE4E1
    - 400: #FFD9D4
    - 500: #FFCEC7
    - 600: #FFB3A7
    - 700: #FF9887
    - 800: #FF7D67
    - 900: #FF6247

### Secondary Color Palette (30%)

- **Warm Beige** (#F5E6D3)
  - Supporting color representing comfort and authenticity
  - Used for text, borders, and subtle accents
  - Color scale:
    - 100: #FDFAF6
    - 200: #FAF2EA
    - 300: #F5E6D3
    - 400: #ECD5BB
    - 500: #E3C4A3
    - 600: #DAB38B
    - 700: #D1A273
    - 800: #C8915B
    - 900: #BF8043

### Accent Color Palette (10%)

- **Sage Green** (#9CAF88)
  - Used for interactive elements and calls-to-action
  - Creates balance and natural harmony
  - Color scale:
    - 100: #F4F6F2
    - 200: #E3E8DD
    - 300: #C1CCBA
    - 400: #9CAF88
    - 500: #8A9D76
    - 600: #788B64
    - 700: #667952
    - 800: #546740
    - 900: #42552E

## 2. Supporting Colors

### System Feedback Colors

- Success: #4A8B4A (Forest Green)

  - Light: #6BA56B
  - Default: #4A8B4A
  - Dark: #2A712A

- Warning: #E6B65C (Warm Yellow)

  - Light: #F0C87D
  - Default: #E6B65C
  - Dark: #D9A43B

- Error: #D67F7F (Muted Red)

  - Light: #E39D9D
  - Default: #D67F7F
  - Dark: #C96161

- Info: #7B9EC7 (Soft Blue)
  - Light: #99B6D7
  - Default: #7B9EC7
  - Dark: #5D86B7

## 3. Typography System

### Primary Font Family

- **Font**: "Cormorant Garamond"
- **Weights**:
  - Regular (400)
  - Medium (500)
  - Semibold (600)
  - Bold (700)
- **Usage**: Display text, headings, and important statements

### Secondary Font Family

- **Font**: "Lato"
- **Weights**:
  - Light (300)
  - Regular (400)
  - Medium (500)
  - Semibold (600)
- **Usage**: Body text, navigation, buttons

### Typography Scale

- Display 1: 4rem (64px)
- Display 2: 3.5rem (56px)
- H1: 3rem (48px)
- H2: 2.5rem (40px)
- H3: 2rem (32px)
- H4: 1.5rem (24px)
- Body Large: 1.25rem (20px)
- Body Base: 1rem (16px)
- Body Small: 0.875rem (14px)
- Caption: 0.75rem (12px)

## 4. Gradient System

### Primary Gradients

```css
/* Hero Section Gradient */
background: linear-gradient(180deg, #ffe4e1 0%, #ffcec7 100%);

/* Overlay Gradient */
background: linear-gradient(
  180deg,
  rgba(255, 228, 225, 0.9) 0%,
  rgba(255, 206, 199, 0.95) 100%
);
```

### Secondary Gradients

```css
/* Natural Accent Gradient */
background: linear-gradient(135deg, #9caf88 0%, #8a9d76 100%);

/* Light Effect Gradient */
background: linear-gradient(
  180deg,
  rgba(253, 250, 246, 0.8) 0%,
  rgba(253, 250, 246, 0) 100%
);
```

## 5. Component Guidelines

### Buttons

- Primary: Sage Green background with white text
- Secondary: Transparent with sage green border
- Text: White or sage green for contrast
- Border Radius: 0.5rem (8px)
- Padding: 1rem 2rem (16px 32px)

### Cards

- Background: White
- Border: 1px solid rgba(156, 175, 136, 0.1)
- Border Radius: 0.75rem (12px)
- Box Shadow: 0 4px 16px rgba(156, 175, 136, 0.08)
- Padding: 2rem (32px)

### Form Elements

- Input Background: White
- Input Border: 1px solid rgba(156, 175, 136, 0.2)
- Focus Ring: 2px solid #9CAF88
- Placeholder Text: rgba(156, 175, 136, 0.5)
- Border Radius: 0.5rem (8px)

## 6. Implementation Notes

### React Component Examples

```jsx
// Button Component
<Button
  variant="primary"
  className="bg-primary-500 text-white hover:bg-primary-600 font-medium px-8 py-4 rounded-lg"
>
  Start Your Wellness Journey
</Button>

// Card Component
<Card className="bg-white border border-primary-100 rounded-xl shadow-md p-8">
  {children}
</Card>

// Input Component
<Input
  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
  placeholder="Your Email"
/>
```

### CSS Variables Implementation

```css
:root {
  /* Colors */
  --primary-500: #ffe4e1;
  --secondary-500: #f5e6d3;
  --accent-500: #9caf88;

  /* Typography */
  --font-primary: "Cormorant Garamond", serif;
  --font-secondary: "Lato", sans-serif;

  /* Spacing */
  --spacing-base: 1rem;
  --spacing-large: 2rem;

  /* Border Radius */
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
}
```

## 7. Accessibility Considerations

- All text maintains WCAG 2.1 AA contrast requirements
- Interactive elements have clear focus and hover states
- Form elements include proper labeling and aria attributes
- Images include descriptive alt text
- Navigation is keyboard accessible

## 8. Version Control

- Version: 1.0.0
- Last Updated: March 2024
- Based on: Bonnie Malone Coaching website (bonniemalonecoach.com)
