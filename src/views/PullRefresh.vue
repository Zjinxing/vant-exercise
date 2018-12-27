<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="pull-refresh">
        <b>刷新次数{{count}}次</b>
        <h3>展示组件</h3>
        <div class="circle">
          <b>环形进度条</b> <br>
          <van-circle v-model="currentRate" :rate="rate" :speed="100" :text="text"></van-circle>
          <van-circle
            v-model="currentRate1"
            :rate="rate1"
            :speed="30"
            color="#f6f"
            layer-color="#ccc"
            fill="#ff0"
            :stroke-width="60"
            :clockwise="false"
            :text="text1" /> <br>
          <van-button type="primary" @click="increase">增加</van-button>
          <van-button type="warning" @click="decrease">减少</van-button>
          <p>rate目标进度，改变后进度条自动增加到此数值百分比，speed动画速度单位rate/s，color:进度条颜色，
          layer-color未达进度的圆环颜色;fill:圆环内填充颜色；stroke-width：进度条宽度；clockwise：是否是顺时针</p>
        </div>
        <div class="collapse">
          <h3>折叠面板</h3>
          <b>基本样式</b>
          <van-collapse v-model="activeNames">
            <van-collapse-item title="第一个面板" name="1">
              折叠面板内容折叠内容折叠内容
            </van-collapse-item>
            <van-collapse-item title="第二个面板" name="2">
              折叠面板内容折叠内容折叠内容
            </van-collapse-item>
            <van-collapse-item title="第三个面板" name="3">
              折叠面板内容折叠内容折叠内容
            </van-collapse-item>
          </van-collapse>
          <b>手风琴效果</b>
          <p>与基本样式区别van-collapse多了一个accordion属性，activeName为字符串，对应的是collapse-item的name属性</p>
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="第一个面板" value="详情" name="1">
              折叠面板内容折叠内容折叠内容
            </van-collapse-item>
            <van-collapse-item title="第二个面板" name="2" label="这个是label">
              折叠面板内容折叠内容折叠内容
            </van-collapse-item>
            <van-collapse-item title="第三个面板" name="3">
              折叠面板内容折叠内容折叠内容
            </van-collapse-item>
          </van-collapse>
          <b>自定义标题内容</b>
          <van-collapse v-model="activeNames">
            <van-collapse-item name="1">
              <div slot="title">通过slot=title自定义title</div>
              <van-icon slot="icon" name="card" size="24px" />
              <van-icon slot="right-icon" name="alipay" size="24px"></van-icon>
              <p>匿名插槽自定义,slot="icon"自定义标题图标,slot="right-icon"自定义标题右侧图标</p>
              <div slot="value">slot="value"</div>
            </van-collapse-item>
          </van-collapse>
        </div>
        <div class="image-preview">
          <h3>图片预览</h3>
          <p>ImagePreview()返回值是一个VueComponent,style的zIndex为2000，异步退出可以在预览的时候显示出一个关闭按钮，通过关闭按钮来退出预览</p>
          <van-button plain type="danger" @click="previewImg">点击预览图片</van-button>
          <van-button plain type="danger" @click="previewImg1">异步退出</van-button>
        </div>
        <div class="noticebar">
          <van-notice-bar 
            left-icon="volume-o"
            text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。" />
          <van-notice-bar :scrollable="false" left-icon="volume-o">
            足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
          </van-notice-bar>  
          <van-notice-bar left-icon="volume-o" mode="closeable">
            足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
          </van-notice-bar>
          <van-notice-bar left-icon="volume-o" mode="link" @click="jumpTo">
            足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
          </van-notice-bar>
        </div>
        <div class="panel">
          <h3>panel面板</h3>
          <van-panel title="标题" desc="描述信息" status="状态" icon="fire">
            <!-- <div slot="header">自定义header</div> -->
            <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
          </van-panel>
        </div>
        <div class="progress">
          <h3>progress进度条</h3>
          <van-progress :percentage="50" />
          <br>
          <van-progress inactive :percentage="60" />
          <br>
          <van-progress 
            :percentage="85"
            pivot-text="定制"
            pivot-color="#faa"
            color="linear-gradient(to right, #f0f, #f00)" />
        </div>
        <div class="lazyload">
          <h3>图片的懒加载</h3>
          用法：首先需要引入,然后Vue.use(Lazyload, options)
          然后循环出img标签<br>
          &lt;img v-for="img in imageList" v-lazy="img" &gt;，
          其中imageList为包含图片url的数组
          <ul>
            <li v-for="(img, index) in imageList" :key="index">
              <img v-lazy="img" width="100%">
            </li>
          </ul>
          <b>背景图懒加载</b> <br>
          背景图懒加载将v-lazy替换成v-lazy:background-image，必须指名容器的高度
          用法如下：<br>
          &lt;div v-for="img in imageList" v-lazy:background-image="img" style="height: 100px"&gt;&lt;/div&gt;
          <div v-for="(img, index) in imageList"
            :key="index" v-lazy:background-image="img"
            style="height:200px;background-size: 100% 100%"></div>
        </div>
        <div class="list">
          <h3>List 列表</h3>
          <van-list v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad">
            <van-cell v-for="item in list" :key="item" :title="item" />
          </van-list>
        </div>
      </div>
    </van-pull-refresh>
    <!-- <van-button type="default" class="close" round plain v-show="closeBtn" @click="close"><van-icon size="16px" name="cross"></van-icon></van-button> -->
    <van-icon name="cross" size="24px" class="close" v-show="closeBtn" color="#fff" @click="close"></van-icon>
  </div>
</template>

<script>
import { PullRefresh, Circle, Button, Collapse, 
  CollapseItem, Icon, ImagePreview, Toast, Dialog, 
  List, Cell, NoticeBar, Panel,Progress } from 'vant'

export default {
  name: 'PullRefresh',
  components: {
    [Progress.name]: Progress,
    [Panel.name]: Panel,
    [NoticeBar.name]: NoticeBar,
    [Cell.name]: Cell,
    [List.name]: List,
    [Icon.name]: Icon,
    [CollapseItem.name]: CollapseItem,
    [Collapse.name]: Collapse,
    [Button.name]: Button,
    [Circle.name]: Circle,
    [PullRefresh.name]: PullRefresh
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      closeBtn: false,
      exitPreview: false,
      activeName: '1',
      activeNames: ['3'],
      isLoading: false,
      count: 0,
      currentRate: 0,
      currentRate1: 0,
      rate: 10,
      rate1: 15,
      instance: null,
      imageList: [
        'http://bmob-cdn-23203.b0.upaiyun.com/2018/12/27/faaae5c7403d1c658045b7bed644f3db.jpg',
        'http://bmob-cdn-23203.b0.upaiyun.com/2018/12/27/6fc84ef8403b88f08013a02332783784.jpg',
        'http://bmob-cdn-23203.b0.upaiyun.com/2018/12/27/d698e745406545e28072eba4a6d377b9.jpg',
        'http://bmob-cdn-23203.b0.upaiyun.com/2018/12/27/ae4e34a440fdca7b806441faf7373e31.jpg',
        'https://bbs.qn.img-space.com/201812/26/52126831ba8d146d61445ee735f031fb.jpg?imageView2/2/w/1024/q/100/ignore-error/1/',
        'https://bbs.qn.img-space.com/201812/26/47ba3ba93b59359e6242ee40cad4d78e.jpg?imageView2/2/w/1024/q/100/ignore-error/1/',
        'https://bbs.qn.img-space.com/201812/26/7d6ab31228c16e8219814730f4c01a01.jpg?imageView2/2/w/1024/q/100/ignore-error/1/',
        'https://bbs.qn.img-space.com/201812/26/32fd1c6d708623a4c0fc62d8dd62d465.jpg?imageView2/2/w/1024/q/100/ignore-error/1/'
      ]
    }
  },
  computed: {
    text () {
      return this.currentRate.toFixed(0) + '%'
    },
    text1 () {
      return this.currentRate1.toFixed(0) + '%'
    }
  },
  methods: {
    jumpTo() {
      Toast('即将跳转至详情页')
    },
    onLoad () {
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.list.push(this.list.length + 1)
        }
        this.loading = false
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    },
    close () {
      Dialog.confirm({
        title: '提示',
        message: '确定退出预览？'
      }).then(() => {
        this.instance.close()
        this.closeBtn = false
        this.instance = null
        Toast('已经退出了预览')
      }).catch(() => {
        Toast('在看看')
      })
    },
    previewImg1 () {
      const instance = ImagePreview({
        images: this.imageList,
        startPosition: 2,
        asyncClose: true,
        showIndicators: true
      })
      this.closeBtn = true
      this.instance = instance
    },
    previewImg () {
      ImagePreview(this.imageList)
    },
    decrease () {
      if (this.rate > 0) {
        this.rate -= 20
        this.rate1 -= 20
      }
    },
    increase () {
      if (this.rate < 100) {
        this.rate += 20
        this.rate1 += 20
      }
    },
    onRefresh () {
      const _this = this
      setTimeout(() => {
        _this.$toast('刷新成功')
        _this.isLoading = false
        _this.count++
      }, 300)
    }
  }
}
</script>

<style scoped lang="stylus">
.pull-refresh
  width 100%
.close
  position fixed
  left 50%
  transform translate(-50%)
  bottom 30px
  z-index 99999
</style>
