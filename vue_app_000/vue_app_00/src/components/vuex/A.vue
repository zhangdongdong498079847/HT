<template>
<div id="#app">
<h1>{{$store.getters.getAge}}</h1>
<h1>{{$store.getters.getList}}</h1>
<h1>{{$store.getters.getCar}}</h1>
<button @click="upCar">升级</button>
<button @click="upAge">变</button>
<button @click="clearAge">清空年龄[异步清空]</button>
</div>

</template>
<script>
export default {
    methods:{
        clearAge(){
        //调用actions中定义异步修改数据方法
         this.$store.dispatch("modifyAge");
        },
        upAge(){
           this.$store.commit("updateAge",45);
        },
        upCar(){
            //调用修改共享数据的方式
             this.$store.commit("updateCar");
        }
    }
}
</script>