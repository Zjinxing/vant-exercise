<template>
  <div class="business">
    <div class="address-edit">
      <h3>新增地址</h3>
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        @save="onSave"
        @focus="onFocus"
        @delete="onDel"
        @cancel-delete="cancelDel"></van-address-edit>
    </div>
    <div class="addr-list">
      <van-address-list
        v-model="chosenAddressId"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        @add="onAdd"
        @edit="onEdit"
        :list="list"></van-address-list>
    </div>
    <div class="area">
      <van-button type="primary" size="large" @click="show=true">请选择地区</van-button>
      <van-actionsheet v-model="show">
        <van-area 
        :area-list="areaList"
        :value="value"
        @confirm="chooseArea"
        @change="cityChange"
        @cancel="cancelChoose"></van-area>
      </van-actionsheet>
    </div>
  </div>
</template>

<script>
import { AddressEdit, Toast, AddressList, Area, Actionsheet, Button } from 'vant'
import area from 'vant/packages/area/demo/area'
export default {
  name: 'business',
  components: {
    [Button.name]: Button,
    [Actionsheet.name]: Actionsheet,
    [Area.name]: Area,
    [AddressList.name]: AddressList,
    [AddressEdit.name]: AddressEdit
  },
  data () {
    return {
      show: false,
      value: '110101',
      areaList: area,
      searchResult: [],
      chosenAddressId: 1,
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },
  methods: {
    cityChange (picker) {
      Toast('改变了选择城市')
    },
    chooseArea (data) {
      console.log(data)
      Toast(`您选择的是${data[0].name+data[1].name+data[2].name}`)
      this.value = data[2].code
      this.show = false
    },
    cancelChoose () {
      this.show = false
      Toast('取消了选择')
    },
    onAdd () {
      Toast('新增地址')
    },
    onEdit () {
      Toast('编辑地址')
    },
    cancelDel (content) {
      console.log(content)
    },
    onDel (content) {
      console.log(content)
    },
    onFocus (key) {
      Toast(`当前输入为${key}`)
    },
    onSave (content) {
      Toast('保存成功')
      console.log(content)
    }
  }
}
</script>

<style scoped lang="stylus">
.addr-list >>> .van-address-list__add
  position static
</style>