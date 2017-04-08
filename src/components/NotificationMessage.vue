<template>
	<div :class="containerClasses">
  		<div class="close" @click.once="close">&times;</div>
		<div :class="iconClasses">
		    <i :class="type" aria-hidden="true"></i>
		</div>
		<div class="note-body">
			<template v-if="notification.htmlSafe">
			    <div v-html="notification.message"></div>
			</template>
			<template v-else>{{notification.message}}</template>
		</div>
  		<div class="note-progress">
    		<div :class="progressBarClasses" :style="{ width: progress + '%'}"></div>
    	</div>
  	</div>
</template>

<script>
export default {

	name: 'notification-message',

	created() {
		const interval = (this.duration / 100);

			if (!this.timer) {

				this.timer = setInterval(() => {

					if (this.progress === 100) {
						this.close();
					} else {
						this.progress++;
					}
					
				}, interval);
			}
		
	},

	props: {
		duration: {
			type: Number,
			required: true
		},
		notification: {
			type: Object,
			required: true
		},
		success: {
			type: String
		},
		warning: {
			type: String
		},
		info: {
			type: String
		},
		error: {
			type: String
		},
	},

	data() {

		return {
			progress: 0,
			timer: null,
		};
	},

	computed: {
		containerClasses() {
			return ['notification-message', `note-body-${this.notification.type}`];
		},
		iconClasses() {
			return ['note-icon', `note-icon-${this.notification.type}`];
		},
		progressBarClasses() {
			return ['note-progress-bar', `note-${this.notification.type}`]
		},
		type() {
			return this.$props[this.notification.type];
		}
	},

	methods: {
		close() {
			clearInterval(this.timer);
			this.timer = null;
			this.notification.show = false;
			setTimeout(() => {
				this.$notification.removeNotification(this.notification.id);
			}, 500)
		},
	}
}
</script>

<style lang="scss" src="../styles/styles.scss"></style>