<template>
  <div>
  <h1>Exam04.vue</h1>
   <mt-switch v-model="val2" @change="gg">开关选项</mt-switch>
   <mt-radio title="单选列表" :options="['a','b','c']" v-model="val3"></mt-radio>
   <mt-button @click="get3">获取选中的值</mt-button>
   <mt-radio title="东哥今年多大了" v-model="val4" :options="options"></mt-radio>
   <mt-button @click="get4">获取东哥年龄</mt-button>

   <mt-checklist title="复选框列表" v-model="val5" :options="['a选项','b选项','c选项']">  </mt-checklist>
   <mt-button @click="get5">
     获取值
   </mt-button>

   </div>
</template>
<script>
export default {
    data(){
      return{
          val2:true,val3:"",val4:"",options:[{label:"去年",value:"24"},{label:"今年",value:"23"},{label:"明年",value:"22"}], val5:[],
      }
    },
    methods: {
        get5(){
          //功能：获取复选框列表选中的值
          console.log(this.val5);
        },
        get4(){
           console.log(this.val4);
       },

      get3(){
    //获取用户选中单选列表中的值
            console.log(this.val3);
      },

      gg(){//处理状态变化函数
           
           console.log(this.val2);//状态   
           
      }
    }
}
</script>




