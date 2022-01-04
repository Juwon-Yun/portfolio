<template>
  <div class="topContainer">
      <div class="side-bar">
          <div class="profile-wrap">
              <div class="profile-Img"></div>
          </div>
          <div class="menu-wrap">
            <ul >
                <li v-for="a in this.$store.state.menu" :key="a"  :class="[{'li-out' : this.$store.state.transFlag}, {'li-in' : this.$store.state.displayFlag}]" >
                    <button v-scroll-to="`#${a}`">{{a}}</button> 
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
    data() {
        return {
            
        }
    },
    methods:{
    ...mapMutations({
      changeView : 'changeView'
    }),
    // computed:{
    //     ...mapState({
    //         displayFlag : state => state.displayFlag,
    //         transFlag : state => state.transFlag
    //     })
    // },
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
}
.view{
    width: 100%;
    border: 3px solid blue;
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
.li-in{
    visibility: visible;
    animation: fade 3s;
}
.li-out{
    visibility: hidden;
    animation: unFade 3s;
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