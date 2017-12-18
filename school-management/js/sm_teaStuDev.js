var progressMap,cakeMap,zxtMap;
var classScoreUrl = "json/sm_classScores.json";
var percentUrl = "json/sm_percent.json";
var classAllData = [];
var percentAllData = [];
var select3 = 9;
var select4 = "1";
var exams = [];      // 历次考试名称
var yAvg = [];      // 历次考试年级平均分
var cakeData = [];
$(function(){

    $("select").selectBox().css({
        "max-width": "165px",
        "width": "165px",
        "height": "35px"
    });
    new SelectBox($("select")).refresh();
    classAllData = ajaxData(classScoreUrl,'','get').data;
    percentAllData = ajaxData(percentUrl,'','get').data;
    for(var i in classAllData[0].scores){
        exams.push(i);
    };
    for(var j in classAllData[0].gradeavgscore){
        yAvg.push(classAllData[0].gradeavgscore[j]);
    }
    initProcessMap();
    initMatrix();
    initCakeMap(1);
    initZXTMap(1);
    $(".odd").on("mouseover",function () {
        $(this).children("i").show();
        // var newWidth = 12*1.5;
        // var newHeight = 12*1.5;
        // $(this).animate({
        //     width: newWidth,
        //     height: newHeight,
        //     zIndex: 3
        // },500);
    }).on("mouseout",function () {
        $(this).children("i").hide();
        // $(this).animate({
        //     width: '12',
        //     height: '12',
        //     zIndex: 1
        // },500);
    })
});
function ajaxData(myUrl, myjson, type) {
    var mydata = {};
    $.ajax({
        url: myUrl,
        data: myjson,
        type: type,
        dataType: 'json',
        async: false
    }).done(function (data) {
        mydata = data;

    });
    return mydata;
}
function changeCakeMap(classId) {
    for(var i=0; i<percentAllData.length; i++){
        if(percentAllData[i].class == classId){
            cakeData = percentAllData[i].percents;
        }
    }
    var option = {
        title : {
            show: false
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            bottom: '40',
            data: ["A档（分数>650）","B档（600<分数≤650）","C档（550<分数≤600）","D档（500<分数≤550）","E档（450<分数≤500）","F档（分数≤450）"]
        },
        grid: {
            left: '1%',
            bottom: '3%',
            containLabel: true
        },
        series : [
            {
                name: '成绩分档',
                type: 'pie',
                radius : '75%',
                center: ['50%', '60%'],
                data:cakeData,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ],
        color: ['#73c5f7','#f4b760','#ee7c6c','#74d76d','#619ff8','#dba5bf']
    };
    cakeMap.clear();
    cakeMap.dispose();
    delete cakeMap;
    cakeMap = echarts.init(document.getElementById("charts2"));
    cakeMap.setOption(option);
};
function initCakeMap(classId) {
    for(var i=0; i<percentAllData.length; i++){
        if(percentAllData[i].class == classId){
            cakeData = percentAllData[i].percents;
        }
    }
    var option = {
        title : {
            show: false
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            bottom: '40',
            data: ["A档（分数>650）","B档（600<分数≤650）","C档（550<分数≤600）","D档（500<分数≤550）","E档（450<分数≤500）","F档（分数≤450）"]
        },
        grid: {
            left: '1%',
            bottom: '3%',
            containLabel: true
        },
        series : [
            {
                name: '成绩分档',
                type: 'pie',
                radius : '75%',
                center: ['50%', '60%'],
                data:cakeData,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ],
        color: ['#73c5f7','#f4b760','#ee7c6c','#74d76d','#619ff8','#dba5bf']
    };
    cakeMap = echarts.init(document.getElementById("charts2"));
    cakeMap.setOption(option);
}
function initProcessMap() {
    instanceProgressBar('progressbar1',68.8,'#f4e4ec','#dba5bf');
    instanceProgressBar('progressbar2',67.7,'#c7d4e7','#4570af');
    instanceProgressBar('progressbar3',69.3,'#f8f2e5','#e8d5aa');
    instanceProgressBar('progressbar4',68.9,'#d3f4e1','#6cdc9d');
    instanceProgressBar('progressbar5',68.3,'#e9c4c0','#b53a30');
    instanceProgressBar('progressbar6',68.8,'#e6e2f2','#aca0d3');
    instanceProgressBar('progressbar7',69,'#fae5ce','#eea85e');
    instanceProgressBar('progressbar8',68.1,'#faf1d1','#efcf68');
    instanceProgressBar('progressbar9',68.2,'#d4eafa','#70b9ef');
    instanceProgressBar('progressbar10',68.6,'#dccdf7','#8a58e5');
    $(".firstClass li").on("click",function () {
        var seq = $(this).data("class");
        changeCakeMap(seq);
        changeZXTMap(seq);
    });
    $(".progress").on("click",function () {
        var seq = $(this).data("class");
        changeCakeMap(seq);
        changeZXTMap(seq);
    });
}
function initMatrix() {
    var rowObj,cellSpanObj,cellEmObj,colorCls,list;
    for(var i=0; i<classAllData.length; i++){
        rowObj = $(".matrix .row").eq(i);
        list = Object.values(classAllData[i].scores);
        for(var j=0; j<list.length; j++){
            cellSpanObj = rowObj.find(".odd").eq(j);
            cellEmObj = cellSpanObj.find("em").eq(1);
            var score = Number(list[j]);
            cellEmObj.html(score);
        }
    }
}
function instanceProgressBar(id,percent,backColor,fillColor) {
    $('#'+id).LineProgressbar({
        percentage: percent,
        width: '290px',
        height: '10px',
        backgroundColor: backColor,
        fillBackgroundColor: fillColor,
        ShowProgressCount: false
    });
}
function initZXTMap(num) {
    var yExams = [];
    for(var i=0; i<classAllData.length; i++){
        if(classAllData[i].classvalue == num){
            for(var j in classAllData[i].scores){
                yExams.push(classAllData[i].scores[j]);
            }
        }

    };
    var option = {
        title: {
            show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
            bottom: 'bottom',
            data: ['班级平均分', '年级平均分']
        },
        xAxis: {
            type: 'category',
            // name: '班级',
            splitLine: {show: false},
            boundaryGap: false,
            data: exams,
            // data: [2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000]
            axisLabel : {
                show:true,
                interval: 0//,    // {number}
                //rotate: 45,
                // margin: 8

            }
        },
        dataZoom: [        // 放大
            {
                type: 'inside'
            }
        ],
        grid: {
            left: '3%',
            right: '4%',
            top: 13,
            containLabel: true
        },
        yAxis: {
            type: 'value',
            min: 450,
            max: 600
            // name: '分数'
            // axisLine: {
            //     lineStyle: {
            //         color: '#999'
            //     }
            // }
        },
        series: [
            {
                name: '年级平均分',
                type: 'line',
                data: yAvg,
                itemStyle: {
                    normal: {
                        color: '#5dad81'
                    }
                },
            },
            {
                name: '班级平均分',
                type: 'line',
                data: yExams,
                itemStyle: {
                    normal: {
                        color: '#f9a835'
                    }
                },
            }
        ]
    };
    zxtMap = echarts.init(document.getElementById("charts3"));
    zxtMap.setOption(option);
}
function changeZXTMap(num) {
    var yExams = [];
    for(var i=0; i<classAllData.length; i++){
        if(classAllData[i].classvalue == num){
            for(var j in classAllData[i].scores){
                yExams.push(classAllData[i].scores[j]);
            }
        }

    };
    var option = {
        title: {
            show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
            bottom: 'bottom',
            data: ['班级平均分', '年级平均分']
        },
        xAxis: {
            type: 'category',
            // name: '班级',
            splitLine: {show: false},
            boundaryGap: false,
            data: exams,
            axisLabel : {
                show:true,
                interval: 0//,    // {number}
                //rotate: 45,
                // margin: 8

            }
        },
        grid: {
            // show: true,
            left: '3%',
            right: '4%',
            bottom: 50,
            containLabel: true
        },
        yAxis: {
            type: 'value',
            min: 450,
            max: 600
            // name: '分数'
            // axisLine: {
            //     lineStyle: {
            //         color: '#999'
            //     }
            // }
        },
        series: [
            {
                name: '年级平均分',
                type: 'line',
                data: yAvg,
                itemStyle: {
                    normal: {
                        color: '#5dad81'
                    }
                },
            },
            {
                name: '班级平均分',
                type: 'line',
                data: yExams,
                itemStyle: {
                    normal: {
                        color: '#f9a835'
                    }
                },
            }
        ]
    };
    zxtMap.clear();
    zxtMap.dispose();
    delete zxtMap;
    zxtMap = echarts.init(document.getElementById("charts3"));
    zxtMap.setOption(option);
}