<template>

  <div class="container">
    <h1 class="text-2xl">News</h1>
    <div class="flex flex-col  items-center">



  <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">
     <component @addPost="appendPost" :is="Component"/>
    </transition>
  </router-view>



        <div v-if="news.length === 0" >
          <h1 class="pt-20 text-3xl font-bold" >No news !</h1>
        </div>
        <div  v-for="(article , i) in news" :key="'article-'+i" class="pt-20 lg:w-3/5 ">
            <h2 class="py-4 font-bold text-left" >{{article.heading}}</h2>
            <p class="text-left"> {{article.text}} </p>
        </div>
    
      
        
    </div>
  </div>


</template>

<script>
import AddNews from '@/components/AddNews.vue'

export default {

  data(){
    return{
      news:[
        {
          heading:'Lorem ipsum dolor sit amet.',
          text:' Sapiente reprehenderit iste placeat saepe, ex deleniti possimus soluta, obcaecati nobis sint quibusdam expedita eveniet? Magnam aspernatur animi nemo ab quod veniam? Consectetur optio velit ut iure, laudantium cupiditate necessitatibus rem? Sapiente necessitatibus optio sint quas voluptatum fugit nulla eaque neque blanditiis quibusdam velit debitis, voluptas autem reprehenderit harum voluptatem alias quae accusantium laudantium ex voluptate. Quae adipisci iste iusto, illum excepturi incidunt fuga, repellendus sapiente quasi ipsam, omnis delectus totam! Illo quos nostrum natus quia totam aperiam quae! Cum quasi magnam iure et sunt, sint eligendi reiciendis delectus eveniet sed! Nisi!'
        },
        {
          heading:'Cum quasi magnam iure et sunt, sint eligendi reiciendis delectus eveniet sed! Nisi!',
          text:' Odit, enim! Maxime, explicabo fugiat eius ipsam mollitia ducimus sapiente asperiores neque hic quae placeat assumenda molestias eum, minus et illo fuga, sequi accusantium id quas saepe reiciendis aliquid eveniet? Perspiciatis.'
        }
      ]
    }
  },
  components: {
    AddNews
  },
  methods:{
    appendPost(val){
      const post = {heading:val.headingInput , text:val.bodyInput}
      this.news.unshift(post)
    }
  }
}
</script>

<style>



.fade-enter-active,
.fade-leave-active{
    transition: all .4s ease;
}

.fade-enter-from,
.fade-leave-to{
    opacity:0;
}



</style>