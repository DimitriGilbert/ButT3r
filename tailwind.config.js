module.exports = {
  // ... other config
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#00ff00' },
        },
      },
    },
  },
} 