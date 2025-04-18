/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF7F6',
          100: '#FFEEEC',
          200: '#FFDAD5',
          300: '#FFC7BE',
          400: '#FFB3A7',
          500: '#fa9b8d',
          600: '#F28372',
          700: '#E56C5A',
          800: '#D85542',
          900: '#C63E2A',
          950: '#A02817',
          hover: '#F28372',
        },
        secondary: {
          50: '#FDFAF6',
          100: '#FBF5ED',
          200: '#F4E7D3',
          300: '#EDD9B9',
          400: '#E3C28E',
          500: '#D9AB64',
          600: '#BF8043',
          700: '#A66632',
          800: '#8C4C21',
          900: '#733210',
          950: '#5A1A00',
        },
        accent: {
          50: '#F4F6F2',
          100: '#E9EDE5',
          200: '#D1DACA',
          300: '#B8C7AE',
          400: '#9FB493',
          500: '#85A177',
          600: '#688E5A',
          700: '#42552E',
          800: '#2B3C17',
          900: '#131800',
          950: '#050700',
          hover: '#788B64',
        },
        success: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#10B981',
          700: '#047857',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',
          700: '#B45309',
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#EF4444',
          700: '#B91C1C',
        },
        info: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          700: '#1D4ED8',
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
      fontSize: {
        'display-1': '4rem',
        'display-2': '3.5rem',
        'h1': '3rem',
        'h2': '2.5rem',
        'h3': '2rem',
        'h4': '1.5rem',
        'large': '1.25rem',
        'base': '1rem',
        'small': '0.875rem',
        'xs': '0.75rem',
      },
      lineHeight: {
        tight: '1.25',
        normal: '1.5',
        relaxed: '1.75',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(156, 175, 136, 0.05)',
        md: '0 4px 6px rgba(156, 175, 136, 0.1)',
        lg: '0 10px 15px rgba(156, 175, 136, 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(180deg, #FFE4E1 0%, #FFCEC7 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(255, 228, 225, 0.9) 0%, rgba(255, 206, 199, 0.95) 100%)',
        'gradient-natural': 'linear-gradient(135deg, #9CAF88 0%, #8A9D76 100%)',
        'gradient-light': 'linear-gradient(180deg, rgba(253, 250, 246, 0.8) 0%, rgba(253, 250, 246, 0) 100%)',
      },
    },
  },
  plugins: [],
};
