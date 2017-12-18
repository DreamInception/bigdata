$(function(){
  /*var index_vm = new Vue({
    el:"#com_app",
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
  var percentarr = ["82.5%","81.1%","75.0%","80.0%","87.5%","72.8%","82.7%","78.3%"],
      colorarr = ["#164370","#f15246","#ffa627","#f5cf53","#2ebe50","#3ac2ce","#3674e6","#803cd8","#cd62c6"],
      contstr = [
    {str:"李梅同学综合能力判断为80.0%，在班级同学中处于优秀水平。其认知能力、思维能力、信息加工能力、自主学习能力和问题解决能力均达到优秀，在调控能力、社会能力和创新能力上均为良好，达到一半水平层次。但需要重点关注该生在社会能力方面的培养，尤其是在人机交往和组织管理方面。"},
    {str:"认知能力水平82.5%。该生认知能力水平处于较好的层次，具有卓越的注意力，同时还具有较强的记忆能力、丰富的想象力和优秀的事物感知能力。"},
    {str:"思维能力水平81.1%。该生思维能力水平处于较好的层次，具有出色的反思能力、批判性思维能力，以及很好的知识迁移能力、逻辑思维能力、发散性思维能力；但该生在判断能力和临场应变能力方面略显不足；建议该生多参与社会实践活动、鼓励其自主做出选择和判断以培养起判断能力和临场应变能力。"},
    {str:"调控能力水平75.0%。该生调控能力水平处于一般的层次，虽然在时间管理能力方面有着出色的表现，但在情绪管理和心理耐挫方面稍有欠缺。建议多采取鼓励打气的形式，以及适当的心理辅导，以调整该生情绪管理能力和增强心理耐挫能力。"},
    {str:"信息加工能力80.0%。该生信息加工能力处于很好的层次，尤其在信息处理能力方面，具有非常出色的表现；但在信息筛选能力方面则略显不足，因此建议多鼓励该生做出判断和选择。"},
    {str:"自主学习能力水平87.5%，处于较高的层次水平，尤其是在自立方面更是非常难得，另外在自律方面也具有不错的表现。建议多保持当前自主学习能力，以出色的自立、自律来形成更为独立的人格。"},
    {str:"社会能力水平72.8%。该生社会能力水平处于一般较低的层次，尤其是在人际交往、组织管理和表达能力方面存在一定的欠缺，建议为该生提供更多地机会，参与集体活动、表达自我，以更好地融入班级群体，培养较强的社会能力。"},
    {str:"问题解决能力水平82.7%。该生问题解决能力水平处于比较优秀的水平，能够很好的发现问题，分析问题，并且出色的解决问题。尤其在解决问题方面，能够很好的综合已有知识和已有经验，做到非常杰出的解决问题。"},
    {str:"创新能力水平78.3%。该生创新能力处于相对很好的水平层次，具有相对出色的创新思维和创新意识，并往往能够以独特的方式创新性的解决问题。"}
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
        $("#chartA").show();
        myChartA.clear();
        myChartA.setOption(optionchartA);
        break;
      case "2":
        $(".show>div>div").hide();
        $(".abiThink").show();
        break;
      case "3":
        $(".show>div>div").hide();
        $(".chartB").show();
        myChartB1.clear();
        myChartB2.clear();
        myChartB3.clear();
        myChartB1.setOption(optionchartB1);
        myChartB2.setOption(optionchartB2);
        myChartB3.setOption(optionchartB3);
        break;
      case "4":
        $(".show>div>div").hide();
        $(".chartC").show();
        myChartC1.clear();
        myChartC2.clear();
        myChartC3.clear();
        myChartC1.setOption(optionchartC1);
        myChartC2.setOption(optionchartC2);
        myChartC3.setOption(optionchartC3);
        break;
      case "5":
        $(".show>div>div").hide();
        $(".chartD").show();
        myChartD1.clear();
        myChartD2.clear();
        myChartD1.setOption(optionchartD1);
        myChartD2.setOption(optionchartD2);
        break;
      case "6":
        $(".show>div>div").hide();
        $("#chartE").show();
        myChartE.clear();
        myChartE.setOption(optionchartE);
        break;
      case "7":
        $(".show>div>div").hide();
        $(".provSolv").show();
        var provSolvData = ["78%","80%", "90%"];
        $(".provSolv>dl dd>div>div").css("width",0);
        $.each($(".provSolv>dl dd p"), function (index, item) {
          $(item).next("div").find("div").animate({"width": provSolvData[index]}, 666);
        });
        break;
      case "8":
        $(".show>div>div").hide();
        $("#chartF").show();
        myChartF.clear();
        myChartF.setOption(optionchartF);
        break;
    }
  });
  //图表
  // 基于准备好的dom，初始化echarts实例
  var myChartG = echarts.init(document.getElementById('chartG'));//综合能力
  var myChartA = echarts.init(document.getElementById('chartA'));//认知能力
  var myChartB1 = echarts.init(document.getElementById('chartB1'));//调控能力
  var myChartB2 = echarts.init(document.getElementById('chartB2'));
  var myChartB3 = echarts.init(document.getElementById('chartB3'));
  var myChartC1 = echarts.init(document.getElementById('chartC1'));//信息加工能力
  var myChartC2 = echarts.init(document.getElementById('chartC2'));
  var myChartC3 = echarts.init(document.getElementById('chartC3'));
  var myChartD1 = echarts.init(document.getElementById('chartD1'));//自主学习能力
  var myChartD2 = echarts.init(document.getElementById('chartD2'));
  var myChartE = echarts.init(document.getElementById('chartE'));//社会能力
  var myChartF = echarts.init(document.getElementById('chartF'));//创新能力
  // 指定图表的配置项和数据
  var optionchartG = {
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
        /* shape: 'circle',*/
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
      graphic:{
        type:'text',
        left:'center',
        top:'center',
          z:2,
        style:{
          text:'80%',
          textAlign:'center',
          fontSize:20,
            fill:"#f15246"
        }
      },
    series: [
      {
        name: '综合能力雷达图',
        type: 'radar',
       /* symbolSize: 5,*/
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
            value: [82.5, 81.1, 75.0, 80.0, 87.5, 72.8, 82.7, 78.3],
            label: {
              normal: {
                show: true,
                  fontSize:14,
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
  var optionchartA = {
    // legend: {
    //   data: ['我的','班级平均值']
    // },
    radar: [
      {
        indicator: [
          { text: '记忆',max:100 },
          { text: '感知',max:100 },
          { text: '注意',max:100 },
          { text: '想象',max:100 },
        ],
        center: ['50%','50%'],
        radius: 160,//控制大小
        startAngle: 90,
        splitNumber: 4,//密度
        shape: 'circle',
        name: {
          formatter:'{value}',
          textStyle: {
            color:'#fff',
            backgroundColor:"#f15246",
              padding: [2, 10],
            fontSize:14,
            height: 22,
            borderRadius:6
          }
        },
        splitArea: {
          areaStyle: {
            color: ['rgba(173, 202, 237, 0.8)','rgba(173, 202, 237, 0.6)', 'rgba(173, 202, 237, 0.4)','rgba(173, 202, 237, 0.2)']
            /*shadowColor: 'rgba(0, 0, 0, 0.3)',
             shadowBlur: 10*/ //shadow色值范围
          }
        },
        axisLine: {
          lineStyle: {
            color: '#d9dadb'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'none'
          }
        }
      }
    ],
      graphic:{
          type:'text',
          left:'center',
          top:'center',
          z:2,
          style:{
              text:'82.5%',
              textAlign:'center',
              fontSize:20,
              fill:"#f15246"
          }
      },
    series: [
      {
        name: '认知能力雷达图',
        type: 'radar',
        itemStyle: {
          emphasis: {
            lineStyle: {
              width: 4
            }
          }
        }, //焦点线宽
        data: [
          {
            value: [80, 80, 90, 80],
            name: '我的',
            symbol: 'circle',
            symbolSize: 5,
            itemStyle: {
              normal : {
                color:'#f15246'
              }
            },
            lineStyle: {
              normal: {
                type: 'dashed',
                color:"#f15246"
              }
            },
            label: {
              normal: {
                show: true,
                  fontSize:14,
                formatter:function(params) {
                  return params.value+"%";
                }
              }
            }
          }
          // {
          //   value: [70, 70, 50, 70],
          //   name: '班级平均值',
          //   symbol: 'circle',
          //   symbolSize: 5,
          //   itemStyle: {
          //     normal : {
          //       color:'#39a9ff'
          //     }
          //   },
          //   lineStyle:{
          //     normal: {
          //       /*type: 'dashed',*/
          //       color:"#39a9ff"
          //     }
          //   },
          //   label: {
          //     normal: {
          //       show: true,
          //       formatter:function(params) {
          //         return params.value+"%";
          //       }
          //     }
          //   }
          //   /* areaStyle: {
          //    normal: {
          //    color: 'rgba(255, 255, 255, 0.5)'
          //    }
          //    }*/ //区域颜色设置
          // }
        ]
      }
    ]
  };
  var optionchartB1 = {
    tooltip: {
      trigger: 'item',
      formatter: "时间管理能力：80%",
      position: [30, -30],
      backgroundColor:"#f5cf53"
    },
    series: [
      {
        type:'pie',
        radius: [0, '55%'],
        hoverAnimation:false,
        itemStyle: {
          normal: {
            color: "rgba(174,159,214,1)"
          }
        },
        label: {
          normal: {
            position: "center",
            color:"#fff",
              fontSize:14,
            formatter:function(params) {
              /*return params.value;*/
              return "时间管理能力";
            }
          }
        },
        data:[
          {value:100, name:'时间管理能力'}
        ]
      },
      {
        type:'pie',
        radius: ['60%', '82%'],
        color: ['rgba(174,159,214,1)','rgba(174,159,214,0.5)'],
          hoverAnimation:false,
        labelLine : {
          normal:{
            show : false
          }
        },
        label:{
          normal:{
            show : false
          }
        },
        data:[
          {value:80, name:'时间管理能力'},
          {value:20, name:''}
        ]
      }
    ]
  };
  var optionchartB2 = {
    tooltip: {
      trigger: 'item',
      formatter: "情绪管理能力：75%",
        position: [30, -30],
      backgroundColor:"#f5cf53"
    },
    series: [
      {
        type:'pie',
        radius: [0, '55%'],
        hoverAnimation:false,
        itemStyle: {
          normal: {
            color: "rgba(104,190,249,1)"
          }
        },
        label: {
          normal: {
            position: "center",
            color:"#fff",
              fontSize:14,
            formatter:function(params) {
              /*return params.value;*/
              return "情绪管理能力";
            }
          }
        },
        data:[
          {value:100, name:'情绪管理能力'}
        ]
      },
      {
        type:'pie',
        radius: ['60%', '82%'],
        color: ['rgba(104,190,249,1)','rgba(104,190,249,0.5)'],
          hoverAnimation:false,
        labelLine : {
          normal:{
            show : false
          }
        },
        label:{
          normal:{
            show : false
          }
        },
        data:[
          {value:75, name:'情绪管理能力'},
          {value:25, name:''}
        ]
      }
    ]
  };
  var optionchartB3 = {
    tooltip: {
      trigger: 'item',
      formatter: "心理耐挫能力：70%",
        position: [30, -30],
      backgroundColor:"#f5cf53"
    },
    series: [
      {
        type:'pie',
        radius: [0, '55%'],
        hoverAnimation:false,
        itemStyle: {
          normal: {
            color: "rgba(229,162,192,1)"
          }
        },
        label: {
          normal: {
            position: "center",
            color:"#fff",
            formatter:function(params) {
              /*return params.value;*/
              return "心理耐挫能力";
            }
          }
        },
        data:[
          {value:100, name:'心理耐挫能力'}
        ]
      },
      {
        type:'pie',
        radius: ['60%', '82%'],
        color: ['rgba(229,162,192,1)','rgba(229,162,192,0.5)'],
          hoverAnimation:false,
        labelLine : {
          normal:{
            show : false
          }
        },
        label:{
          normal:{
            show : false
          }
        },
        data:[
          {value:70, name:'心理耐挫能力'},
          {value:30, name:''}
        ]
      }
    ]
  };
  var optionchartC1 = {
    graphic:{
      type:'text',
      left:'center',
      top:'center',
        z:5,
      style:{
        text:'80%',
        textAlign:'center',
        fontSize:20,
          fill:"#fff"
      }
    },
    series: [
      {
        type:'pie',
          radius : '80%',
        /* avoidLabelOverlap: false,*/
        color:["rgba(238,168,94,1)","rgba(238,168,94,0.5)"],
          hoverAnimation:false,
        label: {
          normal: {
            show:false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data:[
          {value:80, name:'信息搜集能力'},
          {value:20, name:''}
        ]
      }
    ]
  };
  var optionchartC2 = {
      graphic:{
          type:'text',
          left:'center',
          top:'center',
          z:5,
          style:{
              text:'70%',
              textAlign:'center',
              fontSize:20,
              fill:"#fff"
          }
      },
    series: [
      {
        type:'pie',
          radius : '80%',
        /* avoidLabelOverlap: false,*/
        color:["rgba(112,185,239,1)","rgba(112,185,239,0.5)"],
          hoverAnimation:false,
        label: {
          normal: {
            show:false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data:[
          {value:70, name:'信息筛选能力'},
          {value:30, name:''}
        ]
      }
    ]
  };
  var optionchartC3 = {
      graphic:{
          type:'text',
          left:'center',
          top:'center',
          z:5,
          style:{
              text:'90%',
              textAlign:'center',
              fontSize:20,
              fill:"#fff"
          }
      },
    series: [
      {
        type:'pie',
          radius : '80%',
        /* avoidLabelOverlap: false,*/
        color:["rgba(92,131,247,1)","rgba(92,131,247,0.5)"],
          hoverAnimation:false,
        label: {
          normal: {
            show:false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data:[
          {value:90, name:'信息处理能力'},
          {value:10, name:''}
        ]
      }
    ]
  };
  var optionchartD1 = {
    tooltip: {
      trigger: 'item',
      formatter: "自律能力：80%",
        position: [45, -30],
      backgroundColor:"#3ac2ce"
    },
    series: [
      {
        type:'pie',
        radius: [0, '55%'],
        hoverAnimation:false,
        itemStyle: {
          normal: {
            color: "rgba(238,168,94,1)"
          }
        },
        label: {
          normal: {
            position: "center",
            color:"#fff",
              fontSize:14
          }
        },
        data:[
          {value:100, name:'自律能力'}
        ]
      },
      {
        type:'pie',
        radius: ['60%', '82%'],
        color: ['rgba(238,168,94,1)','rgba(238,168,94,0.5)'],
          hoverAnimation:false,
        labelLine : {
          normal:{
            show : false
          }
        },
        label:{
          normal:{
            show : false
          }
        },
        data:[
          {value:80, name:'自律能力'},
          {value:20, name:''}
        ]
      }
    ]
  };
  var optionchartD2 = {
    tooltip: {
      trigger: 'item',
      formatter: "自立能力：95%",
        position: [45, -30],
      backgroundColor:"#3ac2ce"
    },
    series: [
      {
        type:'pie',
        radius: [0, '55%'],
        hoverAnimation:false,
        itemStyle: {
          normal: {
            color: "rgba(237,112,99,1)"
          }
        },
        label: {
          normal: {
            position: "center",
            color:"#fff",
              fontSize:14
          }
        },
        data:[
          {value:100, name:'自立能力'}
        ]
      },
      {
        type:'pie',
        radius: ['60%', '82%'],
        color: ['rgba(237,112,99,1)','rgba(237,112,99,0.5)'],
          hoverAnimation:false,
        labelLine : {
          normal:{
            show : false
          }
        },
        label:{
          normal:{
            show : false
          }
        },
        data:[
          {value:95, name:'自立能力'},
          {value:5, name:''}
        ]
      }
    ]
  };
  var optionchartE = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}:\n{c}%'
    },
    xAxis: {
      data: ["表达能力","人际交往能力","协作能力","组织管理能力","社会适应能力"],
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
      /*axisLabel: {
       textStyle: {
       color: '#999'
       }
       }*/
    },
    series: [
      {
        type: 'bar',
          barWidth:60,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: 'rgba(54,116,230,0.6)'},{offset: 0.5, color: 'rgba(54,116,230,0.8)'},{offset: 1, color: 'rgba(54,116,230,1)'}]
            )
          },
          emphasis: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#2378f7'},{offset: 0.7, color: '#2378f7'},{offset: 1, color: '#83bff6'}]
            )
          }
        },
        data: [72, 68, 78, 66, 80]
      }
    ]
  };
  var optionchartF = {
    radar: [
      {
        indicator: [
          { text: '创新思维',max:100 },
          { text: '创新意识',max:100 },
          { text: '创新技能',max:100 }
        ],
        center: ['50%','60%'],
        radius: 180,//控制大小
        startAngle: 90,
        splitNumber: 2,//密度
        /* shape: 'circle',*/
        name: {
          formatter:'{value}',
          textStyle: {
            color:'#fff',
            backgroundColor:"#cd62c6",
            padding: [2, 10],
            fontSize:14,
            height: 22,
            borderRadius:6
          }
        },
        splitArea: {
          areaStyle: {
            color: ['rgba(173, 202, 237, 0.6)', 'rgba(173, 202, 237, 0.3)']
            /*shadowColor: 'rgba(0, 0, 0, 0.3)',
             shadowBlur: 10*/ //shadow色值范围
          }
        },
        axisLine: {
          lineStyle: {
            color: '#d9dadb'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'none'
          }
        }
      }
    ],
      graphic:{
          type:'text',
          left:'center',
          top:'center',
          z:2,
          style:{
              text:'78.3%',
              textAlign:'center',
              fontSize:20,
              fill:"#39a9ff"
          }
      },
    series: [
      {
        name: '创新能力雷达图',
        type: 'radar',
        itemStyle: {
          emphasis: {
            lineStyle: {
              width: 4
            }
          }
        }, //焦点线宽
        data: [
          {
            value: [77, 78, 80],
            symbol: 'circle',
            symbolSize: 5,
            color:"#39a9ff",
            lineStyle: {
              normal: {
                type: 'dashed',
                color:"#39a9ff"
              }
            },
            itemStyle:{
              normal:{
                color:"#39a9ff"
              }
            },
            label: {
              normal: {
                show: true,
                  fontSize:14,
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
  //初始化
  $(".show>dl p:first").trigger("click");
});