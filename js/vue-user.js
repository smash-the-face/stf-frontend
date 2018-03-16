new Vue({
    el:"#userprofile",
    data: {
      data_leader: [],
      data_search: [],
    },
    mounted:function(){
      this.addLeader()
    },
    methods: {
      addUser: function () {
        var app = this
        request.get('/api/players-point', {
            headers: {token: localStorage.token
            }
        })
        .then(function (response) {
          response.data.data.reverse().forEach((data,i) => {
            app.data_leader.push(data)
          })
        })
      },
    },
    watch: {
    }
  })
  