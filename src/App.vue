<template>
  <div class="stickyMenu" :class="[{'MenuTrans-in' : this.$store.state.transFlag}
  , {'MenuTrans-out' : this.$store.state.displayFlag}]">
    <ul>
      <li v-for="a in this.$store.state.menu" :key="a">
       <button v-scroll-to="`#${a}`">{{a}}</button> 
      </li>
    </ul>
  </div>
<div class="container">
    <div>
      <Home id="Home"/>
      <About id="About"/>
      <Project id="Project"/>
      <Footer id="Contact"/>
    </div>
</div>
</template>

<script scoped>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Project from './components/Project.vue'
import Footer from './components/Footer.vue'
import {mapMutations} from 'vuex'

export default {
  name: 'App',
  components: {
    Home,
    About,
    Project,
    Footer,
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
      onScroll : 'onScroll'
    }),
    mountFunction(){
      this.lastScrollPosition = window.pageYOffset
      window.addEventListener('scroll', this.onScroll)
    },
    // onScroll () {
    //   // console.log(window.pageYOffset)
    //    if(window.pageYOffset > 630 ) {
    //     this.displayFlag = false
    //     this.TransFlag = true
    //   }
    //   if(window.pageYOffset < 530 ) {
    //     this.displayFlag = true
    //     this.TransFlag = false
    //   }
    // },
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
  background-color: #eee;

}
.container::-webkit-scrollbar{
  display: none; 
}
.stickyMenu{
  background-color: #525457;
  width: 8vw;
  height: calc(100vh - 60vh);
  position: fixed;
  top: 30%;
  margin-left: 1em;
  box-shadow: 0 2px 15px rgb(112, 116, 124);
  color: #eee;
  border-radius: 18px;
}
/* .stickyMenu.stickyMenu--hidden {
  box-shadow: none; transform: translate3d(0, -100%, 0);
} */
.stickyMenu.MenuTrans-out{
  transition: 0.5s all;
  top: 20%;
  left: 12%;
  visibility: hidden;
  height: 0; 
  animation: unFade 3s;
  
}
.stickyMenu.MenuTrans-in{
  transition: 0.3s all ease-out;
  visibility: visible;
  /* transform: translate(0.3s); */
  height: calc(100vh - 60vh);
  left: 0;
  animation: fade 3s;
}
.stickyMenu > ul {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
}
.stickyMenu > ul > li{
  margin: 8px auto;
  font-size: 24px;
}
button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: #eee;
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
