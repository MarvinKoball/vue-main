<template>
    <button @click="onClick()" :style="{ background: color}"
    class="btn">{{text}}</button>
</template>

<script> 

export default{
    name:'Button',
    props: {
        text: String,
        color: String 
    },
    methods:{
        onClick(){
            console.log('click')
            fetch('http://localhost:3000/clear', {
            method: 'POST',
            body: {}})

  
        }

    }
}
</script>