<template>
  <div id="nav" class="flex justify-around">

  
    <icon-base class="cursor-pointer" @click="routerPop" width="30" height="30" ><icon-left-arrow/></icon-base>

    <div id="link_wrapper" class="pt-1">
      <router-link class="link" to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
      <router-link to="/students">Students</router-link>
      <router-link to="/addNews">Add news</router-link>
    </div>
   
    <icon-base class="cursor-pointer" @click="routerForward" width="30" height="30"><icon-right-arrow/></icon-base>
  </div>
  
   <transition name="fade" mode="out-in">
          <router-view v-slot="{ Component }">
           <keep-alive>
        
          <component :is="Component" />
       
      </keep-alive>
    </router-view>

   </transition>


    <div class="w-full bg-gray-200 h-48 mt-32">
        <h2 class=" pt-20 text-2xl" > Footer section </h2>
    </div>
</template>

<script>
import IconBase from '@/components/IconBase'
import IconLeftArrow from '@/components/icons/IconLeftArrow.vue'
import IconRightArrow from '@/components/icons/IconRightArrow.vue'
export default {
  components:{IconBase,IconLeftArrow,IconRightArrow},
  methods:{
    routerPop(){
      this.$router.go(-1)
    },
    routerForward(){
      this.$router.go(1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left:10px
}

#link_wrapper a.router-link-exact-active {
  color: #42b983;
}
#link_wrapper a.router-link-exact-active:hover {
  border-bottom: 2px solid green;
}

.fade-enter-active,
.fade-leave-active{
    transition: all .4s ease;
}

.fade-enter-from,
.fade-leave-to{
    opacity:0;
}
</style>
