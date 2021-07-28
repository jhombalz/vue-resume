<template>
  <v-container>
    <v-row>
      <v-col sm="12">
        <div class="pagenot-found d-flex flex-column justify-center align-center" >
          <div>
            <h1> Page Not Found </h1> 
          </div>
          <div>
            <p>
                Sorry, page is not available at this moment. 
            </p>
          </div>
        </div>
    </v-col>  
    </v-row>
</v-container>
</template>

<script>   
  export default { 
    name: "PageNotFound",  
  }
</script>

<style>
  .pagenot-found{
    height: calc(100vh - 100px); 
  }
</style>

