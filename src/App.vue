<template>
  <div class="stickyMenu" :class="[{'MenuTrans-in' : this.$store.state.transFlag}
    , {'MenuTrans-out' : this.$store.state.displayFlag}]">
    <ul class="fixed-menu-wrap">
      <li v-for="a in this.$store.state.menu" :key="a">
       <button :class="{'toggle-in' : a.flag}" v-scroll-to="`#${a.name}`">{{a.name}}</button> 
      </li>
    </ul>
  </div>
<div class="container">
    <div>
      <Home id="Home"/>
      <About />
      <Project />
      <!-- <Footer id="Contact"/> -->
    </div>
</div>
</template>

<script scoped>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Project from './components/Project.vue'
// import Footer from './components/Footer.vue'
import {mapMutations} from 'vuex'

export default {
  name: 'App',
  components: {
    Home,
    About,
    Project,
    // Footer,
  },
  data() {
    return {
      lastScrollPosition : 0,
      scrollValue : 0,
    }
  },
  // computed:{
  //   ...mapState({
  //     menu : state => state.menu,
  //     displayFlag : state => state.displayFlag,
  //     transFlag : state => state.transFlag
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
      changeView : 'changeView',
      onScroll : 'onScroll',
      toggleMenuFlag : 'toggleMenuFlag',
    }),
    mountFunction(){
      this.lastScrollPosition = window.pageYOffset
      window.addEventListener('scroll', this.onScroll)
      window.addEventListener('scroll', this.toogleBtn)
    },
    toogleBtn(){
      let scrollTop = document.documentElement.scrollTop;
      let per = Math.ceil( scrollTop / document.body.scrollHeight * 100 )
      if(per >= 0 && per <= 25){
        this.toggleMenuFlag(0)
      }else if(per >= 26 && per <=50){
        this.toggleMenuFlag(1)
      }else if(per >= 51 && per <=74){
        this.toggleMenuFlag(2)
      }else if(per >= 75){
        this.toggleMenuFlag(3)
      }
      // console.log(per)
    },
  },
}
</script>

<style scoped>
.container{
  padding-left : 10%;
  padding-right : 10%;
  -ms-overflow-style: none;
  scrollbar-width: none; 
  background-color: #eee;
}
.container::-webkit-scrollbar{
  display: none; 
}
.stickyMenu{
  width: 8vw;
  height: calc(100vh - 60vh);
  position: fixed;
  display: flex;
  align-content: center;
  justify-content: center;
  top: 30%;
  margin-left: 1em;
  box-shadow: 0 2px 15px rgb(112, 116, 124);
  color: #000;
  border-radius: 10px;
  background: #E2E3E5;
  box-shadow: inset 5px 5px 10px #b5b6b7,
              inset -5px -5px 10px #ffffff;
}
.stickyMenu.MenuTrans-out,
.stickyMenu.MenuTrans-out > ul > li{
  transition: 0.5s all;
  top: 20%;
  left: 12%;
  visibility: hidden;
  height: 0; 
  animation: unFade 1.5s;
  text-decoration: none;
}
.stickyMenu.MenuTrans-in,
.stickyMenu.MenuTrans-in > ul > li{
  transition: 0.3s all ease-out;
  visibility: visible;
  height: calc(100vh - 60vh);
  left: 0;
  animation: fade 2s;
}
.stickyMenu > ul {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
}
.stickyMenu > ul > li{
  margin: 8px auto;
  display: flex;
  animation: unFade 1s all;
}
.fixed-menu-wrap > li > button {
  font-size: 28px;
  font-family: 'Roboto', sans-serif;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: #000;
}
.fixed-menu-wrap > li > button:hover{
  text-decoration: underline;
  color: #000;
  cursor: pointer;
}
.toggle-in{
  text-decoration: underline;
  color: #000;
  cursor: pointer;
} 
@keyframes fade {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
@keyframes unFade {
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
</style>
