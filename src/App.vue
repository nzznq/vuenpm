<template>
	<div id="app">
		<lw-btn>按钮</lw-btn>
		<div class="box">
			<h-chart :option="option"></h-chart>
		</div>
	</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      	option: {
			plotOptions: {
				series: {
					label: {
						connectorAllowed: false
					},
					pointStart: 2010
				}
			},
			series: [{
				name: '安装，实施人员',
				data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
			}, {
				name: '工人',
				data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
			}]
		}
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 30px;
}
.box{
	height: 500px;
}
</style>
