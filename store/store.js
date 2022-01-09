import { createStore } from "vuex"

const store = createStore({
    state(){
        return{
            menu : [
                { 
                  name : 'Home',
                  flag : true,
                },
                {
                  name : 'About',
                  flag : false,
                },
                {
                  name : 'Projects',
                  flag : false,
                },
            ],
            skills : [
              {
                name : 'Java',
              },
              {
                name : 'JPA',
              },
              {
                name : 'MyBatis',
              },
              {
                name : 'Vue.Js',
              },
              {
                name : 'JQuery',
              },
              {
                name : 'JavaScript (ES6+)',
              },
              {
                name : 'Spring Boot',
              },
            ],
            projects : [
              {
                name : 'kanboo',
                category : 'PMS',
                usedSkill : {
                  front : 'Vue.Js',
                  back : 'Spring Boot',
                  JDBC : 'JPA',
                  DB : 'MariaDB',
                },
              },
              {
                name : 'GMP',
                category : 'ERP',
                usedSkill : {
                  front : 'JSP',
                  back : 'Spring',
                  JDBC : 'MyBatis',
                  DB : 'Oracle',
                },
              },
              {
                name : 'LoLApp',
                category : 'Util',
                usedSkill : {
                  front : 'ThymeLeaf',
                  back : 'Spring Boot',
                  JDBC : 'MyBatis',
                  DB : 'MariaDB',
                },
              },
              // {
              //   name : 'zoom',
              //   category : 'Util',
              //   usedSkill : {
              //     front : 'Pug',
              //     back : 'Node.Js',
              //     etc : 'socket.io',
              //   },
              // },
            ],
            // v1
            displayFlag : true,
            transFlag : false,
            projectInFlag : false,

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
          toggleMenuFlag(state, idx){
            for(let i = 0; i < state.menu.length; i++){
              if(idx === i){
                state.menu[idx].flag = true
              }else{
                state.menu[i].flag = false
              }
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
          setClass(state, idx){
            const wrap_li = document.querySelectorAll('.projects > ul > li');
            wrap_li[idx].firstElementChild.removeAttribute('class','project-wrap')
            wrap_li[idx].firstElementChild.setAttribute('class','project-wrap-in')
          },
          removeClass(state, idx){
            const wrap_li = document.querySelectorAll('.projects > ul > li');
            wrap_li[idx].firstElementChild.removeAttribute('class','project-wrap-in')
            wrap_li[idx].firstElementChild.setAttribute('class','project-wrap')
          }
    },
    actions : {

    },
})

export default store