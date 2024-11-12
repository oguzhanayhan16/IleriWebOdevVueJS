<template>
    <div class="cast-card">
      <h3>{{ cast.name }}</h3>
      <img :src="'/css/images/' + cast.image" style="width: 200px;height:300px ;" :alt="cast.name" />
    </div>
  </template>


<style scoped>
.cast-card {
  margin: 10px;
}
</style>

<script>
    export default{
        props:{
            cast:{type:Object,required:true}
        }
    }
</script>