/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          border: '#334155',
          text: '#e2e8f0',
          muted: '#94a3b8',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        'gradient-pink': 'linear-gradient(135deg, #ec4899 0%, #be123c 100%)',
        'gradient-orange': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        'gradient-green': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'gradient-purple': 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
