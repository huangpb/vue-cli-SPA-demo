<template>
  <div id="app">
    <CitySelector></CitySelector>
    <button @click="showComfirm()">弹出确认框</button>
    <button @click="showTip()">提示框</button>
    <button @click="loading()">加载中</button>
    <button @click="fetchUnits">获取楼栋单元</button>

    <!--<router-view/>-->
  </div>
</template>

<script>
  import CitySelector from '@/components/three-level/CitySelector';
  import { fetchUnits } from '@/api/fetchUnits'

export default {
  name: 'App',

  data () {
    return {

    }
  },

  methods: {
    showComfirm () {
      this.$confirm_my.show({
        tip: '提示',
        text: '确定要删除吗？'
      });
    },

    showTip () {
      this.$tip_my.success();
    },

    loading () {
      this.$loading_my.show();
    },

    fetchUnits() {
      fetchUnits({communityID: '5993aa2172f6624361d9f54a'})
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
  },

  components: {
    CitySelector
  }
}
</script>

<style lang="scss">
  $base-color: red;

</style>
