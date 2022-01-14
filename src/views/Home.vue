<template>
  <div class="home">
   
   <div v-if="!error">
     <div v-for="document in documents" :key="document.id">
     <h1>{{ document.title}}</h1>
     <p>{{document.description}}</p>
     <img :src="document.filePath" alt="">
   </div>
   </div>
   <div v-else class="error">
     <p>{{error}}</p> 
   </div>
   
  </div>
</template>

<script>
// @ is an alias to /src
// - get realtime data from the playlists collection
// output 2 conditional items - error, or playlist titles
// use the getCollection composable

import getCollection from '@/composables/getCollection'
export default {
  name: 'Home',
  components: {
    
  },
  setup() {
    const { error, documents } = getCollection('playlists')
    
    return { error, documents }
  }
}
</script>
