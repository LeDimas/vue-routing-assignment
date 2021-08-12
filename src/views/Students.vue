<template>
  <div class="about">
   
   
    <router-link class="border-b-4 pb-2 border-green-500" id="linktoadd" to="/students/add">Add Student</router-link>
    <hr class="mt-4">
    <div class="grid grid-col-4 grid-rows-2 pt-16">
        <div class="col-span-2">

            <h1 class="mb-6">List of Students</h1>

                <div v-if="studentsList.length">
                        <div  v-for="student in studentsList" :key="`student-${student.id}`">
                            <label @click="displayStudentData(student.id)"> {{ student.name }} {{ student.surname }} </label>
                        </div>
                </div>

                  <div v-else>
                    <h1>No students</h1>
                </div>
        </div>
      

        <div v-if="$route.name == 'addStudent' " class="col-start-3 col-end-4">
               <router-view @addStudent="appendStudent" />
        </div>

        <div v-else-if="$route.name == 'singleStudent'" class="col-start-3 col-end-4" >
             <router-view  @remove="deleteStudent" />
        </div>

        <div v-if="$route.name == 'editStudent' " class="col-start-3 col-end-4">
            <router-view @update="updateStudent"/>
        </div>

    </div>
    

    
  </div>
</template>

<script>
import StudentStorage from '@/storage/StudentDataStorage.js'
let studentStorage = new StudentStorage()
export default {
  data() {
    return {
      studentsList: []
    }
  },
  methods: {
    displayStudentData(id) {
      this.$router.replace(`/students/${id}`);
    },
    appendStudent(data){
        studentStorage.addStudent(data.name , data.surname)
        this.studentsList = studentStorage.getStudents()
        this.$router.replace('/students')
    },
    updateStudent(data){
        studentStorage.updateStudent({name:data.name , surname:data.surname , id:data.id})
        this.studentsList = studentStorage.getStudents()
        this.$router.go(-1)
    },
    deleteStudent(id){
        studentStorage.deleteStudent(id)
        this.studentsList = studentStorage.getStudents()
        this.$router.replace('/students')
    }
  },
  mounted() {
    this.studentsList = studentStorage.getStudents()
  },
 
}
</script>

