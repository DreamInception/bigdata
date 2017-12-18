$(function(){
  // var screentW = $(window).width(),screenH = $(window).height()-60;
  // $(".indexbg").css({"width":screentW,"height":screenH,"backgroundPosition":"center 25%"});
  // $(window).resize(function () {
  //   screentW = $(window).width();
  //   screenH = $(window).height()-60;
  //   $(".indexbg").css({"width":screentW,"height":screenH,"backgroundPosition":"center 25%"});
  // });
 /* var index_vm = new Vue({
    el:"#index_app",
    data:{

    }
  });*/
 /* var myChartA = echarts.init(document.getElementById('chartA'));
  var myChartB = echarts.init(document.getElementById('chartB'));
  var optionchartA = {
    radar: [
      {
        indicator: [
          { text: '认知能力',max:100 },
          { text: '思维能力',max:100 },
          { text: '调控能力',max:100 },
          { text: '信息加工能力',max:100 },
          { text: '自主学习能力',max:100 },
          { text: '社会能力',max:100 },
          { text: '问题解决能力',max:100 },
          { text: '创新能力',max:100 }
        ],
        center: ['50%','50%'],
        radius: 160,//控制大小
        startAngle: 90,
        splitNumber: 5,//密度
        /!* shape: 'circle',*!/
        name: {
          formatter:'{value}',
          textStyle: {
            color:'#fff',
            backgroundColor:"#164370",
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
          lineStyle: {
            color: '#d9dadb'
          }
        }
      }
    ],
    series: [
      {
        name: '综合能力雷达图',
        type: 'radar',
        /!* symbolSize: 5,*!/
        itemStyle: {
          normal : {
            color:'#f15246',
            lineStyle:{
              color:'#f15246'
            }
          },
          emphasis: {
            lineStyle: {
              width: 4
            }
          }
        }, //焦点线宽
        data: [
          {
            value: [75, 69, 63, 67, 55, 78, 73, 57],
            label: {
              normal: {
                show: true,
                formatter:function(params) {
                  return params.value+"%";
                }
              }
            }
          }
        ]
      }
    ]
  };
  var optionchartB = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}:\n{c}%'
    },
    grid: {
      left: '20%',
      right: '20',
      bottom: '22%',
      top:"28%",
      containLabel: true
    },
    xAxis: {
      data: ["学习兴趣","知识掌握","突发事件"],
      /!*axisLabel: {
       inside: true,
       textStyle: {
       color: '#fff'
       }
       },*!/
      axisTick: {
        show: false
      },
      axisLine: {
        show: true
      },
      z: 10
    },
    yAxis: {
      max:100,
      axisLine: {
        show: true
      },
      axisTick: {
        show: true
      },
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value} %'
      }
      /!*axisLabel: {
       textStyle: {
       color: '#999'
       }
       }*!/
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],//放大缩小
    series: [
      {
        type: 'bar',
        itemStyle: {
          normal: {
            color:'rgba(237,112,99,0.2)'
          }
        },
        barGap:'-100%',
        barCategoryGap:'50%'
        /!* data: [500,500,500,500,500],*!///阴影
        /!*  animation: false*!/
      },
      {
        type: 'bar',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: 'rgba(237,112,99,0.6)'},{offset: 0.5, color: 'rgba(237,112,99,0.8)'},{offset: 1, color: 'rgba(237,112,99,1)'}]
            )
          },
          emphasis: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: 'rgba(237,112,99,1)'},{offset: 0.7, color: 'rgba(237,112,99,0.8)'},{offset: 1, color: 'rgba(237,112,99,0.6)'}]
            )
          }
        },
        data: [10, 15, 5],
        barWidth : 60
        /!*label: {
         normal: {
         show: true,
         position: 'inside',
         formatter: '{c}%'
         }
         }*!/
      }
    ]
  };
  myChartA.setOption(optionchartA);
  myChartB.setOption(optionchartB);


  var myChartC = echarts.init(document.getElementById('chartC'));
  var chartAdatax = ["2017-9-1","2017-9-15","2017-9-30","2017-10-1","2017-10-15","2017-10-31","2017-11-1","2017-11-15","2017-11-30"],
      chartAdata1 = [88, 90, 85, 80, 92, 89, 88, 90, 85],
      chartAdata2 = [90, 92, 89, 88, 80, 85, 90, 92, 89];
  var count = 6,datax = [],data1 = [],data2 = [];
  function addData(o){
    if(o || o == 0){
      datax.shift();
      datax.push(chartAdatax[o]);
      data1.shift();
      data1.push(chartAdata1[o]);
      data2.shift();
      data2.push(chartAdata2[o]);
    }else{
      for(var i = 0;i<6;i++){
        datax.push(chartAdatax[i]);
        data1.push(chartAdata1[i]);
        data2.push(chartAdata2[i]);
      }
    }
  }addData();
  var optionchartC = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
      bottom: 'bottom',
      data: ['班级平均值', '我的']
    },
    xAxis: {
      type: 'category',
      /!*name: 'x',*!/
      splitLine: {show: false},
      data: datax
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    yAxis: {

    },
    series: [
      {
        name: '班级平均值',
        type: 'line',
        data: data1,
        itemStyle : {
          normal : {
            color:'#f9a835',
            lineStyle:{
              color:'#f9a835'
            }
          }
        }
      },
      {
        name: '我的',
        type: 'line',
        data: data2,
        itemStyle : {
          normal : {
            color:'#5dad81',
            lineStyle:{
              color:'#5dad81'
            }
          }
        }
      }
    ]
  };
  myChartC.setOption(optionchartC);
  setInterval(function () {
    addData(count);
    myChartC.setOption({
      xAxis:{
        data: datax
      },
      series: [{
        data: data1
      },{
        data:data2
      }]
    });
    count ++;
    if(count == 9){
      count = 0;
    }
  }, 2000);*/
});
