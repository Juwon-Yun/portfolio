<template>
  <div class="project-container">
    <div id="Projects" class="projects">
      <ul >
        <li v-for="a,idx in projects" :key="idx" @mouseover="setClass(idx)" @mouseout="removeClass(idx)">
            <div class="project-wrap">
              <div class="title-category-wrap">
                <span class="project-title">{{a.name}}</span>
                <span class="project-category">{{a.category}}</span>
              </div>
              <div class="project-img"></div>
              <ul class="project-wrap-ul">
                <li class="project-wrap-skill" v-for="b in a.usedSkill" :key="b">
                  {{b}}
                </li>
              </ul>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script scoped>
import { mapMutations, mapState } from 'vuex'
export default {
  computed : {
    ...mapState({
      projects : state => state.projects,
      projectInFlag : state => state.projectInFlag
    })
  },
  methods: {
    ...mapMutations({
      setClass : 'setClass',
      removeClass : 'removeClass',
    }),
  },
}
</script>

<style scoped>
.project-container{
  height: 100vh;
  border-radius: 2px;
  background: #EFF1F0;
  box-shadow: inset 5px 5px 10px #bfc1c0,
              inset -5px -5px 10px #ffffff;
  padding-left: 5%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.project-container > .projects{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.projects > ul{
  list-style: none;
  height: 100%;
  padding: 0px;
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
}
.projects > ul > li{
  width: 45%;
  height: 45%;
  display: flex;
  cursor: pointer;
}
.project-wrap{
  cursor: pointer;
  width: 100%;
  margin-top: 0%;
  transition: 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4px;
}
.project-wrap-in{ 
  width: 100%;
  cursor: pointer;
  transition: 0.5s ease;
  margin-top: -10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.title-category-wrap{
  display: flex;
  justify-content: space-between;
}
.project-title{
  height: 1fr;
  border: 2px solid tan;
}
.project-img{
  height: 100%;
  border: 2px solid seagreen;
}
.project-wrap-ul{
  display: grid;
  /* grid-template: repeat(2, minmax(10, 2fr)); */
  grid-template-columns: repeat(3, minmax(140px, 200px));
  gap: 0px 10px;
  text-align: center;
}
.project-wrap-skill{
  height: 100%;
  color: #000;
}
</style>