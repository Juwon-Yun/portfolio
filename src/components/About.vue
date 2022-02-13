<template>
  <div class="about-container">
    <div id="About" class="about-me">
      <div class="description">
        <span>함께 달리고 싶은 열정, 윤주원입니다.</span>
        <ul class="description-ul">
          <li>안녕하세요! 신입 개발자 윤주원입니다.</li>
          <li>C언어를 배우고 대덕인재개발원을 수료하며<br><br> 개발자의 꿈을 가진, 지금은 개발에 푹 빠져 있습니다.</li>
          <li>무엇보다 꾸준함의 가치를 알기에 <br><br>1일 1커밋 운동과 기술 블로그 운영을 하고 있습니다.</li>
          <li>체력 증진 목적의 운동도 꾸준히 하고 있습니다.</li>
          <li>Clean Code와 학습에 대한 고민을 생활화합니다.</li>
          <li>운동과 커피, 그리고 협동 프로젝트에 관심이 많습니다.</li>
        </ul>
        <span class="description-list"> 
          Contact
        </span>
        <ul class="description-ul">
          <li>Email | eooll4@naver.com</li>
          <hr>
          <li>Github | <a href="https://github.com/Juwon-Yun" target="_blank">https://github.com/Juwon-Yun</a> </li>
          <br>
          <li>Blog | <a href="https://juwon-yun.tistory.com/" target="_blank">https://juwon-yun.tistory.com/</a> </li>
          <br>
          <li>Kanboo PMS | <a href="http://kanboo.site/" target="_blank">http://kanboo.site/</a></li>
        <hr>
        </ul>
      </div>
      <div class="my-skills">
        <span class="description-list">Skills</span>
        <ul class="description-ul">
          <li>Language | Java, JavaScript, HTML, CSS</li>
          <li>FrontEnd | Vue.Js, JQuery</li>
          <li>BackEnd | Spring(Boot), MyBatis, IBatis, Node.Js</li>
        </ul>
        <!-- <ul class="my-skills-ul"> -->
          <!-- <li class="my-skills-li" v-for=" a,i in this.skills" :key="i">
            <button>
              <i class="fas fa-greater-than"></i>
              {{a.name}}
            </button>
          </li> -->
        <!-- </ul> -->
      </div>
    </div>
  </div>
</template>

<script scoped>
import { mapState } from 'vuex'
export default {
  computed : {
    ...mapState({
      skills : state => state.skills
    })
  },
}
</script>

<style scoped>
.about-container{
  height: 100vh;
  background-color: #F1ECE1;
  display: flex;
  justify-content: center;
  align-content: center;
  background: #EFF1F0;
  box-shadow: inset 5px 5px 10px #bfc1c0,
              inset -5px -5px 10px #ffffff;
}
.about-me{
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  padding: 10%;
}
.description{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.description > span{
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
}
.description-ul > li{
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 4px;
}
.description > span:first-child,
.description > span:nth-child(2)
{
  padding-bottom: 10px;
  font-size: 42px;
  align-self: center;
}
.my-skills{
  width: 100%;
}
.my-skills-ul{
  display: flex;
  justify-content: space-around;
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 200px));
  gap: 0px 10px;
}
.my-skills-li{
  display: flex;
  height: 100px;
}
.my-skills-li > button {
  width: 100%;
  font-size: 1.3em;
  font-family: 'Roboto', sans-serif;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: black;
  cursor: pointer;
}
.my-skills-li > button:hover {
  text-decoration: underline;
}
.my-skills > span:first-child{
  font-size: 38px;
  font-family: 'Roboto', sans-serif;
  align-self: center;
}
.fas.fa-greater-than{
  font-size: 14px;
}
.fas.fa-greater-than::before{
  padding-right: 10px;
}
.description-ul > li{
  padding-bottom: 14px;
}
.description-list{
  margin-bottom: 10px;
}
</style>