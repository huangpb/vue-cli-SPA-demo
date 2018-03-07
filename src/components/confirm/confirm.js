import './confirm.css'

const confirmID = 'confirm';
const noop = () => false;
const $ = (el) => document.querySelector(el);

export default {
  /**
   * 显示确认框
   * @param {Object} opt
   * @param {String} opt.text
   * @param {String} opt.tip
   * @param {String} opt.cancelButtonText
   * @param {String} opt.confirmButtonText
   * @param {Function} opt.cancelCallback
   * @param {Function} opt.confirmCallback
   */
  show (opt = {}) {
    const options = {
      text: opt.text || '',
      tip: opt.tip || '',
      cancelButtonText: opt.cancelButtonText || '取消',
      confirmButtonText: opt.confirmButtonText || '确定',
    };
    this._callbacks = {
      cancelCallback: opt.cancelCallback || noop,
      confirmCallback: opt.confirmCallback || noop
    };

    this._template(options);
  },

  _callbacks: {},

  _template (opt) {
    const template = `
     <div class="confirm-content">
          <p class="confirm-text">${opt.text}</p>
          <p class="confirm-tip">${opt.tip}</p>
          <div>
            <button id="cancel-btn" class="confirm-btn">${opt.cancelButtonText}</button>
            <button id="confirm-btn" class="confirm-btn confirm-btn-blue">${opt.confirmButtonText}</button>
          </div>
        </div>
    `;
    let confirm = document.createElement('div');
    confirm.id = confirm.className = confirmID;
    confirm.innerHTML = template;
    document.body.appendChild(confirm);

    setTimeout(() => {
      $('#cancel-btn').addEventListener('click', this._cancel.bind(this));
      $('#confirm-btn').addEventListener('click', this._confirm.bind(this));
    }, 0)
  },

  _cancel () {
    this._callbacks.cancelCallback();
    this._destory();
  },

  _confirm () {
    this._callbacks.confirmCallback();
    this._destory();
  },

  _destory () {
    const confrim = $('#' + confirmID);
    confrim.parentNode.removeChild(confrim);
  }
}
