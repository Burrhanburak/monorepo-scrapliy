  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "../../apps/web/**/*.{js,ts,jsx,tsx}",
      "../../packages/ui/**/*.{js,ts,jsx,tsx}",
      "../../packages/tailwind-config/**/*.{js,ts,jsx,tsx}",
      "../../apps/docs/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {}
    },
    plugins: []
  };
