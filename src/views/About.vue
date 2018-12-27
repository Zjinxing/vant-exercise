<template>
  <div class="feedback">
    <h2>反馈组件</h2>
    <div class="action-sheet">
      <h3>上拉菜单</h3>
      <van-button type="primary" @click="show=!show">弹起上拉菜单</van-button>
      <br>
      <b>actionsheet接收一个actions数组，数组的每一项是一个对象，对象中包含name选项名，subname描述信息，loading状态，disabled是否禁用</b>
      <van-actionsheet v-model="show" :actions="actions" @select="onSelect"></van-actionsheet>
      <br>
      <b>带取消按钮的actionsheet：cancel-text属性不为空，则最后一项为取消按钮</b>
      <van-button type="danger" @click="show1=!show1">弹出带取消按钮的actionsheet</van-button>
      <van-actionsheet :actions="actions" cancel-text="取消" @cancel="onCancel" @select="onSelect" v-model="show1"></van-actionsheet>
      <br>
      <b>带标题的actionsheet，title不为空，则actionsheet里的内容要自定义</b>
      <van-button type="warning" @click="show2=!show2">弹出带标题的actionsheet</van-button>
      <van-actionsheet title="自带标题" v-model="show2">
        <van-cell is-link value="第一条" />
        <van-cell is-link value="第二条" />
        <van-cell is-link value="第三条" />
      </van-actionsheet>
    </div>
    <div class="dialogs">
      <b>消息提示alert仅有确认按钮--带标题</b><br>
      <van-button plain type="primary" @click="warnInfo">消息提示</van-button>
      <br>
      <b>消息确认confirm有确认和取消两个按钮</b>
      <van-button plain type="danger" @click="confirm">消息确认按钮</van-button>
      <br>
      <b>使用van-dialog标签自定义里边内容</b><br>
      <van-button plain type="warning" @click="showDialog=!showDialog">点击登录</van-button>
      <van-dialog v-model="showDialog" show-cancel-button :before-close="beforeClose">
        <van-field v-model="username" label="用户名" placeholder="请输入用户名" />
        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
      </van-dialog>
    </div>
    <div class="loading">
      <van-row type="flex" justify="space-around">
        <van-col><van-loading /></van-col>
        <van-col><van-loading color="#3af" /></van-col>
        <van-col><van-loading type="spinner" color="red"></van-loading></van-col>
      </van-row>
    </div>
    <div class="notifys">
      <van-button @click="showNotify" type="primary">点击获取通知</van-button>
    </div>
    <div class="swipe-cell">
      <van-swipe-cell :left-width="65" :right-width="65">
        <span slot="left" class="sidebar">选择</span>
        <van-cell-group>
          <van-cell title="标题" value="内容"></van-cell>
        </van-cell-group>
        <span slot="right" class="sidebar">删除</span>
      </van-swipe-cell>
      <b>异步关闭</b>
      <van-swipe-cell :left-width="65" :right-width="65" :on-close="onClose">
        <span slot="left" class="sidebar">选择</span>
        <van-cell title="异步删除" value="内容内容内容"></van-cell>
        <span slot="right" class="sidebar">删除</span>
      </van-swipe-cell>
    </div>
    <div class="toast">
      <h3>Toast提示</h3>
      <van-button plain type="primary" @click="normalToast">普通提示</van-button>
      <van-button plain type="primary" @click="loadingToast">加载中提示</van-button>
      <van-button plain type="primary" @click="successToast">成功提示</van-button>
      <van-button plain type="primary" @click="failedToast">失败提示</van-button>
      <van-button plain type="primary" @click="advancedToast">高级用法</van-button>
    </div>
  </div>
</template>

<script>
import { Actionsheet, Button, Toast, Cell, Dialog, Field, Loading, Notify, Row, Col, PullRefresh, SwipeCell, CellGroup } from 'vant'

export default {
  name: 'feedback',
  data () {
    return {
      count: 0,
      username: '',
      password: '',
      showDialog: false,
      show: false,
      show1: false,
      show2: false,
      actions: [{
        name: '选项一'
      }, {
        name: '选项二',
        subname: '描述信息'
      }, {
        loading: true
      }, {
        name: '选项四',
        subname: '禁用选项',
        disabled: true
      }]
    }
  },
  components: {
    [CellGroup.name]: CellGroup,
    [SwipeCell.name]: SwipeCell,
    [PullRefresh.name]: PullRefresh,
    [Col.name]: Col,
    [Row.name]: Row,
    [Loading.name]: Loading,
    [Field.name]: Field,
    [Dialog.name]: Dialog,
    [Cell.name]: Cell,
    [Button.name]: Button,
    [Actionsheet.name]: Actionsheet
  },
  methods: {
    advancedToast () {
      const toast = Toast({
        type: 'loading',
        duration: 0,
        forbidClick: true,
        loadingType: 'spinner',
        message: '倒计时3秒'
      })
      let second = 3
      const timer = setInterval(() => {
        second--
        if (second) {
          toast.message = `倒计时${second}秒`
        } else {
          clearInterval(timer)
          Toast.clear()
        }
      }, 1000)
    },
    failedToast () {
      Toast.fail('失败提示')
    },
    successToast () {
      // Toast.success('成功')
      Toast({
        type: 'success',
        message: '成功提示'
      })
    },
    normalToast () {
      Toast('普通提示')
    },
    loadingToast () {
      // Toast.loading('正在加载……')
      Toast({
        type: 'loading',
        message: '加载中……'
      })
    },
    onClose (clickPos, instance) {
      switch (clickPos) {
        case 'left':
        case 'outside':
        case 'cell':
          instance.close()
          break
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            Toast('已删除')
            instance.close()
          }).catch(() => {
            Toast('先不删除了')
          })
          break
        default:
          break
      }
    },
    showNotify () {
      Notify({
        message: '通知通知通知通知',
        duration: 2000,
        background: '#5bf',
        color: '#fff'
      })
    },
    confirm () {
      this.$dialog.confirm({
        title: '确认框标题',
        message: '确认进行此操作？'
      }).then(() => {
        console.log('点击了确认操作')
      }).catch(() => {
        console.log('取消了操作')
      })
    },
    warnInfo () {
      this.$dialog.alert({
        title: '提示',
        message: '提示信息提示信息提示信息提示信息提示信息提示信息提示信息提示信息提示信息提示信息'
      }).then(() => {}).catch(() => {})
    },
    onSelect (item) {
      this.show = false
      Toast(item.name)
    },
    onCancel () {
      Toast('Cancel')
    },
    beforeClose (action, done) {
      if (action === 'confirm') {
        setTimeout(done, 1000)
      } else {
        done()
      }
    }
  }
}

</script>

<style scoped lang="stylus">
.swipe-cell
  .sidebar
    display inline-flex
    justify-content space-around
    align-items center
    width 65px
    height 100%
    background-color red
    color #fff
  & >>> .van-cell__title
    text-align left
</style>
