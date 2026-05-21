module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': `
          radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0)),
          linear-gradient(to right, #4f4f4f2e 1px, transparent 1px),
          linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'custom-size': '14px 24px',
      },
      maskImage: {
        'radial-mask': 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
      },
    },
  },
  plugins: [],
};
