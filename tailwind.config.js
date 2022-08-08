/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss/plugin')} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      animation: {
        'fade-in': 'fade-in 200ms ease-in-out',
        'fade-out': 'fade-out 2000ms ease-in-out',
      },
      colors: {
        'black-a1': 'rgba(0, 0, 0, 0.012)',
        'black-a2': 'rgba(0, 0, 0, 0.027)',
        'black-a3': 'rgba(0, 0, 0, 0.047)',
        'black-a4': 'rgba(0, 0, 0, 0.071)',
        'black-a5': 'rgba(0, 0, 0, 0.090)',
        'black-a6': 'rgba(0, 0, 0, 0.114)',
        'black-a7': 'rgba(0, 0, 0, 0.141)',
        'black-a8': 'rgba(0, 0, 0, 0.220)',
        'black-a9': 'rgba(0, 0, 0, 0.439)',
        'black-a10': 'rgba(0, 0, 0, 0.478)',
        'black-a11': 'rgba(0, 0, 0, 0.565)',
        'black-a12': 'rgba(0, 0, 0, 0.910)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        spacing: {
          0.25: '0.0625rem',
        },
      },
      boxShadow: {
        outline: '0 0 0 1px #fff,0 0 0 3px #000',
      },
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
      mono: ['IBM Plex Mono', 'system-ui', 'monospace'],
    },
  },
  plugins: [
    plugin(function (helpers) {
      // variants that help styling Radix-UI components
      dataStateVariant('open', helpers);
      dataStateVariant('closed', helpers);
      dataStateVariant('on', helpers);
      dataStateVariant('checked', helpers);
      dataStateVariant('unchecked', helpers);

      helpers.addComponents({
        '.icons': {
          '*': {
            strokeWidth: 'inherit',
          },
        },
      });

      helpers.addVariant('collapsed', ['&.collapsed', '.collapsed &']);
      helpers.addVariant('data-layout-compact', '[data-layout="compact"] &');
    }),
  ],
};

function dataStateVariant(
  state,
  {
    addVariant, // for registering custom variants
    e, // for manually escaping strings meant to be used in class names
  }
) {
  addVariant(`data-state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `data-state-${state}${separator}${className}`
      )}[data-state='${state}']`;
    });
  });

  addVariant(`group-data-state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.group[data-state='${state}'] .${e(
        `group-data-state-${state}${separator}${className}`
      )}`;
    });
  });

  addVariant(`peer-data-state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.peer[data-state='${state}'] ~ .${e(
        `peer-data-state-${state}${separator}${className}`
      )}`;
    });
  });
}
