import { router } from './router/index';
import { createApp } from 'vue'
import App from './App.vue'
// css最小影响原则
import './lib/_c.scss'
import './index.scss'
import './lib/svg'
import Markdown from './codeDemo/Markdown.vue';
const app = createApp(App)
app.use(router)
app.mount('#app')
app.component("Markdown", Markdown);
