<template>
<div class="container">
    <div class="left-wrap">
        <Menu/>
    </div>
    <div class="right-wrap">
        <Intro v-if="!this.$store.state.menuToggle"/>
        <Contact v-else/>
    </div>
</div>
</template>

<script>
import Menu from './components/Menu.vue'
import Intro from './components/Intro.vue'
import Contact from './components/Contact.vue'

export default {
    components: {
        Menu,
        Intro,
        Contact,
    },
    data() {
        return {
            
        }
    },

}
</script>

<style scoped>
*{
    font-size: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}
.container{
    width : 100vw;
    height: 100vh;
    display: flex;
}
.left-wrap{
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 100px;
    background-color: rgb(250, 244, 236);
    display: flex;
}
.right-wrap{
    border: 1px solid black;
    width: calc(100vw - 100px);
    background-color: rgb(250, 244, 236);
    display: flex;
    padding: 40px;
    transition: 0.3s all ease-out;
    visibility: visible;    
}
</style>