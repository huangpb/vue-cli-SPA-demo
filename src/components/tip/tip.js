import icons from '@/utils/icons'
import './tip.scss'

export default {
  template (msg = '无信息', type) {
    let icon = null;
    switch (type) {
      case 'success': icon = icons.success + 'green'; break;
      case 'fail': icon = icons.fail + 'red'; break;
    }

    let wrap = document.createElement('div');
    wrap.id = 'tip';
    wrap.className = 'tip';
    wrap.innerHTML = `
          <i class="${icon}"></i>
          <span>${msg}</span>`;

    document.body.appendChild(wrap)
  },

  show(msg, type, time = 2000) {
    this.template(msg, type);

    setTimeout(() => {
      const el = document.getElementById('tip')
      el.parentNode.removeChild(el)
    }, time)
  },

  success(msg, time) {
    this.show(msg, 'success' , time)
  },

  fail(msg, time) {
    this.show(msg, 'fail' , time)
  }
}
