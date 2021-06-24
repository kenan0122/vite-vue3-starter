<template>
  <div></div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import axios from '../utils/axios';

  export default defineComponent({
    setup() {
      axios.get('/users/XPoet').then((res: any) => {
        console.log('res: ', res);

      }).catch((err: any) => {  console.log('err: ', err);  });
    }
  });
</script>
