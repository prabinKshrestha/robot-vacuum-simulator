/** @type {import('tailwindcss').Config} */

function generateGridColumns(lastValue) {
  let obj = {};
  for (let i = 13; i < lastValue; i++) {
    obj[`${i}`] = `repeat(${i}, minmax(0, 1fr))`;
  }
  return obj;
}

module.exports = {
  theme: {
    extend: {},
  },
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
        pattern: /grid-cols-./,
    }
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        ...generateGridColumns(100), // This generates the columns from 13 until 100
      },
    },
  },
  plugins: [],
};
