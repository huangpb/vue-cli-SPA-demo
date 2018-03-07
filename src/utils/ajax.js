import axios from 'axios'
import tip from '@/components/tip/tip'
import loading from '@/components/loading/loading'

const host = '/api/v2';

Promise.prototype.always = function (callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback())
      .then(() => value),
      reason => P.resolve(callback()).then(() => {
      throw reason
    })
  );
};


const baseAjax = axios.create({
  baseURL: host,
  timeout: 10000
});

function argumentsHandler(url, opts = {}) {
  if (typeof url === 'string') {
    opts.url = url
  } else if (typeof url === 'object') {
    opts = url
  }

  return opts
}

/**
 * ajax
 * @param {String} url
 * @param {Object} opts
 * @param {String} opts.url
 * @param {String} opts.method
 * @param {Object} opts.params  GET请求参数
 * @param {Object} opts.data  POST、PUT、PATCH请求参数
 * */
export default function ajax(url, opts) {
  loading.show();
  let options = argumentsHandler(url, opts);

  return new Promise((resolve, reject) => {
    baseAjax(options)
      .then(res => {
        // console.log(res);
        if (res.status === 200) {
          resolve(res.msg ? res.msg : res.data)
        } else {
          tip.fail(res.msg);
        }
      })
      .catch(err => {
        // console.log(err);
        reject(err)
      })
  })
    .always(() => {
      // console.log('完成')
      loading.hide();
    })
}








