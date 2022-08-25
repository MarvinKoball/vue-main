<template>
   <div class="help">

   <h3>{{help.posName}}</h3>
   <p>ID: {{help.ccoPrefix}}</p>
   <p>{{help.requestTimestamp}}</p>
   

   </div>
</template>

<script>
export default {
  name: 'HelpReq',
  props: {
    help: Object,
  },
}
</script>

<style scope>
.fas {
  color: red;
}
.help {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.help.reminder {
  border-left: 5px solid green;
}
.help h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>