import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	extend: {
    		screens: {
    			xsm: '450px',
    			sm: '640px',
    			md: '768px',
    			lg: '1024px',
    			xl: '1280px',
    			'2xl': '1536px',
    			'3xl': '1900px'
    		},
    		colors: {
    			white: 'var(--white)',
    			yellow: {
    				DEFAULT: 'var(--yellow)',
    				dark: 'var(--yellow-dark)',
    				light: 'var(--yellow-light)'
    			},
    			purple: {
    				DEFAULT: 'var(--purple)',
    				dark: 'var(--purple-dark)',
    				light: 'var(--purple-light)'
    			},
    			gray: {
    				DEFAULT: 'var(--gray)',
    				superdark: 'var(--gray-superdark)',
    				dark: 'var(--gray-dark)',
    				light: 'var(--gray-light)'
    			},
    			red: {
    				DEFAULT: 'var(--red)',
    				dark: 'var(--red-dark)',
    				light: 'var(--red-light)'
    			},
    			blue: {
    				DEFAULT: 'var(--blue)',
    				dark: 'var(--blue-dark)',
    				light: 'var(--blue-light)'
    			},
    			blackOpacity: {
    				DEFAULT: 'var(--black-opacity)',
    				light: 'var(--black-opacity-light)',
    				dark: 'var(--black-opacity-dark)'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
