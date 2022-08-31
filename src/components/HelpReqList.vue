<template>
    <div class="reverseorder">
    <div :key= "help.requestTimestamp" v-for="help in helps">
    <HelpReq :help="help"
    />
    </div>
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
<style>
.reverseorder {
  display: flex;
  flex-direction: column-reverse;
}
</style>