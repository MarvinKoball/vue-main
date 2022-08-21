<template>
   <div class="help">
   
   <h3>{{help.ccoPrefix}}</h3>
   <p>{{help.requestTimestamp}}</p>

   </div>
</template>

<script>
export default {
  name: 'Req',
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