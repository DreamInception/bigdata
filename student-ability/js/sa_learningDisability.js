$(function(){
 /* var ld_vm = new Vue({
    el:"#ld_app",
    data:{

    },
    methods:{
      init:function(){
        var vm = this;

      }
    },
    mounted:function(){
      this.init();
    }
  });*/
var  percentarr = ["10.00%","28.75%","15.00%"],
      colorarr = ["#164370","#f15246","#ffa627","#2ebe50"],
      contstr = [
    {str:"李梅同学在学习上遇到的困难适中，暂时没有遇到影响自身学习的困难，并且在学习动机和学习态度上表现良好。相比较而言，在能力上，尤其是数学方面的能力，比如逻辑推理能力和运算能力上遇到了些许困难。"},
    {str:"李梅同学在学习上比较专注，暂时没有遇到影响自己学业的因素，只是在知识掌握方面需要稍加注意。建议：李梅同学要劳逸结合，不让其他不相关因素影响自己的学业。"},
    {str:"李梅同学的学习能力强，基本上没有遇到能力方面的困难。但是相比较而言，可能在数学能力上遇到了些许困难。建议：李梅同学可以涉猎一些能够提升自己逻辑运算能力方面的书籍，从而克服数学能力给自己学业上带来的困扰。"},
    {str:"李梅同学热爱学习，学习动机较高，学习态度端正。建议：李梅同学要维持自己对学习的积极态度，同时化学习的外部动机为学习的内部动机，加强对学习的求知欲和学习兴趣。\n"}
  ];
function init(){
  $.each($(".show>dl dd p"),function(index,item){
    $(item).next("div").find("div").animate({"width":percentarr[index]},666).css({"background":colorarr[index+1]}).end().next("span").html(percentarr[index]);
  });
}init();
  $(document).on("click",".show>dl p",function(){
    var index = $(this).attr("data_index");
    $(".show dl p").removeClass("select");
    $(this).addClass("select");
    $(".contshow p").html(contstr[index].str);
    switch (index){
      case "0":
        $(".show>div>div").hide();
        $("#chartG").show();
        myChartG.clear();
        myChartG.setOption(optionchartG);
        break;
      case "1":
        $(".show>div>div").hide();
        $("#chartE").show();
        myChartE.clear();
        myChartE.setOption(optionchartE);
        break;
      case "2":
        $(".show>div>div").hide();
        $("#chartA").show();
        myChartA.clear();
        myChartA.setOption(optionchartA);
        break;
      case "3":
        $(".show>div>div").hide();
        $("#chartH").show();
         myChartH1.clear();
        myChartH2.clear();
          myChartH3.clear();
        myChartH1.setOption(optionchartH1);
        myChartH2.setOption(optionchartH2);
          myChartH3.setOption(optionchartH3);
        break;
    }
  });
  //图表
  // 基于准备好的dom，初始化echarts实例
  var myChartG = echarts.init(document.getElementById('chartG'));
  var myChartA = echarts.init(document.getElementById('chartA'));
  var myChartE = echarts.init(document.getElementById('chartE'));
  var myChartH1 = echarts.init(document.getElementById('chartH1'));
  var myChartH2 = echarts.init(document.getElementById('chartH2'));
    var myChartH3 = echarts.init(document.getElementById('chartH3'));
  // 指定图表的配置项和数据
  var optionchartG = {
    radar: [
      {
        indicator: [
          { text: '暂时性困难',max:100 },
          { text: '能力型困难',max:100 },
          { text: '动力型困难',max:100 }
        ],
        center: ['50%','60%'],
        radius: 180,//控制大小
        startAngle: 90,
        splitNumber: 3,//密度
       /* shape: 'circle',*/
        name: {
          formatter:'{value}',
          textStyle: {
            color:'#fff',
            backgroundColor:"#164370",
            padding: [2, 10],
            fontSize:14,
            height: 22,
            borderRadius:4
          }
        },
        splitArea: {
          areaStyle: {
            color: ['rgba(173, 202, 237, 0.6)', 'rgba(173, 202, 237, 0.4)','rgba(173, 202, 237, 0.2)']
            /*shadowColor: 'rgba(0, 0, 0, 0.3)',
             shadowBlur: 10*/ //shadow色值范围
          }
        },
        axisLine: {
          lineStyle: {
            color: '#eee'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'none'
          }
        }
      }
    ],
    series: [
      {
       /* color:"#1252456",*/
        name: '综合能力雷达图',
        type: 'radar',
        symbolSize: 5,
        symbol: 'circle',
        itemStyle: {
          emphasis: {
            lineStyle: {
              width: 4
            }
          }
        }, //焦点线宽
        data: [
          {
            value: [10,28.75,15],
            label: {
              normal: {
                show: true,
                  fontSize:14,
                formatter:function(params) {
                  return params.value+"%";
                },
                color:"#39a9ff"
              }
            },
            lineStyle: {
              normal: {
                type: 'dashed',
                color:"#39a9ff"
              }
            },
            itemStyle:{
              normal: {
                color:"#39a9ff"
              }
            }
          }
        ]
      }
    ]
  };
  var optionchartA = {
    grid: {
      left: '10%',
      right: '4%',
      bottom: '20%',
      containLabel: true
    },
    xAxis:  {
      type: 'value',
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value} %'
      }
    },
    yAxis: {
      type: 'category',
      data: ['数学方面的学习困难','书写方面的学习困难','阅读方面的学习困难','语言方面的学习困难']
    },
    series: [
      {
        type: 'bar',
        stack: '总量',
        itemStyle: {
          normal: {
            color: "rgba(238,168,94,1)"
          },
          emphasis: {
            color: "rgba(238,168,94,0.9)"
          }
        },
        label: {
          normal: {
            show: true,
              fontSize:14,
            position: 'insideRight',
            formatter: '{c} %'
          }
        },
        data: [80,10,15,10]
      },
      {
        type: 'bar',
        stack: '总量',
        itemStyle: {
          normal: {
            color: "rgba(238,168,94,0.5)"
          },
          emphasis:{
            color:"default"
          }
        },
        label: {
          normal: {
            show: false
          }
        },
        data: [20,90,85,90]
      }
    ]
  };
  var optionchartE = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}:\n{c}%'
    },
    grid: {
      left: '10%',
      right: '4%',
      bottom: '20%',
      containLabel: true
    },
    xAxis: {
      data: ["学习兴趣","知识掌握","突发事件"],
      /*axisLabel: {
       inside: true,
       textStyle: {
       color: '#fff'
       }
       },*/
      axisTick: {
        show: false
      },
      axisLine: {
        show: true
      },
      z: 10
    },
    yAxis: {
      max:20,
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
    },
    series: [
      {
        type: 'bar',
        barWidth:60,
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
        data: [10, 15, 5]
        /*label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: '{c}%'
          }
        }*/
      }
    ]
  };
  var optionchartH1 = {
    series: [{
      type: 'liquidFill',
      radius: '80%',
     /* waveAnimation: false,*/
      // shape: 'pin',
      data: [0.2],
      itemStyle: {
        normal: {
          color: "rgba(255,255,255,0.5)"
        }
      },
      label: {
        normal: {
          textStyle: {
            color: 'none'
          }
        }
      },
      backgroundStyle: {
        color: "rgba(137,171,227,1)"
      },
      outline: {
        show: true,
        itemStyle: {
          color: 'rgba(137,171,227,1)',
          borderColor: 'rgba(137,171,227,1)',
          borderWidth: 0
          /*shadowBlur: 20,
          shadowColor: 'rgba(0, 0, 0, 0.25)'*/
        }
      }
    }]
  };
  var optionchartH2 = {
    series: [{
      type: 'liquidFill',
      radius: '80%',
      data: [0.05],
      itemStyle: {
        normal: {
          color: "rgba(255,255,255,0.5)"
        }
      },
      label: {
        normal: {
          textStyle: {
            color: 'none'
          }
        }
      },
      backgroundStyle: {
        color: "rgba(239,208,210,1)"
      },
      outline: {
        show: true,
        itemStyle: {
          color: 'rgba(239,208,210,1)',
           borderColor: 'rgba(137,171,227,1)',
           borderWidth: 0
          /*shadowBlur: 20,
           shadowColor: 'rgba(0, 0, 0, 0.25)'*/
        }
      }
    }]
  };
    var optionchartH3 = {
        series: [{
            type: 'liquidFill',
            radius: '80%',
            data: [0.1],
            itemStyle: {
                normal: {
                    color: "rgba(255,255,255,0.5)"
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: 'none'
                    }
                }
            },
            backgroundStyle: {
                color: "rgb(58, 194, 206)"
            },
            outline: {
                show: true,
                itemStyle: {
                    color: 'rgb(58, 194, 206)',
                    borderColor: 'rgba(137,171,227,1)',
                    borderWidth: 0
                    /*shadowBlur: 20,
                     shadowColor: 'rgba(0, 0, 0, 0.25)'*/
                }
            }
        }]
    };
  //初始化
  $(".show>dl p:first").trigger("click");
});