<template>
  <div class="navs">
    <h3>BadgeGroup && Badge</h3>
    <div class="badge">
      <p>van-badge-group添加badge-group类名会设置一个85px的宽度</p>
      <van-badge-group class="badge-group" :active-key="activeKey" @change="onChange">
        <van-badge title="标签名称">标签一</van-badge>
        <van-badge title="标签名称" info="5">标签二</van-badge>
        <van-badge title="标签名称" info="55">标签三</van-badge>
        <van-badge title="标签名称" info="99+">标签四</van-badge>
      </van-badge-group>
    </div>
    <div class="navbar">
      <van-nav-bar fixed>
        <van-row type="flex" justify="space-between" slot="title">
          <van-col><router-link to="/">首页</router-link></van-col>
          <van-col><router-link to="/about">about</router-link></van-col>
          <van-col><router-link to="/refresh">refresh</router-link></van-col>
          <van-col><router-link to="/navs">navs</router-link></van-col>
        </van-row>
      </van-nav-bar>
      <van-nav-bar
        title="导航栏"
        left-text="返回"
        right-text="搜索"
        left-arrow
        @click-left="leftClick"
        @click-right="rightClick" />
    </div>
    <div class="tabs">
      <van-tabs
        v-model="activeTab"
        animated swipeable
        type="card"
        @change="tabChange"
        @disabled="tabDisabled"
        sticky
        @scroll="tabScroll"
        @click="tabClick">
        <van-tab title="标签一">标签一的内容</van-tab>
        <van-tab title="标签二">标签二的内容</van-tab>
        <van-tab title="标签三" disabled>标签三的内容</van-tab>
        <van-tab title="标签四">标签四的内容</van-tab>
        <van-tab title="标签五">标签五的内容</van-tab>
        <van-tab title="标签六">标签六的内容</van-tab>
        <van-tab title="标签七">标签七的内容</van-tab>
      </van-tabs>
    </div>
    <div class="pagination">
      <b style="color: #f00">分页change事件有一个参数page，表示当前页面</b>
      <van-pagination
        v-model="currentPage"
        :total-items="123"
        :items-per-page="10"
        prev-text="《"
        next-text="》"
        :show-page-size="6"
        @change="pageChange"
        force-ellipses />
        <van-pagination
          v-model="currentPage"
          :total-items="123"
          :page-count="13"
          mode="simple" />
    </div>
    <div class="tab-bar">
      <van-tabbar v-model="activeBar" @change="tabbarChange" :fixed="false">
        <van-tabbar-item icon="home-o">主页</van-tabbar-item>
        <van-tabbar-item icon="search" dot>搜索</van-tabbar-item>
        <van-tabbar-item icon="friends-o" info="12">通讯录</van-tabbar-item>
        <van-tabbar-item icon="setting-o" dot>设置</van-tabbar-item>
      </van-tabbar>
      <van-tabbar :fixed="false" v-model="activeBar">
        <van-tabbar-item>
          slot=icon
          <van-icon slot="icon" class-prefix="iconfont icon-home" name="extra"></van-icon>
        </van-tabbar-item>
        <van-tabbar-item>
          自定义
          <van-icon slot="icon" name="star"></van-icon>
        </van-tabbar-item>
        <van-tabbar-item info="9">
          ICON
          <van-icon slot="icon" class-prefix="iconfont icon-user" name="extra"></van-icon>
        </van-tabbar-item>
        <van-tabbar-item dot>
          图标
          <van-icon slot="icon" class-prefix="iconfont icon-halfstar"></van-icon>
        </van-tabbar-item>
      </van-tabbar>
    </div>
    <div class="tree-select">
      <van-tree-select
        :items="items"
        :main-active-index="mainActiveIndex"
        :active-id="activeId"
        @navclick="navClick"
        @itemclick="itemClick" />
      <van-tree-select
        :items="items"
        :main-active-index="mainActiveIndex"
        :active-id="activeId"
        @navclick="navClick"
        @itemclick="itemClick" />
    </div>
  </div>
</template>

<script>
import { BadgeGroup, Badge, NavBar, Row, Col, Toast,
  Pagination, Tabs, Tab, Tabbar, TabbarItem, Icon, TreeSelect } from 'vant'
export default {
  name: 'navs',
  data () {
    return {
      mainActiveIndex: 0,
      activeId: 1,
      activeBar: 0,
      activeTab: 0,
      activeKey: 0,
      currentPage: 1,
      items: [
        {
          text: '所有城市',
          children: [
            {
              text: '郑州',
              id: 1
            },
            {
              text: '安阳',
              id: 2
            },
            {
              text: '新乡',
              id: 3
            },
            {
              text: '驻马店',
              id: 4
            },
            {
              text: '南阳',
              id: 5
            },
            {
              text: '周口',
              id: 6
            },
            {
              text: '漯河',
              id: 7
            },
            {
              text: '南京',
              id: 8
            },
            {
              text: '苏州',
              id: 9
            },
            {
              text: '盐城',
              id: 10
            },
            {
              text: '连云港',
              id: 11
            },
            {
              text: '扬州',
              id: 12
            },
            {
              text: '宿迁',
              id: 13
            }
          ]
        },
        {
          text: '河南',
          children: [
            {
              text: '郑州',
              id: 1
            },
            {
              text: '安阳',
              id: 2
            },
            {
              text: '新乡',
              id: 3
            },
            {
              text: '驻马店',
              id: 4
            },
            {
              text: '南阳',
              id: 5
            },
            {
              text: '周口',
              id: 6
            },
            {
              text: '漯河',
              id: 7
            }
          ]
        },
        {
          text: '江苏',
          children: [
            {
              text: '南京',
              id: 8
            },
            {
              text: '苏州',
              id: 9
            },
            {
              text: '盐城',
              id: 10
            },
            {
              text: '连云港',
              id: 11
            },
            {
              text: '扬州',
              id: 12
            },
            {
              text: '宿迁',
              id: 13
            }
          ]
        }
      ]
    }
  },
  components: {
    [TreeSelect.name]: TreeSelect,
    [Icon.name]: Icon,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [Pagination.name]: Pagination,
    [Row.name]: Row,
    [Col.name]: Col,
    [NavBar.name]: NavBar,
    [BadgeGroup.name]: BadgeGroup,
    [Badge.name]: Badge
  },
  methods: {
    navClick (index) {
      this.mainActiveIndex = index
    },
    itemClick (data) {
      this.activeId = data.id
    },
    tabbarChange (active) {
      Toast(`当前标签索引${active}`)
    },
    tabScroll (obj) {
      console.log(`距离顶部${obj.scrollTop}px`)
      if (obj.isFixed) {
        Toast('滚到顶部啦')
      }
    },
    tabDisabled (index, title) {
      Toast(`当前索引是${index}, 标题是${title}; 不可切换`)
    },
    tabChange (index, title) {
      console.log(`当前索引${index}, 标题${title}`)
    },
    tabClick (index, title) {
      Toast(`当前索引是${index}, 标题是${title}`)
    },
    pageChange (page) {
      console.log(page)
      Toast(`当前是第${page}页`)
    },
    leftClick () {
      Toast('点击了返回')
    },
    rightClick () {
      Toast('点击了搜索')
    },
    onChange (key) {
      this.activeKey = key
    }
  }
}
</script>

<style scoped lang="stylus">
.navs
  .navbar
    a
      font-weight bold
      color #2c3e50
      &.router-link-exact-active
        color #42b983
</style>
