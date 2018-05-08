new Vue({
  el: "#vue-app",
  data: {
    name: "Cory",
    job: "Developer"
  },
  methods: {
    greet: function(time) {
      return "Hello " + time
    }
  }
})
