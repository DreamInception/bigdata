$(function(){
 /* var pd_vm = new Vue({
    el:"#pd_app",
    methods:{
      init:function(){
        var vm = this;
      }
    },
    mounted:function(){
      this.init();
    }
  });*/
  var myChartB = echarts.init(document.getElementById('chartB'));
  var myChartC = echarts.init(document.getElementById('chartC'));
  var optionchartB = {
    radar: [
      {
        indicator: [
          { text: '外倾性',max:100 },
          { text: '神经质',max:100 },
          { text: '开放性',max:100 },
          { text: '宜人性',max:100 },
          { text: '尽责性',max:100 }
        ],
        center: ['50%','50%'],
        radius: 160,//控制大小
        startAngle: 90,
        splitNumber: 5,//密度
        /* shape: 'circle',*/
        name: {
          formatter:'{value}',
          textStyle: {
            color:'#fff',
            backgroundColor:"rgba(124, 174, 236, 1)",
            padding: [2, 10],
            fontSize:14,
            height: 22,
            borderRadius:6
          }
        },
        axisLine: {
          lineStyle: {
            color: '#d9dadb'
          }
        },
        splitLine: {
          show:false
         /* lineStyle: {
            color: '#d9dadb'
          }*/
        },
        splitArea: {
          areaStyle: {
            color: ['rgba(124, 174, 236, 1)','rgba(124, 174, 236, 0.8)', 'rgba(124, 174, 236, 0.6)','rgba(124, 174, 236, 0.4)','rgba(124, 174, 236, 0.2)']
            /*shadowColor: 'rgba(0, 0, 0, 0.3)',
             shadowBlur: 10*/ //shadow色值范围
          }
        }
      }
    ],
    series: [
      {
        type: 'radar',
        symbolSize: 5,
        itemStyle: {
          emphasis: {
            lineStyle: {
              width: 4
            }
          }
        }, //焦点线宽
        data: [
          {
            value: [97, 27, 92, 84, 93],
            label: {
              normal: {
                show: true,
                  fontSize:14,
                formatter:function(params) {
                  return params.value+"%";
                }
              }
            },
            lineStyle: {
              normal: {
                type: 'dashed',
                color:"#f15246"
              }
            }
          }
        ]
      }
    ]
  };
  var optionchartC = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {d}%"
    },
    series: [
      {
        color:['#EFCF68', '#68BEF9','#E5A2C1'],
        name:'策略特征',
        type:'pie',
        selectedMode: 'single',
        radius: [0, '35%'],
        label: {
          normal: {
            position: 'inner'
          }
        },
        data:[
          {value:30, name:'认知策略'},
          {value:40, name:'元认知策略'},
          {value:30, name:'资源管理策略'}
        ]
      },
      {
        name:'策略特征',
        color:['#EDC443', '#E5A2C0','#AF9FD7','#ADCAED', '#C52C27','#68BEF9','#28E097', '#ECD5A5','#3770B4','#E5A3EB'],
        type:'pie',
        radius: ['40%', '55%'],
        label: {
          normal: {
            formatter: '{b}：{d}%',
            backgroundColor: '#68BEF9',
            borderRadius: 4,
            color:"#fff",
            padding:[2,10],
              fontSize:14
          }
        },
        data:[
          {value:6.12, name:'复述策略'},
          {value:13.2, name:'精加工策略'},
          {value:10.68, name:'组织策略'},

          {value:13.6, name:'计划策略'},
          {value:12.48, name:'监控策略'},
          {value:13.92, name:'调节策略'},

          {value:7.52, name:'时间管理策略'},
          {value:6.91, name:'学习环境管理策略'},
          {value:8.22, name:'努力管理策略'},
          {value:7.35, name:'寻求支持策略'}
        ]
      }
    ]
  };
  myChartB.setOption(optionchartB);
  myChartC.setOption(optionchartC);
});