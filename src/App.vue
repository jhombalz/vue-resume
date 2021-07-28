<template>
  <v-app :theme="theme">
    <v-main>   
        <div id="nav"  class="d-flex justify-end" v-bind:class="theme === 'dark' ? 'sample' : 'sample-dark'">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <a @click="toggleTheme">{{ mode }}</a>
        </div>

        <router-view />
    </v-main> 
  </v-app>
</template>

<script> 
  import { ref } from 'vue' 

  export default { 
    name: "App", 
    
    setup () {
      const theme = ref('dark')

      return {
        theme
      }
    }, 

    data(){
      return { 
        mode: this.theme === 'light' ? 'dark' : 'light' 
      }
    },
    
    methods:{
      toggleTheme(){
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.mode = this.theme === 'light' ? 'dark' : 'light'
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Yomogi';
  }

  #nav{
    padding : 10px; 
    z-index: 999;
    position: relative;
  }

#nav a{ 
    margin-left: 10px;
    margin-right: 10px;
    text-decoration: none;
    font-size: 18x;
    text-transform: uppercase; 
}

.sample-dark a{ 
  color: #888;
}

.sample a{ 
  color: #fff ;
}


#nav a.router-link-exact-active{ 
  color: red;
  font-size: 23px;
}
  
</style>

