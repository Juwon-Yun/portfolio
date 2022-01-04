import { createStore } from "vuex"

const store = createStore({
    state(){
        return{
            menu : [
                'Home', 'About', 'Project','Contact'
            ],
            // v1
            displayFlag : true,
            transFlag : false,

            // v2
            menuToggle : true,
            inContact : true,
            outContact : false,

        }
    },
    mutations : {
        changeView(state, e){
            switch (e.target.innerHTML) {
              case 'Home':
                window.scrollTo(0, 0, {behavior:'smooth'})
                break;
              case 'About':
                window.scrollTo(0, 950, {behavior:'smooth'})
                break;
              case 'Project':
                window.scrollTo(0, 1905, {behavior:'smooth'})
                break;
              case 'Contact':
                window.scrollTo(0, 2860, {behavior:'smooth'})
                break;
            }
          },
          toggleMenuIcon(context){
            context.menuToggle = !context.menuToggle
            context.inContact = !context.inContact
            context.outContact = !context.outContact
          },
          onScroll(state){
            if(window.pageYOffset > 530 ) {
              state.displayFlag = false
              state.transFlag = true
            }
            if(window.pageYOffset < 530 ) {
              state.displayFlag = true
              state.transFlag = false
            }
          },
    },
    actions : {

    },
})

export default store