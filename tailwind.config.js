/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#EEF3FB',
          100: '#D6E1F3',
          200: '#AFC3E6',
          300: '#7F9DD3',
          400: '#4F74BA',
          500: '#2F559C',
          600: '#1F417F',
          700: '#163468',
          800: '#0F2A5F',
          900: '#0A1D40',
          950: '#06122A',
        },
        brand: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          300: '#FCD34D',
          400: '#FACC15',
          500: '#F5B301',
          600: '#D99A00',
        },
        ink: '#0F172A',
        surface: '#F5F7FA',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -8px rgba(15, 23, 42, 0.12)',
        lift: '0 2px 4px rgba(15, 23, 42, 0.04), 0 20px 40px -12px rgba(15, 23, 42, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
