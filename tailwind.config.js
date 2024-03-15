/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['untitled-sans', 'system-ui'],
      'serif': ['untitled-serif', 'Georgia'],
    },
    extend: {
      colors: {
        'primary': "#171615",
      },
    },
  },
  plugins: [],
}