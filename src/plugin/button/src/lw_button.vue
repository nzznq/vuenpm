<template>
  <button
    class="lw-btn"
    type="button"
    :class="[
      size ? 'lw-btn-' + size : '',
      color ? 'lw-btn-' + color : ''
    ]"
  >
  <slot></slot>
  </button>
  
</template>
<script>
  export default {
    name: 'lw-btn',
    props: {	//传递数据
	    size: {
	      	type: String,
	        default: 'sm'
	    },
     	color: {
     			type: String,
	        default: 'success'
     	}
    }

  };
</script>
<style lang="scss" scoped="scoped">
	$font-color: #fff;
	.lw-btn{
		display: inline-block;
    cursor: pointer;
    border: 1px solid #fff;
	}
	.lw-btn-xs{
		padding: 2px 5px;
	}
	.lw-btn-sm{
		padding: 5px 10px;
	}
	.lw-btn-lg{
		padding: 10px 16px;
	}
	.lw-btn-success{
  	color: $font-color;
    background-color: #5cb85c;
    border-color: #4cae4c;
	}
	.lw-btn-danger{
    color: $font-color;
    background-color: #d9534f;
    border-color: #d43f3a;
	}
	.lw-btn-warning{
 		color: $font-color;
    background-color: #ec971f;
    border-color: #d58512;
	}
	
</style>