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
    <br>
    <div class="area">
      <h3>省市区选择器</h3>
      <p style="text-align:left">
        添加loading状态时，文字将会被隐藏。
        <b>area-list：</b>地区数据 <br>
        <b>value：</b>当前所选地区的编号 <br>
        <b>item-height：</b>每一项所占的宽度 <br>
        <b>columns-num:</b> 显示列数，默认为3。 <br>
        <b>loading：</b>是否显示加载状态 <br>
        <b>visible-item-count：</b>可见选项的个数 <br>
        <b>confirm(data)事件：</b>点击确认时触发, 参数data为一个数组，包含当前选中的城市 <br>
        <b>cancel事件</b>：点击取消时触发 <br>
        <b>change(picker, data, index)事件</b>：改变选择时触发。三个参数，picker为picker实例，data同confirm的data，index为当前列索引 <br>
        <b>reset方法</b>：通过ref调用area的reset方法，重置每一列为第一项
      </p>
      <van-button type="primary" size="large" @click="show=true">请选择地区</van-button>
      <van-actionsheet v-model="show">
        <van-area
        :area-list="areaList"
        :value="value"
        :item-height="60"
        :visible-item-count="6"
        @confirm="chooseArea"
        @change="cityChange"
        @cancel="cancelChoose"></van-area>
      </van-actionsheet>
    </div>
    <div class="card">
      <h3>card商品卡片</h3>
      <p><b style="color: #f33">注意：</b> .van-card使用的是flex布局，左边缩略图固定宽高，右侧.van-card__content属性flex：1自动填满
      剩余空间，title和desc未指名width，且文字不换行，文字内容过长时.van-card__content宽度也相应的变得很大，此时样式会
      变得超出预期，如下图：因此要给.van-card__content加一个overflow：hidden属性。<br> <br></p>
      <b>变样Card图片</b>
      <img src="@/assets/img/van-card_bad.png" alt="变样Card图片" width="100%"> <br>
      <b>正常的Card</b>
      <img src="@/assets/img/van-card_good.png" alt="变样Card图片" width="100%"> <br>
      <p>价格现在是居中的，靠左可以添加float：left解决</p>
      <van-card
        num="2"
        price="2.00"
        origin-price="199.00"
        tag="标签"
        title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题"
        desc="描述信息描述信息描述信息描述息商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题"
        :thumb="imgUrl"
        :thumb-link="imgUrl" />
      <b>使用插槽</b>
      <p style="text-align: left">
        van-card提供了5个插槽 <br>
        1、title：自定义标题 <br>
        2、desc: 自定义描述内容 <br>
        3、tags：自定义desc下方的内容 <br>
        4、thumb：自定义图片 <br>
        5、footer：自定义右下角内容
      </p>
      <van-card num="2" price="88" origin-price="998">
        <div slot="thumb">
          <img :src="imgUrl" alt="">
        </div>
        <div slot="title" class="van-card__title">
          <van-icon name="like" size="16px" color="#f35" />
          商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题标题商品标题商品标题
        </div>
        <div slot="desc" class="van-card__desc van-ellipsis">
          <van-icon class-prefix="iconfont icon-star" color="#f33" />描述信息描述信息描述信息描述息商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题
        </div>
        <div slot="tags" style="display:flex">
          <van-button plain type="danger" size="mini">标签一</van-button>
          <van-button plain type="danger" size="mini">标签二</van-button>
        </div>
        <div slot="footer">
          <van-button type="danger" size="mini">删除</van-button>
          <van-button type="primary" size="mini">结算</van-button>
        </div>
      </van-card>
    </div>
    <div class="contact">
      <h3>联系人</h3>
      <!-- 联系人卡片 -->
      <p>
        <b style="color: #f33">vant 1.5.0 ContactList Bug: </b>ContactList组件中使用了Button组件，但未引入，
        直接像其他组件一样引用的话会报错，需要修改 'vant/packages/contact-list'中的index.vue，修改后从上述目录引入。
        contact-edit如果输入框没有输入内容直接点击保存，控制台会报错
      </p>
      <van-contact-card
        :type="cardType"
        :name="currentContact.name"
        :tel="currentContact.tel"
        @click="showContactList=true" />
      <!-- 联系人列表,放在popup弹出层中 -->
      <van-popup position="bottom" v-model="showContactList" style="height: 100vh">
        <van-contact-list
          v-model="chosenContactId"
          :list="list"
          add-text="添加联系人"
          @add="addContact"
          @edit="contactEdit"
          @select="onSelect"
        />
      </van-popup>
      <!-- 编辑联系人 -->
      <van-popup position="bottom" v-model="editContact" style="height:100%">
        <!-- 如果姓名电话有一个没填写就会报错 -->
        <van-contact-edit
          :contact-info="editingContact"
          :is-edit="isEdit"
          @save="saveContact"
          @delete="delContact" />
      </van-popup>
    </div>
    <div class="coupon">
      <van-coupon-cell
        title="优惠券名称"
        :chosen-coupon="chosenCoupon"
        :coupons="coupons"
        @click="showCoupons=true" />
      <van-popup v-model="showCoupons" position="bottom">
        <van-coupon-list
          exchange-button-text="确认兑换"
          input-placeholder="请输入兑换码"
          :coupons="coupons"
          :disabled-coupons="disabledCoupons"
          :chosen-coupon="chosenCoupon"
          @change="changeCoupons" />
      </van-popup>
    </div>
    <div class="cart">
      <h3>商品导航——购物车</h3>
      <van-goods-action>
        <van-goods-action-mini-btn
          icon="chat-o"
          text="客服"
          @click="chat" />
        <van-goods-action-mini-btn
          icon="cart-o"
          text="购物车"
          info="5"
          @click="cart" />
        <van-goods-action-big-btn
          text="加入购物车"
          @click="addToCart" />
        <van-goods-action-big-btn
          primary
          text="立即购买"
          @click="buy" />
      </van-goods-action>
    </div>
    <br>
    <br>
    <div class="submit-bar">
      <h3>订单提交</h3>
      <van-submit-bar
        label="价格总计"
        button-text="提交订单"
        tip="您的货物本地仓无货，将为您免费调货，配送可能有延迟"
        :price="9900"
        @submit="onSubmit" />
      <van-submit-bar
        disabled
        label="价格总计"
        button-text="禁用状态"
        button-type="warning"
        tip="您的货物本地仓无货，将为您免费调货，配送可能有延迟"
        :price="9900"
        @submit="onSubmit" />
      <van-submit-bar
        loading
        label="loading状态"
        button-text="提交订单"
        tip="您的货物本地仓无货，将为您免费调货，配送可能有延迟"
        :price="9900"
        @submit="onSubmit" />
      <b>通过插槽自定义内容</b>
      <p>
        共有3个插槽，top，tip，和一个匿名插槽
      </p>
      <van-submit-bar :price="9999" button-text="提交订单" @submit="onSubmit">
        <div>
          <van-checkbox v-model="checked">匿名插槽</van-checkbox>
        </div>
        <span slot="tip" class="van-submit-bar__tip">
          tip插槽 slot="tip"
        </span>
        <div slot="top" class="top">
          top插槽 slot="top"
        </div>
      </van-submit-bar>
    </div>
    <br>
    <div class="sku">
      <van-button type="danger" @click="showSku=true" size="large">基础用法</van-button>
      <van-sku
        v-model="showSku"
        :sku="sku" />
    </div>
  </div>
</template>

<script>
import { AddressEdit, Toast, AddressList, Checkbox,
  Area, Actionsheet, Button, Card, Icon, SubmitBar,
  ContactCard, ContactEdit, CouponCell, CouponList, Sku,
  Popup, GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn } from 'vant'
// vant 1.5.0 ContactList 组件使用了Button但未引入，修改后从此处引入ContactList
import ContactList from 'vant/packages/contact-list'
import area from 'vant/packages/area/demo/area'
export default {
  name: 'business',
  components: {
    [Sku.name]: Sku,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
    [CouponCell.name]: CouponCell,
    [CouponList.name]: CouponList,
    [Popup.name]: Popup,
    [ContactCard.name]: ContactCard,
    [ContactEdit.name]: ContactEdit,
    [ContactList.name]: ContactList,
    [Icon.name]: Icon,
    [Card.name]: Card,
    [Button.name]: Button,
    [Actionsheet.name]: Actionsheet,
    [Area.name]: Area,
    [AddressList.name]: AddressList,
    [AddressEdit.name]: AddressEdit
  },
  data () {
    return {
      showSku: false,
      checked: false,
      showCoupons: false,
      chosenCoupon: -1,
      isEdit: false,
      editingContact: {},
      editContact: false,
      chosenContactId: null,
      showContactList: false,
      show: false,
      value: '11012',
      areaList: area,
      searchResult: [],
      chosenAddressId: 1,
      imgUrl: 'http://bmob-cdn-23203.b0.upaiyun.com/2018/12/27/d698e745406545e28072eba4a6d377b9.jpg',
      sku: {
        tree: [
          {
            k: '颜色',
            v: [
              {
                id: '10001',
                name: '红色',
                imgUrl: 'http://bmob-cdn-23203.b0.upaiyun.com/2018/12/27/d698e745406545e28072eba4a6d377b9.jpg'
              },
              {
                id: '10002',
                name: '蓝色',
                imgUrl: 'http://bmob-cdn-23203.b0.upaiyun.com/2018/12/27/d698e745406545e28072eba4a6d377b9.jpg'
              }
            ],
            k_s: 's1'
          },
          {
            k: '尺寸',
            v: [
              {
                id: '20001',
                name: '尺寸一'
              },
              {
                id: '20002',
                name: '尺寸二'
              },
              {
                id: '20003',
                name: '尺寸三'
              }
            ],
            K_s: 's2'
          }
        ],
        list: [
          {
            id: 100001,
            price: 9999,
            s1: '10001', // ks 为 s1 对应的规格id
            s2: '20001', // ks 为 s2 对应的规格id
            s3: '0', // 最多包含三个规格，0表示不存在此规格
            stock_num: 10 // 当前规格组合对应的库存
          }, {
            id: 100002,
            price: 19900,
            s1: '10001', // ks 为 s1 对应的规格id
            s2: '20002', // ks 为 s2 对应的规格id
            s3: '0', // 最多包含三个规格，0表示不存在此规格
            stock_num: 110 // 当前规格组合对应的库存
          }, {
            id: 100003,
            price: 9900,
            s1: '10001', // ks 为 s1 对应的规格id
            s2: '20003', // ks 为 s2 对应的规格id
            s3: '0', // 最多包含三个规格，0表示不存在此规格
            stock_num: 19 // 当前规格组合对应的库存
          }, {
            id: 100004,
            price: 5900,
            s1: '10002', // ks 为 s1 对应的规格id
            s2: '20001', // ks 为 s2 对应的规格id
            s3: '0', // 最多包含三个规格，0表示不存在此规格
            stock_num: 324 // 当前规格组合对应的库存
          }, {
            id: 100005,
            price: 8800,
            s1: '10005', // ks 为 s1 对应的规格id
            s2: '20002', // ks 为 s2 对应的规格id
            s3: '0', // 最多包含三个规格，0表示不存在此规格
            stock_num: 23 // 当前规格组合对应的库存
          }, {
            id: 100006,
            price: 9800,
            s1: '10001', // ks 为 s1 对应的规格id
            s2: '20003', // ks 为 s2 对应的规格id
            s3: '0', // 最多包含三个规格，0表示不存在此规格
            stock_num: 110 // 当前规格组合对应的库存
          }
        ],
        price: '99.99',
        stock_num: 999,
        collection_id: 1001,
        none_sku: false
      },
      coupons: [
        {
          id: 0,
          name: '优惠券一',
          discount: 88,
          denominations: 0,
          originCondition: 10000,
          startAt: 1546080731,
          endAt: 1556080731,
          reason: '',
          value: 1200
        },
        {
          id: 1,
          name: '优惠券二',
          discount: 0,
          denominations: 5000,
          originCondition: 9900,
          startAt: 1546080731,
          endAt: 1556080731,
          reason: ''
        }
      ],
      disabledCoupons: [
        {
          id: 2,
          name: '优惠券三',
          discount: 10,
          denominations: 0,
          originCondition: 10000,
          startAt: 1546080731,
          endAt: 1556080731,
          reason: '不可用原因'
        },
        {
          id: 3,
          name: '优惠券四',
          discount: 0,
          denominations: 10000,
          originCondition: 19900,
          startAt: 1546080731,
          endAt: 1556080731,
          reason: '不可用原因'
        }
      ],
      list: [
        {
          id: '0',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '1',
          name: '李四',
          tel: '13100000001',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '2',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },
  computed: {
    cardType () {
      return this.chosenContactId === null ? 'add' : 'edit'
    },
    currentContact () {
      const id = this.chosenContactId
      return id !== null ? this.list.filter(item => id === item.id)[0] : {}
    }
  },
  methods: {
    onSubmit () {
      Toast('提交订单')
    },
    chat () {
      Toast('联系客服')
    },
    cart () {
      Toast('去购物车')
    },
    addToCart () {
      Toast('加入购物车')
    },
    buy () {
      Toast('立即购买')
    },
    changeCoupons (index) {
      this.chosenCoupon = index
      this.showCoupons = false
    },
    delContact (contact) {
      console.log(contact)
      const id = contact.id
      this.list = this.list.filter(item => item.id !== id)
      this.editContact = false
      if (this.chosenId === contact.id) {
        this.chosenId = null
      }
    },
    saveContact (contact) {
      console.log(contact)
      this.editContact = false
      this.showContactList = false
      // this.isEdit = false
      if (this.isEdit) {
        this.list = this.list.map(item => item.id === contact.id ? contact : item)
      } else {
        this.list.push(contact)
      }
    },
    onSelect () {
      console.log('select')
      this.showContactList = false
      this.editContact = false
    },
    contactEdit (item) {
      console.log('edit')
      this.editContact = true
      this.isEdit = true
      this.editingContact = item
    },
    addContact () {
      this.isEdit = false
      this.editingContact = { id: this.list.length }
      this.editContact = true
    },
    cityChange (picker, data, index) {
      Toast('改变了选择城市')
      console.log(picker)
      console.log(data, index)
    },
    chooseArea (data) {
      console.log(data)
      Toast(`您选择的是${data[0].name + data[1].name + data[2].name}`)
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
.addr-list
  position relative
  & >>> .van-address-list__add
    position absolute
    bottom 0
    z-index 100
.cart .van-goods-action
  position static
.submit-bar .van-submit-bar
  position static
</style>
