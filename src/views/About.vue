<template>
  <div class="about">
    <AboutComponent />
  </div>
</template> 

<script>    
import AboutComponent from '../components/about/AboutComponent.vue';
  // @ is an alias to /src    
  export default {
  components: { AboutComponent }, 
    name: "About", 
  };
</script>
