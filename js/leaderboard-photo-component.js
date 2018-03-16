Vue.component('lead-photo-component', {
    template: `
        
            <table class="table" >
                <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Upload By</th>
                        <th scope="col" v-on:click="datasort">
                        <div>Smash Count</div>
                        </th>
                    <th scope="col">Victim Face</th>
                        </tr>
                    </thead >
                <tbody v-for="element in lead" v-if="!search.length">
                    <tr>
                        <th scope="row">{{ lead.indexOf(element) + 1 }}</th>
                        <td>{{ element.uploaderName }}</td>
                        <td>{{ element.totalSmash }}</td>
                        <td>{{ element.photoUrl }}</td>
                    </tr>
                </tbody>
                <tbody v-for="element in search" v-if="search.length">
                    <tr>
                        <th scope="row">{{ lead.indexOf(element) + 1 }}</th>
                        <td>{{ element.uploaderName }}</td>
                        <td>{{ element.totalSmash }}</td>
                        <td>{{ element.photoUrl }}</td>
                    </tr>
                </tbody>
            </table>
    `,
    props: ['lead', 'search','orderby'],
    methods: {
            datasort: function () {
                this.$emit('data-sort')
            }
    }
})

    
