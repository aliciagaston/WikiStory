module.exports = {
    base: "/WikiStory/",
    title: "Boilerplate",
    description: "boilerplate",
    head: [
        ['link', { rel: 'icon', href: "/favicon.ico" }]
    ],
    themeConfig: {
        // search
        sidebar: [
        ],
        search: false,

        // if your docs are in a different repo from your main project:
        docsRepo: 'aliciagaston/WikiStory',
        // root of the doc:
        docsDir: 'docs',
        // branch of the doc:
        docsBranch: 'master',
        // default value is true. Allows to hide next page links on all pages
        nextLinks: false,
        // default value is true. Allows to hide prev page links on all pages
        prevLinks: false,

    },
    plugins: [
        ['vuepress-plugin-clean-urls',
            {
                normalSuffix: '/',
                indexSuffix: '/',
                notFoundPath: '/404',
            }
        ],
    ],
}