import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  // Disable dark mode at the framework level — Clinical Frost is light-only
  darkMode: false,
  theme: {
    // Reset Tailwind's default color palette so NO built-in color utilities leak
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      white: '#FFFFFF',
      black: '#000000',

      // ─── Clinical Frost Design System ────────────────────────────────────
      clinical: {
        // Brand / Primary
        navy:        '#162C41',
        'navy-dark': '#0D1E2E',
        'navy-mid':  '#1E3A52',
        slate:       '#4F606F',
        'slate-light':'#6B7E8F',
        'slate-muted':'#8FA3B3',

        // Backgrounds
        bg:           '#F5F8FB',
        'bg-subtle':  '#EDF1F5',
        surface:      '#FFFFFF',
        'surface-dim':'#F9FAFB',

        // Borders
        border:        '#D6DDE4',
        'border-mid':  '#BFC8D0',
        'border-strong':'#A8B4BE',

        // Semantic / States
        success:        '#1A7F5A',
        'success-light':'#E6F5EE',
        warning:        '#B45309',
        'warning-light':'#FEF3C7',
        danger:         '#B91C1C',
        'danger-light': '#FEE2E2',
        info:           '#1B5FA8',
        'info-light':   '#DBEAFE',

        // Confidence scale (1–5 for evidence ratings)
        'conf-1': '#D1D5DB',
        'conf-2': '#93C5FD',
        'conf-3': '#60A5FA',
        'conf-4': '#2563EB',
        'conf-5': '#1D4ED8',

        // Interactive / Accent
        accent:        '#1B5FA8',
        'accent-hover':'#164C8A',
        'accent-light':'#EFF6FF',

        // Text hierarchy
        'text-primary':  '#162C41',
        'text-secondary':'#4F606F',
        'text-muted':    '#8FA3B3',
        'text-inverse':  '#FFFFFF',
      },
    },

    extend: {
      // ─── Typography ──────────────────────────────────────────────────────
      fontFamily: {
        sans:   ['"IBM Plex Sans"', 'system-ui', 'ui-sans-serif', 'sans-serif'],
        report: ['"EB Garamond"', 'Georgia', 'Cambria', 'ui-serif', 'serif'],
        mono:   ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },

      // ─── Border Radius — hard cap at 4px ─────────────────────────────────
      borderRadius: {
        none:    '0px',
        sm:      '2px',
        DEFAULT: '4px',
        md:      '4px',
        lg:      '4px',
        xl:      '4px',
        '2xl':   '4px',
        '3xl':   '4px',
        full:    '9999px',
      },

      // ─── Box Shadows — cool navy-toned ───────────────────────────────────
      boxShadow: {
        soft:          '0 1px 3px 0 rgba(22, 44, 65, 0.08), 0 1px 2px -1px rgba(22, 44, 65, 0.06)',
        elevated:      '0 4px 12px -2px rgba(22, 44, 65, 0.12), 0 2px 6px -2px rgba(22, 44, 65, 0.08)',
        card:          '0 1px 4px 0 rgba(22, 44, 65, 0.08), 0 0 0 1px rgba(22, 44, 65, 0.04)',
        'card-elevated':'0 8px 24px -4px rgba(22, 44, 65, 0.14), 0 0 0 1px rgba(22, 44, 65, 0.06)',
        panel:         '0 0 0 1px rgba(22, 44, 65, 0.08), 0 2px 8px -2px rgba(22, 44, 65, 0.10)',
        focus:         '0 0 0 3px rgba(27, 95, 168, 0.30)',
        none:          'none',
      },

      // ─── Motion Duration Tokens ───────────────────────────────────────────
      transitionDuration: {
        fast:   '120ms',
        normal: '180ms',
        soft:   '260ms',
        slow:   '360ms',
      },

      // ─── Motion Easing Tokens ─────────────────────────────────────────────
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
        spring:   'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ease-in-standard':  'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out-standard': 'cubic-bezier(0, 0, 0.2, 1)',
      },

      // ─── Keyframe Animations ─────────────────────────────────────────────
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up':  'fade-up 260ms cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'fade-in':  'fade-in 180ms cubic-bezier(0.4, 0, 0.2, 1) both',
        'shimmer':  'shimmer 1.8s linear infinite',
      },

      // ─── Spacing (augments Tailwind defaults) ────────────────────────────
      spacing: {
        '4.5': '1.125rem',
        '13':  '3.25rem',
        '15':  '3.75rem',
        '18':  '4.5rem',
        '22':  '5.5rem',
      },

      // ─── Typography Plugin Overrides ──────────────────────────────────────
      typography: () => ({
        clinical: {
          css: {
            '--tw-prose-body':         '#4F606F',
            '--tw-prose-headings':     '#162C41',
            '--tw-prose-lead':         '#4F606F',
            '--tw-prose-links':        '#1B5FA8',
            '--tw-prose-bold':         '#162C41',
            '--tw-prose-counters':     '#8FA3B3',
            '--tw-prose-bullets':      '#BFC8D0',
            '--tw-prose-hr':           '#D6DDE4',
            '--tw-prose-quotes':       '#162C41',
            '--tw-prose-quote-borders':'#D6DDE4',
            '--tw-prose-captions':     '#8FA3B3',
            '--tw-prose-code':         '#162C41',
            '--tw-prose-pre-code':     '#F5F8FB',
            '--tw-prose-pre-bg':       '#162C41',
            '--tw-prose-th-borders':   '#BFC8D0',
            '--tw-prose-td-borders':   '#D6DDE4',
          },
        },
      }),
    },
  },
  plugins: [
    typography,
  ],
}

export default config
