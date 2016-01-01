/**
 *
 *
 *
 */

var React  = require('react');
//var render = require('react-dom').render;
var UserStore = require('../../common/stores/user-stores');
var browserHistory = require('react-router').browserHistory;

var AboutMain = React.createClass({

    componentDidMount: function() {
        this.showChart();
    },

    render: function() {
        if (!UserStore.isLogin()) {
            //alert('该页面需要登陆之后才能浏览，现在跳转到登陆页面。')
            //window.location.href = '/auth'
            //return;
            //console.log(browserHistory);
            //console.log(browserHistory.history.go);
            //console.log('about====>');
            //browserHistory.push('/article');
        }
        var divStyle = {
            height: 400
        };

        return (
            <div id="chart" style={divStyle}>
                正在加载中。。。
            </div>
        );
    },

    showChart: function() {
        // 路径配置
        require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('chart')); 
                
                var option = {
                    tooltip: {
                        show: true
                    },
                    legend: {
                        data:['销量']
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            "name":"销量",
                            "type":"bar",
                            "data":[5, 20, 40, 10, 10, 20]
                        }
                    ]
                };
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );
    }
});

module.exports = AboutMain;
