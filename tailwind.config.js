/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
   extend: {
  colors: {
    border: "var(--color-border)",
    input: "var(--color-input)",
    ring: "var(--color-ring)",
    background: "var(--color-background)",
    foreground: "var(--color-foreground)",
    primary: {
      DEFAULT: "var(--color-primary)",
      foreground: "var(--color-primary-foreground)",
    },
    secondary: {
      DEFAULT: "var(--color-secondary)",
      foreground: "var(--color-secondary-foreground)",
    },
    destructive: {
      DEFAULT: "var(--color-destructive)",
      foreground: "var(--color-destructive-foreground)",
    },
    muted: {
      DEFAULT: "var(--color-muted)",
      foreground: "var(--color-muted-foreground)",
    },
    accent: {
      DEFAULT: "var(--color-accent)",
      foreground: "var(--color-accent-foreground)",
    },
    popover: {
      DEFAULT: "var(--color-popover)",
      foreground: "var(--color-popover-foreground)",
    },
    card: {
      DEFAULT: "var(--color-card)",
      foreground: "var(--color-card-foreground)",
    },
    success: {
      DEFAULT: "var(--color-success)",
      foreground: "var(--color-success-foreground)",
    },
    warning: {
      DEFAULT: "var(--color-warning)",
      foreground: "var(--color-warning-foreground)",
    },
    error: {
      DEFAULT: "var(--color-error)",
      foreground: "var(--color-error-foreground)",
    },
    environmental: {
      excellent: "var(--color-environmental-excellent)",
      good: "var(--color-environmental-good)",
      moderate: "var(--color-environmental-moderate)",
      poor: "var(--color-environmental-poor)",
      hazardous: "var(--color-environmental-hazardous)",
    },
    community: {
      active: "var(--color-community-active)",
      engaged: "var(--color-community-engaged)",
      neutral: "var(--color-community-neutral)",
    },
  },
  borderRadius: {
    lg: "var(--radius-lg)",
    md: "var(--radius-md)",
    sm: "var(--radius-sm)",
    xl: "var(--radius-xl)",
  },
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    accent: ['Poppins', 'sans-serif'],
    environmental: ['Inter', 'sans-serif'],
    community: ['Poppins', 'sans-serif'],
  },
  fontSize: {
    'environmental-hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
    'environmental-title': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
    'environmental-subtitle': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
    'community-heading': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
    'data-label': ['0.875rem', { lineHeight: '1.4', fontWeight: '500' }],
    'metric-value': ['2rem', { lineHeight: '1.1', fontWeight: '600' }],
  },
  spacing: {
    'environmental': 'var(--spacing-md)',
    'community': 'var(--spacing-lg)',
    'section': 'var(--spacing-xl)',
  },
  boxShadow: {
    'environmental': 'var(--shadow-environmental)',
    'environmental-lg': 'var(--shadow-lg)',
    'data-card': '0 1px 3px rgba(46, 125, 50, 0.1), 0 1px 2px rgba(46, 125, 50, 0.06)',
    'map-marker': '0 4px 12px rgba(46, 125, 50, 0.15)',
  },

      animation: {
        'environmental-pulse': 'environmentalPulse 4s ease-in-out infinite',
        'achievement-unlock': 'achievementUnlock 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'data-reveal': 'dataReveal 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'community-celebrate': 'communityCelebrate 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'bin-status-update': 'binStatusUpdate 0.5s ease-out',
      },
      keyframes: {
        environmentalPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1.0' },
        },
        achievementUnlock: {
          '0%': { 
            transform: 'scale(0.8) rotate(-5deg)',
            opacity: '0'
          },
          '50%': { 
            transform: 'scale(1.1) rotate(2deg)',
            opacity: '0.8'
          },
          '100%': { 
            transform: 'scale(1) rotate(0deg)',
            opacity: '1'
          },
        },
        dataReveal: {
          '0%': {
            transform: 'translateY(30px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
        communityCelebrate: {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.05) rotate(1deg)' },
          '50%': { transform: 'scale(1.1) rotate(-1deg)' },
          '75%': { transform: 'scale(1.05) rotate(0.5deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
        binStatusUpdate: {
          '0%': { 
            transform: 'scale(1)',
            backgroundColor: 'var(--color-muted)'
          },
          '50%': { 
            transform: 'scale(1.05)',
            backgroundColor: 'var(--color-primary)'
          },
          '100%': { 
            transform: 'scale(1)',
            backgroundColor: 'var(--color-card)'
          },
        },
      },
      transitionTimingFunction: {
        'environmental': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'natural': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'environmental': '300ms',
        'fast': '200ms',
        'slow': '500ms',
      },
      backdropBlur: {
        'environmental': '8px',
      },
      gridTemplateColumns: {
        'environmental': 'repeat(auto-fit, minmax(280px, 1fr))',
        'community-stats': 'repeat(auto-fit, minmax(200px, 1fr))',
        'bin-grid': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      aspectRatio: {
        'environmental-card': '16 / 9',
        'community-metric': '4 / 3',
        'map-container': '21 / 9',
      },
      zIndex: {
        'header': '50',
        'sidebar': '40',
        'modal': '60',
        'tooltip': '70',
        'map-overlay': '30',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
}