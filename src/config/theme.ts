/**
 * Coorder Design System Theme Configuration
 * Based on Community Centric Design System
 */

export const colors = {
  // Primary colors
  primary: '#ad2c00',
  'on-primary': '#ffffff',
  'primary-container': '#d83900',
  'on-primary-container': '#fffbff',
  'inverse-primary': '#ffb5a0',
  'primary-fixed': '#ffdbd1',
  'primary-fixed-dim': '#ffb5a0',
  'on-primary-fixed': '#3b0900',
  'on-primary-fixed-variant': '#872000',

  // Secondary colors
  secondary: '#0060a9',
  'on-secondary': '#ffffff',
  'secondary-container': '#4ba1fd',
  'on-secondary-container': '#003663',
  'secondary-fixed': '#d3e4ff',
  'secondary-fixed-dim': '#a2c9ff',
  'on-secondary-fixed': '#001c38',
  'on-secondary-fixed-variant': '#004881',

  // Tertiary colors
  tertiary: '#005daa',
  'on-tertiary': '#ffffff',
  'tertiary-container': '#0075d5',
  'on-tertiary-container': '#fefcff',
  'tertiary-fixed': '#d4e3ff',
  'tertiary-fixed-dim': '#a5c8ff',
  'on-tertiary-fixed': '#001c3a',
  'on-tertiary-fixed-variant': '#004785',

  // Error colors
  error: '#ba1a1a',
  'on-error': '#ffffff',
  'error-container': '#ffdad6',
  'on-error-container': '#93000a',

  // Surface colors
  surface: '#f8f9fa',
  'on-surface': '#191c1d',
  'surface-variant': '#e1e3e4',
  'on-surface-variant': '#5d4038',
  'surface-dim': '#d9dadb',
  'surface-bright': '#f8f9fa',
  'surface-container-lowest': '#ffffff',
  'surface-container-low': '#f3f4f5',
  'surface-container': '#edeeef',
  'surface-container-high': '#e7e8e9',
  'surface-container-highest': '#e1e3e4',
  'surface-tint': '#b12d00',

  // Inverse colors
  'inverse-surface': '#2e3132',
  'inverse-on-surface': '#f0f1f2',

  // Outline colors
  outline: '#926f66',
  'outline-variant': '#e7bdb2',

  // Background
  background: '#f8f9fa',
  'on-background': '#191c1d',
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  'gutter': '16px',
  'margin-mobile': '12px',
  'margin-desktop': '24px',
  'max-width-content': '640px',
  'unit': '4px',
};

export const fontSize = {
  'headline-lg': ['22px', { lineHeight: '28px', letterSpacing: '-0.02em', fontWeight: '600' }],
  'headline-md': ['18px', { lineHeight: '24px', letterSpacing: '-0.01em', fontWeight: '500' }],
  'headline-lg-mobile': ['20px', { lineHeight: '26px', fontWeight: '600' }],
  'body-lg': ['14px', { lineHeight: '21px', fontWeight: '400' }],
  'body-md': ['12px', { lineHeight: '18px', fontWeight: '400' }],
  'label-bold': ['12px', { lineHeight: '16px', fontWeight: '700' }],
  'label-sm': ['10px', { lineHeight: '14px', fontWeight: '500' }],
};

export const borderRadius = {
  sm: '0.25rem',
  DEFAULT: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  full: '9999px',
};

export const fontFamily = {
  sans: ['IBM Plex Sans', 'sans-serif'],
};
