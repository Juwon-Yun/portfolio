<template>
  <div class="intro-container">
      <div class="left-wrap">
        
        <div class="box1">
          <span>Juwon-Yun</span>
        </div>

        <div class="box2">
          <span>안녕하세요</span><br>
          <span>반갑습니다!</span>
        </div>
        <div>
          <span>InterNational conference</span>
        </div>
        
        <div>
          <span>2021 July</span>
        </div>

      </div>
      <div class="right-wrap">
        <div class="right-box"></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.intro-container{
    width: 100%;
    height: 100%;
    display: flex;
}
.left-wrap{
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 12px;
  justify-content: space-around;
  border: 2px solid black;
}
.box1{
  color: #E0B6AD;
  font-size: 26px;
}
.box2{
  font-size: 40px;
}
.right-wrap{
  width: 63%;
  border : 1px solid seagreen;
}
.right-box{
  height: 100%;
  background-image: url('../../src/assets/juwon2.jpg');
  background-repeat: no-repeat;
}
</style>