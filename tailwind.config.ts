import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-purple-600', 
    'text-purple-600',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundOpacity: {
        '10': '0.1',
        '20': '0.2',
        '80': '0.8',
        '95': '0.95',
       }
    },
  },
  plugins: [],
  variants: {
    extend: {
      visibility: ['group-hover'],
    }
  },
};
export default config;
