/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        listStyleType: {
            roman: 'upper-roman',
            decimal: 'decimal',
            disc: 'disc'
        },

        extend: {
            fontFamily: {
                robotoSlab: ['Roboto Slab', 'serif'],
            },
        },
    },
    plugins: [],
};
