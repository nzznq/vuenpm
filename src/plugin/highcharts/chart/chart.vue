<template>
    <div class="lw-chart"></div>
</template>
<script>
import HighCharts from 'highcharts'
import {deepObjectMerge} from 'lwcommon'
import commonMixin from '../mixins/common.js'
import defaultOptionsZhCn from '../utils/highcharts-zh_CN.js'
import '../utils/variable-pie.js'
export default {
	name: 'h-chart',
	mixins: [commonMixin],
	props: {
	    option: null
	},
	methods:{
		load(){
			let settings =  deepObjectMerge(this.base(), this.option);
			if(settings.series.length <= 1){	//去掉单一数据图例
				settings.legend.enabled = false
			}
			HighCharts.setOptions(defaultOptionsZhCn);
	   	 	let chart = HighCharts.chart(this.$el,settings);
	   	 	this.$emit('ready',chart);
		}
	},
	mounted() {
		this.load();
	},
	watch: {
	    option:{
	    	handler (val, oldVal) {
	    		this.load();
	    	},
	    	deep:true
	    }
	   
	}
}
</script>
<style scoped>
.lw-chart{
  width:100%;
  height:100%;
}
</style>