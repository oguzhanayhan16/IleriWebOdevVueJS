
<style scoped>
.cast-container {
  display: flex;
  flex-wrap: wrap; /* Eğer ekran boyutu küçükse alt satıra geçer */
  gap: 10px; /* Aradaki boşluk */
}
</style>


<template>
    <section v-if="movie" >
      <h1>{{ movie.name }}</h1>
      <img style="height:600px;width: 70%;" :src="`/css/images/${movie.image}`" :alt="movie.name" />
      <p style="font-size: 20px;">Movie Description: <span style="font-size: 15px;">{{ movie.description }}</span></p>
<p style="font-size: 20px;">Movie Time: <span style="font-size: 15px;">{{ movie.time }}</span></p>
<p style="font-size: 20px;">Movie Year: <span style="font-size: 15px;">{{ movie.year }}</span></p>

<div class="cast-container">
  <router-link
      v-for="cast in movie.casts"
      :key="cast.slug"
      :to="{ name: 'cast.show', params: { castSlug: cast.slug } }"
    >
      <CastCard :cast="cast" />
    </router-link>

</div>
       
   

    <router-view/>
    <h1>Comments</h1>
    <div  v-for="comment in movie.comments">
      <Comments :comment="comment"></Comments>
    </div>
 
    </section>
  </template>
  <script>
  import sourceData from '@/movie.json'
  import CastCard from '@/components/CastCard.vue';
  import Comments from '@/components/Comments.vue';


  export default {
    components:{
      CastCard,
      Comments
    },
    props:{
      id:{
        type:Number,Required:true,
      }
    },
    computed: {
  movie() {
    return sourceData.movies.find((movie) => movie.id === this.id);
  }
}
  }
  </script>
  