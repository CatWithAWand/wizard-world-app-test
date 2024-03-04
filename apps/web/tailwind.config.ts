import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';

const config: Pick<Config, 'content' | 'theme' | 'presets'> = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html,md,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,html,md,mdx}',
    '../../packages/ui/**/*.{ts,tsx}',
  ],
  theme: {
    fontFamily: {
      body: ['Verdana', 'sans-serif'],
    },
  },
  presets: [sharedConfig],
};

export default config;
