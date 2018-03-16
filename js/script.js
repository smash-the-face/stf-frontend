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
            }
        }
    },
    mounted: function () {
        this.readData()
    },
    watch: {
        search: function (input) {
            let value = input.toLowerCase()
            console.log(value);
            
            let app = this
            app.searchData = []
            this.leadData.map(data => {
                let searchFeature = data.uploaderName.toLowerCase().search(value)
                if (searchFeature >= 0) {
                    app.searchData.push(data)
                }
            })
        }
    }
})