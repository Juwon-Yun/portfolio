<template>
  <div id="sheep-container" class="sheep-container">
    <span>안녕하세요</span><br>
    <span id="hello">반갑습니다!</span>
    
    <!-- <div class="container-wrap"> -->
      <!-- <div v-for="img, idx in skillImg" :key="idx"> -->
        <!-- <div class="inneasdasdr" :style="{backgroundImage :  'data:image/png;base64,'+ img.img}">{{img.name}}</div> -->
      <!-- </div>
    </div> -->
  
  </div>
</template>

<script>
// import '../assets/js/app.js'
import {mapState} from 'vuex'


export default {
    components:{
    },
     computed:{
    ...mapState({
      skillImg : state => state.skillImg
    })
  },
}
</script>

<style scoped>
.sheep-container{
    width: 100%;
    height: 100%;
    outline: 0;
    background: #EFF1F0;
    box-shadow: inset 10px 10px 20px #bfc1c0,
                inset -10px -10px 20px #ffffff;
   display : flex;
}
.sheep-container > span{
  position: absolute;
  padding: 0 0 0 4%;
  font-size: 50px;
  line-height: 10em;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
#hello{
  margin-top: 4%;
}
.container-wrap{
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
}
.container-wrap > div{
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}
/* .inneasdasdr{ */
  /* width: 100%;
  background-image: url('../../src/assets/icon/spring_boot.png');
  background-repeat: no-repeat;
  background-size: cover; */
/* } */
</style>