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
            headers: {token: localStorage.token}
        })
        .then(function (response) {
          console.log(response)
        })
      },
    },
    watch: {
    }
  })
  