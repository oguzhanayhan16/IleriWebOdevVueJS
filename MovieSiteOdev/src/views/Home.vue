<template>


  <div id="main">
    <div id="content">
      <div class="box">
        <div class="head">
          <h2>LATEST TRAILERS</h2>
          <p class="text-right"><a href="#">See all</a></p>
        </div>
      
        <router-link v-for="movie in movies":key="movie.id":to="{ name: 'Movie.show',params:{id:movie.id,slug:movie.slug}}">
          <div class="movie">
          <div class="movie-image"> <span class="play"><span class="name">{{ movie.name }}</span></span> <img :src="`/css/images/${movie.image}`" alt="" /> </div>
          <div class="rating">
            <p>{{ movie.score }}</p>
            <div class="stars">
              <div class="stars-in"> </div>
            </div>
            <span class="comments" style="color:white">{{  movie.comments.length  }}</span> </div>
     
        </div>
        </router-link>
     
      
      </div>
   
    </div>
  </div>
 

</template>

<script>
import sourceData from '@/movie.json'

export default {
  computed: {
    comments() {
      return sourceData.movies.comments.length;
    }
  },
  data() {
    return {
        movies: sourceData.movies
    };
    
  },
 

};
</script>
