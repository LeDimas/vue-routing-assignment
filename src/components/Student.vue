<template>
    <div class="border-2 border-green-500 lg:w-1/2 ">
    <div v-if="$route.name == 'singleStudent'">
        <h1>Student data</h1>
        <div class="flex justify-between px-4 mt-4">
             <h2> Student name: </h2><h2 class="text-left" >{{student.name}} </h2>
        </div>

        <div class="flex justify-between px-4">
            <h2> Student surname: </h2><h2 class="text-left" >{{student.surname}} </h2>
        </div>
        <div class="mt-10 mb-2 flex justify-evenly">
            <router-link :to="$route.path + '/edit'">Edit</router-link>
            <button @click="handleRemove" class="outline-none" >Delete</button>
        </div>
    </div>

    <div v-if="$route.name == 'editStudent'">
        <router-view @update="update"  />
    </div>
        
    </div>

</template>

<script>
    import StudentStorage from '@/storage/StudentDataStorage'
    let studentStorage = new StudentStorage()
    export default {
    emits:['update' ,'remove'],
    data(){
            return{
                student:{}
            }
        },
        methods:{
            update(data){
                this.$emit('update' , data)
            },
            handleRemove(){
                this.$emit('remove' , this.$route.params.id)
            }
        },
      mounted(){
           const id = this.$route.params.id
           this.student = studentStorage.getStudent(id)
       },
      watch:{
          $route(to,from){
              const id = to.params.id
              this.student = studentStorage.getStudent(id)
          }
      }
    }
</script>

<style lang="scss" scoped>

</style>