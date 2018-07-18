import SalertTemplate from './Salert'

const Salert = {
	install: function(Vue){
		const SalertConstructor = Vue.extend(SalertTemplate)
		const instance = new SalertConstructor()
		instance.$mount(document.createElement('div'))
		document.body.appendChild(instance.$el)

		Vue.prototype.$salert = (msg = '未知问题', type = 1, duration = 1500) => {
			instance.message = msg
			instance.type = type
			instance.visible = true

			setTimeout(() => {
				instance.visible = false
			}, duration)
		}
	}
}

export default Salert
