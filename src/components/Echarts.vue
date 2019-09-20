<template>
  <div class="body">
    <div class="con">
      <v-chart ref="chart" :options='bar' theme='light' autoresize @click="onClick" />
    </div>
    <div class="select">

    </div>
  </div>
</template>

<script>
import echarts from "vue-echarts"
export default {
  // name: 'mychart',
  data() {
    var dataAxis = ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '今日'];
    var data = [220, 182, 191, 234, 290, 330, 310, 123, 360, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
    // var myChart = echarts.init(document.getElementsByClassID('chart1'));
    // myChart.on('click', function (params) {
    // // 控制台打印数据的名称
    //   console.log(params.name);
    // });
    // var yMax = 500;
    // var dataShadow = [];
    // for (var i = 0; i < data.length; i++) {
    //     dataShadow.push(yMax);
    // }
    // mychart.on('click', function () {});
    return {
      bar: {
        title: {
          text: '特性示例：渐变色 阴影 点击缩放',
          subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
        },
        grid:{
          left: '3%',
          right: "10%"
        },
        xAxis: {
            data: dataAxis,
            barCategoryGap: '100%',
            axisLabel: {
                barCategoryGap: '100%',
                inside: false,
                textStyle: {
                  color: '#333',
                  fontSize: 22
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#333',
                    fontSize: 22
                }
            }
        },
        // dataZoom: [
        //     {
        //         type: 'inside'
        //     }
        // ],
        series: [
            // For shadow
            // { 
            //     type: 'bar',  
            //     itemStyle: {
            //         normal: {color: 'rgba(0,0,0,0.05)'}
            //     },
            //     barGap:'-100%',
            //     barCategoryGap:'40%',
            //     data: dataShadow,
            //     animation: false
            // },
            {
                type: 'bar',
                barWidth: 40,
                barCategoryGap:-1,
                itemStyle: {
                  barCategoryGap: '100%',
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color:  '#aad6ff'},
                                {offset: 1, color: '#188df0'}
                            ]
                        ),
                        barBorderRadius: [1000, 1000, 0, 0]
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 1, color: '#83bff6'},
                                {offset: 0, color: '#2378f7'},
                            ]
                        ),
                        barBorderRadius: [1000, 1000, 0, 0]
                    }
                },
                data: data
            }
        ]
        }
    }
  },
  methods: {
    onClick(params) {
      console.log(params)
    }
  }
}
</script>

<style>
.con {
  width: 750px;
  overflow: auto;
}
.echarts {
  color: #aad6ff; 
  width: 2000px;
  height: 500px;
}
</style>