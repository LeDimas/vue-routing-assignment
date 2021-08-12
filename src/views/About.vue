<template>
  <div class="container">
    <h1 class="text-4xl my-8">This is silly about page</h1>
    <div class="grid grid-rows-3 grid-cols-4 px-10" >

      <div class="lg:row-span-1 lg:col-start-2">
        <img class="pt-10" src="../assets/about.jpg" alt="yeah that's me">
      </div>

      <div class=" col-span-3 lg:col-auto lg:w-2/3">
        <p class="text-right pt-20 ">
          Hi there! My name is Dmitriy , I'm young developer from city Liepaja. This is my about page.I'm pretty modest so i don't like bragging about myself.:D I like programming , but my back is not always happy sitting by dozens hours. Also I'm into break-dancing , acrobatics , skateboarding and studying new languages either programming or human  and all that. Unfortunately currently there is almost no time for theese , hopefully after university I will be able to dedicate myself to theese hobbies more.I could tell more , but I'm lazy for that so further will be generated lorem ipsum text.  Odio sapiente veniam voluptatibus deserunt voluptates in impedit doloribus! Delectus possimus consequatur incidunt eius accusantium.
        </p>
      </div>



      <div class="lg:col-start-2 lg:col-end-4 col-start-1 col-end-5 ">
        <div class="my-10">
              <icon-base
              width="50"
              height="40"
              icon-name="heart"
            >
              <icon-heart />
            </icon-base>
          </div>

        <p >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit officiis earum ipsum magni quasi quod necessitatibus ratione officia tempore ea error labore consequuntur natus eligendi, provident aliquid illum quisquam aperiam maiores corporis voluptatibus omnis accusantium beatae! Praesentium, aut. Alias odio assumenda nobis veritatis voluptatum fuga officia ad autem tenetur impedit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum laboriosam, in impedit culpa minima cumque quod autem totam accusantium dolore adipisci ipsam eum, explicabo officia quos pariatur animi, corrupti eveniet quam? Voluptate voluptatibus maiores, quas neque ad ea similique nulla deleniti nihil nisi voluptates ducimus saepe ullam vitae a!
        </p>
            <div class="mt-10 lg:mb-0 mb-10">
              <icon-base
              width="50"
              height="40"
              icon-name="heart"
            >
              <icon-heart />
            </icon-base>
          </div>
      </div>


       <div class=" col-span-3 lg:col-start-2 lg:col-end-3">
        <p class="text-left  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi est quibusdam illum sed id at nostrum, alias autem explicabo quod doloremque non. Amet, officiis? Soluta dolor vel dignissimos, rem omnis architecto iste nam eos? Odio sapiente veniam voluptatibus deserunt voluptates in impedit doloribus! Delectus possimus consequatur incidunt eius accusantium.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis in maxime iure delectus et provident! Odio laborum beatae ab accusamus aperiam. Autem, veniam sed nostrum fuga repellat voluptatum a eius.
        </p>
      </div>

      <div class=" lg:col-start-3 lg:col-end-4 lg:pt-0 pt-20">
        <img class="" src="../assets/about2.jpg" alt="yeah that's me">
      </div>
    </div>


  </div>
</template>

<script>
import IconBase from '@/components/IconBase.vue'
import IconHeart from '@/components/icons/IconHeart.vue'

export default {

  components:{IconBase , IconHeart}
  
}
</script>