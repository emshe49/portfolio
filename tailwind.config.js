/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: 'var(--bg-primary)',
          50: 'var(--bg-nested)',
          100: 'var(--bg-secondary)',
          200: 'var(--bg-elevated)',
          300: 'var(--bg-secondary)',
          400: 'var(--bg-primary)',
          900: 'var(--bg-nested)',
        },
        accent: {
          violet: 'var(--accent-violet)',
          'violet-glow': 'var(--accent-violet-glow)',
          mint: 'var(--accent-mint)',
          'mint-glow': 'var(--accent-mint-glow)',
          blue: '#4D88FF',
        },
        surface: {
          DEFAULT: 'var(--bg-secondary)',
          elevated: 'var(--bg-elevated)',
          card: 'var(--bg-elevated)',
          border: 'var(--border-color)',
          'border-highlight': 'var(--border-highlight)',
        },
        content: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-violet': '0 0 25px -5px rgba(139, 124, 255, 0.25)',
        'glow-mint': '0 0 25px -5px rgba(85, 214, 194, 0.25)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
