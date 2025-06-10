import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                md: "2rem",
                lg: "4rem",
            },
        },
        fontFamily: {
            sans: ["var(--font-inter)", "sans-serif"],
            luckiestGuy: ['var(--font-luckiest-guy)'],
        },
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1200px",
        },
        extend: {
            colors: {
                accent: '#FF3D5A',
                charcoal: '#2A2B2E',     // Deep background
                slateblue: '#3F495A',    // For secondary sections
                softpurple: '#837D99',   // Subtle text or hover color
                woodbrown: '#6E4E33',    // Warm accent
                palegold: '#D9C99B',     // Highlight/CTA
            },
        },
    },
    plugins: [],
};

export default config;
