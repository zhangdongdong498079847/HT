<template>
    <div>
            <van-checkbox-group v-model="result" ref="checkboxGroup">
                    <van-checkbox name="a" >复选框 a</van-checkbox>
                    <van-checkbox name="b">复选框 b</van-checkbox>
                    <van-checkbox name="c">复选框 c</van-checkbox>
                  </van-checkbox-group>
             
        <van-submit-bar
        :price="3050"
        button-text="提交订单"
        @submit="onSubmit"
      >
    
        <van-button type="primary" @click="checkAll">全选</van-button>
        <van-button type="info" @click="toggleAll">取消</van-button>
      </van-submit-bar>
    </div>
</template>
<script>
 export default{
     data(){return{
         checked:true,
         result:[],
        
     }},
     updated() {
        console.log(this.result)


     },
     methods:{
        onSubmit(){
            this.$toast("大锤锤")
        },
        checkAll() {
            // console.log(this.$refs.checkboxGroup.)
     // this.$refs.checkboxGroup.toggleAll(true);
      this.result=["a","b","c"];
      // this.result.push(a)
      console.log(this.$refs.checkboxGroup.toggleAll)
    },
    toggleAll() {
      if(this.result.lenght>0){
        this.result=[]
      }else{
        this.result=[]
      }
    }
     },
    //  computed: {
    //          return  forEach()
    //  }
     
 }
</script>
<style>

</style>