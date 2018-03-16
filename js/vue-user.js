new Vue({
    el:"#userprofile",
    data: {
      data_profile: [],
      data_search: [],
    },
    mounted:function(){
      this.addLeader()
    },
    methods: {
      addUser: function () {
        var app = this
        request.get('/api/getprofile', {
            headers: {token: localStorage.token
            }
        })
        .then(function (response) {
          response.data.data.reverse().forEach((data,i) => {
            app.data_profile.push(data)
          })
        })
      },
    },
    watch: {
    }
  })
  