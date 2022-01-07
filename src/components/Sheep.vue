<template>
  <div id="sheep-container" class="sheep-container">
    <span>안녕하세요</span><br>
    <span id="hello">반갑습니다!</span>
  </div>
</template>

<script>
// import '../assets/js/app.js'


export default {
    components:{
    }
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
</style>