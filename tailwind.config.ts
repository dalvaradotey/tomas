import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'lavender-blush': '#EDE3E9',
        'slate-blue': '#826AED',
        'persian-indigo': '#340068',
        'success': '#34d399',
        'success-font': '#064e3b',
        'sunglow': '#FFCB47',
        'primary': '#340068',
        'secondary': '#826AED',
        'third': '#EDE3E9',
        'fourth': '#FFCB47',
        'fifth': '#F3DCBC',
        'sixth': '#F7567C',
        'seventh': '#F5D0FE'
      },
      keyframes: {
        'animate-bounce-right': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        'animate-bounce-right': 'animate-bounce-right 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
export default config
