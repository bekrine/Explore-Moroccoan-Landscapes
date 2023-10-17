import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      backgroundColor:{
        primaryColor : 'rgb(254,192,107)'
      },
      textColor:{
        primaryColor : 'rgb(254,192,107)'
      },
      borderColor:{
        primaryColor : 'rgb(254,192,107)'

      }
  
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs")
  
  ],
}
export default config
