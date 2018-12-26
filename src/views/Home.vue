<template>
  <div class="home">
    <div class="btns">
      <van-button type="primary">主要按钮type=primary</van-button>
      <van-button type="default">type=default</van-button>
      <van-button type="warning">type=warning</van-button>
      <van-button type="danger">type=danger</van-button>
      <van-button plain type="primary">加plain属性变镂空样式</van-button>
      <van-button plain type="danger">plain type=danger</van-button>
      <van-button disabled type="primary">disabled变禁用样式</van-button>
      <van-button disabled type="warning">disabled type=warning</van-button>
      加上loading变成loading状态 <br>
      <van-button loading style="width: 10em" type="primary"/>
      <van-button loading type="danger"/>
      <van-button square type="primary">square方形按钮</van-button>
      <van-button round type="danger">round圆形按钮</van-button>
      按钮有4种尺寸large、normal（默认）、small、mini
      <van-button size="large" type="primary">large按钮</van-button>
      <van-button size="normal" type="primary">normal按钮</van-button>
      <van-button size="small" type="primary">small按钮</van-button>
      <van-button size="mini" type="primary">mini按钮</van-button>
    </div>
    <div class="cells">
      <h3>cell单元格</h3>
      <p>Cell可以单独使用，也可以与CellGroup搭配使用。CellGroup可以为Cell提供上下外边框。</p>
      <van-cell-group>
        <van-cell title="单元格" value="内容 size=large" size="large"/>
        <van-cell title="单元格" value="内容" label="描述信息"/>
      </van-cell-group>
      <van-cell title="标题" value="内容"/>
      <van-cell title="标题" value="icon会出现在标题左侧" icon="location-o"/>
      <van-cell value="只有value的单元格向左对齐"/>
      <van-cell is-link value="is-link属性会展示箭头 默认向右"/>
      <van-cell is-link value="arrow-direction控制箭头方向"></van-cell>
      <van-cell is-link title="向上的箭头" value="向上的箭头" arrow-direction="up"></van-cell>
      <van-cell is-link value="可以通过url跳转或者to进行vue-router跳转"></van-cell>
      <van-cell is-link value="跳转到百度" url="//www.baidu.com"></van-cell>
      <van-cell is-link value="跳转到about页面" to="/about"></van-cell>
      <van-cell value="可以通过slot自定义内容，slot可以为title、icon、right-icon和-"></van-cell>
      <van-cell value="自定义标题" center>
        <template slot="title">
          <van-radio-group v-model="radio">
            <van-radio name="1">单选框1</van-radio>
            <van-radio name="2">单选框2</van-radio>
          </van-radio-group>
        </template>
      </van-cell>
      <van-cell title="自定义value" center>
        <template>
          <van-radio-group v-model="radio">
            <van-radio name="1">单选框1</van-radio>
            <van-radio name="2">单选框2</van-radio>
          </van-radio-group>
        </template>
      </van-cell>
      <van-cell title="自定义icon" value="自定义标题的icon" center>
        <template slot="icon">
          <i class="iconfont icon-star"></i>
        </template>
      </van-cell>
      <van-cell title="自定义icon" value="自定义内容右侧的icon" center>
        <template slot="right-icon">
          <i class="iconfont icon-search"></i>
        </template>
      </van-cell>
    </div>
    <div class="icons">
      <van-icon name="chat" info="9"></van-icon>
      <br>
      <span>可以使用外部引入图标</span>
      <van-icon class-prefix="iconfont icon-star" color="red" name="extra"></van-icon>
      <br>
      <span>name可以是图片链接</span>
      <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
    </div>
    <div class="layout">
      <h3>栅格布局</h3>
      <p>
        一个van-row分成24个栅格，van-col上加span属性表示列所占宽度，offset属性可以设置偏移量，gutter属性设置列元素之间的间距
        gutter是通过添加padding实现的列间距
      </p>
      <van-row gutter="20">
        <van-col span="6">span: 8</van-col>
        <van-col span="6">span: 8</van-col>
        <van-col span="6">span: 8</van-col>
      </van-row>
      <van-row>
        <van-col offset="12" span="12">offset=12, span=12</van-col>
      </van-row>
      <van-row type="flex">
        <van-col>可以给van-row设置type=flex属性，通过justify属性设置对齐方式，justify取值可为center，end，space-between，space-around</van-col>
      </van-row>
    </div>
    <div class="popup">
      <h3>弹出层</h3>
      <van-button type="primary" @click="show=!show">弹出</van-button>
      <van-button type="primary" @click="leftShow=!leftShow">左侧弹出</van-button>
      <van-button type="primary" @click="rightShow=!rightShow">右侧弹出</van-button>
      <van-button type="primary" @click="topShow=!topShow">顶部弹出</van-button>
      <van-button type="primary" @click="bottomShow=!bottomShow">底部弹出</van-button>
      <van-popup v-model="show">
        直接弹出层
      </van-popup>
      <van-popup v-model="topShow" position="top">
       从顶部弹出
      </van-popup>
      <van-popup v-model="leftShow" position="left">
        从左侧弹出
      </van-popup>
      <van-popup v-model="rightShow" position="right">
        从右侧弹出
      </van-popup>
      <van-popup v-model="bottomShow" position="bottom">
        从底部弹出
      </van-popup>
    </div>
    <div class="checkbox">
      <h3>checkbox复选框</h3>
      <van-checkbox v-model="checked">复选框</van-checkbox>
      <van-checkbox v-model="checked1">复选框1</van-checkbox>
    </div>
    <div class="datetime-picker">
      <h3>时间选择</h3>
      <b>完整时间 type=datetime</b>
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
      />
      <b>选择日期（年月日）type=date</b>
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
      />
      <b>选择年月 type=year-month</b>
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        :min-date="minDate"
      />
      <b>选择时间 type=time</b>
      <van-datetime-picker
        v-model="currentTime"
        type="time"
        :min-hour="minHour"
        :max-hour="maxHour"
      />
    </div>
    <div class="field">
      <van-cell-group>
        <van-field v-model="value" placeholder="请输入用户名" />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="username"
          required clearable
          label="用户名"
          placeholder="请输入用户名" />
        <van-field
          v-model="password"
          type="password"
          required clearable
          label="密码"
          placeholder="请输入密码" />
      </van-cell-group>
    </div>
    <div class="number-keyboard">
      <h3>numberKeyboard数字键盘</h3>
      <van-button @touchstart.native.stop="showNumkey = true">
        弹出默认键盘
      </van-button>
      <van-number-keyboard
        :show="showNumkey"
        extra-key="."
        close-button-text="完成"
        theme="custom"
        @input="onInput"
        @delete="onDel"
        @blur="showNumkey=false" />
    </div>
    <div class="passwordInput">
      <van-password-input
        :value="value"
        info="密码为 6 位数字"
        @focus="showNumkey=true"
      />
    </div>
    <div class="picker">
      <h3>picker选择器</h3>
      <van-picker :columns="columns" @change="onChange" showToolbar title="标题"/>
      <b>多列联动</b>
      <van-picker :columns="columnsMul" @change="choose" />
    </div>
    <div class="rates">
      <h3>评分组件</h3>
      <b>默认样式</b>
      <van-rate v-model="rate" />
      <b>自定义图标和颜色</b>
      <van-rate v-model="rate" icon="like" void-icon="like-o" color="#2ba" />
    </div>
    <div class="search">
      <h3>search搜索</h3>
      <van-search v-model="search" placeholder="请输入要搜索的内容" />
      <b>嵌套到form里可以在ios键盘上显示搜索</b>
      <form action="/">
        <van-search
          v-model="search"
          placeholder="请输入关键词搜索"
          show-action
          @cancel="cancel" />
      </form>
      <b>可以使用action插槽自定义action按钮</b>
      <form action="/" @submit.prevent="onSubmit">
        <van-search v-model="search" placeholder="请输入关键词" show-action>
          <template slot="action">
            <van-button type="warning" size="small">取消</van-button>
          </template>
        </van-search>
      </form>
    </div>
    <div class="slider">
      <van-slider v-model="sliderValue" @change="sliderChange" />
      <b>可以指定slider的范围</b>
      <van-slider v-model="sliderValue" :min="10" :max="90" @change="sliderChange" />
      <b>disabled禁用滑块</b>
      <van-slider v-model="sliderValue" disabled />
      <b>可以指定步长step和bar-height</b>
      <van-slider v-model="sliderValue" :step="10" bar-height="4px" />
    </div>
    <div class="stepper">
      <h3>stepper步进器</h3>
      <b>基本用法</b>
      <van-stepper v-model="stepper" />
      <b>disabled禁用</b>
      <van-stepper disabled v-model="stepper" />
      <b>可以设置step、min、max、integer属性</b>
      <van-stepper :step="5" :min="10" :max="90" integer />
    </div>
    <div class="switch">
      <van-switch v-model="checked" />
      <br>
      <b>disabled禁用开关</b>
      <van-switch v-model="checked" disabled />
      <br>
      <b>loading 加载状态</b>
      <van-switch v-model="checked" loading />
      <br>
      <b>size='px'自定义大小</b>
      <van-switch v-model="checked1" size="24px" />
      <br>
      <b>active-color、inactive-color自定义颜色</b>
      <van-switch v-model="checked1" active-color="#4b0" inactive-color="#f44" />
      <br>
      <b>异步切换</b>
      <van-switch :value="checked1" @input="toggleSwitch" />
    </div>
    <div class="switch-cell">
      <h3>switchCell开关单元格</h3>
      <b>基本样式</b>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="标题开关" />
      </van-cell-group>
      <b>disabled设为禁用状态</b>
      <van-cell-group>
        <van-switch-cell v-model="checked" disabled title="禁用"></van-switch-cell>
      </van-cell-group>
      <b>loading 加载中……</b>
      <van-cell-group>
        <van-switch-cell v-model="checked" loading></van-switch-cell>
      </van-cell-group>
    </div>
    <div class="uploader">
      <h3>uploader上传组件</h3>
      <b>after-read上传完成的回调函数</b><br>
      <van-uploader :after-read="onRead">
        <van-icon name="photograph" size="24px"></van-icon>
      </van-uploader>
      <br>
      <b>可以给uploader组件设置input的属性，Uploader会继承这些属性</b><br>
      <van-uploader accept="image/*" mutiple>
        <van-icon size="36px" name="plus"></van-icon>
      </van-uploader>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Button, CellGroup, Cell, Tag, RadioGroup, Radio, Icon, Row, Col, Popup, Checkbox, CheckboxGroup, DatetimePicker, Field, NumberKeyboard, PasswordInput, Picker, Rate, Search, Slider, Toast, Stepper, Switch, Dialog, SwitchCell, Uploader } from 'vant'
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
}
export default {
  name: 'home',
  components: {
    [Uploader.name]: Uploader,
    [SwitchCell.name]: SwitchCell,
    [Switch.name]: Switch,
    [Stepper.name]: Stepper,
    [Slider.name]: Slider,
    [Button.name]: Button,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Tag.name]: Tag,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Icon.name]: Icon,
    [Row.name]: Row,
    [Col.name]: Col,
    [Popup.name]: Popup,
    [CheckboxGroup.name]: Checkbox,
    [Checkbox.name]: Checkbox,
    [DatetimePicker.name]: DatetimePicker,
    [Field.name]: Field,
    [NumberKeyboard.name]: NumberKeyboard,
    [PasswordInput.name]: PasswordInput,
    [Picker.name]: Picker,
    [Rate.name]: Rate,
    [Search.name]: Search
  },
  data () {
    return {
      stepper: '3',
      sliderValue: 55,
      search: '',
      rate: 3,
      radio: '1',
      show: false,
      leftShow: false,
      topShow: false,
      rightShow: false,
      bottomShow: false,
      checked: false,
      checked1: false,
      currentDate: new Date(),
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      minHour: 0,
      maxHour: 23,
      currentTime: '12: 00',
      value: '',
      username: '',
      password: '',
      showNumkey: false,
      columns: [{ text: '杭州', disabled: true }, '宁波', '温州', '嘉兴', '湖州'],
      columnsMul: [
        {
          values: Object.keys(citys),
          className: 'column1'
        },
        {
          values: citys['浙江'],
          className: 'column2',
          defaultIndex: 2
        }
      ]
    }
  },
  methods: {
    onRead (file) {
      console.log(file)
    },
    toggleSwitch (checked) {
      Dialog.confirm({
        title: '提醒',
        message: '是否切换？'
      }).then(() => {
        this.checked1 = checked
      }).catch(err => console.log(err))
    },
    sliderChange (value) {
      Toast({ message: '当前值：' + value })
    },
    onInput (key) {
      console.log(key)
      this.value = (this.value + key).slice(0, 6)
    },
    onDel () {
      console.log('del')
    },
    onChange (picker, value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`)
    },
    choose (picker, values) {
      picker.setColumnValues(1, citys[values[0]])
      console.log(values)
    },
    cancel () {
      console.log('search cancel')
    },
    onSubmit () {
      return false
    }
  }
}
</script>
<style scoped lang="stylus">
  .home
    .btns
      border 1px dashed #f00

      button
        margin: 5px

    .cells
      & >>> .van-cell__title
        text-align left
    .layout
      .van-col
        background-color: #88f
        background-clip content-box
  //
</style>
