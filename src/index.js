import component from './components/Notifications.vue';
import {
	removeNotification,
	addNotification
} from './notifications';



export default function install(Vue, options) {

	if (install.installed) {
		return;
	}

	install.installed = true;
	//global is true by default.
	const global = (typeof options == 'object') ? options.global : true;

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
