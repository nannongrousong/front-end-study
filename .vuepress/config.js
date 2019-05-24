module.exports = {
    title: '前端工程师学习技能',
    description: '前端工程师学习技能',
    base: '/web/front-end-study/',
    dest: '.vuepress/dist/local',
    themeConfig: {
        nav: [
            { text: '在线教程', link: '/' },
            { text: '前端基础', link: '/base/' },
            { text: '界面库', link: '/view/' },
            { text: '数据流', link: '/state/' },
            { text: 'Webpack', link: '/webpack/' },
            { text: '算法', link: '/algorithm/' },
            { text: 'GitHub', link: 'https://google.com' },
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