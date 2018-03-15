new Vue({
  el:"#leaderboard",
  data: {
    data_leader: []
  },
  mounted:function(){
    this.addLeader()
  },
  methods: {
    addLeader: function () {
      var app = this
      request.get('/api/players-point').then(function (response) {
        response.data.data.reverse().forEach((data,i) => {
          app.data_leader.push(data)
        })
      })
    }
  }
})
