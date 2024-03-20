<template>
    <div>
      <!-- <div id="buttonDiv"></div> Container for the Google sign-in button -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'GoogleSignIn',
    mounted() {
      window.onload = () => {
        window.google.accounts.id.initialize({
          client_id: '667449470744-dr18b20438j8imstoln602u04sb5ni96.apps.googleusercontent.com',
          callback: this.handleCredentialResponse
        });
        // window.google.accounts.id.renderButton(
        //   document.getElementById('g_id_onload'),
        //   { theme: 'outline', size: 'large' }
        // );
        window.google.accounts.id.prompt(); // Display the One Tap sign-in dialog
      }
    },
    methods: {
      handleCredentialResponse(response) {
        console.log('Encoded JWT ID token: ' + response.credential);
        // You can send this JWT token to your backend to verify the user identity
        // and create a session or do whatever you need
      }
    }
  };
  </script>