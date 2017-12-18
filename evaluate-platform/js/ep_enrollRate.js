$(function () {
    var cType = "小升初升学率";
    var back = "background";
    var back2="xiaoxue";
    var back3="chuzhong";
    var type1 = "gdp";
    var type2 = "行政办公用房";
    var type3 = "招生数";
    var type4 = "毕业生数";
    var typename = '小升初升学率';
    var typedw = '(%)'// /亿元
    var defaultSel = '已选省份';
    var min = 90;
    var max = 100;
    var unit = '%';
    var chinaMap = 'chinamap11';
    var bjMap = 'bjmap11';
    var zxMap = 'zx_map11';
    var xxMap = 'xxmap11';
    var selectSort = 'selectbox_sort11';
    new Vue({
        el: "#header"
    });
    var cd_vm = new Vue({
        el: "#app",
        data: {
            chooseTab: 1,
            studentdata: {},   // 所有json数据
            prosnum: 0,   //省份数
            yearsnum: 0,    //年份数
            studentdata1: {},   // 所有json数据
            prosnum1: 0,   //省份数
            yearsnum1: 0,    //年份数
            rates: [],  // 折线图: 下拉框
            // dseries: [], // 折线图: 选择的省
            // nseries: [], // 折线图: 所有年份该省的人均GDP
            zxOptions: {}, //折线图:
            zxchart: null,//折线图:
            // zxt_selected: defaultSel,//折线图:
            zzt_selected: 'Value',//折柱图:
            kind: [{
                value: 'Province',
                label: '按照省份序号排序'
            }, {
                value: 'GDP',
                label: '按照人均GDP大小'
            }, {
                value: 'Value',
                label: '按照当前值大小'
            },],
            bjcharts: null,  // 折柱图
            gcharts: null,// gini图
            chinacharts: null,// 中国地图
            xxcharts: null,
            zzOptions: null,
            giniOptions: null,
            mapOptions: null,
            isActive: false,
            hasPadRight: false,
            searchPro: '',
            chooseRates: [],  // 勾选的省份
            ps: 1,   // 学期选项
            chooseNav: 1
        },
        methods: {
            selectNav: function (num) {
                this.chooseNav = num;
                if(Number(num) == 1) {
                    this.initZFT();
                    this.initMap();
                }else if(Number(num) == 2){
                    this.initZXT();
                    this.initXXT();
                }
            },
            ajaxData: function (myUrl, myjson, type) {
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
            },
            requestAllData: function (url, seq) {
                if (seq == 1) {
                    this.studentdata = this.ajaxData(url, '', 'get');
                    this.prosnum = this.studentdata[back2]["data"][0].length;
                    this.yearsnum = this.studentdata[back2]["time"].length;
                } else if (seq == 2) {
                    this.studentdata1 = this.ajaxData(url, '', 'get');
                    this.prosnum1 = this.studentdata1[back3]["data"][0].length;
                    this.yearsnum1 = this.studentdata1[back3]["time"].length;
                }

            },
            renew: function () {
                var res = this.getseries();
                var dseries = res[0];
                var nseries = res[1];
                this.zxOptions.legend.data = nseries;
                this.zxOptions.series = dseries;
                this.zxchart.clear();
                this.zxchart.dispose();
                delete this.zxchart;
                this.zxchart = echarts.init(document.getElementById(zxMap));
                this.zxchart.setOption(this.zxOptions);
                $(".select-content").hide();
            },
            initXXT: function () {
                var dseries=this.getseries1();
                var data = echarts.dataTool.prepareBoxplotData(dseries,{boundIQR: 'none'});
                var option = {
                    title: [
                        {
                            text: cType + '箱线图',
                            left: 'left',
                            textStyle: {
                                fontStyle: 'normal',
                                fontSize: 16
                            }
                        },
                        {
                            text: 'upper: Q3 + 1.5 * IRQ \nlower: Q1 - 1.5 * IRQ',
                            borderColor: '#999',
                            borderWidth: 1,
                            textStyle: {
                                fontSize: 14
                            },
                            left: '10%',
                            top: '90%'
                        }
                    ],
                    toolbox: {
                        show: true,
                        feature: {
                            // magicType: {
                            //     show: true,
                            //     type: ['bar', 'line']
                            // },
                            saveAsImage: {
                                icon: 'M938.792909 832c4.096 15.872 3.072 31.232-2.56 45.568-5.632 14.336-14.336 27.136-26.624 37.888-11.776 11.264-26.624 19.456-44.032 26.112-17.408 6.144-35.84 9.728-55.808 9.728-125.952 0.512-238.592 1.024-337.92 1.024H131.880909c-24.064 0-45.056-4.096-63.488-12.8-18.432-8.704-32.768-19.456-44.032-32.256-11.264-12.8-18.432-26.624-22.016-41.472s-3.072-28.672 1.536-40.448c4.096-9.216 8.192-18.944 11.776-29.184 3.584-8.704 7.168-18.432 11.776-29.696 4.608-11.264 9.728-22.016 14.848-33.28l37.888-92.16h114.176l-43.008 125.952h644.096l-43.008-125.952h109.056c13.824 33.792 26.624 64.512 37.888 92.16 4.608 11.776 9.216 23.552 13.824 34.816 4.608 11.264 8.704 21.504 12.288 30.72 3.584 9.216 6.656 16.896 9.216 23.04 3.072 6.144 4.096 9.728 4.096 10.24zM436.008909 647.168c-12.8-14.848-27.136-32.768-43.52-54.784s-33.28-44.544-50.688-68.096c-17.408-23.552-34.304-46.592-51.712-69.12-16.896-22.528-32.256-42.496-45.568-58.88-15.36-17.92-21.504-32.768-17.92-44.544 3.584-11.776 14.848-17.408 33.792-17.408 10.752 0.512 25.088 0.512 43.008-0.512s32.768-1.536 45.056-1.536c13.312 0 21.504-4.096 25.088-11.776 3.072-8.192 5.12-18.432 5.12-32.256 0-14.848 0-30.72-0.512-48.64-0.512-17.408-0.512-35.84-0.512-54.272 0-18.432 0-36.864-0.512-54.784-0.512-17.92-0.512-34.816-0.512-50.176 0-6.656 0.512-13.824 1.536-20.992s3.584-13.824 7.168-19.968 9.216-11.264 15.872-14.848 16.384-6.144 28.672-6.144c13.824 0 26.624 0 38.4-0.512s25.088-0.512 40.448-0.512c22.016 0 36.864 5.12 44.544 15.36 7.68 10.24 11.776 26.624 12.288 49.664v38.912c0 15.36 0 31.744 0.512 49.152 0.512 17.408 0.512 34.816 0.512 52.224v47.104c0 19.456 2.048 34.816 6.144 46.592 4.096 11.776 12.8 17.408 27.136 16.384 10.24 0 22.016 0.512 36.352 1.024s26.624 1.024 37.376 1.024c17.92 0 29.696 4.608 34.304 14.336 5.12 9.728 1.536 22.016-10.752 37.376-12.8 15.872-27.136 35.328-44.032 57.856s-33.792 46.08-51.712 70.656c-17.408 24.576-34.816 48.128-52.224 71.168s-32.256 43.008-45.568 59.392c-11.776 15.36-23.552 23.04-34.304 23.552-9.728-0.512-21.504-7.68-33.28-22.016z',
                                iconStyle: {
                                    normal: {
                                        color: '#164370',
                                        borderWidth: 2,
                                        borderColor: '#164370'
                                    }
                                }
                            },
                            // dataView: {}
                        },
                        right: 15,
                        top: 10
                    },
                    tooltip: {
                        trigger: 'item',
                        axisPointer: {
                            type: 'shadow'
                        },
                    },
                    grid: {
                        left: '10%',
                        right: '10%',
                        bottom: '15%'
                    },
                    xAxis: {
                        name: '年份',
                        type: 'category',
                        data: this.studentdata[back]['time'],
                        boundaryGap: true,
                        nameGap: 30,
                        splitArea: {
                            show: false
                        },
                        axisLabel: {
                            formatter: '{value}'
                        },
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#999'
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: cType+typedw,
                        splitArea: {
                            show: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#999'
                            }
                        }
                    },
                    series: [
                        {
                            name: 'boxplot',
                            type: 'boxplot',
                            data: data.boxData,
                            tooltip: {
                                formatter: function (param) {
                                    return [
                                        'Experiment ' + param.name + ': ',
                                        'upper: ' + param.data[4],
                                        'Q3: ' + param.data[3],
                                        'median: ' + param.data[2],
                                        'Q1: ' + param.data[1],
                                        'lower: ' + param.data[0]
                                    ].join('<br/>')
                                }
                            },
                            itemStyle: {
                                normal: {
                                    // color: '#5dad81',
                                    borderColor: '#5dad81'
                                }
                            }
                        },
                        {
                            name: 'outlier',
                            type: 'scatter',
                            data: data.outliers,
                            itemStyle: {
                                normal: {
                                    color: '#5dad81',
                                    borderColor: '#5dad81'
                                }
                            }
                        }
                    ]
                };
                this.xxcharts = echarts.init(document.getElementById(xxMap));
                this.xxcharts.setOption(option);

                var that = this;
                var resizeTimer = null;
                window.onresize = function () {
                    if (resizeTimer) clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(function () {
                        this.xxcharts = echarts.init(document.getElementById(xxMap));
                        this.xxcharts.setOption(option);

                    }, 100);
                }
            },
            initZXT: function () {
                if(this.zxchart){
                    this.zxchart.clear();
                    this.zxchart.dispose();
                    delete this.zxchart;
                };
                this.selectBoxForPro();
                this.$nextTick(function () {
                    this.zxchart = echarts.init(document.getElementById(zxMap));
                    this.zxchart.setOption(this.zxOptions);

                    var that = this;
                    var resizeTimer = null;
                    window.onresize = function () {
                        if (resizeTimer) clearTimeout(resizeTimer);
                        resizeTimer = setTimeout(function () {
                            this.zxchart = echarts.init(document.getElementById(zxMap));
                            this.zxchart.setOption(that.zxOptions);

                        }, 100);

                    };
                });
            },
            // initGini: function () {
            //     var res = this.getZZToptions();
            //     this.giniOptions = res[1];
            //     this.$nextTick(function () {
            //         this.gcharts = echarts.init(document.getElementById('g12'));
            //         this.gcharts.setOption(this.giniOptions);
            //
            //         var that = this;
            //         var resizeTimer = null;
            //         window.onresize = function () {
            //             if (resizeTimer) clearTimeout(resizeTimer);
            //             resizeTimer = setTimeout(function () {
            //                 that.gcharts = echarts.init(document.getElementById('g12'));
            //                 that.gcharts.setOption(that.giniOptions);
            //
            //             }, 100);
            //         }
            //     });
            // },
            initZFT: function () {
                $(".downFile").on("mouseover",function () {
                    $(".hint").show();
                }).on("mouseout",function () {
                    $(".hint").hide();
                });
                var res = this.getZZToptions();
                var baseOption1 = {//基本配置
                    timeline: {
                        //width: '70%',
                        //height:'5%',
                        axisType: 'category',
                        // y: 0,
                        // realtime: false,
                        // loop: false,
                        checkpointStyle: {
                            color: '#164370',
                            symbolSize: 10,
                            borderWidth: 0
                        },
                        controlStyle: {
                            position: 'right',
                            normal: {
                                color: "#bbb",
                                borderColor: "#164370"
                            }
                        },
                        lineStyle: {
                            color: '#bbb',

                        },
                        autoPlay: true,
                        // currentIndex: 2,
                        playInterval: 2000,
                        // controlStyle: {
                        //     position: 'left'
                        // },
                        data: res[2],
                        label: {
                            show: true,
                            formatter: function (s) {
                                return (new Date(s)).getFullYear();
                            }
                        }
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            // magicType: {
                            //     show: true,
                            //     type: ['bar', 'line']
                            // },
                            saveAsImage: {
                                icon: 'M938.792909 832c4.096 15.872 3.072 31.232-2.56 45.568-5.632 14.336-14.336 27.136-26.624 37.888-11.776 11.264-26.624 19.456-44.032 26.112-17.408 6.144-35.84 9.728-55.808 9.728-125.952 0.512-238.592 1.024-337.92 1.024H131.880909c-24.064 0-45.056-4.096-63.488-12.8-18.432-8.704-32.768-19.456-44.032-32.256-11.264-12.8-18.432-26.624-22.016-41.472s-3.072-28.672 1.536-40.448c4.096-9.216 8.192-18.944 11.776-29.184 3.584-8.704 7.168-18.432 11.776-29.696 4.608-11.264 9.728-22.016 14.848-33.28l37.888-92.16h114.176l-43.008 125.952h644.096l-43.008-125.952h109.056c13.824 33.792 26.624 64.512 37.888 92.16 4.608 11.776 9.216 23.552 13.824 34.816 4.608 11.264 8.704 21.504 12.288 30.72 3.584 9.216 6.656 16.896 9.216 23.04 3.072 6.144 4.096 9.728 4.096 10.24zM436.008909 647.168c-12.8-14.848-27.136-32.768-43.52-54.784s-33.28-44.544-50.688-68.096c-17.408-23.552-34.304-46.592-51.712-69.12-16.896-22.528-32.256-42.496-45.568-58.88-15.36-17.92-21.504-32.768-17.92-44.544 3.584-11.776 14.848-17.408 33.792-17.408 10.752 0.512 25.088 0.512 43.008-0.512s32.768-1.536 45.056-1.536c13.312 0 21.504-4.096 25.088-11.776 3.072-8.192 5.12-18.432 5.12-32.256 0-14.848 0-30.72-0.512-48.64-0.512-17.408-0.512-35.84-0.512-54.272 0-18.432 0-36.864-0.512-54.784-0.512-17.92-0.512-34.816-0.512-50.176 0-6.656 0.512-13.824 1.536-20.992s3.584-13.824 7.168-19.968 9.216-11.264 15.872-14.848 16.384-6.144 28.672-6.144c13.824 0 26.624 0 38.4-0.512s25.088-0.512 40.448-0.512c22.016 0 36.864 5.12 44.544 15.36 7.68 10.24 11.776 26.624 12.288 49.664v38.912c0 15.36 0 31.744 0.512 49.152 0.512 17.408 0.512 34.816 0.512 52.224v47.104c0 19.456 2.048 34.816 6.144 46.592 4.096 11.776 12.8 17.408 27.136 16.384 10.24 0 22.016 0.512 36.352 1.024s26.624 1.024 37.376 1.024c17.92 0 29.696 4.608 34.304 14.336 5.12 9.728 1.536 22.016-10.752 37.376-12.8 15.872-27.136 35.328-44.032 57.856s-33.792 46.08-51.712 70.656c-17.408 24.576-34.816 48.128-52.224 71.168s-32.256 43.008-45.568 59.392c-11.776 15.36-23.552 23.04-34.304 23.552-9.728-0.512-21.504-7.68-33.28-22.016z',
                                iconStyle: {
                                    normal: {
                                        color: '#164370',
                                        borderWidth: 2,
                                        borderColor: '#164370'
                                    }
                                }
                            },
                            // dataView: {}
                        },
                        right: 15,
                        top: 10
                    },
                    calculable: true,
                    tooltip: {},
                    legend: {},
                    calculable: true,
                    grid: {
                        top: 80,
                        bottom: 120,
                    },

                    xAxis: [
                        {
                            type: 'category',
                            //boundrayGap: false,
                            name: '省份',
                        }
                    ],
                    axisLabel: [
                        {
                            show: false,
                            interval: 0,

                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: cType + typedw,
                            axisLabel: {
                                formatter: '{value}'+unit
                            }

                        }
                    ]
                };
                this.zzOptions = {
                    baseOption: baseOption1,
                    options: res[0],
                };

                this.$nextTick(function () {
                    $("#"+selectSort).selectBox().css({
                        "max-width": "130px",
                        "width": "130px"
                    });
                    new SelectBox($("#"+selectSort)).refresh();
                    $("#"+selectSort).on("change",this.rechange);
                    this.bjcharts = echarts.init(document.getElementById(bjMap));
                    this.bjcharts.setOption(this.zzOptions);

                    var that = this;
                    var resizeTimer = null;
                    window.onresize = function () {
                        if (resizeTimer) clearTimeout(resizeTimer);
                        resizeTimer = setTimeout(function () {
                            that.bjcharts = echarts.init(document.getElementById(bjMap));
                            that.bjcharts.setOption(that.zzOptions);

                        }, 100);
                    }
                });
            },
            initMap: function () {
                var res = this.getZZToptions();
                var baseOption2 = {//基本配置
                    timeline: {
                        show: false,
                        // y: 0,
                        bottom: 0,
                        checkpointStyle: {
                            color: '#164370',
                            symbolSize: 10,
                            borderWidth: 2,
                            borderColor: '#bbb'
                        },
                        controlStyle: {
                            position: 'right'
                        },
                        lineStyle: {
                            color: '#bbb',

                        },
                        axisType: 'category',
                        // realtime: false,
                        // loop: false,
                        autoPlay: false,
                        // currentIndex: 2,
                        playInterval: 1500,
                        // controlStyle: {
                        //     position: 'left'
                        // },
                        data: res[2],
                        label: {
                            formatter: function (s) {
                                return (new Date(s)).getFullYear();
                            }
                        }
                    },
                    title: {
                        // subtext: '数据',
                        left: '20',
                        textStyle: {
                            fontStyle: 'normal',
                            fontSize: 16
                        }
                    },
                    toolbox: {
                        feature: {
                            
                            saveAsImage: {
                                icon: 'M938.792909 832c4.096 15.872 3.072 31.232-2.56 45.568-5.632 14.336-14.336 27.136-26.624 37.888-11.776 11.264-26.624 19.456-44.032 26.112-17.408 6.144-35.84 9.728-55.808 9.728-125.952 0.512-238.592 1.024-337.92 1.024H131.880909c-24.064 0-45.056-4.096-63.488-12.8-18.432-8.704-32.768-19.456-44.032-32.256-11.264-12.8-18.432-26.624-22.016-41.472s-3.072-28.672 1.536-40.448c4.096-9.216 8.192-18.944 11.776-29.184 3.584-8.704 7.168-18.432 11.776-29.696 4.608-11.264 9.728-22.016 14.848-33.28l37.888-92.16h114.176l-43.008 125.952h644.096l-43.008-125.952h109.056c13.824 33.792 26.624 64.512 37.888 92.16 4.608 11.776 9.216 23.552 13.824 34.816 4.608 11.264 8.704 21.504 12.288 30.72 3.584 9.216 6.656 16.896 9.216 23.04 3.072 6.144 4.096 9.728 4.096 10.24zM436.008909 647.168c-12.8-14.848-27.136-32.768-43.52-54.784s-33.28-44.544-50.688-68.096c-17.408-23.552-34.304-46.592-51.712-69.12-16.896-22.528-32.256-42.496-45.568-58.88-15.36-17.92-21.504-32.768-17.92-44.544 3.584-11.776 14.848-17.408 33.792-17.408 10.752 0.512 25.088 0.512 43.008-0.512s32.768-1.536 45.056-1.536c13.312 0 21.504-4.096 25.088-11.776 3.072-8.192 5.12-18.432 5.12-32.256 0-14.848 0-30.72-0.512-48.64-0.512-17.408-0.512-35.84-0.512-54.272 0-18.432 0-36.864-0.512-54.784-0.512-17.92-0.512-34.816-0.512-50.176 0-6.656 0.512-13.824 1.536-20.992s3.584-13.824 7.168-19.968 9.216-11.264 15.872-14.848 16.384-6.144 28.672-6.144c13.824 0 26.624 0 38.4-0.512s25.088-0.512 40.448-0.512c22.016 0 36.864 5.12 44.544 15.36 7.68 10.24 11.776 26.624 12.288 49.664v38.912c0 15.36 0 31.744 0.512 49.152 0.512 17.408 0.512 34.816 0.512 52.224v47.104c0 19.456 2.048 34.816 6.144 46.592 4.096 11.776 12.8 17.408 27.136 16.384 10.24 0 22.016 0.512 36.352 1.024s26.624 1.024 37.376 1.024c17.92 0 29.696 4.608 34.304 14.336 5.12 9.728 1.536 22.016-10.752 37.376-12.8 15.872-27.136 35.328-44.032 57.856s-33.792 46.08-51.712 70.656c-17.408 24.576-34.816 48.128-52.224 71.168s-32.256 43.008-45.568 59.392c-11.776 15.36-23.552 23.04-34.304 23.552-9.728-0.512-21.504-7.68-33.28-22.016z',
                                iconStyle: {
                                    normal: {
                                        color: '#164370',
                                        borderWidth: 2,
                                        borderColor: '#164370',
                                        textPosition: 'right'
                                    }
                                }
                            },
                            // dataView: {}
                        },
                        right: 15,
                        top: 0
                    },
                    tooltip: {},
                    legend: {},
                    calculable: true,
                    grid: {
                        top: 80,
                        bottom: 100
                    },
                    series: [
                        {
                            name: 'bj',
                            type: 'map',
                            mapType: "china",
                            selectedMode: 'single',
                        },

                    ],
                    visualMap: {
                        seriesIndex: 0,
                        min: 0,
                        max: 2500,
                        left: 'right',
                        top: 30,
                        text: ['高', '低'],           // 文本，默认为数值文本
                        calculable: true,
                        orient: 'horizontal'
                    },
                }


                this.mapOptions = {
                    baseOption: baseOption2,
                    options: res[4],
                };
                this.$nextTick(function () {
                    this.chinacharts = echarts.init(document.getElementById(chinaMap));
                    this.chinacharts.setOption(this.mapOptions);

                    var that = this;
                    var resizeTimer = null;
                    window.onresize = function () {
                        if (resizeTimer) clearTimeout(resizeTimer);
                        resizeTimer = setTimeout(function () {
                            that.chinacharts = echarts.init(document.getElementById(chinaMap));
                            that.chinacharts.setOption(that.mapOptions);

                        }, 100);
                    }
                });
            },
            sortbytpye: function (vlist, sorttype) {
                var len = vlist.length;
                var xlabel = [];
                var xdata = [];
                var res;
                if (sorttype == 'GDP') {
                    vlist.sort(function (a, b) {
                        return b.GDP - a.GDP
                    });

                } else if (sorttype == 'Value') {
                    vlist.sort(function (a, b) {
                        return b.Value - a.Value
                    });

                } else {
                    vlist.sort(function (a, b) {
                        return a.name.localeCompare(b.name)
                    });
                }

                for (var i = 0; i < len; i++) {
                    if (i % 2 == 0) {
                        xlabel.push(vlist[i].name);
                    }
                    else {
                        xlabel.push('\r\n' + vlist[i].name);
                    }
                    xdata.push(vlist[i].Value.toFixed(2));


                }
                return [xlabel, xdata];
            },
            gini: function (List) {
                List.push([0, 0, 0]);
                List = List.sort(function (x, y) {
                    return x[2] - y[2];
                });
                var len = List.length;
                var v = 0;
                var h = 0;
                var s1 = 0;
                var s2 = 0;
                var temp = 0;
                for (var i = 1; i < len; i++) {
                    h = h + List[i][0];
                    s2 = s1 + List[i][1];
                    //temp= (List[i][1]+List[i-1][1])*List[i][0]
                    temp = (s2 + s1) * List[i][0];
                    s1 = s2;
                    v = v + temp;
                }
                ;
                //v=1-v/(h*List[len-1][1])
                v = 1 - v / (h * s1);
                return v.toFixed(3);
            },
            getGDPdata: function (data1,data2) {
                var mydata = [];
                var len = data1.length;
                var temp = 0;
                for (var i = 0; i < len; i++) {
                    // var a = data[i][type1];
                    // var b = data[i][type2];
                    // var v = a / b;
                    mydata.push(
                        {
                            'name': data1[i],
                            'value': data2[i],
                        }
                    );
                }
                return mydata;
            },
            ordervalue: function (a,j) {
                for(var t=0;t<j+1;t++){
                    for(var i=t+1;i<this.prosnum;i++){
                        if(a[t]<a[i]){
                            var x=a[t]
                            a[t]=a[i]
                            a[i]=x
                        }
                    }
                }
                return a[j]
            },
            getZZToptions: function () {
                var options1 = [];       // 折柱图
                var options2 = [];        // Gini图
                var options3 = [];        // 中国地图
                var year;
                var xlabel;         // 横坐标 省份
                var xdata;         // 纵坐标 折柱图
                var years = [];
                var pros = [];
                var vlist = [];   //折柱图value List
                var alist=[];
                var blist=[];
                var gList = [];            // Gini图value List
                var giniarr = [];          // Gini图data list
                var blist2=[];
                var xlabel;
                var  xdata;
                var propotion=[];
                var gdplist1=[];
                var gdplist2=[];
                var gdplist3=[];
                var gdplist4=[];
                var gdplist5=[];
                var propotion=[];
                var vlist2=[];
                for (var i = 0; i < this.yearsnum; i++) {            //年份大循环
                    year = this.studentdata[back]["time"][i];
                    years.push(year);
                    vlist = [];
                    pros = [];
                    gList = [];
                    gdplist1=[]
                    gdplist2=[]
                    gdplist3=[]
                    gdplist4=[]
                    gdplist5=[]
                    blist2=[]
                    propotion=[]
                    vlist2=[]
                    for (var h = 0; h < this.prosnum; h++) {
                        vlist2.push(this.studentdata[back]["data"][i][h][type1])
                    }                    //vlist里是一个gdp数组

                    for (var j=0;j<this.prosnum;j++){
                        alist.push(this.ordervalue(vlist2,j))
                    }                      //以gdp为标准进行排序

                    for (var j=0;j<this.prosnum;j++){
                        for (var h=0;h<this.prosnum;h++){
                            if(this.studentdata[back]["data"][i][h][type1]==alist[j]){
                                pros.push(this.studentdata[back]["data"][i][h]["name"])
                            }
                        }
                    }                    //以gdp的标准为省份排序

                    for (var j=0;j<this.prosnum;j++){
                        for (var h=0;h<this.prosnum;h++){
                            if(this.studentdata[back]["data"][i][h]["name"]==pros[j]){
                                gdplist1.push(this.studentdata['gaozhong']["data"][i][h][type3])
                                gdplist2.push(this.studentdata['chuzhong']["data"][i][h][type4])
                                blist[j]=(gdplist1[j]/gdplist2[j]*100).toFixed(2)
                            }
                        }
                    }                    //再以省份为标准赋studentdata的值


                    for (var h=0;h<this.prosnum;h++){
                        gdplist4.push(this.studentdata[back3]["data"][i][h][type3])
                        gdplist5.push(this.studentdata[back2]["data"][i][h][type4])
                        blist2[h]=gdplist4[h]/gdplist5[h]*100
                        if(this.ps == 1){
                            vlist.push({
                                'name': this.studentdata[back]["data"][i][h]["name"],
                                'GDP': this.studentdata[back]["data"][i][h][type1] || 0,
                                'Value': blist2[h]
                            })
                        }else{
                            vlist.push({
                                'name': this.studentdata[back]["data"][i][h]["name"],
                                'GDP': this.studentdata[back]["data"][i][h][type1] || 0,
                                'Value': blist2[h] * 100
                            })
                        }

                    }     //vlist里是一个元素为字典的数组
                    [xlabel, xdata] = this.sortbytpye(vlist, $(".first-select").val());

                    for (var j = 0; j < this.prosnum; j++) {
                        //propotion[j]=studentdata[back]["data"][i][j][type3]/studentdata[back]["data"][i][j][type4]
                        // gList.push([this.studentdata[back]["data"][i][j][type3], this.studentdata[back]["data"][i][j][type4], this.studentdata[back]["data"][i][j][type2]])
                        // propotion[j]=this.studentdata[back]["data"][i][j][type3]*this.studentdata[back]["data"][i][j][type2];
                        gList.push([this.studentdata[back]["data"][i][j][type3],this.studentdata[back]["data"][i][j][type4],this.studentdata[back]["data"][i][j][type2]]);
                        //第一个是student，第二个是money，第三个是proption
                    }
                    giniarr.push(this.gini(gList));  //算基尼系数的

                    var opt = {
                        //backgroundColor:"rgba(64,74,89,0.6)",
                        tooltip: {
                            trigger: 'axis'
                        },
                        title: {
                            text: cType + '直方图',
                            left: "left",
                            textStyle: {
                                fontStyle: 'normal',
                                fontSize: 16
                            }
                        },
                        legend: {
                            x: 'right',
                            data: cType,
                        },
                        calculable: true,
                        // grid: {
                        //     left: '5%',
                        //     right: '4%',
                        //     containLabel: true
                        // },
                        xAxis: [
                            {
                                type: 'category',
                                //boundrayGap: false,
                                data: xlabel,
                                interval: 1,
                                axisLabel: {
                                    interval: 0,
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#999'
                                    }
                                }
                            }
                        ],
                        yAxis: {
                            nameTextStyle: {
                                color: '#999'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#999'
                                }
                            }
                        },
                        series: [
                            {
                                name: cType+'（元）',
                                type: 'bar',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'top'
                                    }
                                },
                                barWidth: 15,
                                itemStyle: {
                                    normal: {
                                        color: '#5dad81'
                                    }
                                },
                                data: xdata,
                            }
                        ],

                    }
                    options1.push(opt);

                    var opt2 = {
                        //backgroundColor:"rgba(64,74,89,0.6)",
                        title: {
                            text: year.toString() + '年全国各省' + cType + '分布图',
                            left: "left",
                            textStyle: {
                                fontStyle: 'normal',
                                fontSize: 16
                            }
                        },
                        dataRange: {
                            min: min,
                            max: max,
                            text: ['高', '低'],           // 文本，默认为数值文本
                            calculable: true,
                            x: 'right',
                            text: ['高', '低'],
                        },
                        tooltip: {
                            trigger: "item",
                            formatter: '{b}</br>{c}'
                        },
                        series: [
                            {
                                name: '数据名称',
                                type: 'map',
                                mapType: 'china',
                                selectedMode: 'single',
                                itemStyle: {
                                    normal: {label: {show: true}},
                                    emphasis: {label: {show: true}}
                                },
                                data: this.getGDPdata(pros,blist),

                            }
                        ],
                    }
                    options3.push(opt2)
                }

                options2 = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    title: {
                        text: cType + '-Gini系数图',
                        left: "left",
                        textStyle: {
                            fontStyle: 'normal',
                            fontSize: 16
                        }
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {
                                textPosition: 'right',
                                icon: 'M938.792909 832c4.096 15.872 3.072 31.232-2.56 45.568-5.632 14.336-14.336 27.136-26.624 37.888-11.776 11.264-26.624 19.456-44.032 26.112-17.408 6.144-35.84 9.728-55.808 9.728-125.952 0.512-238.592 1.024-337.92 1.024H131.880909c-24.064 0-45.056-4.096-63.488-12.8-18.432-8.704-32.768-19.456-44.032-32.256-11.264-12.8-18.432-26.624-22.016-41.472s-3.072-28.672 1.536-40.448c4.096-9.216 8.192-18.944 11.776-29.184 3.584-8.704 7.168-18.432 11.776-29.696 4.608-11.264 9.728-22.016 14.848-33.28l37.888-92.16h114.176l-43.008 125.952h644.096l-43.008-125.952h109.056c13.824 33.792 26.624 64.512 37.888 92.16 4.608 11.776 9.216 23.552 13.824 34.816 4.608 11.264 8.704 21.504 12.288 30.72 3.584 9.216 6.656 16.896 9.216 23.04 3.072 6.144 4.096 9.728 4.096 10.24zM436.008909 647.168c-12.8-14.848-27.136-32.768-43.52-54.784s-33.28-44.544-50.688-68.096c-17.408-23.552-34.304-46.592-51.712-69.12-16.896-22.528-32.256-42.496-45.568-58.88-15.36-17.92-21.504-32.768-17.92-44.544 3.584-11.776 14.848-17.408 33.792-17.408 10.752 0.512 25.088 0.512 43.008-0.512s32.768-1.536 45.056-1.536c13.312 0 21.504-4.096 25.088-11.776 3.072-8.192 5.12-18.432 5.12-32.256 0-14.848 0-30.72-0.512-48.64-0.512-17.408-0.512-35.84-0.512-54.272 0-18.432 0-36.864-0.512-54.784-0.512-17.92-0.512-34.816-0.512-50.176 0-6.656 0.512-13.824 1.536-20.992s3.584-13.824 7.168-19.968 9.216-11.264 15.872-14.848 16.384-6.144 28.672-6.144c13.824 0 26.624 0 38.4-0.512s25.088-0.512 40.448-0.512c22.016 0 36.864 5.12 44.544 15.36 7.68 10.24 11.776 26.624 12.288 49.664v38.912c0 15.36 0 31.744 0.512 49.152 0.512 17.408 0.512 34.816 0.512 52.224v47.104c0 19.456 2.048 34.816 6.144 46.592 4.096 11.776 12.8 17.408 27.136 16.384 10.24 0 22.016 0.512 36.352 1.024s26.624 1.024 37.376 1.024c17.92 0 29.696 4.608 34.304 14.336 5.12 9.728 1.536 22.016-10.752 37.376-12.8 15.872-27.136 35.328-44.032 57.856s-33.792 46.08-51.712 70.656c-17.408 24.576-34.816 48.128-52.224 71.168s-32.256 43.008-45.568 59.392c-11.776 15.36-23.552 23.04-34.304 23.552-9.728-0.512-21.504-7.68-33.28-22.016z',
                                iconStyle: {
                                    normal: {
                                        color: '#164370',
                                        borderWidth: 2,
                                        borderColor: '#164370'
                                    }
                                }
                            },
                        },
                        right: 15,
                        top: 10
                    },
                    grid: {
                        left: '5%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        //boundrayGap: false,
                        data: years,
                        axisLine: {
                            lineStyle: {
                                color: '#999'
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: 'Gini系数',
                        axisLine: {
                            lineStyle: {
                                color: '#999'
                            }
                        }
                    },
                    series: [
                        {
                            name: 'Gini系数',
                            type: 'line',
                            symbol: 'circle',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#5dad81'
                                }
                            },
                            data: giniarr,

                        }
                    ]
                }
                return [options1, options2, years, giniarr, options3];
            },
            rechange: function () {
                var nres = this.getZZToptions();
                this.zzOptions.options = nres[0];

                this.bjcharts.clear();
                this.bjcharts.dispose();
                delete this.bjcharts;
                this.bjcharts = echarts.init(document.getElementById(bjMap));
                this.bjcharts.setOption(this.zzOptions);
            },
            selectBoxForPro: function () {
                this.chooseRates = [];
                this.rates = [];
                for (var i = 0; i < this.prosnum1; i++) {
                    var temp = {}
                    temp['name'] = this.studentdata1[back3]['data'][0][i]['name']
                    temp['value'] = 0
                    this.rates.push(temp)
                };
                this.rates[31]['value'] = 1;
                this.chooseRates.push(this.rates[31]);
                var res = this.getseries();
                var dseries = res[0];
                var nseries = res[1];
                this.zxOptions = {
                    title: {
                        text: cType+ '折线图\r\n',
                        left: 'left',
                        textStyle: {
                            fontStyle: 'normal',
                            fontSize: 16
                        }
                    },
                    toolbox: {
                        feature: {
                            // magicType: {       // 折线和柱状图
                            //     type: ['line', 'bar']
                            // },
                            saveAsImage: { // 下载
                                icon: 'M938.792909 832c4.096 15.872 3.072 31.232-2.56 45.568-5.632 14.336-14.336 27.136-26.624 37.888-11.776 11.264-26.624 19.456-44.032 26.112-17.408 6.144-35.84 9.728-55.808 9.728-125.952 0.512-238.592 1.024-337.92 1.024H131.880909c-24.064 0-45.056-4.096-63.488-12.8-18.432-8.704-32.768-19.456-44.032-32.256-11.264-12.8-18.432-26.624-22.016-41.472s-3.072-28.672 1.536-40.448c4.096-9.216 8.192-18.944 11.776-29.184 3.584-8.704 7.168-18.432 11.776-29.696 4.608-11.264 9.728-22.016 14.848-33.28l37.888-92.16h114.176l-43.008 125.952h644.096l-43.008-125.952h109.056c13.824 33.792 26.624 64.512 37.888 92.16 4.608 11.776 9.216 23.552 13.824 34.816 4.608 11.264 8.704 21.504 12.288 30.72 3.584 9.216 6.656 16.896 9.216 23.04 3.072 6.144 4.096 9.728 4.096 10.24zM436.008909 647.168c-12.8-14.848-27.136-32.768-43.52-54.784s-33.28-44.544-50.688-68.096c-17.408-23.552-34.304-46.592-51.712-69.12-16.896-22.528-32.256-42.496-45.568-58.88-15.36-17.92-21.504-32.768-17.92-44.544 3.584-11.776 14.848-17.408 33.792-17.408 10.752 0.512 25.088 0.512 43.008-0.512s32.768-1.536 45.056-1.536c13.312 0 21.504-4.096 25.088-11.776 3.072-8.192 5.12-18.432 5.12-32.256 0-14.848 0-30.72-0.512-48.64-0.512-17.408-0.512-35.84-0.512-54.272 0-18.432 0-36.864-0.512-54.784-0.512-17.92-0.512-34.816-0.512-50.176 0-6.656 0.512-13.824 1.536-20.992s3.584-13.824 7.168-19.968 9.216-11.264 15.872-14.848 16.384-6.144 28.672-6.144c13.824 0 26.624 0 38.4-0.512s25.088-0.512 40.448-0.512c22.016 0 36.864 5.12 44.544 15.36 7.68 10.24 11.776 26.624 12.288 49.664v38.912c0 15.36 0 31.744 0.512 49.152 0.512 17.408 0.512 34.816 0.512 52.224v47.104c0 19.456 2.048 34.816 6.144 46.592 4.096 11.776 12.8 17.408 27.136 16.384 10.24 0 22.016 0.512 36.352 1.024s26.624 1.024 37.376 1.024c17.92 0 29.696 4.608 34.304 14.336 5.12 9.728 1.536 22.016-10.752 37.376-12.8 15.872-27.136 35.328-44.032 57.856s-33.792 46.08-51.712 70.656c-17.408 24.576-34.816 48.128-52.224 71.168s-32.256 43.008-45.568 59.392c-11.776 15.36-23.552 23.04-34.304 23.552-9.728-0.512-21.504-7.68-33.28-22.016z',
                                iconStyle: {
                                    normal: {
                                        color: '#164370',
                                        borderWidth: 2,
                                        borderColor: '#164370'
                                    }
                                }
                            },
                            // dataView: {}       // 数据视图
                        },
                        right: 15,
                        top: 10
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c}'
                    },
                    legend: {
                        x: 'right',
                        bottom: '10%',
                        data: nseries,
                        orient: 'vertical',
                    },
                    xAxis: {
                        type: 'category',
                        name: '年份',
                        splitLine: {show: false},
                        data: this.studentdata1[back3]['time'],
                    },
                    grid: {
                        left: '3%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        name: cType + typedw,
                    },
                    series: dseries,
                };
            },
            getseries: function () {
                var res;
                var nseries = [],
                    dseries = [];
                for (var i = 0; i < this.prosnum1; i++) {
                    if (this.rates[i]['value'] == 1) {
                        nseries.push(this.studentdata1[back3]['data'][0][i]['name']);
                        var pdata = [];
                        for (var j = 0; j < this.yearsnum1; j++) {
                            var tmp = this.studentdata1[back3]['data'][j][i][cType];
                            tmp = tmp.toFixed(2);
                            if (this.studentdata1[back3]['data'][j][i][cType] == 0) {
                                tmp = null;
                            };
                            pdata.push(tmp);
                        }
                        dseries.push({
                            name: this.studentdata1[back3]['data'][0][i]['name'],    // 省份
                            type: 'line',
                            data: pdata,
                            symbol: 'circle',
                            // lineStyle: {
                            //     normal: {
                            //         color: '#5dad81'
                            //     }
                            // }
                        });
                    }
                }
                res = [dseries, nseries];  // 纵轴 ：所有年份该省的人均GDP ；横轴:  选择的省
                return res;
            },
            selectCity: function (obj) {
                if(obj && this.chooseRates.indexOf(obj) != -1){
                    return;
                };
                obj.value = 1;
                this.chooseRates.push(obj);
            },
            allSelect: function () {
                for(var i=0; i<this.rates.length; i++){
                    this.rates[i].value = 1;
                };
                this.chooseRates = this.rates;
            },
            removeCity: function (obj) {
                var index = this.chooseRates.indexOf(obj);
                if(obj.value && index == -1){
                    return;
                };
                obj.value = 0;
                this.chooseRates.splice(index,1);
            },
            allRemove: function () {
                this.chooseRates = [];
                for(var i=0; i<this.rates.length; i++){
                    this.rates[i].value = 0;
                }
            },
            toggle: function () {
                $(".select-content").toggle();
            },
            selectPhase: function (id) {
                this.ps = id;
                if(id == 1){
                    cType="小升初升学率";
                    back3="chuzhong";
                    min=90;
                    max=100;
                    unit='%';
                    bjMap="bjmap11";
                    zxMap="zx_map11";
                    xxMap="xxmap11";
                    chinaMap = 'chinamap11';
                    selectSort='selectbox_sort11';
                    this.chooseNav=1;
                    this.selectNav(1);
                }else{
                    cType="初升高升学率";
                    back3="gaozhong";
                    min=30;
                    max=80;
                    unit='';
                    bjMap="bjmap22";
                    zxMap="zx_map22";
                    xxMap="xxmap22";
                    chinaMap = 'chinamap22';
                    selectSort='selectbox_sort22';
                    this.chooseNav=1;
                    this.selectNav(1);
                }
            },
            getseries1: function () {
                var list = [];
                for(var i=0;i<this.prosnum;i++){
                    var temp={};
                    temp['name']=this.studentdata1[back]['data'][0][i]['name'];
                    temp['value']=1;
                    list.push(temp);
                }
                // list[31]['value']=0;
                var dseries=[];
                for (var j=0;j<this.yearsnum;j++){
                    var pdata=[];
                    for(var i=0;i<this.prosnum;i++) {
                        if (list[i]['value']==1) {
                            var tmp=this.studentdata1[back]['data'][j][i]['人均GDP'];
                            tmp=tmp.toFixed(2);
                            if (tmp>0){
                                pdata.push(tmp);
                            }
                        }
                    }
                    dseries.push(pdata);

                }
                return dseries;
            }
        },
        computed: {
            zxt_selected: function () {
                return defaultSel + '('+this.chooseRates.length+')';
            },
            filterRates: function () {
                var self = this;
                if(this.searchPro == ''){
                    return this.rates;
                };
                return self.rates.filter(function (item) {
                    return item.name.indexOf(self.searchPro)!=-1;
                })
            }
        },
        mounted: function () {
            this.requestAllData("json/alldata.json", 1);
            this.requestAllData("json/alldata1.json", 2);
            this.selectNav(1);
        }
    });


})