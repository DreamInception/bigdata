$(function(){
  /*var lp_vm = new Vue({
    el:"#lp_app",
    data:{

    },
    methods:{
      init:function(){
        var vm = this;

      },
      initSelectBox: function(){

      }
    },
    mounted:function(){
      this.init();
      this.initSelectBox();
    }
  });*/
 function init(){
   $("select").selectBox();
   $(".selectBox").css({
     "max-width":"130px",
     "width": "130px"
   });
     function setdataso(dte){
         $('#start1').datetimepicker({
             timepicker:false,
             format:'Y-m-d',
             defaultDate:"2017-09-01",
             maxDate:dte,
             onSelectDate:function(){
                 var dts = $("#start1").val();
                 setdataeo(dts);
             }
         });
     }setdataso();
     function setdataeo(dts){
         $('#end1').datetimepicker({
             timepicker:false,
             format:'Y-m-d',
             defaultDate:"2017-11-30",
             minDate:dts,
             onSelectDate:function(){
                 var dte = $("#end1").val();
                 setdataso(dte);
             }
         });
     }setdataeo();
     function setdatast(dte){
         $('#start2').datetimepicker({
             timepicker:false,
             format:'Y-m-d',
             defaultDate:"2017-09-01",
             maxDate:dte,
             onSelectDate:function(){
                 var dts = $("#start2").val();
                 setdataet(dts);
             }
         });
     }setdatast();
     function setdataet(dts){
         $('#end2').datetimepicker({
             timepicker:false,
             format:'Y-m-d',
             defaultDate:"2017-11-30",
             minDate:dts,
             onSelectDate:function(){
                 var dte = $("#end2").val();
                 setdatast(dte);
             }
         });
     }setdataet();
 }init();
  var myChartA = echarts.init(document.getElementById('chartA'));
  var chartAdatax = ["2017-09第一次","2017-09第二次","2017-09第三次","2017-10第一次","2017-10第二次","2017-10第三次","2017-11第一次","2017-11第二次","2017-11第三次"],
      chartAdata1 = [460, 500, 512, 487, 499, 530, 510, 517, 540],
      chartAdata2 = [500, 489, 540, 499, 519, 426, 511, 520, 533];
  var myChartB = echarts.init(document.getElementById('chartB'));
  var chartAdatax1 = ["2017-09第一次","2017-09第二次","2017-09第三次","2017-10第一次","2017-10第二次","2017-10第三次","2017-11第一次","2017-11第二次","2017-11第三次"],
      chartAdata11 = [82, 81, 80, 78, 88, 86, 77, 86, 82],
      chartAdata21 = [89, 86, 78, 74, 94, 85, 79, 85, 87];
  var myChartC = echarts.init(document.getElementById('chartC'));
  var chartAdatax2 = ["2017-09第一次","2017-09第二次","2017-09第三次","2017-10第一次","2017-10第二次","2017-10第三次","2017-11第一次","2017-11第二次","2017-11第三次"],
      chartAdata12 = [28, 26, 19, 22, 26,20,20,21,22],
      chartAdata22 = [33, 35, 33, 28, 39,37,37,41,39],
      chartAdata32 = [28, 25, 26, 24, 29,28,22,23,26],
      chartAdata42 = [30,30,30,30,30,25,25,25,25],
      chartAdata52 = [40,40,40,40,40,45,45,45,45],
      chartAdata62 = [30,30,30,30,30,30,30,30,30];
  var myChartE = echarts.init(document.getElementById('chartE'));
  var chartEx = ["第一周","第二周","第三周","第四周","第五周","第六周","第七周","第八周","第九周","第十周"],
      chartE2 = [75.32, 70, 85, 88.89, 75.87, 76.8, 79.98, 80.04, 70,72.32],
      chartE3 = [78.13, 76.67, 89.47, 90.91, 78.05, 86.05, 80.49, 88.57, 72.22,73.91];
  var myChartF = echarts.init(document.getElementById('chartF'));
  var chartFx = ["第一周","第二周","第三周","第四周","第五周","第六周","第七周","第八周","第九周","第十周"],
      chartF1 = [10, 8, 12, 10, 8,20,15,10,14,20],
      chartF2 = [18, 16, 20, 27, 28,15,18,20,18,20],
      chartF3 = [4, 6, 6, 7, 5,8,8,5,4,6],
    chartF4 = [8, 6, 12, 10, 8,18,13,10,8,15],
        chartF5 = [14, 12, 18, 26, 22,13,15,18,16,16],
        chartF6 = [3, 5, 4, 4, 2,6,5,3,2,3];
  //var count = 6,count1 = 6,datax = [],data1 = [],data2 = [],datax1 = [],data11 = [],data21 = [],datax2 = [],data12 = [],data22 = [],data32 = [],dataEx = [],dataE1 = [],dataE2 = [],dataE3 = [],dataFx = [],dataF1 = [],dataF2 = [],dataF3 = [];
  // function addData(o){
  //   if(o || o == 0){
  //     datax.shift();
  //     datax.push(chartAdatax[o]);
  //     data1.shift();
  //     data1.push(chartAdata1[o]);
  //     data2.shift();
  //     data2.push(chartAdata2[o]);
  //     datax1.shift();
  //     datax1.push(chartAdatax1[o]);
  //     data11.shift();
  //     data11.push(chartAdata11[o]);
  //     data21.shift();
  //     data21.push(chartAdata21[o]);
  //     datax2.shift();
  //     datax2.push(chartAdatax2[o]);
  //     data12.shift();
  //     data12.push(chartAdata12[o]);
  //     data22.shift();
  //     data22.push(chartAdata22[o]);
  //     data32.shift();
  //     data32.push(chartAdata32[o]);
  //   }else{
  //     for(var i = 0;i<6;i++){
  //       datax.push(chartAdatax[i]);
  //       data1.push(chartAdata1[i]);
  //       data2.push(chartAdata2[i]);
  //       datax1.push(chartAdatax1[i]);
  //       data11.push(chartAdata11[i]);
  //       data21.push(chartAdata21[i]);
  //       datax2.push(chartAdatax2[i]);
  //       data12.push(chartAdata12[i]);
  //       data22.push(chartAdata22[i]);
  //       data32.push(chartAdata32[i]);
  //     }
  //   }
  // }addData();
  // function addData1(o){
  //   if(o || o == 0){
  //     dataEx.shift();
  //     dataEx.push(chartEx[o]);
  //     dataE1.shift();
  //     dataE1.push(chartE1[o]);
  //     dataE2.shift();
  //     dataE2.push(chartE2[o]);
  //     dataE3.shift();
  //     dataE3.push(chartE3[o]);
  //     dataFx.shift();
  //     dataFx.push(chartFx[o]);
  //     dataF1.shift();
  //     dataF1.push(chartF1[o]);
  //     dataF2.shift();
  //     dataF2.push(chartF2[o]);
  //     dataF3.shift();
  //     dataF3.push(chartF3[o]);
  //   }else{
  //     for(var i = 0;i<6;i++){
  //       dataEx.push(chartEx[i]);
  //       dataE1.push(chartE1[i]);
  //       dataE2.push(chartE2[i]);
  //       dataE3.push(chartE3[i]);
  //       dataFx.push(chartFx[i]);
  //       dataF1.push(chartF1[i]);
  //       dataF2.push(chartF2[i]);
  //       dataF3.push(chartF3[i]);
  //     }
  //   }
  // }addData1();
  var optionchartA = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
      top: 'top',
      data: ['班级平均值', '我的']
    },
    xAxis: {
        name:"次数",
        nameTextStyle: {
            fontSize: 14
        },
      type: 'category',
      /*name: 'x',*/
      splitLine: {show: false},
      data: chartAdatax
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    dataZoom: [
      {
        show: true,
        start:25,
        end: 75,
        height: 10,
        left: 50,
        right: 50,
        bottom: 0,
        xAxisIndex: [0],
        handleSize: 0,//滑动条的左右2个滑动条的大小
        handleColor: '#97cbff',//滑动图标的颜色
        handleStyle: {
          // borderColor: "red",
          // borderWidth: "1",
          shadowBlur: 0,
          background: "#97cbff"
          // shadowColor: "red"
        },
        fillerColor: "#97cbff",
        backgroundColor: '#e5e5e5',//两边未选中的滑动条区域的颜色
        showDataShadow: false,//是否显示数据阴影 默认auto
        showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
        filterMode: 'filter'
      },
      {
        type: 'inside',
        start: 0,
        end: 100
      }
    ],
    yAxis: {
        name:"总分",
        nameTextStyle: {
            fontSize: 14
        },
      min:400,
        max:600
    },
    series: [
      {
        name: '班级平均值',
        type: 'bar',
          barMaxWidth:60,
        data: chartAdata1,
        itemStyle : {
          normal : {
            color:'#f9a835'
          }
        }
      },
      {
        name: '我的',
        type: 'line',
        data: chartAdata2,
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
  var optionchartB = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
        top: 'top',
      data: ['班级平均值', '我的']
    },
    xAxis: {
      type: 'category',
      /*name: 'x',*/
      splitLine: {show: false},
      data: chartAdatax1
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    yAxis: {

    },
      dataZoom: [
          {
              show: true,
              start:25,
              end: 75,
              height: 10,
              left: 50,
              right: 50,
              bottom: 0,
              xAxisIndex: [0],
              handleSize: 0,//滑动条的左右2个滑动条的大小
              handleColor: '#97cbff',//滑动图标的颜色
              handleStyle: {
                  // borderColor: "red",
                  // borderWidth: "1",
                  shadowBlur: 0,
                  background: "#97cbff"
                  // shadowColor: "red"
              },
              fillerColor: "#97cbff",
              backgroundColor: '#e5e5e5',//两边未选中的滑动条区域的颜色
              showDataShadow: false,//是否显示数据阴影 默认auto
              showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
              filterMode: 'filter'
          },
          {
              type: 'inside',
              start: 0,
              end: 100
          }
      ],
    series: [
      {
        name: '班级平均值',
        type: 'bar',
          barMaxWidth:60,
        data: chartAdata11,
        itemStyle : {
          normal : {
            color:'#f9a835'
          }
        }
      },
      {
        name: '我的',
        type: 'line',
        data: chartAdata21,
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
  var optionchartC = {
    color: ['#af9fd6', '#68bef9', '#e5a2c0','#af9fd6', '#68bef9', '#e5a2c0'],
    tooltip: {
      trigger: 'axis',
       axisPointer: {
       type: 'shadow'
       }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    legend: {
      data: ['易得分', '中得分', '难得分',"易总分","中总分","难总分"],
        top: 'top'
    },
      dataZoom: [
          {
              show: true,
              start:25,
              end: 75,
              height: 10,
              left: 50,
              right: 50,
              bottom: 0,
              xAxisIndex: [0],
              handleSize: 0,//滑动条的左右2个滑动条的大小
              handleColor: '#97cbff',//滑动图标的颜色
              handleStyle: {
                  // borderColor: "red",
                  // borderWidth: "1",
                  shadowBlur: 0,
                  background: "#97cbff"
                  // shadowColor: "red"
              },
              fillerColor: "#97cbff",
              backgroundColor: '#e5e5e5',//两边未选中的滑动条区域的颜色
              showDataShadow: false,//是否显示数据阴影 默认auto
              showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
              filterMode: 'filter'
          },
          {
              type: 'inside',
              start: 0,
              end: 100
          }
      ],
    calculable: true,
    xAxis: [
      {
        type: 'category',
        axisTick: {show: false},
        data: chartAdatax2,
        formatter: '{value} %'
      }
    ],
    yAxis: [
      {
        type: 'value',
        max:60,
        axisLabel: {
          show: true,
          interval: 'auto',
          formatter: '{value}'
        }
      }
    ],
    series: [
        {
            name:"易得分",
            type: 'line',
            data: chartAdata12
        },
        {
            name:"中得分",
            type: 'line',
            data: chartAdata22
        },
        {
            name:"难得分",
            type: 'line',
            data: chartAdata32
        },
      {
        name: '易总分',
        type: 'bar',
          barGap: 0,
        data: chartAdata42
      },
      {
        name: '中总分',
        type: 'bar',
          barGap: 0,
        data: chartAdata52
      },
      {
        name: '难总分',
        type: 'bar',
          barGap: 0,
        data: chartAdata62
      }
    ]
  };
  var optionchartE = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    legend: {
      top: 'top',
      data: ['个人通过率','平均通过率' ]
    },
      dataZoom: [
          {
              show: true,
              start:25,
              end: 75,
              height: 10,
              left: 50,
              right: 50,
              bottom: 0,
              xAxisIndex: [0],
              handleSize: 0,//滑动条的左右2个滑动条的大小
              handleColor: '#97cbff',//滑动图标的颜色
              handleStyle: {
                  // borderColor: "red",
                  // borderWidth: "1",
                  shadowBlur: 0,
                  background: "#97cbff"
                  // shadowColor: "red"
              },
              fillerColor: "#97cbff",
              backgroundColor: '#e5e5e5',//两边未选中的滑动条区域的颜色
              showDataShadow: false,//是否显示数据阴影 默认auto
              showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
              filterMode: 'filter'
          },
          {
              type: 'inside',
              start: 0,
              end: 100
          }
      ],
    xAxis: {
      type: 'category',
      /*name: 'x',*/
      splitLine: {show: false},
      data: chartEx
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    yAxis: {
        min:1,
        max:100,
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} %'
        }
    },
    series: [
      {
        name: '平均通过率',
          type: 'bar',
          barMaxWidth:60,
        data: chartE2,
        itemStyle : {
          normal : {
            color:'#f9a835'
          }
        }
      },
      {
        name: '个人通过率',
        type: 'line',
        data: chartE3,
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
  var optionchartF = {
    color: ['#af9fd6', '#68bef9', '#e5a2c0','#af9fd6', '#68bef9', '#e5a2c0'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
      dataZoom: [
          {
              show: true,
              start:25,
              end: 75,
              height: 10,
              left: 50,
              right: 50,
              bottom: 0,
              xAxisIndex: [0],
              handleSize: 0,//滑动条的左右2个滑动条的大小
              handleColor: '#97cbff',//滑动图标的颜色
              handleStyle: {
                  // borderColor: "red",
                  // borderWidth: "1",
                  shadowBlur: 0,
                  background: "#97cbff"
                  // shadowColor: "red"
              },
              fillerColor: "#97cbff",
              backgroundColor: '#e5e5e5',//两边未选中的滑动条区域的颜色
              showDataShadow: false,//是否显示数据阴影 默认auto
              showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
              filterMode: 'filter'
          },
          {
              type: 'inside',
              start: 0,
              end: 100
          }
      ],
    legend: {
      data: ['易通过量', '中通过量', '难通过量','易总量', '中总量', '难总量'],
        top: 'top'
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        axisTick: {show: false},
        data: chartFx
      }
    ],
    yAxis: [
      {
        type: 'value',
        max:40,
        axisLabel: {
          show: true,
          interval: 'auto'
        }
      }
    ],
    series: [
        {
            name:"易通过量",
            type: 'line',
            data: chartF4
        },
        {
            name:"中通过量",
            type: 'line',
            data: chartF5
        },
        {
            name:"难通过量",
            type: 'line',
            data: chartF6
        },
      {
        name: '易总量',
        type: 'bar',
          barGap: 0,
        data: chartF1
      },
      {
        name: '中总量',
        type: 'bar',
          barGap: 0,
        data: chartF2
      },
      {
        name: '难总量',
        type: 'bar',
          barGap: 0,
        data: chartF3
      }
    ]
  };
  /*setInterval(function () {
    addData(count);
    myChartA.setOption({
      xAxis:{
        data: datax
      },
      series: [{
        data: data1
      },{
        data:data2
      }]
    });
    myChartB.setOption({
      xAxis:{
        data: datax1
      },
      series: [{
        data: data11
      },{
        data:data21
      }]
    });
    myChartC.setOption({
      xAxis:{
        data: datax2
      },
      series: [{
        data: data12
      },{
        data:data22
      },{
        data:data32
      }]
    });
    count ++;
    if(count == 9){
      count = 0;
    }
  }, 2000);
  setInterval(function(){
    addData1(count1);
    myChartE.setOption({
      xAxis:{
        data: dataEx
      },
      series: [{
        data: dataE1
      },{
        data:dataE2
      },{
        data:dataE3
      }]
    });
    myChartF.setOption({
      xAxis:{
        data: dataFx
      },
      series: [{
        data: dataF1
      },{
        data:dataF2
      },{
        data:dataF3
      }]
    });
    count1 ++;
    if(count1 == 10){
      count1 = 0;
    }
  },2000);*/
  myChartA.setOption(optionchartA);
  myChartB.setOption(optionchartB);
  myChartC.setOption(optionchartC);
  myChartE.setOption(optionchartE);
  myChartF.setOption(optionchartF);
  //
  var suggertstr1 = "<p>1.在重点解难题的同时，不忘检查基础题的答题情况</p><p>2.总体来说成绩相对稳定，需要保持</p>",
      suggeststr2 = "<p>1.注意作业提交时间节点，并准时提交相关作业；</p>";
  $(".suggestcont").html(suggertstr1);
  $(document).on("click","ul.tab li",function(){
    $("ul.tab li").removeClass("select");
    $(this).addClass("select");
    $("ul.tabcont li").hide();
    $("ul.tabcont li").eq($(this).attr("data_index")).show();
    if($(this).attr("data_index") == "0"){
      $(".suggestcont").html(suggertstr1);
    }else{
      $(".suggestcont").html(suggeststr2);
    }
  });


  //
    var data01 = [["2017-10-9",0],["2017-10-18",0],["2017-11-6",0],["2017-11-22",0]],
        data02 = [["2017-9-9",1],["2017-9-13",1],["2017-9-18",1],["2017-9-25",1],["2017-9-27",1],["2017-9-29",1],
            ["2017-10-11",1],["2017-10-16",1],["2017-10-20",1],["2017-10-25",1],["2017-10-31",1],
            ["2017-11-1",1],["2017-11-3",1],["2017-11-13",1],["2017-11-15",1],["2017-11-17",1]],
        data03 = [["2017-9-11",2],["2017-9-15",2],["2017-9-20",2],["2017-9-22",2],["2017-10-13",2],["2017-10-23",2],["2017-10-27",2],
            ["2017-11-8",2],["2017-11-10",2],["2017-11-20",2]];
  var myChartD = echarts.init(document.getElementById('chartD'));
  var optionchartD = {
    /*backgroundColor: '#CCE8FD',*/
    title: {
      top: 30,
      text: '2017年下半年作业统计',
      /*subtext: '数据纯属虚构',*/
      left: 'center',
      textStyle: {
        color: '#3d3d3c'
      }
    },
    tooltip : {
      trigger: 'item',
      formatter: function(prame){
        return prame.data[0] +"："+prame.seriesName;
      }
    },
    legend: {
      top: '30',
      left: '100',
      data:['漏交作业', '延期作业','已交作业'],
      textStyle: {
        color: '#3d3d3c'
      }
    },
    calendar: [/*{
      top: 100,
      left: 'center',
      range: ['2017-01-01', '2017-06-30'],
      splitLine: {
        show: true,
        lineStyle: {
          color: '#5AB0F2',
          width: 4,
          type: 'solid'
        }
      },
      yearLabel: {
        /!*formatter: '{start}上半年',*!/
        show:false
        /!*textStyle: {
          color: '#3d3d3c'
        }*!/
      },
      itemStyle: {
        normal: {
          color: 'none',
          borderWidth: 1,
          borderColor: '#5AB0F2'
        }
      }
    }, */{
      top: 120,
      left: '20%',
        right:"20%",
        bottom:"3%",
      range: ['2017-09-01', '2017-12-31'],
      splitLine: {
        show: true,
        lineStyle: {
          color: '#97cbff',
          width: 3,
          type: 'solid'
        }
      },
      yearLabel: {
        /*formatter: '{start}上半年',*/
        show:false
        /*textStyle: {
         color: '#3d3d3c'
         }*/
      },
      itemStyle: {
        normal: {
          color: 'none',
          borderWidth: 1,
          borderColor: '#97cbff'
        }
      }
    }],
    series : [
      {
        name: '漏交作业',
        type: 'effectScatter',
        coordinateSystem: 'calendar',
        data: data01,
        symbolSize: 20,
        itemStyle: {
          normal: {
            color: '#ED7063'
          }
        }
      },
      {
        name: '漏交作业',
        type: 'effectScatter',
        coordinateSystem: 'calendar',
        calendarIndex: 1,
        data: data01,
        symbolSize: 20,
        itemStyle: {
          normal: {
            color: '#ED7063'
          }
        }
      },
      {
        name: '延期作业',
        type: 'scatter',
        coordinateSystem: 'calendar',
        data: data03,
        symbolSize: 20,
        itemStyle: {
          normal: {
            color: '#EFCF68'
          }
        }
      },
      {
        name: '延期作业',
        type: 'scatter',
        coordinateSystem: 'calendar',
        calendarIndex: 1,
        data: data03,
        symbolSize: 20,
        itemStyle: {
          normal: {
            color: '#EFCF68'
          }
        }
      },
        {
            name: '已交作业',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: data03,
            symbolSize: 20,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#62C554',
                    shadowBlur: 10,
                    shadowColor: '#62C554'
                }
            },
            zlevel: 1
        },
        {
            name: '已交作业',
            type: 'scatter',
            coordinateSystem: 'calendar',
            data: data02,
            symbolSize: 20,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#62C554',
                    shadowBlur: 10,
                    shadowColor: '#62C554'
                }
            },
            zlevel: 1
        }
    ]
  };
  myChartD.setOption(optionchartD);
});