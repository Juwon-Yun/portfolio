<template>
  <div class="about-container">
    <div class="about-me">
      <div class="description">
        <span>About Me</span>
        <span>
          About MeAbout MeAbout MeAbout Me
          About MeAbout MeAbout MeAbout Me
          About MeAbout MeAbout MeAbout Me
          About MeAbout MeAbout MeAbout Me
          About MeAbout MeAbout MeAbout Me
          About MeAbout MeAbout MeAbout Me
        </span>
        <span>
          About MeAbout MeAbout MeAbout Me
          About MeAbout MeAbout MeAbout Me
          About MeAbout MeAbout MeAbout Me
          About MeAbout MeAbout MeAbout Me
          About MeAbout MeAbout MeAbout Me
        </span>
      </div>
      <div class="my-skills">
        <ul class="my-skills-ul">
          <li class="my-skills-li" v-for=" a,i in this.skills" :key="i">
            <button>
              <i class="fas fa-greater-than"></i>
              {{a.name}}
            </button>
          </li>
        </ul>
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
  }
}
</script>

<style scoped>
.about-container{
  height: 100vh;
  background-color: #F1ECE1;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10%;
}
.about-me{
  width: 100%;
  height: 90%;
  background-color:  aquamarine;
  display: flex;
  flex-direction: column;
  padding: 10%;
}
.description{
  width: 100%;
  height: 100%;
  background-color: blueviolet;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.description > span{
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
}
.description > span:first-child{
  font-size: 42px;
  align-self: center;
}
.my-skills{
  width: 100%;
  background-color: tomato;
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
  color: #eee;
  cursor: pointer;
}
.my-skills-li > button:hover {
  text-decoration: underline;
  
}
.fas.fa-greater-than{
  font-size: 14px;
}
.fas.fa-greater-than::before{
  padding-right: 10px;
}
</style>