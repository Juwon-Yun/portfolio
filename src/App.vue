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
  display: flex;
  align-content: center;
  justify-content: center;
  top: 30%;
  margin-left: 1em;
  box-shadow: 0 2px 15px rgb(112, 116, 124);
  color: #eee;
  border-radius: 40px;
  background: linear-gradient(145deg, #585a5d, #4a4c4e);
  box-shadow:  5px 5px 10px #313234,
              -5px -5px 10px #73767a;
}
.stickyMenu.MenuTrans-out,
.stickyMenu.MenuTrans-out > ul > li{
  transition: 0.5s all;
  top: 20%;
  left: 12%;
  visibility: hidden;
  height: 0; 
  animation: unFade 3s;
}
.stickyMenu.MenuTrans-in,
.stickyMenu.MenuTrans-in > ul > li{
  transition: 0.3s all ease-out;
  visibility: visible;
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
  display: flex;
  animation: unFade 1s all;
}
button {
  font-size: 28px;
  font-family: 'Roboto', sans-serif;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: #eee;
}
button:hover{
  text-decoration: underline;
  color: #f7e9cc;
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
