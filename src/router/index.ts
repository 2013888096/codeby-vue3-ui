import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../codeDemo/SwitchDemo.vue'
import ButtonDemo from '../codeDemo/ButtonDemo.vue'
import DialogDemo from '../codeDemo/DialogDemo.vue'
import TabsDemo from '../codeDemo/TabsDemo.vue'
import Expect from '../codeDemo/Expect.vue'
import Intro from '../docDemo/Intro.vue'

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