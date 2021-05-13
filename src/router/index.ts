import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../codeDemo/SwitchDemo.vue'
import ButtonDemo from '../codeDemo/ButtonDemo.vue'
import DialogDemo from '../codeDemo/DialogDemo.vue'
import TabsDemo from '../codeDemo/TabsDemo.vue'
import Expect from '../codeDemo/Expect.vue'
import Intro from '../views/Intro.vue'
import docdemo from '../docDemo/docdemo.vue'
import Install from '../views/Install.vue'
import GetStarted from '../views/GetStarted.vue'

const history = createWebHashHistory();
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
                    component: GetStarted
                },
                {
                    path: 'install',
                    component: Install
                },
                {
                    path: 'intro',
                    component: Intro
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