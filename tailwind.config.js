/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-dark-blue': '#0a192f',
        'primary-blue': '#2563eb',
        'accent-blue': '#1e40af',
        'light-blue': '#3b82f6',
        'primary-green': '#10b981',
        'accent-green': '#059669',
        'dark-bg': '#0a192f',
        'dark-text': '#f1f5f9',
        'dark-card': '#1e293b',
        'gray': '#64748b',
        'light-gray': '#e2e8f0',
        'light-card': '#ffffff',
        'light-text': '#0f172a',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradientShift 3s ease infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in-left': 'slideInFromLeft 1s ease-out',
        'slide-in-right': 'slideInFromRight 1s ease-out',
        'slide-in-bottom': 'slideInFromBottom 1s ease-out',
        'fade-in-scale': 'fadeInScale 1.2s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'zoom-in-out': 'zoomInOut 20s infinite alternate',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'scale-up': 'scaleUp 0.6s ease-out',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInFromLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInFromRight: {
          from: {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInFromBottom: {
          from: {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInScale: {
          from: {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        zoomInOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            transform: 'translateY(0)',
          },
          '50%': { 
            boxShadow: '0 15px 35px rgba(37, 99, 235, 0.3)',
            transform: 'translateY(-5px)',
          },
        },
        scaleUp: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.2)',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(37, 99, 235, 0.3)',
        'lg-glow': '0 20px 40px rgba(0, 0, 0, 0.1)',
      },
      transitionProperty: {
        'all-cubic': 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}