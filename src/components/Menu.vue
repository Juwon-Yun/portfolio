<template>
    <div class="menu-wrap">
      <div class="box1">
            <div v-if="!this.$store.state.menuToggle">
              <i class="fas fa-bars" @click="toggleMenuIcon"></i>
            </div>
            <div v-else>
              <i class="fas fa-times" @click="toggleMenuIcon"></i>
            </div>
      </div>
      <div class="box2">
        <div class="menu">
        </div>
        <div class="gitIcon">
          <a href="https://github.com/Juwon-Yun" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations({
      toggleMenuIcon : 'toggleMenuIcon'
    })
  },
}
</script>

<style scoped>
.menu-wrap{
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}
.box1{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.box2{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 8px;
}
i{
  font-size: 34px;
  color: black;
  cursor: pointer;
}
.menu,
.gitIcon{
  display: flex;
  justify-content: center;
  align-content: center;
}
.box{
  display: flex;
  flex-direction: column;
}
</style>