<template>
    <div>
        <GoogleSignin></GoogleSignin>
        <FacebookLogin />
        <div class="mt-5">
            <button class="btn btn-primary" @click="sendNotification()">Send Notification</button>
        </div>
    </div>
</template>

<script>
import GoogleSignin from '../components/GoogleSignin.vue'
import FacebookLogin from '../components/FaceBookSignin.vue'

export default{
    name: "HomeView",
    components: {
        GoogleSignin,
        FacebookLogin
    },
    data: () => {
        return {
            token : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zYWZlcGF6ei50ZXN0L2F1dGgvbG9naW4iLCJpYXQiOjE3MTA3NzY4MzQsImV4cCI6MTcxODU1MjgzNCwibmJmIjoxNzEwNzc2ODM0LCJqdGkiOiJ2eXVQWXlHMmVsVGJJalZjIiwic3ViIjoiMjkwODAwIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.ggtGZx44rTtyLLWnh7jR_4k75G3TiBtu50sXO32mh6k"
        }
    },
    async mounted () {
     
        this.$OneSignal.Notifications.addEventListener('change',response => {
            console.log("The notification was clicked!", response);

            if(!response){
                throw new Error('Id not found')
            }
           

             const payload = {
                device_token: response,
            }
            
            this.$http.post(`push-notification/register`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                }
            }).then(response => {
                console.log(response)
            }).catch(e => {
                console.log(e.message.data);
            })
        });
    },
    methods:{
        sendNotification () {
            const payload = {
                name: 'name'
            }
            this.$http.post('push-notification/send-notification', payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                }
            }).then(response => {
                console.log(response)
            }).catch(e => {
                console.log(e.message.data);
            })
        },
        initializeOneSignal() {
            
           
            console.log(window.OneSignal)
            window.OneSignal.push(() => {


                // Check if the user is subscribed and get the device ID (Player ID)
                window.OneSignal.isPushNotificationsEnabled().then(isEnabled => {
                    if (isEnabled) {
                        console.log('Push notifications are enabled!');
                        window.OneSignal.getUserId().then(userId => {
                            console.log("OneSignal User ID:", userId);
                            this.registerDevice(userId);
                        });
                    } else {
                        console.log('Push notifications are not enabled yet.');
                        // You can also call OneSignal.showSlidedownPrompt() here to prompt the user
                    }
                });
            });
        },
        registerDevice(deviceId) {
            const payload = {
                name: 'User Name', // You might want to replace this with actual user data
                device_token: deviceId,
            };
            
            this.$http.post(`push-notification/register`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`,
                }
            }).then(response => {
                console.log(response);
            }).catch(e => {
                console.log(e.message.data);
            });
        },
    },
    
}
</script>
