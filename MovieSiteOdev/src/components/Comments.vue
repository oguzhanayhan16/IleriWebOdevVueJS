<template>
    

    <h3>{{comment.title}}</h3>
    <p>
        {{ comment.description }}
    </p>
    
</template>


<script>
    export default{
        props:{
            comment:{type:Object,required:true}
        }
    }
</script>