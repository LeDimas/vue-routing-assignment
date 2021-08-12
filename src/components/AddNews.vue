<template>
    <div class="w-72  flex flex-col justify-center items-center">
        <label class="mt-4" for="heading">News Heading</label>
        <input v-model="newsForm.headingInput" class="my-4 border-2 border-green-300 " type="text" name="heading" id="heading" >
        <label for="body">News Body</label>
        <textarea v-model="newsForm.bodyInput" class="h-36 my-4 border-2 border-green-300 resize-none"  name="body" id="body" cols="50" rows="10"></textarea>
        <button @click="addPost" class="bg-green-400 py-2 px-7" >Post</button>
    </div>
</template>

<script>
    export default {
        emits:['addPost'],
        data(){
            return{
                newsForm:{
                    headingInput:'',
                    bodyInput:''
                }
                
            }
        },
        methods:{
            addPost(){
                this.$emit('addPost' , this.newsForm)
                this.newsForm.headingInput='';
                this.newsForm.bodyInput='';
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>