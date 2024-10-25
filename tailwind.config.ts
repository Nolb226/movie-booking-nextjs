import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {
                primary: {
                    100: '#d2e9ff',
                    200: '#a5d3ff',
                    300: '#78bcff',
                    400: '#4ba6ff',
                    500: '#1e90ff',
                    600: '#1873cc',
                    700: '#125699',
                    800: '#0c3a66',
                    850: '#092B4C',
                    900: '#061d33',
                    950: '#030E19',
                },

                secondary: {
                    50: '#EAF8FE',
                    100: '#D4F0FD',
                    200: '#A1E2FF',
                    300: '#80D4FF',
                    400: '#58C9FC',
                    500: '#0CAAF2',
                    600: '#0084BF',
                    700: '#036A99',
                    800: '#005880',
                    850: '#04364C',
                    900: '#032433',
                    950: '#061E29',
                },

                highlight: {
                    100: '#fbe3ce',
                    200: '#f6c79e',
                    300: '#f2ab6d',
                    400: '#ed8f3d',
                    500: '#e9730c',
                    600: '#ba5c0a',
                    700: '#8c4507',
                    800: '#5d2e05',
                    900: '#2f1702',
                },
            },
            spacing: {
                '3.75': '15px',
                '4.5': '18px',
                '5.5': '22px',
                '7.5': '30px',
                '8.5': '34px',
                '9.5': '38px',
                '10.5': '42px',
                '31.5': '7.875rem',
                '55': '13.75rem',
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0',
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                    to: {
                        height: '0',
                    },
                },
            },
            boxShadow: {
                default: '1px 2px 4px 12px rgba(0, 0, 0, 0.3)',
                hover: 'inset -1px -2px 4px 0px #04364C',
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        require('@tailwindcss/typography'),
    ],
}
export default config
