import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../components/DocUi/SwitchDemo.vue'
import ButtonDemo from '../components/DocUi/ButtonDemo.vue'
import DialogDemo from '../components/DocUi/DialogDemo1.vue'
import TabsDemo from '../components/DocUi/TabsDemo.vue'
import Expect from '../codeDemo/Expect.vue'
import docdemo from '../docDemo/docdemo.vue'

import Markdown from '../components/Markdown.vue';
import { h } from 'vue';

const history = createWebHashHistory();
// 封装h函数
const md = path => h(Markdown, { path, key: path })

export const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/doc',
            component: Doc,
            children: [
                {
                    path: '',
                    component: docdemo
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