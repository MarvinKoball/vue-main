<template>
    <div :key= "help.requestTimestamp" v-for="help in helps">
    <Req :help="help"
    />
    </div>
</template>

<script>
import HelpReq from './HelpReq'


export default {
  name: 'HelpReq',
  props: {
    helps: Array,
    },

components:{
  Req
},

}
</script>