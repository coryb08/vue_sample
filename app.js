new Vue({
  el: "#vue-app",
  data: {
    age: 28
  },
  methods: {
    add: function(inc) {
      this.age += inc
    },
    subtract: function(dec) {
      this.age -= dec
    }
  }
})
