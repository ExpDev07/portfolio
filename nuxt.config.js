export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,

    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'expdev07',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/vue-github-api.js',
        '~/plugins/vue-ko-fi-button.js',
        '~/plugins/marked.js'
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        // https://github.com/nuxt-community/fontawesome-module
        '@nuxtjs/fontawesome'
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
    ],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
    },

    // Font Awesome Configuration.
    fontawesome: {
        icons: {
            solid: true,
            regular: true,
            brands: true
        }
    }
}
