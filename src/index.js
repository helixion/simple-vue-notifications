import component from './components/Notifications.vue';
import {
	removeNotification,
	addNotification
} from './notifications';



export function install(Vue, options) {

	if (install.installed) {
		return;
	}

	install.installed = true;

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
