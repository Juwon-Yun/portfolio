<template>
<div class="container">
    <div class="left-wrap">
        <Menu/>
    </div>
    <div class="right-wrap">
        
    </div>
</div>
</template>

<script>
import Menu from './components/Menu.vue'
export default {
    component: {
        Menu,
    }
}
</script>

<style scoped>
.container{
    width : 100vw;
    height: 100vh;
    display: flex;
}
.left-wrap{
    border: 1px solid black;
    width: 100px;
    background-color: cadetblue;
}
.right-wrap{
    border: 1px solid black;
    width: calc(100vw - 100px);
    background-color: antiquewhite;
}
</style>