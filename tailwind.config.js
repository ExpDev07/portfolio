module.exports = {
    purge: [
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './components/**/*.{vue,js}',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}'
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {

        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography')
    ]
}
