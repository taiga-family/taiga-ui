/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 'tw-',
    content: ['./projects/demo/src/**/*.{html,ts,css,less,scss}'],
    theme: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
