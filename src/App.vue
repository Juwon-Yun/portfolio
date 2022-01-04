<template>
<div class="container">
    <div class="left-wrap">
        <Menu/>
    </div>
    <div class="right-wrap" :class="[{'menuToggle' : menuToggle}]">
        <Intro/>
    </div>
    <div class="right-wrap2" :class="[{'contact-out' : inContact}, {'contact-in' : outContact}]">
        <Contact/>
    </div>
</div>
</template>

<script>
import Menu from './components/Menu.vue'
import Intro from './components/Intro.vue'
import Contact from './components/Contact.vue'
import { mapState } from 'vuex'

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
    computed : {
        ...mapState({
            menuToggle  : state => state.menuToggle,
            inContact  : state => state.inContact,
            outContact : state => state.outContact,
        })
    }

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
}
.right-wrap2{
    border: 1px solid black;
    width: calc(100vw - 100px);
    background-color: rgb(250, 244, 236);
    display: flex;
    padding: 40px;
}
.menuToggle{
    visibility: hidden;    
    position: absolute;
    z-index: 0;
}
.contact-in{
    transition: 0.3s all ease-out;
    visibility: visible;    
    z-index: 1;
}
.contact-out{
    transition: 0.3s all ease-out;
    position: absolute;
    visibility: hidden; 
    left: 10;   
}

</style>