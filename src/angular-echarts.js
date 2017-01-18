/**
 * 
 */
'use strict';
demoModule.directive('ngEcharts', function() {
	return {
		restrict: 'EA',
		replace: true,
		scope: {
			id: '@',
		},
		link: function($scope, element, attrs, controller) {
			var option = {
				legend: {
					padding: 5,
					itemGap: 10,
					data: ['ios', 'android']
				},
				tooltip: {
					trigger: 'item',
				},
				xAxis: [{
					type: 'category', // 坐标轴类型，横轴默认为类目轴，数值轴则参考yAxis说明
					data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
				}],
				yAxis: [{
					type: 'value',
					boundaryGap: [0.1, 0.1],
					splitNumber: 4
				}],
				series: [{
					name: 'ios',
					type: 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
					data: [112, 23, 45, 56, 233, 343, 454, 89, 343, 123, 45, 123]
				},
				{
					name: 'android',
					type: 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
					data: [45, 123, 145, 526, 233, 343, 44, 829, 33, 123, 45, 13]
				}]
			};
			var myChart = echarts.init(document.getElementById($scope.id));
			myChart.setOption(option);
		}
	};
});