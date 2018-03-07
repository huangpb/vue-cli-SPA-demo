import icons from '@/utils/icons';
import './loading.css'

export default {
    template(text) {
        let wrap = document.createElement('div');
        wrap.id = 'loading';
        wrap.className = 'loading';
        wrap.innerHTML = `
            <i class="${icons.loading}"></i>
        `;
        document.body.appendChild(wrap);
    },

    show(text = '加载中...') {
        const load = document.getElementById('loading');
        if(load) return;
        this.template(text);
    },

    hide() {
        const load = document.getElementById('loading');
        if (load) document.body.removeChild(load);
    }
}
