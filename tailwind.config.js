const colors = require('tailwindcss/colors')

const makePrimaryColor =
  l =>
  ({ opacityValue }) => {
    if (opacityValue === undefined) {
      // = #e69900
      return `hsl(40deg 100% ${l}%)`
    }
    return `hsl(40deg 100% ${l}% / ${opacityValue})`
  }

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'nx-',
  content: [
    './src/**/*.{ts,tsx,md,mdx}',
    './theme.config.tsx',
    './node_modules/nextra/dist/components/callout.js'
  ],
  darkMode: ["class", 'html[class~="dark"]'],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
      '5xl': '3840px'
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    letterSpacing: {
      tight: '-0.015em'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: colors.gray,
      slate: colors.slate,
      neutral: colors.neutral,
      red: colors.red,
      orange: colors.orange,
      blue: colors.blue,
      yellow: colors.yellow,
      primary: {
        DEFAULT: makePrimaryColor(50),
        50: makePrimaryColor(97),
        100: makePrimaryColor(94),
        200: makePrimaryColor(86),
        300: makePrimaryColor(77),
        400: makePrimaryColor(66),
        500: makePrimaryColor(50),
        600: makePrimaryColor(45),
        700: makePrimaryColor(39),
        750: makePrimaryColor(35),
        800: makePrimaryColor(32),
        900: makePrimaryColor(24)
      }
    },
    extend: {
      colors: {
        dark: {
          DEFAULT: '#222129',
          50: '#A2A0B3',
          100: '#9795AA',
          200: '#817E98',
          300: '#6D6A83',
          400: '#5A586D',
          500: '#474556',
          600: '#353340',
          700: '#222129',
          800: '#19181E',
          900: '#0F0F12',
          950: '#0B0A0D'
        },
      }
    }
  }
}