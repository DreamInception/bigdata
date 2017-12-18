$(function(){
  function init(){
    // $("select").selectBox();
    // $(".selectBox").css({
    //   "max-width":"150px",
    //   "width": "150px"
    // });
    // $(".selectBox-label").css("width","120px");
      $(".selectB input").prop("checked",true);
  }init();

    var data = [
            [
                [437.78,60.00,79,"物理+化学+生物",2015],
                [443.19,45.75,75,"物理+化学+历史",2015],
                [418.66,50.00,61,"物理+化学+政治",2015],
                [412.73,34.60,40,"物理+化学+地理",2015],
                [417.42,43.00,65,"物理+生物+历史",2015],
                [470.36,31.30,37,"物理+生物+政治",2015],
                [448.86,42.80,34,"物理+生物+地理",2015],
                [474.35,31.30,22,"物理+历史+政治",2015],
                [450.30,28.00,19,"物理+历史+地理",2015],
                [412.82,37.80,44,"物理+政治+地理",2015],
                [415.08,48.90,25,"化学+生物+历史",2015],
                [445.64,42.80,36,"化学+生物+政治",2015],
                [466.15,66.00,19,"化学+生物+地理",2015],
                [459.27,57.50,25,"化学+历史+政治",2015],
                [434.00,41.50,56,"化学+历史+地理",2015],
                [434.61,76.40,16,"化学+政治+地理",2015],
                [458.36,50.00,28,"生物+历史+政治",2015],
                [421.11,64.80,13,"生物+历史+地理",2015],
                [473.97,40.90,12,"生物+政治+地理",2015],
                [433.08,57.60,14,"历史+政治+地理",2015]
            ],
            [
                [412.10,65.90,83,"物理+化学+生物",2016],
                [416.11,60.85,74,"物理+化学+历史",2016],
                [412.84,46.24,67,"物理+化学+政治",2016],
                [461.30,55.40,42,"物理+化学+地理",2016],
                [459.36,59.07,58,"物理+生物+历史",2016],
                [459.51,46.24,35,"物理+生物+政治",2016],
                [450.34,54.83,32,"物理+生物+地理",2016],
                [468.08,48.63,20,"物理+历史+政治",2016],
                [428.68,50.61,13,"物理+历史+地理",2016],
                [474.64,36.24,45,"物理+政治+地理",2016],
                [433.94,78.10,28,"化学+生物+历史",2016],
                [470.93,78.10,42,"化学+生物+政治",2016],
                [449.07,71.24,23,"化学+生物+地理",2016],
                [460.34,63.48,28,"化学+历史+政治",2016],
                [447.95,53.24,40,"化学+历史+地理",2016],
                [425.29,47.77,29,"化学+政治+地理",2016],
                [453.62,57.33,32,"生物+历史+政治",2016],
                [435.52,53.24,12,"生物+历史+地理",2016],
                [448.16,47.64,5,"生物+政治+地理",2016],
                [430.49,47.77,12,"历史+政治+地理",2016]
            ],
            [
                [438.53,59.66,75,"物理+化学+生物",2017],
                [409.86,37.33,70,"物理+化学+历史",2017],
                [457.22,37.33,54,"物理+化学+政治",2017],
                [473.10,30.06,32,"物理+化学+地理",2017],
                [427.31,91.76,45,"物理+生物+历史",2017],
                [426.90,64.72,45,"物理+生物+政治",2017],
                [456.99,62.03,36,"物理+生物+地理",2017],
                [414.63,48.80,28,"物理+历史+政治",2017],
                [409.11,54.76,9,"物理+历史+地理",2017],
                [419.47,30.06,45,"物理+政治+地理",2017],
                [443.19,59.66,35,"化学+生物+历史",2017],
                [472.53,54.72,38,"化学+生物+政治",2017],
                [452.93,77.93,25,"化学+生物+地理",2017],
                [462.48,48.80,32,"化学+历史+政治",2017],
                [440.44,34.53,42,"化学+历史+地理",2017],
                [405.18,66.87,32,"化学+政治+地理",2017],
                [438.53,62.71,30,"生物+历史+政治",2017],
                [450.06,59.00,17,"生物+历史+地理",2017],
                [450.53,56.91,16,"生物+政治+地理",2017],
                [459.51,46.39,14,"历史+政治+地理",2017]
            ]
        ],
      colors = ['#dba5bf', '#c9d0ea','#b5dfe4', '#badc9f', '#fad789',
          '#9d90b9', '#f2b66d', '#dabbd7', '#a0a9cf', '#e9b1ba',
          '#9ecff3', '#9ebadf', '#b9b7d5', '#e4c5ad', '#bc9b9c',
          '#d591c9', '#bcdac4', '#8bb4bb', '#93677e', '#f2ecb9'],
  schema = [
    {index: 0, text: '选科方式', unit: ''},
    {index: 1, text: '人数', unit: '人'},
    {index: 2, text: '平均分', unit: '分'},
    {index: 3, text: '录取率', unit: '%'}
  ];
  var myChartA = echarts.init(document.getElementById('chartA'));
    var optionchartA = {
      baseOption: {
        timeline: {
          axisType: 'category',
          orient: 'vertical',
          autoPlay: true,
          inverse: true,
          playInterval: 5000,
          left: null,
          right: 0,
          top:40,
          bottom: 20,
          width: 55,
          height: null,
          label: {
            normal: {
              textStyle: {
                color: '#3d3d3c'
              }
            },
            emphasis: {
              textStyle: {
                color: '#666'
              }
            }
          },
          symbol: 'none',
          lineStyle: {
            color: '#3d3d3c',
              width:1
          },
          checkpointStyle: {
            color: '#666',
            borderColor: '#3d3d3c',
            borderWidth: 2
          },
          controlStyle: {
            showNextBtn: false,
            showPrevBtn: false,
            normal: {
              color: '#666',
              borderColor: '#3d3d3c'
            },
            emphasis: {
              color: '#666',
              borderColor: '#3d3d3c'
            }
          },
          data: [2015,2016,2017]
        },
          grid: {
          top:"10%",
              left: '3%',
              right: '10%',
              bottom: '10%',
              containLabel: true
          },
        /*backgroundColor: '#404a59',*/
        tooltip: {
          padding: 5,
          backgroundColor: '#222',
          borderColor: '#777',
          borderWidth: 1,
          formatter: function (obj) {
            var value = obj.value;
            return schema[0].text + '：' + value[3] + schema[0].unit +'<br>'
                + schema[1].text + '：' + value[2] + schema[1].unit + '<br>'
                + schema[2].text + '：' + value[0] + schema[2].unit + '<br>'
                + schema[3].text + '：' + value[1] + schema[3].unit +'<br>';
          }
        },
        xAxis: {
          type: 'value',
          name: '分数',
          max: 480,
          min:400,
          nameGap: 35,
          nameLocation: 'middle',
          nameTextStyle: {
            fontSize: 14
          },
          splitLine: {
            show: false
          }
         /* axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          }*/
          /*axisLabel: {
            formatter: '{value}'
          }*/
        },
        yAxis: {
          type: 'value',
          name: '录取率',
          max: 100,
          min: 0,
          nameTextStyle: {
            fontSize: 14
          },
         /* axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },*/
          splitLine: {
            show: false
          },
          axisLabel: {
            formatter: '{value}%'
          }
        },
        visualMap: [
          {
            show: false,
            dimension: 3,
            categories: ["物理+化学+生物","物理+化学+历史","物理+化学+政治","物理+化学+地理","物理+生物+历史","物理+生物+政治","物理+生物+地理","物理+历史+政治","物理+历史+地理",
              "物理+政治+地理","化学+生物+历史","化学+生物+政治","化学+生物+地理","化学+历史+政治","化学+历史+地理","化学+政治+地理","生物+历史+政治","生物+历史+地理","生物+政治+地理",
             "历史+政治+地理"],
            calculable: true,
            precision: 0.1,
            textGap: 30,
            textStyle: {
              color: '#ccc'
            },
            inRange: {
              color: colors
            }
          }
        ],
        series: [
          {
            type: 'scatter',
            name:2015,
            itemStyle: {
              normal: {
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
          }
        ],
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut'
      },
      options: [
        {
          series:{
            name: 2015,
            type: 'scatter',
            data:data[0]
          }
        },
        {
          series:{
            name: 2016,
            type: 'scatter',
            data:data[1]
          }
        },
        {
          series:{
            name: 2017,
            type: 'scatter',
            data:data[2]
          }
        }
      ]
    };
    myChartA.setOption(optionchartA);
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
        optionchartA.baseOption.series[0].data = [];
        for(var i = 0;i<3;i++){
            optionchartA.options[i].series.data = [];
        }
        var list =  $(".selectB input:not(:first)"),qdarr = [];
        $.each(list,function(i,item){
            if($(item).is(":checked")){
                qdarr.push($(item).attr("id"))
            }
        });
        $.each(qdarr,function(i,item){
            var item = parseInt(item);
            optionchartA.baseOption.series[0].data.push(data[0][item-1]);
            for(var i = 0;i<3;i++){
                optionchartA.options[i].series.data.push(data[i][item-1])
            }
        });
        myChartA.setOption(optionchartA);
    })
    // $("select").change(function(){
    //     var index = parseInt($(this).val());
    //     if(index == 0){
    //         optionchartA.baseOption.series.data = data[0];
    //         for(var i = 0;i<3;i++){
    //             optionchartA.options[i].series.data = data[i];
    //         }
    //     }else{
    //         optionchartA.baseOption.series.data = [];
    //         optionchartA.baseOption.series.data.push(data[0][index-1]);
    //         for(var i = 0;i<3;i++){
    //             optionchartA.options[i].series.data = [];
    //             optionchartA.options[i].series.data.push(data[i][index-1]);
    //         }
    //     }
    //     myChartA.setOption(optionchartA);
    // });
});