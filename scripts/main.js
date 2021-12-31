const App = {
    data() {
      return {        
      }
    },
    methods:{
        language(e){
            console.log(e.target.checked)
            console.log(e.target.id)

            let id = e.target.checked


            if(id == true){
                window.location.href = "es-index.html"
            } else {
                window.location.href = "index.html"
            }
        },
        
    }
  }
  
  Vue.createApp(App).mount('#app')