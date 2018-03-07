<template>
  <div class="city-selector">
    <div class="areaname" @click="toggleAreaWrap()">
      {{areaName}}
      <i :class="icons.down"></i>
    </div>
    <AreaWrap v-show="showAreaWrap" :cities="cities" :changeAreaName="changeAreaName"></AreaWrap>
  </div>
</template>

<script>
  import AreaWrap from './AreaWrap.vue'

  const cities = [{
    id: 0,
    name: '浙江省',
    children: [{
      id: 0,
      name: '杭州市',
      children: [{
        id: 0,
        name: '上城区'
      },{
        id: 1,
        name: '西湖区'
      }]
    },{
      id: 1,
      name: '金华市',
      children: [{
        id: 0,
        name: '金东区'
      },{
        id: 1,
        name: '江南区'
      }]
    }]
  },{
    id: 1,
    name: '江西省',
    children: [{
      id: 0,
      name: '九江市',
      children: [{
        id: 0,
        name: '红谷滩区'
      },{
        id: 1,
        name: '江山区'
      }]
    },{
      id: 1,
      name: '宜春市',
      children: [{
        id: 0,
        name: '宜丰县'
      },{
        id: 1,
        name: '高安县'
      }]
    }]
  }]

  export default {
    name: 'CitySelector',

    data() {
      return {
        cities,
        areaName: '请选择地址',
        showAreaWrap: false
      }
    },

    methods: {
      toggleAreaWrap () {
        this.showAreaWrap = !this.showAreaWrap;
      },

      changeAreaName (name) {
        this.areaName = name;
        this.showAreaWrap = false;
      }
    },

    components: {
      AreaWrap
    }
  }
</script>

<style lang="scss" scoped>
.city-selector {
  color: #333;
  font-size: 14px;
  margin-bottom: 30px;
  position: relative;

  .areaname {
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
  }
}
</style>
