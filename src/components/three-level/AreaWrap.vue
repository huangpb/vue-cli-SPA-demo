<template>
  <div class="area-wrap">
    <div class="area-wrap-header">
      <!--三级联动Tab-->
      <span class="area-wrap-tab"
            :class="index === tab_active ? 'active' : ''"
            v-for="(id, index) in selected"
            @click="fetchAreas(index)">
        {{
        id === -1 ? default_areas[index]
            : index === 0 ? cities[id].name
            : index === 1 ? cities[selected[0]].children[id].name
            : cities[selected[0]].children[selected[1]].children[id].name
        }}
      </span>
    </div>

    <!--三级联动内容-->
    <div class="area-wrap-selector">
      <span class="area-item"
            :class="index === selected[tab_active] ? 'active' : ''"
            v-for="(area, index) in areas"
            @click="selectArea(tab_active, index)"
      >{{area.name}}</span>
    </div>
  </div>
</template>

<script>
  const default_areas = ['省', '市', '区/县'];
  const grid = 3;

  export default {
    props: {
      cities: {
        type: Array,
        required: true,
        default: []
      },
      changeAreaName: Function
    },

    data () {
      return {
        tab_active: 0, //选中的tab序号
        default_areas,
        selected: [-1], //保存每一级选中的id，-1表示未选中
        areas: this.cities //当前选中下的地区数据列表,
      }
    },

    methods: {
      fetchAreas (index) {
        this.tab_active = index;

        this.areas = index === 0 ? this.cities
          : index === 1 ? this.cities[this.selected[0]].children
            : this.cities[this.selected[0]].children[this.selected[1]].children
      },

      selectArea (level, index) {
        this.selected[level] = index;
        if(level < grid-1) {
          this.selected[level+1] = -1;
        }
        this.selected = this.selected.slice(0, level+2);
        if(this.tab_active === grid-1) {
          let name = [], cache = this.cities;
          this.selected.forEach(item => {
            name.push(cache[item].name);
            cache = cache[item].children;
          })

          this.changeAreaName(name.join(' > '));
        }

        this.tab_active = (level + 1 < grid) ? (level + 1) : (grid - 1);
        this.fetchAreas(this.tab_active);
      }
    }
  }
</script>

<style lang="scss" scoped>
  $blue: #007eff;
  $baseColor: #ccc;

  .area-wrap {
    width: 400px;
    position: absolute;
    top: 46px;
    left: 0;
    background-color: white;
    box-shadow: 0 0 5px 1px #ccc;

    .area-wrap-header {
      border-bottom: 1px solid $baseColor;

      .area-wrap-tab {
        display: inline-block;
        min-width: 100px;
        height: 46px;
        line-height: 46px;
        padding: 0 15px;
        text-align: center;
        cursor: pointer;
        border-bottom: 3px solid transparent;

        &.active {
          border-bottom-color: $blue;
        }
      }
    }

    .area-wrap-selector {
      min-height: 150px;
      padding: 5px 0;

      .area-item {
        display: inline-block;
        padding: 3px 10px;
        cursor: pointer;
        border-radius: 3px;
        margin-right: 5px;

        &.active,
        &:hover {
          color: #fff;
          background-color: $blue;
        }
      }
    }
  }
</style>
