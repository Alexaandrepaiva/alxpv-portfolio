/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ap-white':'#fdf9f3',
        'ap-black': '#2b292d',
        'ap-pink': '#FF6188',
        'ap-green': '#A9DC76',
        'ap-yellow': '#FFD866',
        'ap-blue': '#78DCE8',
        'ap-purple': '#AB9DF2',
        'ap-gray': '#2c2a2e',
        'ap-darkgray': '#211f22',
        'ap-off': '#FFFFFF',
      },
      animation: {
        'ping': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse': 'pulse 3s ease-in forwards',
      },
    },
  }
}

