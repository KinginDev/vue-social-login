<template>
    <div>

    </div>
</template>

<script>
import { onMounted } from 'vue';
import {  getToken } from "firebase/messaging";
import messaging from '@/firebaseConfig';

export default {
  name: 'SubscribeToNotifications',
  setup() {
  
    onMounted(() => {



         const vapidKey = 'BNS5K5eYg5Ru22ETSFXSGjWP0d8GMvvtXFi2NePU1A0WKUYsX_bmj5dv5gmkg4zvQ7pyL3qPSa98-hKWz1JPvWo'
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
            console.log('Notification permission granted.',permission);

            //Get the token
            getToken(messaging, { vapidKey:vapidKey }).then((currentToken) => {
                if (currentToken) {
                // Send the token to your server and update the UI if necessary
                console.log(currentToken);
                } else {
                // Show permission request UI
                console.log('No registration token available. Request permission to generate one.');
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
            });
            }
        });
        });
  }
};
</script>