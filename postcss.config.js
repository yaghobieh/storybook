import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

const configFile = resolve(process.cwd(), './tailwind.config.js').replace(/\\/g, '/');

console.log('tailwindcss config file: ', configFile);

export default {
  plugins: [
    tailwindcss(configFile),
    autoprefixer
  ],
};
