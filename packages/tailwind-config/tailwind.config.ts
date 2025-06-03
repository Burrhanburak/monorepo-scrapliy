  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "../../apps/web/**/*.{js,ts,jsx,tsx}",
      "../../apps/docs/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {}
    },
    plugins: []
  };
