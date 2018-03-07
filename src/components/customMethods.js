import Vue from 'vue'
import confirm from './confirm/confirm'
import tip from './tip/tip'
import icons from '@/utils/icons'
import loading from '@/components/loading/loading'

import CitySelector from './three-level/CitySelector.vue'

const comps = [
  CitySelector,
];

export default {
  install () {
    comps.forEach(comp => {
      Vue.component(comp.name, comp)
    });

    Vue.prototype.icons = icons;
    Vue.prototype.$confirm_my = confirm;
    Vue.prototype.$tip_my = tip;
    Vue.prototype.$loading_my = loading;
  }
}
