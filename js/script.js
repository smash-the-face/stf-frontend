var app = new Vue({
    el: '#leadPhoto',
    data: {
        leadData: [],
        orderBy: true,
        search: '',
        searchData: []
    },
    methods: {
        readData: function () {
            let app = this
            request.get('/api/photos').then(function (response) {
                response.data.leadeboardData.reverse().map((data,i) => {
                    app.leadData.push(data)
                })
            })
        },
        sort: function () {
            if (this.orderBy === true) {
                this.leadData.reverse()
            }else {
                this.leadData.reverse()
                // this.orderBy = 'descending'
            }
        }
    },
    mounted: function () {
        this.readData()
    }
})