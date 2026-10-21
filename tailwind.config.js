/** Tailwind build config — `npm run build:css` regenerates styles.css from index.html. */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary:     '#4e45e2',
        'primary-dim':'#4136d6',
        'on-primary':'#fbf7ff',
        'primary-container':'#e8e7ff',
        surface:     '#fcf8fe',
        'surface-low':'#f6f2fa',
        'surface-high':'#eae6f1',
        'surface-highest':'#e4e1ed',
        'on-surface':'#32313b',
        'on-surface-variant':'#7b7984',
        outline:     '#b3b0bc',
        tertiary:    '#755478',
        'tertiary-container':'#fdd2fd',
        'on-tertiary-container':'#654568',
      },
      fontFamily: { sans: ['Manrope','sans-serif'] },
      borderRadius: { xl:'0.75rem', '2xl':'1rem', '3xl':'1.5rem' },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
