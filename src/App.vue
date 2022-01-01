<template>
  <div class="stickyMenu" :class="[{'MenuTrans-in' : TransFlag}
  , {'MenuTrans-out' : displayFlag}]">
    <ul>
      <li v-for="a in this.$store.state.menu" :key="a">
       <button v-scroll-to="`#${a}`">{{a}}</button> 
      </li>
    </ul>
  </div>
<div class="container">
    <div>
      <MenuBar id="Home"/>
      <About id="About"/>
      <Project id="Project"/>
      <Footer id="Contact"/>
    </div>
</div>
</template>

<script scoped>
import MenuBar from './components/MenuBar.vue'
import About from './components/About.vue'
import Project from './components/Project.vue'
import Footer from './components/Footer.vue'
import {mapMutations} from 'vuex'
// import VueScrollTo from 'vue-scrollto'

export default {
  name: 'App',
  components: {
    MenuBar,
    About,
    Project,
    Footer,
  },
  data() {
    return {
      displayFlag : true,
      TransFlag : false,
      lastScrollPosition : 0,
      scrollValue : 0,
    }
  },
  // computed:{
  //   ...mapState({
  //     menu : state => state.menu
  //   })
  // },
  mounted() {
    this.mountFunction()
  },
  unmounted() {
    window.scrollTo(0, 0)
  },
  methods : {
    ...mapMutations({
      changeView : 'changeView'
    }),
    mountFunction(){
      this.lastScrollPosition = window.pageYOffset
      window.addEventListener('scroll', this.onScroll)
    },
    onScroll () {
      // console.log(window.pageYOffset)
       if(window.pageYOffset > 630 ) {
        this.displayFlag = false
        this.TransFlag = true
      }
      if(window.pageYOffset < 530 ) {
        this.displayFlag = true
        this.TransFlag = false
      }
    },
    sendEle(e){
      this.changeView(e)
    },
  },
}
</script>

<style scoped>
.container{
  padding: 0 10%;
  -ms-overflow-style: none;
  scrollbar-width: none; 
  background-color: #2A2B2F;

}
.container::-webkit-scrollbar{
  display: none; 
}
.stickyMenu{
  background-color: #232426;
  width: 8vw;
  height: calc(100vh - 60vh);
  position: fixed;
  top: 30%;
  margin-left: 1em;
  box-shadow: 0 2px 15px rgb(112, 116, 124);
  color: #eee;
  border-radius: 18px;
}
.stickyMenu.stickyMenu--hidden {
  box-shadow: none; transform: translate3d(0, -100%, 0);
}
.stickyMenu.MenuTrans-out{
  transition: 0.1s all;
  top: 20%;
  left: 12%;
  visibility: hidden;
  height: 0; 
  
}
.stickyMenu.MenuTrans-in{
  transition: 0.3s all ease-out;
  visibility: visible;
  /* transform: translate(0.3s); */
  height: calc(100vh - 60vh);
  left: 0;
}
.stickyMenu > ul {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.stickyMenu > ul > li{
  margin: 5px auto;
  font-size: 18px;
}
button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: #eee;
}
</style>
