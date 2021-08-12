<template>
     <div class="w-72  flex flex-col justify-center items-center">
        <label class="mt-4" for="heading">Student name</label>
        <input v-model="studentForm.name" class="my-4 border-2 border-green-300 " type="text" name="name" id="name" >
        <label for="body">Student surname</label>
        <input v-model="studentForm.surname" class="my-4 border-2 border-green-300 " type="text" name="surname" id="surname" >
        
        <div v-if="$route.name == 'addStudent'">
            <button @click="$emit('addStudent' , studentForm)" class="bg-green-400 py-2 px-7" >Add</button>
        </div>
        <div v-else-if="$route.name == 'editStudent'" class="my-4">
               <button @click="$emit('update' , studentForm)" class="bg-green-400 py-2 px-7" >Update</button>
        </div>
    </div>
</template>

<script>
    import StudentStorage from '@/storage/StudentDataStorage.js'
    let studentStorage = new StudentStorage()
    export default {
        emits:['addStudent' , 'update'],
        data(){
            return{
                studentForm:{
                    name:'',
                    surname:'',
                    id:''
                }
            }
        },
        mounted(){
            if(this.$route.name == 'editStudent'){
               const student =  studentStorage.getStudent(this.$route.params.id)
               this.studentForm.name = student.name
               this.studentForm.surname = student.surname
               this.studentForm.id = student.id
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>