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
      <van-actionsheet
        :actions="actions"
        cancel-text="取消"
        @cancel="onCancel"
        @select="onSelect"
        v-model="show1"></van-actionsheet>
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
    </div>
  </div>
</template>

<script>
import { Actionsheet, Button, Toast, Cell } from 'vant'

export default {
  name: 'feedback',
  data () {
    return {
      show: false,
      show1: false,
      show2: false,
      actions: [
        {
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
        }
      ]
    }
  },
  components: {
    [Cell.name]: Cell,
    [Button.name]: Button,
    [Actionsheet.name]: Actionsheet
  },
  methods: {
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
    }
  }
}
</script>
