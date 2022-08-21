<template>
    <div :key= "help.requestTimestamp" v-for="help in helps">
    <Req :help="help"/>
    </div>
</template>

<script>
import Req from './Req'


export default {
  name: 'HelpReq',
  props: {
    helps: Array,
    },

components:{
  Req
}
 }

</script>