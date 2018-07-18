<template>
	<transition
    name="fadeIn"
    enter-active-class="fadeIn"
    leave-active-class="fadeOut">
		<div class="salert-box"
			v-show="visible"
		  :class="[type === 0 ? 'success' : 'error']">{{message}}</div>
	</transition>
</template>

<script>
export default {
	name: 'salert-template',
	data () {
		return {
			visible: false,
			type: 1,
			message: ''
		}
	}
}
</script>

<style>
.salert-box {
	position: fixed;
	top: 40%;
	left: 50%;
	width: 260px;
	margin-left: -140px;
	padding: 5px 10px;
	line-height: 26px;
	font-size: 12px;
	color: #fff;
	text-align: center;
	display: block;
	border-radius: 5px;
	background-color: #ccc;
	z-index: 2147483647;
}
.salert-box.success {
	color: #155724;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  box-shadow: 0 0 8px #c3e6cb;
}
.salert-box.error {
	color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  box-shadow: 0 0 8px #f5c6cb;
}
.fadeIn,
.fadeOut {
  animation-duration: 0.5s;
  animation-fill-mode: both;
}
.fadeIn {
  animation-name: fadeIn;
}
.fadeOut {
  animation-name: fadeOut;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
