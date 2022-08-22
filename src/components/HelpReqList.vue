<template>
    <div :key= "help.requestTimestamp" v-for="help in helps">
    <HelpReq :help="help"
    />
    </div>
</template>

<script>
import HelpReq from './HelpReq'


export default {
  name: 'HelpReqList',
  props: {
    helps: Array,
    },

components:{
  HelpReq
},

}
</script>