import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../components/DocUi/SwitchDemo.vue'
import ButtonDemo from '../components/DocUi/ButtonDemo.vue'
import DialogDemo from '../components/DocUi/DialogDemo.vue'
import TabsDemo from '../components/DocUi/TabsDemo.vue'
import Expect from '../codeDemo/Expect.vue'
import intro from '../markdown/intro.md';
import getStarted from '../markdown/getStarted.md';
import install from '../markdown/install.md';

import Markdown from '../components/Markdown.vue';
import { h } from 'vue';


// 封装h函数
// const md = path => h(Markdown, { path, key: path })
const md = string => h(Markdown, { content: string, key: string })
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
                    component: md(getStarted)
                },
                {
                    path: 'install',
                    component: md(install)
                },
                {
                    path: 'intro',
                    component: md(intro)
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