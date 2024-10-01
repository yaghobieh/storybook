
import { resolve } from 'path';

const { log } = console;

const contentDir = `${resolve(__dirname, '../').replace(/\\/g, '/')}/**/src/**/*.{js,ts,jsx,tsx}`;
log('tailwindcss content dir: ', contentDir);

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E20074',
        primaryHover: '#A7005A',
        primaryActive: '#770141',
        secondary: '#FFF',
        darkPrimary: '#391976',
        error: '#D20D00',
        warning: '#F47500',
        success: '#2DBF3B',
        green: '#008110',
        grey: '#E6E6E6',
        breadcrumbs: '#6A6A6A',
        caution: '#AD590B',
        positive: '#008110',
        inform: '#F5F5F5',
        divider: '#E6E6E6',
        highcontrast: '#121212',
        greycontrast: '#414141',
        lightgrey: '#6A6A6A',
      },
    },
    screens: {
      xs: { min: '0px' }, //mobile
      sm: { min: '768px' }, //tablet
      md: { min: '1150px' }, //desktop
      lg: { min: '1280px' },
      xl: { min: '1536px' },
      xxl: { min: '1920px' },
    },
  },
};
