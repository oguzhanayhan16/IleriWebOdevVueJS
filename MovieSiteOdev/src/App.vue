


<template>

<div id="shell">
  <TheNavigation/>
      <router-view :key="$route.path"></router-view>
 

</div>
   
   

  


</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: { TheNavigation },
};
</script>


