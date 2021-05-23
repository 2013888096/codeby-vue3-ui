import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../components/DocUi/SwitchDemo.vue'
import ButtonDemo from '../components/DocUi/ButtonDemo.vue'
import DialogDemo from '../components/DocUi/DialogDemo.vue'
import TabsDemo from '../components/DocUi/TabsDemo.vue'
import Expect from '../codeDemo/Expect.vue'


import Markdown from '../components/Markdown.vue';
import { h } from 'vue';


// 封装h函数
const md = path => h(Markdown, { path, key: path })
// const md = string => h(Markdown, { content: string, key: string })
const history = createWebHashHistory();
export const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/doc',
            component: Doc,
            children: [
                {
                    path: '',
                    redirect: '/doc/intro'
                }
                ,
                {
                    path: 'get-started',
                    component: md('../markdown/getStarted.md')
                },
                {
                    path: 'install',
                    component: md('../markdown/install.md')
                },
                {
                    path: 'intro',
                    component: md('../markdown/intro.md')
                },
                {
                    path: 'switch',
                    component: SwitchDemo
                },
                {
                    path: 'button',
                    component: ButtonDemo
                },
                {
                    path: 'dialog',
                    component: DialogDemo
                },
                {
                    path: 'tabs',
                    component: TabsDemo
                },
                {
                    path: 'expect',
                    component: Expect
                }
            ]
        }
    ]
});