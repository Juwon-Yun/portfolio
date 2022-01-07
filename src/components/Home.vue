<template>
  <div class="topContainer">
      <div class="side-bar">
          <div class="profile-wrap">
              <div class="profile-Img"></div>
          </div>
          <div class="menu-wrap">
            <ul >
                <li v-for="a in this.$store.state.menu" :key="a"  :class="[{'li-out' : this.$store.state.transFlag}, {'li-in' : this.$store.state.displayFlag}]" >
                    <button :class="{'home-toggle-in' : a.flag}" v-scroll-to="`#${a.name}`">{{a.name}}</button> 
                </li>
            </ul>
          </div>

      </div>
      <div class="view">
        <Sheep/>
      </div>
  </div>
</template>

<script scoped>
import {mapMutations} from 'vuex'
import Sheep from './Sheep.vue'

export default {
    components : {
      Sheep,
    },
    methods:{
    ...mapMutations({
      changeView : 'changeView'
    }),
    sendEle(e){
      this.changeView(e)
    },
    },
}
</script>

<style scoped>
.topContainer{
    width: 100%;
    height: 100vh;
    display: flex;
    animation: fade 3s;
}
.side-bar{
    width: 20%;
    background-color: #525457;
    display: flex;
    flex-direction: column;
    color: #eee;
    background: linear-gradient(145deg, #585a5d, #4a4c4e);
    box-shadow:  5px 5px 6px #313234,
                -5px -5px 6px #73767a;
}
.view{
    width: 100%;
}
.profile-wrap{
    width: 100%;
    height: 30%;
    display: flex;
    justify-items: center;
    align-items: center;
}
.profile-Img{
    width: 170px;
    height: 170px;
    background-image: url('../../src/assets/juwon2.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    margin : 0 auto;
}
.menu-wrap > ul{
    display: flex;
    flex-direction: column;
    text-align: center;
}
.menu-wrap > ul > li {
    margin: 4% auto;
    font-size: 50px;
}
button {
  font-size: 30px;
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
.li-in{
  visibility: visible;
    animation: fade 3s;
}
.li-out{
  visibility: hidden;
    animation: unFade 3s;
}
.home-toggle-in{
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