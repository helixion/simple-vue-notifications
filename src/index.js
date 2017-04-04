import component from './components/Notifications.vue';
import {
	removeNotification,
	addNotification
} from './notifications';



export default function install(Vue, options) {

	const global = (typeof options == 'object') ? options.global : null;

	Object.defineProperty(Vue.prototype, '$notification', {
		get() {
			return {
				removeNotification: removeNotification.bind(this),
				addNotification: addNotification.bind(this)
			};
		}
	});

	Object.defineProperty(Vue.prototype, '$notes', {
		get() {
			return this.$root.notes;
		}
	});

	if (typeof global == 'boolean' && global) {
		Vue.component('app-notifications', component);
	}

}

if (window !== 'undefined' && window.vue) {
	window.Vue.use(install);
}
