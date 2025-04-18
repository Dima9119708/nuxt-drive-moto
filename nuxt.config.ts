import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@nuxt/eslint', '@nuxt/fonts', 'nuxt-svgo', '@primevue/nuxt-module'],
    css: ['~/assets/css/main.css'],
    primevue: {
        components: {
            prefix: 'Prime',
        },
        autoImport: true,
        options: {
            unstyled: true,
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
    svgo: {
        autoImportPath: './assets/icons/',
        componentPrefix: 'Icon',
    },
    fonts: {
        priority: ['local'],
        provider: 'local',
        families: [
            {
                name: 'SFProDisplay',
                provider: 'local',
                weights: ['100', '200', '300', '400', '500', '600', '700', '900'],
                styles: ['normal', 'italic'],
            },
            {
                name: 'Barlow',
                provider: 'local',
                weights: ['100', '200', '300', '400', '500', '600', '900'],
                styles: ['normal', 'italic'],
            },
        ],
    },
})
