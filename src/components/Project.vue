<template>
  <div class="project-container">
    <div id="Projects" class="projects">
      <ul >
        <li v-for="a,idx in projects" :key="idx" @mouseover="setClass(idx)" @mouseout="removeClass(idx)">
            <div class="project-wrap">{{a.name}}</div>
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
  /* border: 3px solid saddlebrown; */
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
  height: 100%;
  margin-top: 0%;
  margin-right: 0%;
  border: 2px solid sandybrown;
  transition: 0.5s ease;
  z-index: 0;
}
.project-wrap-in{
  width: 100%;
  height: 100%;
  border: 2px solid chartreuse;
  cursor: pointer;
  transition: 0.5s ease;
  margin-top: -10%;
  z-index: 1;

}
</style>