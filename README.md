# simple-vue-notifications
## INSTALL & SETUP
`npm i --save simple-vue-notifications`

import into main.js: 

`import * as Notifications from 'simple-vue-notifications`

`Vue.use(Notifications, { global: true || false });`

specifying global as true or false determines whether you want a global component or whether you want to simply import it locally.

You should be able to import the notifications container component locally:

`import NotificationContainer from 'simple-vue-notifications/src/components/notifications';`

add the following code to your App.vue (or where ever you want it)

`<app-notifications :duration></app-notifications>`

create an array in your root vue instance:

`data: {
  notes: []
}`

## TO USE

Example:

`this.$notification.addNotification('This is a success, 'success');`

`this.$notification.addNotification('This is an error, 'error');`

`this.$notification.addNotification('This is info, 'info');`

`this.$notification.addNotification('This is an warning, 'warning');`

The following will not work:

`this.$notification.addNotification('<strong>Hello world</strong>', 'success');`

Unless you pass an object with the property of htmlSafe: true like so.

`this.$notification.addNotification('<strong>Hello world</strong>', 'success', { htmlSafe: true })`

htmlSafe will default to false.

You can reposition the notification-container by passing a prop with the name :position to the component and one of the following strings:

top-right

top-left

top-center

bottom-center

## Animations & Icons
Drop in font-awesome and/or animate.css

