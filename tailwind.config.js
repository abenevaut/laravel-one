const defaultTheme = require('@abenevaut/tailwindui/tailwind.config.js')

/** @type {import('tailwindcss').Config} */
export default {
  ...defaultTheme,
  content: [
    "./theme/**/*.jsx",
    "./theme/**/*.blade.php",
    "node_modules/@abenevaut/tailwindui/src/js/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik, sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0089ff',
          100: '#1995ff',
          400: '#1b50e6',
        },
        // dark: {
        //     DEFAULT: '#101012',
        //     50: '#2f2f38',
        //     100: '#26262d',
        //     200: '#17171c',
        //     300: '#15151a',
        //     400: '#111114',
        //     600: '#0a0a0b',
        // },
        'blue-600': '#2a8dea',
        'green-500': '#31fbcc',
        'green-600': '#00ad85',
        'orange-400': '#F6AD55',
        'orange-500': '#ED8936',
        'orange-600': '#DD6B20',
        'gray-300': '#c5c5c5',
        'gray-400': '#d3d3d3',
        'gray-500': '#aaa',
        'gray-600': '#7b7b7b',
        'gray-700': '#9c9c9d',
        'yellow-300': '#fff7c1',
        // https://html-color.org/fr/5e998a
        'abenevaut-950': '#121d1a',
        'abenevaut-900': '#233832',
        'abenevaut-800': '#34534a',
        'abenevaut-700': '#446e62',
        'abenevaut-600': '#558a7b',
        'abenevaut-500': '#68a293',
        'abenevaut-400': '#85b3a6',
        'abenevaut-300': '#a2c4ba',
        'abenevaut-200': '#bed5ce',
        'abenevaut-100': '#dae7e3',
        'abenevaut-50': '#f6f9f8',
      },
      backgroundColor: {
        abenevaut: '#5e998a',
        facebook: '#3b5999',
        messenger: '#0084ff',
        twitter: '#55acee',
        twitch: '#6441a5',
        linkedin: '#0077b5',
        skype: '#00aff0',
        discord: '#7289da',
        dropbox: '#007ee5',
        wordpress: '#21759b',
        vimeo: '#1ab7ea',
        vk: '#4c75a3',
        tumblr: '#34465d',
        yahoo: '#410093',
        'google-plus': '#dd4b39',
        pinterest: '#bd081c',
        youtube: '#cd201f',
        reddit: '#ff5700',
        soundcloud: '#ff3300',
        blogger: '#f57d00',
        whatsapp: '#25d366',
        medium: '#02b875',
        vine: '#00b489',
        slack: '#3aaf85',
        instagram: '#e4405f',
        dribbble: '#ea4c89',
        flickr: '#ff0084',
        behance: '#131418',
      },
      // borderColor: (theme) => ({
      //   DEFAULT: theme('colors.dark.400'),
      // }),
      // fontSize: {
      //   '2xs': '0.8175rem',
      //   md: '0.9375rem',
      //   xl: '1.375rem',
      //   xxl: '6rem',
      // },
      // fontFamily: {
      //   sans: [
      //     'Rubik, sans-serif',
      //   ],
      // },
      container: {
        center: true,
      },
      boxShadow: (theme) => ({
        inner: `inset 0 -2px 0 0 ${theme('colors.primary.DEFAULT')}`,
      }),
      margin: {
        '2px': '2px',
      },
      height: {
        14: '3.375rem',
      },
      screens: {
        '2xl': '1340px',
      },
      opacity: {
        1: '.01',
        2: '.02',
      },
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
  },
  // variants: {
  //   textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  //   aspectRatio: ['responsive'],
  //   extend: {
  //     fontWeight: ['hover', 'focus'],
  //   },
  // },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
