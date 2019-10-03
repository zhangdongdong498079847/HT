<template>
<div>
<mt-button @click="active='tab1'">打游戏</mt-button>
<mt-button @click="active='tab2'">吃饭</mt-button>
<mt-button @click="active='tab3'">睡觉</mt-button>
 <mt-tab-container v-model="active">
 <mt-tab-container-item id="tab1">打游戏</mt-tab-container-item>
<mt-tab-container-item id="tab2">吃饭</mt-tab-container-item>
 <mt-tab-container-item id="tab3">睡觉</mt-tab-container-item>
 </mt-tab-container>
</div>
</template>
<script>
export default {
    data(){
      return{active:"tab3"}
    },
   
}
</script>
