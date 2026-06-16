/**
 * Coorder Design System — Theme Configuration
 *
 * Colors are defined as CSS variable references so that a single set of
 * Tailwind tokens (e.g. `bg-surface-container`) automatically resolves to
 * the correct light or dark value depending on which CSS variables are active.
 * The actual hex values live in globals.css under :root and .dark.
 */

export const colors = {
  primary:                   'var(--color-primary)',
  'on-primary':              'var(--color-on-primary)',
  'primary-container':       'var(--color-primary-container)',
  'on-primary-container':    'var(--color-on-primary-container)',
  'inverse-primary':         'var(--color-inverse-primary)',
  'primary-fixed':           'var(--color-primary-fixed)',
  'primary-fixed-dim':       'var(--color-primary-fixed-dim)',
  'on-primary-fixed':        'var(--color-on-primary-fixed)',
  'on-primary-fixed-variant':'var(--color-on-primary-fixed-variant)',

  secondary:                   'var(--color-secondary)',
  'on-secondary':              'var(--color-on-secondary)',
  'secondary-container':       'var(--color-secondary-container)',
  'on-secondary-container':    'var(--color-on-secondary-container)',
  'secondary-fixed':           'var(--color-secondary-fixed)',
  'secondary-fixed-dim':       'var(--color-secondary-fixed-dim)',
  'on-secondary-fixed':        'var(--color-on-secondary-fixed)',
  'on-secondary-fixed-variant':'var(--color-on-secondary-fixed-variant)',

  tertiary:                   'var(--color-tertiary)',
  'on-tertiary':              'var(--color-on-tertiary)',
  'tertiary-container':       'var(--color-tertiary-container)',
  'on-tertiary-container':    'var(--color-on-tertiary-container)',
  'tertiary-fixed':           'var(--color-tertiary-fixed)',
  'tertiary-fixed-dim':       'var(--color-tertiary-fixed-dim)',
  'on-tertiary-fixed':        'var(--color-on-tertiary-fixed)',
  'on-tertiary-fixed-variant':'var(--color-on-tertiary-fixed-variant)',

  error:                'var(--color-error)',
  'on-error':           'var(--color-on-error)',
  'error-container':    'var(--color-error-container)',
  'on-error-container': 'var(--color-on-error-container)',

  surface:                    'var(--color-surface)',
  'on-surface':               'var(--color-on-surface)',
  'surface-variant':          'var(--color-surface-variant)',
  'on-surface-variant':       'var(--color-on-surface-variant)',
  'surface-dim':              'var(--color-surface-dim)',
  'surface-bright':           'var(--color-surface-bright)',
  'surface-container-lowest': 'var(--color-surface-container-lowest)',
  'surface-container-low':    'var(--color-surface-container-low)',
  'surface-container':        'var(--color-surface-container)',
  'surface-container-high':   'var(--color-surface-container-high)',
  'surface-container-highest':'var(--color-surface-container-highest)',
  'surface-tint':             'var(--color-surface-tint)',

  'inverse-surface':    'var(--color-inverse-surface)',
  'inverse-on-surface': 'var(--color-inverse-on-surface)',

  outline:          'var(--color-outline)',
  'outline-variant':'var(--color-outline-variant)',

  background:    'var(--color-background)',
  'on-background':'var(--color-on-background)',
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  gutter: '16px',
  'margin-mobile': '12px',
  'margin-desktop': '24px',
  'max-width-content': '640px',
  unit: '4px',
};

export const fontSize = {
  'headline-lg':       ['22px', { lineHeight: '28px', letterSpacing: '-0.02em', fontWeight: '600' }],
  'headline-md':       ['18px', { lineHeight: '24px', letterSpacing: '-0.01em', fontWeight: '500' }],
  'headline-lg-mobile':['20px', { lineHeight: '26px', fontWeight: '600' }],
  'body-lg':           ['14px', { lineHeight: '21px', fontWeight: '400' }],
  'body-md':           ['12px', { lineHeight: '18px', fontWeight: '400' }],
  'label-bold':        ['12px', { lineHeight: '16px', fontWeight: '700' }],
  'label-sm':          ['10px', { lineHeight: '14px', fontWeight: '500' }],
};

export const borderRadius = {
  sm:      '0.25rem',
  DEFAULT: '0.5rem',
  md:      '0.75rem',
  lg:      '1rem',
  xl:      '1.5rem',
  full:    '9999px',
};

export const fontFamily = {
  sans: ['IBM Plex Sans', 'sans-serif'],
};
