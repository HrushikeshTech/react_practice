/** @type {import('tailwindcss').Config} */
export default {
  // Specify files where Tailwind should look for class names
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Enable dark mode based on the 'dark' class applied to the root element
  darkMode: 'class', 
  theme: {
    extend: {
      // You can add custom colors, fonts, spacing, etc., here.
      // For example, extending indigo for primary colors:
      colors: {
        indigo: {
          50: '#f0f3ff',
          100: '#e5e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
      },
    },
  },
  plugins: [],
}