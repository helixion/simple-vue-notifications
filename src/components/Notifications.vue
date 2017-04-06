<template>
    <transition-group
        :class="containerClasses"
        tag="div"
        enter-active-class="animated flipInX"
        leave-active-class="animated flipOutX"
        :duration="{ enter: 500, leave: 500 }">
        <app-notification 
            v-for="note in shownNotifications"
            :notification="note"
            :duration="duration"
            :success="success"
            :error="error"
            :warning="warning"
            :info="info"
            :key="note.id">
        </app-notification>
    </transition-group>
</template>

<script>
import Notification from './NotificationMessage.vue';

export default {
	name: 'notifications',
	components: {
		appNotification: Notification
	},
	props: {
        //life expectacy of notification in milliseconds
        duration: {
            type: Number,
            default: () => 5000
        },
        //position of the notifications container
        position: {
            type: String,
            default: () => 'top-right'
        },
        //icons
        success: {
            type: String,
            default: () => 'fa fa-check'
        },
        error: {
            type: String,
            default: () => 'fa fa-exclamation'
        },
        warning: {
            type: String,
            default: () => 'fa-exclamation-triangle'
        },
        info: {
            type: String,
            default: () => 'fa fa-info'
        }
    },
	computed: {
		shownNotifications() {
			return this.$notes.filter(note => note.show === true);
		},
        containerClasses() {
            return ['notification-container', this.position];
        }
	},

}
</script>

<style scoped>
.notification-container {
	background: transparent;
	position: absolute;
	z-index: 1020;
	height: 100%;
}
    
.top-right {
    top: 30px;
    right: 20px;
}
.top-left {
    top: 30px;
    left: 20px;
}
.top-center {
    top: 30px;
    left: 0;
    right: 0;
}
.bottom-center {
    bottom: 30px;
    left: 0;
    right: 0;
}
//animations
.slide {
	right: 50px;
	animation: slideInRight 0.5s ease-out forwards;
}

//keyframes
@keyframes flipOutClose {
    0% {
       transform: perspective(400px) rotateX(0deg);
       opacity: 1;
    }
    100% {
       transform: perspective(400px) rotateX(90deg);
       opacity: 0;
    }
}


@keyframes slideInRight {
	from {
		transform: translateX(90px);
	}
	to {
		transform: translateX(0);
	}
}
</style>