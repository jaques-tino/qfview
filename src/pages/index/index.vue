<script lang="ts" setup>
import { useFile } from '@/utils'
import { image } from '#/index.json'
import * as echarts from 'echarts'

const banners = [
  {
    title: '老员工答谢宴',
    path: 'temp/temp-1.jpg'
  },
  {
    title: '东澳岛团建',
    path: 'temp/temp-2.jfif'
  },
  {
    title: '年会2',
    path: 'temp/temp-3.jfif'
  },
  {
    title: '2022年年会',
    path: 'temp/temp-4.jfif'
  },
  {
    title: '5周年庆',
    path: 'temp/temp-5.jpg'
  },
  {
    title: '公司Logo',
    path: 'temp/temp-6.png'
  }
]

const departmentList = [
  {
    value: '',
    label: '全部'
  },
  {
    value: '1-1',
    label: '总部',
    children: [
      {
        value: '1-1-1',
        label: '技术部'
      },
      {
        value: '1-1-2',
        label: '研发部'
      },
      {
        value: '1-1-3',
        label: '销售部'
      },
      {
        value: '1-1-4',
        label: '总经理部'
      }
    ]
  }
]

const timeGroup = ['今日', '昨日', '本周', '本月']
const payMethods = ['出售', '出租', '租售']

const operators = [
  {
    label: '房新增',
    value: 21,
    placeholder: '所选时间内房源新增量'
  },
  {
    label: '客新增',
    value: 13,
    placeholder: '所选时间内客源新增量'
  },
  {
    label: '钥匙',
    value: 0,
    placeholder: '所选时间内钥匙新增量'
  },
  {
    label: '带看组数',
    value: 7,
    placeholder: '所选时间内带看单数'
  },
  {
    label: '实勘',
    value: 4,
    placeholder: '所选时间内实勘新增量'
  },
  {
    label: '跟进',
    value: 329,
    placeholder: '所选时间内跟进新增量'
  },
  {
    label: '委托',
    value: 0,
    placeholder: '所选时间内委托新增量'
  },
  {
    label: '有效通话时长',
    value: 160,
    placeholder: '所选时间内全部来源的通话时长加和'
  },
  {
    label: '新增VR',
    value: 1,
    placeholder: '所选时间内上传的vr数量（新房二手）'
  }
]

const operators2 = [
  {
    label: '本月新增',
    value: 88,
    placeholder: '所选时间内房源新增量'
  },
  {
    label: '新增验真通过率',
    value: 0,
    placeholder: '所选时间内客源新增量'
  },
  {
    label: '库存房源量',
    value: 4528,
    placeholder: '所选时间内钥匙新增量'
  },
  {
    label: '库存验真通过率',
    value: 0,
    placeholder: '所选时间内带看单数'
  },
  {
    label: '库存实勘率',
    value: '39.53%',
    placeholder: '所选时间内实勘新增量'
  },
  {
    label: '库存钥匙率',
    value: '15.83%',
    placeholder: '所选时间内跟进新增量'
  },
  {
    label: '库存委托率',
    value: 0,
    placeholder: '所选时间内委托新增量'
  },
  {
    label: '库存VR率',
    value: '23.28%',
    placeholder: '所选时间内全部来源的通话时长加和'
  },
  {
    label: '库存政府核验率',
    value: 0,
    placeholder: '所选时间内上传的vr数量（新房二手）'
  }
]

const option: echarts.EChartsOption = {
  tooltip: {
    trigger: 'axis',
    formatter: (params) => {
      if (Array.isArray(params)) {
        const total = params.reduce((total, item) => total += +item.value, 0)
        const content = `
          <strong>${params[0].name}合计：${total} ¥</strong>
          ${params.reduce((html, item) => html += '<div style="margin-top: 10px;font-size: 12px;color: '+ item.color +'">' + item.seriesName + '：' + item.value + ' ¥ / ' + (+(+item.value / total).toFixed(2) * 100).toFixed(0) + '%</div>', '')}
        `
        return content
      }
      return params.name
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '二手',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [120500, 881100, 174500, 341960, 30300],
      color: '#ed7d59'
    },
    {
      name: '租房',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [117660, 122735, 164655, 151340, 150135, 45880],
      color: '#528fe4'
    },
    {
      name: '新房',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [577509, 997164, 577479, 467098, 1960708],
      color: '#f5c244'
    },
    {
      name: '其它',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [],
      color: '#88c7f3'
    }
  ]
}

const department = ref('')
const time = ref(0)
const payMethod = ref(0)
const dealPanelRef = ref()
const mychart = ref<echarts.EChartsType>()

onMounted(() => {
  mychart.value = markRaw(echarts.init(dealPanelRef.value))

  mychart.value.setOption(option)
})
</script>

<template>
  <div id="index" class="tino-flex tino-flex-row tino-row-center">
    <div class="container tino-flex tino-flex-col">
      <el-carousel :interval="10000" trigger="click" height="300px">
        <el-carousel-item v-for="banner in banners" :key="banner.path">
          <span class="title">{{ banner.title }}</span>
          <img :src="useFile(banner.path, 'image')" :alt="image.ALT">
        </el-carousel-item>
      </el-carousel>

      <div class="panel tino-flex tino-flex-row tino-row-between">
        <div>
          <div class="header tino-flex tino-flex-row tino-row-between tino-col-center">
            <div>
              <span class="title">部门行程</span>
              <span class="time">更新时间：06-10 13:27</span>
            </div>
            <a href="javascript:;" class="more">更多 &gt;</a>
          </div>
          <div class="main">
            <el-cascader
              v-model="department"
              placeholder="请选择部门，默认全部"
              :options="departmentList"
              filterable
            />
            <el-select v-model="time">
              <el-option
                v-for="(time, index) in timeGroup"
                :key="index"
                :label="time"
                :value="index"
              />
            </el-select>
            <div class="data">
              <div v-for="operator in operators">
                <div class="value">{{ operator.value }}</div>
                <div>
                  <span>{{ operator.label }}</span>
                  <i :title="operator.placeholder">&copy;</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ml-10">
          <div class="header tino-flex tino-flex-row tino-row-between tino-col-center">
            <div>
              <span class="title">房源看板</span>
              <span class="time">数据截止：2023-06-09</span>
            </div>
          </div>
          <div class="main">
            <el-select v-model="payMethod">
              <el-option
                v-for="(payMethod, index) in payMethods"
                :key="index"
                :label="payMethod"
                :value="index"
              />
            </el-select>
            <div class="data">
              <div v-for="operator in operators2">
                <div class="value">{{ operator.value }}</div>
                <div>
                  <span>{{ operator.label }}</span>
                  <i :title="operator.placeholder">&copy;</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div>
          <div class="header tino-flex tino-flex-row tino-row-between tino-col-center">
            <div>
              <span class="title">交易看板</span>
              <span class="time">数据截止：2023-01-10</span>
            </div>
            <a href="javascript:;" class="more">更多 &gt;</a>
          </div>
          <div class="main">
            <div id="deal-panel" ref="dealPanelRef"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="other"></div>
  </div>
</template>

<style lang="scss" src="./index.scss" scoped />
