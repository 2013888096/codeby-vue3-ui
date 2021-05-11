import Dialog from './Dialog.vue';
import { createApp, h } from 'vue';
export const openDialog = (options) => {
    const { title, content, closeOnClickOverlay, ok, cancel } = options;
    const close = () => {
        // 忽略ts报错
        // @ts-ignore
        app.unmount(div);
        div.remove();
    }
    // 创建临时div节点用于插入app
    const div = document.createElement('div');
    document.body.appendChild(div);

    const app = createApp({
        render() {
            // onUpdate:visible 监听visible数据更新
            return h(Dialog, {
                visible: true,
                'onUpdate:visible': (newVisible) => {
                    if (newVisible === false) {
                        close();
                    }
                },
                ok,
                cancel,
                closeOnClickOverlay
            }, {
                title: title, content: content
            })
        }
    });
    app.mount(div);

}