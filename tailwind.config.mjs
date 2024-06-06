/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        colors: {
            'ebony-clay': '#232538',
            'tuna': '#313345',
            'sundown': '#FFB3B2',
            'madang': '#BBF3B5',
            'texas': '#FBF0A3',
            'periwinkle-gray': '#C4C5E7',
            'santas-gray': '#9397B0',
            'mischka': '#DCDCE6',
        },
        boxShadow: {
            'neo-brute': '8px 8px 4px 0px rgba(0,0,0,0.2)',
            'inset': 'inset 0px 2px 6px 0px rgba(0, 0, 0, 0.5)',
        },
		extend: {},
	},
    daisyui: {
        themes: [
          {
            vaporWaveFantasyDark: {
                "primary": "#C4C5E7",
                "primary-content": "#232538",
                "secondary": "#BBF3B5",
                "secondary-content": "#232538",
                "accent": "#FBF0A3",
                "accent-content": "#232538",
                "neutral": "#232538",
                "neutral-content": "#DCDCE6",
                "base-100": "#313346",
                "base-content": "#DCDCE6",
                "default": "#9397B0",
                "error": "#FFB3B2",
            },
          },
         ],
      },
	  plugins: [
        require('daisyui'),
    ],
}
