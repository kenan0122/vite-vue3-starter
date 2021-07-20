<template>
  <div>
    <el-tag v-for="tag in tags" :key="tag.name"
    closable
    :type="tag.type">
    {{tag.name}}
  </el-tag>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import axios from '../utils/axios';

  export default defineComponent({
    setup() {
      const tags = [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ];

      axios.get('/users/XPoet').then((res: any) => {
        console.log('res: ', res);

      }).catch((err: any) => {  console.log('err: ', err);  });

      return {
        tags
      };
    }
  });
</script>
