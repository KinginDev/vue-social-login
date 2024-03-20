<template>
    <div>
        <div class="fb-login-button"
         data-width=""
         data-size="large"
         data-button-type="continue_with"
         data-layout="default"
         data-auto-logout-link="false"
         data-use-continue-as="false"
         data-scope="email,public_profile"
         data-onlogin="checkLoginState()">
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FacebookLogin',
   
  };
  </script>