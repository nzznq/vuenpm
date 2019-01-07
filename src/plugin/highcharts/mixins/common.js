
class mixin {
	constructor(){
		this.methods = {
			base(){
				return {
					chart:{ // 类型与边距
//						marginTop: '70',  // 上边距
//			            marginLeft: '60',  // 左边距
//			            marginRight:'30' ,  // 右边距
//			            marginBottom:'50' ,  // 下边距
			            backgroundColor: 'transparent',	//背景色
					},
					title: { //标题
						text: '',
			            y:20, 
			            style:{ // 标题字体大小
			            	fontSize:16,
			            	color:'#333'
			            }
			        },
			        credits: { //去掉版权信息
			            enabled: false  
			        },
			        legend: { //图例
						enabled: true,
						align: 'center',
	        			verticalAlign: 'top',
						layout: 'horizontal', // 图例显示状态
			            floating: false,   // 是否浮动
			            squareSymbol: true,
			            symbolRadius: 0, //正方形图列
			            itemStyle: { // 图列字体大小
			            	fontSize: 14,
			            	color: '#999999',
			            }
			        },
			        xAxis: { //x轴设置
						crosshair: true,  // 十字准心线
			            tickWidth: 0, // X轴刻度线宽度
			            labels: {
							style: {
								color: '#999999',
								fontSize: 14
							}
						},
			        },
			        yAxis: { //y轴设置
						min: 0, // y轴刻度最小从0开始
			            gridZIndex: -1,
			            lineWidth: 1,
			            title: { // y轴单位名称  字体大小  位置  显示状态
			                text: '',
			                align: 'high',
			                rotation: 0,
			                offset: 0,
			                y: -20,
			                x: 30,
			                style:{ // 单位字体大小
				            	fontSize: 14
				            }
			            },
			            labels: {
							style: {
								color: '#999999',
								fontSize: 14
							}
						}
			        },
			        plotOptions: {
				        series: {
				            borderWidth:0,
				            dataLabels: {
								enabled: true,
								style: {
									fontWeight: 'none',
									color: '#999',
									textOutline: "0px 0px contrast"
								}
							}
				        }
				    },
			        series: []
				};
			},
			lineChart(){	//折线或者曲线
				return{
					
				}
			},
			columnChart(){	//柱状图
				return {
					
				}
			}
		}
	}
}



export default new mixin();
