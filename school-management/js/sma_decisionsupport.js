$(function(){
  function init(){
    // $("select").selectBox();
    // $(".selectBox").css({
    //   "max-width":"150px",
    //   "width": "150px",
    //   "float": "right",
    //   "margin-top":"-40px"
    // });
    // $(".selectBox-label").css("width","120px");
      $(".selectB input").prop("checked",true);
  }init();
  var myChartA = echarts.init(document.getElementById('echartA'));
  var optionchartA = {
      legend: {
          right: 50,
          data: ['现有教师','应有教师', '同等规模学校教师均值']
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
    // tooltip: {
    //   trigger: 'item',
    //   formatter: '{b}需求:\n{c}'
    // },
    xAxis: {
        name:"学科",
        nameTextStyle: {
            fontSize: 16
        },
      data: ["语文","英语","数学","化学","地理","生物","物理","历史","政治"],
      axisTick: {
        show: true
      },
      axisLine: {
        show: true
      },
      z: 10
    },
    yAxis: {
        name:"人数",
        nameTextStyle: {
            fontSize: 16
        },
      max:30,
      axisLine: {
        show: true
      },
      axisTick: {
        show: true
      },
      axisLabel: {
        show: true,
        interval: 'auto'
        /*formatter: '{value} %'*/
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],//放大缩小
    series: [
      {
        name:"现有教师",
        type: 'bar',
          barWidth:30,
          barGap: 0,
        itemStyle: {
          normal: {
            color:"#57b1ed"
          }
        },
        data: [23,19,18,14,14,13,11,11,10]
      },
        {
          name:"应有教师",
            type: 'bar',
            barWidth:30,
            barGap: 0,
            itemStyle: {
                normal: {
                    color:"#a3d2f1"
                }
            },
            data: [26,23,24,17,14,13,11,11,9]
        },
        {
          name:"同等规模学校教师均值",
            type: 'line',
            data: [23,20,20,15,13,13,10,12,9],
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
  myChartA.setOption(optionchartA);
  var myChartB = echarts.init(document.getElementById('echartB'));
    var data = [
            [
                ["物化生","522.68","79","1"],
                ["物化历","472.02","75","2"],
                ["物化政","503.89","61","3"],
                ["物化地","434.01","40","4"],
                ["物生历","431.44","65","5"],
                ["物生政","432.08","37","6"],
                ["物生地","512.04","34","7"],
                ["物历政","447.09","22","8"],
                ["物历地","403.29","19","9"],
                ["物政地","475.90","44","10"],
                ["化生历","438.98","25","11"],
                ["化生政","474.13","36","12"],
                ["化生地","338.32","19","13"],
                ["化历政","383.43","25","14"],
                ["化历地","448.46","56","15"],
                ["化政地","466.15","16","16"],
                ["生历政","419.02","28","17"],
                ["生历地","318.23","13","18"],
                ["生政地","539.12","12","19"],
                ["历政地","497.32","14","20"]
            ],
            [
                ["物化生","384.56","83","1"],
                ["物化历","464.57","74","2"],
                ["物化政","508.32","67","3"],
                ["物化地","458.13","42","4"],
                ["物生历","425.46","58","5"],
                ["物生政","444.67","35","6"],
                ["物生地","528.47","32","7"],
                ["物历政","432.03","20","8"],
                ["物历地","494.33","13","9"],
                ["物政地","480.80","45","10"],
                ["化生历","444.00","28","11"],
                ["化生政","483.86","42","12"],
                ["化生地","397.35","23","13"],
                ["化历政","381.39","28","14"],
                ["化历地","440.23","40","15"],
                ["化政地","458.74","29","16"],
                ["生历政","431.99","32","17"],
                ["生历地","375.22","12","18"],
                ["生政地","425.10","5","19"],
                ["历政地","317.03","12","20"]
            ],
            [
                ["物化生","493.36","75","1"],
                ["物化历","509.92","70","2"],
                ["物化政","516.18","54","3"],
                ["物化地","483.46","32","4"],
                ["物生历","421.59","45","5"],
                ["物生政","452.82","45","6"],
                ["物生地","538.35","36","7"],
                ["物历政","436.87","28","8"],
                ["物历地","315.86","9","9"],
                ["物政地","483.19","45","10"],
                ["化生历","455.34","35","11"],
                ["化生政","497.23","38","12"],
                ["化生地","368.78","25","13"],
                ["化历政","585.71","32","14"],
                ["化历地","432.34","42","15"],
                ["化政地","453.50","32","16"],
                ["生历政","459.78","30","17"],
                ["生历地","544.16","17","18"],
                ["生政地","447.68","16","19"],
                ["历政地","406.21","14","20"]
            ],
            [
                ["物化生","489.56","78","1"],
                ["物化历","490.57","65","2"],
                ["物化政","517.34","50","3"],
                ["物化地","492.34","34","4"],
                ["物生历","420.56","54","5"],
                ["物生政","460.52","36","6"],
                ["物生地","540.53","42","7"],
                ["物历政","423.24","29","8"],
                ["物历地","475.24","12","9"],
                ["物政地","485.37","36","10"],
                ["化生历","457.35","27","11"],
                ["化生政","502.54","32","12"],
                ["化生地","378.91","28","13"],
                ["化历政","389.23","28","14"],
                ["化历地","453.23","40","15"],
                ["化政地","467.24","35","16"],
                ["生历政","465.43","27","17"],
                ["生历地","365.35","29","18"],
                ["生政地","497.25","28","19"],
                ["历政地","476.54","10","20"]
            ]
        ],
      schema = [
        {index: 0, text: '选科方式', unit: ''},
        {index: 1, text: '分数', unit: '分'},
        {index: 2, text: '人数', unit: '人'}
      ],
      cla = ["物理+化学+生物","物理+化学+历史","物理+化学+政治","物理+化学+地理","物理+生物+历史","物理+生物+政治","物理+生物+地理","物理+历史+政治","物理+历史+地理",
        "物理+政治+地理","化学+生物+历史","化学+生物+政治","化学+生物+地理","化学+历史+政治","化学+历史+地理","化学+政治+地理","生物+历史+政治","生物+历史+地理","生物+政治+地理",
        "历史+政治+地理"];
  var optionchartB = {
    baseOption: {
      legend: {
        right: 50,
        data: ['2015','2016', '2017','2018']
      },
      /*backgroundColor: '#404a59',*/
      tooltip: {
          padding: 5,
          backgroundColor: '#222',
          borderColor: '#777',
          borderWidth: 1,
          formatter: function (obj) {
              if(obj.data.length == 4){
                  var value = obj.value;
                  return schema[0].text + '：' + value[0] + schema[0].unit +'<br>'
                      + schema[1].text + '：' + value[1] + schema[1].unit + '<br>'
                      + schema[2].text + '：' + value[2] + schema[2].unit + '<br>'
              }else{
              return obj.name
              }
          }
      },
        // grid: {
        //     top:"0%",
        //     left: '0%',
        //     right: '0%',
        //     bottom: '0%',
        //     containLabel: true
        // },
      xAxis: {
        name:"选科",
        nameGap: 25,
        nameTextStyle: {
          fontSize: 16
        },
        splitLine: {
          show: true,
          lineStyle:{
            type:"dashed"
          }
        },
          data:["物化生","物化历","物化政","物化地","物生历","物生政","物生地","物历政","物历地","物政地","化生历","化生政","化生地","化历政","化历地","化政地","生历政","生历地","生政地",
          "历政地"],
          axisLabel: {
              interval:0
              // rotate:90
          }
      },
      yAxis: {
        type: 'value',
        min:300,
        max:600,
        name: '分数',
        nameTextStyle: {
          fontSize: 16
        },
        splitLine: {
          show: true,
          lineStyle:{
            type:"dashed"
          }
        }
      },
      series: [
          {
              type: 'scatter',
              name:2015,
              itemStyle: {
                  normal: {
                      color:"#f57f87",
                      opacity: 0.8,
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowColor: 'none'
                  }
              },
              data:data[0],
              symbolSize: function(val) {
                  return val[2]
              }
          },
        {
          type: 'scatter',
          name:2016,
          itemStyle: {
            normal: {
              color:"#57b1ed",
              opacity: 0.8,
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
                shadowColor: 'none'
            }
          },
          data:data[1],
          symbolSize: function(val) {
            return val[2]
          }
        },
        {
          type: 'scatter',
          name:2017,
          itemStyle: {
            normal: {
              color:"#aca0d3",
              opacity: 0.8,
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
                shadowColor: 'none'
            }
          },
          data:data[2],
          symbolSize: function(val) {
            return val[2]
          }
        },
          {
              type: 'scatter',
              name:2018,
              itemStyle: {
                  normal: {
                      color:"#eecf67",
                      opacity: 0.8,
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowColor: 'none'
                  }
              },
              data:data[3],
              symbolSize: function(val) {
                  return val[2]
              },
              markLine : {
                  itemStyle:{
                      normal:{lineStyle:{type:'solid'}}
                  },
                  data : [
                      [
                          {
                              name:'预测本科线：457分',
                              coord:["物化生",457]
                          },{
                          coord:["生政地",457]
                      }
                      ]
                  ]
              }
          }
      ]
    }
  };
  myChartB.setOption(optionchartB);
  // $("select").change(function(){
  //   var index = $(this).val();
  //   if(index == "0"){
  //     /*optionchartB.baseOption.xAxis.data = cla;*/
  //     for(var i = 0;i<2;i++){
  //       optionchartB.baseOption.series[i].data = data[i];
  //     }
  //   }else{
  //     /*optionchartB.baseOption.xAxis.data = cla[index-1];*/
  //     for(var i = 0;i<2;i++){
  //       optionchartB.baseOption.series[i].data = [];
  //       for(var j=0;j<data[0].length;j++){
  //         if(data[i][j][3] == index){
  //           optionchartB.baseOption.series[i].data.push(data[i][j]);
  //         }
  //       }
  //     }
  //   }
  //   myChartB.setOption(optionchartB);
  // });
    $(".selectB input").click(function(){
        var index = $(this).attr("id");
        if($(this).attr("id") == "all"){
            if($(this).is(":checked")){
                $(".selectB input:not(:first)").prop("checked",true);
            }else{
                $(".selectB input:not(:first)").prop("checked",false);
            }
        }else{
            var list =  $(".selectB input:not(:first)"),count = 0;
            if($(this).is(":checked")){
                $.each(list,function(i,item){
                    if($(item).is(":checked")){
                        count += 1;
                    }
                });
                if(count == list.length){
                    $("#all").prop("checked",true);
                }else{
                    $("#all").prop("checked",false);
                }
            }else{
                $("#all").prop("checked",false);
            }

        }
    });

    $(".qd").click(function(){
        for(var i = 0;i<4;i++){
            optionchartB.baseOption.series[i].data = [];
        }
        var list =  $(".selectB input:not(:first)"),qdarr = [];
        $.each(list,function(i,item){
            if($(item).is(":checked")){
                qdarr.push($(item).attr("id"))
            }
        });
        $.each(qdarr,function(i,item){
            for(var i = 0;i<4;i++){
              $.each(data[i],function(i1,item1){
                if(item1[3] == item){
                    optionchartB.baseOption.series[i].data.push(item1)
                }
              });
            }
        });
        myChartB.setOption(optionchartB);
    })
});