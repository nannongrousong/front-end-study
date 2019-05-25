module.exports = {
    title: '前端工程师学习技能',
    description: '前端工程师学习技能，希望可以帮到你。',
    base: '/web/front-end-study/',
    dest: '.vuepress/dist/local',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        repo: 'https://github.com/nannongrousong/front-end-study',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        nav: [
            { text: '在线教程', link: '/' },
            { text: '前端基础', link: '/base/' },
            { text: '界面库', link: '/view/' },
            { text: '数据流', link: '/state/' },
            { text: 'Webpack', link: '/webpack/' },
            { text: '算法', link: '/algorithm/' }
        ],
        sidebar: {
            '/base/': [{
                title: '前端基础',
                collapsable: false,
                children: [
                    'js',
                    'html',
                    'css'
                ]
            }],
            '/view/': [{
                title: '界面库',
                collapsable: false,
                children: [
                    'react',
                    'vue'
                ]
            }],
            '/state/': [{
                title: '数据流',
                collapsable: false,
                children: [
                    'mobx',
                    'redux'
                ]
            }]
        }
    }
}