<template>

    <section>
      <h1>{{ cast.name }}</h1>
      <img :src="`/css/images/${cast.image}`" style="width: 200px;height: 300px;" :alt="cast.name" />

      <p style="font-size: 20px;">Cast Character: <span style="font-size: 15px;">{{ cast.character }}</span></p>
      <p style="font-size: 20px;">Cast Birthdate: <span style="font-size: 15px;">{{ cast.birthdate }}</span></p>
      <p style="font-size: 20px;">Cast Height: <span style="font-size: 15px;">{{ cast.height }}</span></p>
      <p style="font-size: 20px;">Cast Bio: <span style="font-size: 15px;">{{ cast.bio }}</span></p>

 
    </section>
  </template>
  
  <script>
  import sourceData from '@/movie.json';
  
  export default {
    props: {
      id: { type: Number, required: true },
      castSlug: { type: String, required: true }
    },
    computed: {
      movie() {
        return sourceData.movies.find(movie => movie.id === this.id);
      },
      cast() {

        return this.movie ? this.movie.casts.find(cast => cast.slug === this.castSlug) : null;
      }
    }
  }
  </script>
  