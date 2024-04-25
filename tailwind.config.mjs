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
           'neo-brute': '10px 10px 5px 0px rgba(0,0,0,0.75)', 
        },
		extend: {},
	},
	plugins: [],
}
