new Vue({
  el:"#leaderboard",
  data: {
    data_leader: [],
    data_search: [],
    ordering: 'descending',
    search: ''
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
    },
    changeOrder: function () {
      if (this.ordering === 'descending') {
        this.data_leader.reverse()
        this.ordering = 'ascending'
      }
      else {
        this.data_leader.reverse()
        this.ordering = 'descending'
      }
    }
  },
  watch: {
    search: function (val) {
      let newVal = val.toLowerCase()
      let app = this
      app.data_search = []
      this.data_leader.forEach(data => {
        let searchName = data.name.toLowerCase().search(newVal)
        if (searchName >= 0) {
          app.data_search.push(data)
        }
      })
    }
  }
})
