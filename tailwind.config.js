/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'base-style': "linear-gradient(153deg,#712bda,#a45deb 100%)",
            },
        },
    },
    plugins: [],
}
