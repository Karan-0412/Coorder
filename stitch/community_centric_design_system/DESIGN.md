---
name: Community Centric Design System
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#5d4038'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#926f66'
  outline-variant: '#e7bdb2'
  surface-tint: '#b12d00'
  primary: '#ad2c00'
  on-primary: '#ffffff'
  primary-container: '#d83900'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb5a0'
  secondary: '#0060a9'
  on-secondary: '#ffffff'
  secondary-container: '#4ba1fd'
  on-secondary-container: '#003663'
  tertiary: '#005daa'
  on-tertiary: '#ffffff'
  tertiary-container: '#0075d5'
  on-tertiary-container: '#fefcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#872000'
  secondary-fixed: '#d3e4ff'
  secondary-fixed-dim: '#a2c9ff'
  on-secondary-fixed: '#001c38'
  on-secondary-fixed-variant: '#004881'
  tertiary-fixed: '#d4e3ff'
  tertiary-fixed-dim: '#a5c8ff'
  on-tertiary-fixed: '#001c3a'
  on-tertiary-fixed-variant: '#004785'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 21px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-bold:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
  label-sm:
    fontFamily: IBM Plex Sans
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
  headline-lg-mobile:
    fontFamily: IBM Plex Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 12px
  margin-desktop: 24px
  max-width-content: 640px
---

## Brand & Style

The design system is engineered for high-density information environments where community interaction and content discoverability are paramount. It evokes a feeling of accessibility, democratic participation, and modern utility. 

The aesthetic follows a **Corporate / Modern** approach with a focus on functional minimalism. By prioritizing content over decorative flourishes, the UI stays out of the way of the user's discussion. The style is characterized by clear containment, purposeful use of brand color for calls-to-action, and a structured hierarchy that makes complex threaded conversations easy to parse. It is professional yet approachable, leaning into the familiarity of established social platform patterns while maintaining a crisp, contemporary finish.

## Colors

The palette is anchored by a high-energy primary orange-red, used strictly for core brand moments, primary actions, and notifications. 

- **Primary (#FF4500):** Used for the "Upvote" state, primary buttons, and critical brand identifiers.
- **Secondary (#0079D3):** Employed for links, secondary actions, and "Join" states. It provides a calming contrast to the energetic primary.
- **Surface & Background:** The main background is pure white (#FFFFFF) to maximize readability. Surface layers (#F6F7F8) are used to differentiate content blocks, sidebars, and input areas.
- **Neutral / Text:** Deep charcoal (#1A1A1B) ensures high-contrast readability for body text, while a medium gray (#7C7C7C) handles metadata and secondary labels.

## Typography

This design system utilizes **IBM Plex Sans** for its exceptional legibility and systematic feel. The typeface strikes a balance between technical precision and humanist warmth, making it ideal for long-form reading and dense data displays.

Hierarchy is established through weight and color rather than excessive size shifts. Headlines use SemiBold weights with tighter letter spacing to create a strong visual anchor for posts. Body text is optimized at 14px for the web to allow for high information density without sacrificing comfort. Labels utilize uppercase styling sparingly for metadata headers or tertiary navigation.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for content consumption. 
- **Desktop:** A central content column is capped at 640px to maintain optimal line lengths for reading. It is flanked by a navigation sidebar and a supplemental information sidebar.
- **Tablet:** The supplemental sidebar is hidden or moved to a drawer, prioritizing the main feed.
- **Mobile:** A single-column fluid layout with 12px horizontal margins.

Spacing follows a strict 4px base unit. 8px (sm) is used for internal component padding, while 16px (md) is the standard for vertical spacing between posts and cards. This tight rhythm reinforces the "information-first" nature of the design system.

## Elevation & Depth

Visual hierarchy is primarily achieved through **Tonal Layers** and **Low-Contrast Outlines**. 

The background layer is typically #F6F7F8 (Neutral). Content cards and interactive containers sit on top of this in pure #FFFFFF. To define these surfaces without creating visual noise, we use a 1px solid border (#EDEFF1). 

Shadows are used extremely sparingly, reserved only for "floating" elements like dropdown menus, modals, or hover states on cards. When used, shadows should be highly diffused: `0 2px 4px rgba(0,0,0,0.05)`. This keeps the UI feeling flat, fast, and modern.

## Shapes

The shape language uses a "Rounded" (Level 2) approach to soften the systematic grid. 

Standard components like buttons and input fields utilize a `0.5rem` (8px) radius. Larger containers, such as content cards or community banners, use `rounded-lg` (16px) to create a friendly, "island" feel for content. Interaction indicators, like the vote toggles or small profile avatars, should be fully circular (pill-shaped) to distinguish them from structural content containers.

## Components

### Buttons
- **Primary:** Solid #FF4500 background with white text. Used for the main action in a view.
- **Secondary:** Outlined with #0079D3 or solid #F6F7F8 with #0079D3 text. Used for supporting actions.
- **Ghost:** No background, #7C7C7C text. Used for utility actions like "Share" or "Report."

### Cards
Cards are the primary content vehicle. They feature a white background, a 1px #EDEFF1 border, and a 16px corner radius. Internal padding is strictly 12px or 16px to maintain the 4px rhythm.

### Inputs & Text Fields
Fields use the #F6F7F8 background with a 1px border that shifts to #0079D3 on focus. Placeholder text uses #7C7C7C.

### Chips & Tags
Used for community labels or post flairs. They feature highly rounded corners (pill) and a subtle #EDEFF1 background with dark text to ensure they don't distract from the primary post title.

### Vote Component
A vertical or horizontal stack featuring the up/down arrows. The "Active" upvote state uses #FF4500, while the "Active" downvote state uses #7193FF (light blue). Inactive states remain neutral gray.