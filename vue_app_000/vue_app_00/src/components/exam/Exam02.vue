<template>
<div>
<button @click="hand"><h1>删除成功！！！</h1></button>
 <button @click="hand1">显示交互式提示框</button>
 <button @click="hand3">显示确认框</button>
 <button @click="hand4">输入框</button>
 </div>
</template>
<script>
export default {
    methods:{
        hand(){
            this.$toast({
             iconClass:"iconfont icon-chenggong"
            })
        },
        hand1(){
              this.$messagebox("","数据加载成功");
        },
        hand3(){
          this.$messagebox.confirm("是否删除指定数据")
          .then(res=>{console.log(res)})
          .catch(err=>{console.log(err);})
        },
        hand4(){
            this.$messagebox.prompt("请输入卡号")
            .then(value=>{
                console.log(value);
                //console.log(action);
            }).catch(err=>{
                console.log(err);
            })
        },
    }
}
</script>