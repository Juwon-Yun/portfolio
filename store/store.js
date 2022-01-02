import { createStore } from "vuex"

export const store = createStore({
    state(){
        return{
            menu : [
                'Home', 'About', 'Project','Contact'
            ],
            menuToggle : false,
        }
    },
    mutations : {
        changeView(state, e){
            console.log(e)
            switch (e.target.innerHTML) {
              case 'Home':
                window.scrollTo(0, 0)
                break;
              case 'About':
                window.scrollTo(0, 950)
                break;
              case 'Project':
                window.scrollTo(0, 1905)
                break;
              case 'Contact':
                window.scrollTo(0, 2860, {behavior:'smooth'})
                break;
            }
          },
          toggleMenuIcon(state){
            state.menuToggle = !state.menuToggle
          },
    },
    actions : {

    },
})

export default store