let componentUser = {
    template: `
    <div class="row text-center" v-for="user in users">
        <div class="col-4">
            <img src="../assets/images/{user.images}" width="150px" height="auto" title="12 likes">
        </div>
    </div>
    `,
    props: ['data_leader', 'data_search'],
    methods: {
      toggle: function () {
        this.$emit('toggle-leader')
      }
    }
  }
  Vue.component('component-user', componentUser)
  
//   <table class="table" >
//   <thead class="thead-dark">
//     <tr>
//       <th scope="col">No</th>
//       <th scope="col">Name</th>
//       <th scope="col" v-on:click="toggle">Point <span class="oi oi-chevron-bottom"></span></th>
//     </tr>
//   </thead>
//   <tbody v-for="leader in data_leader" v-if="!data_search.length">
//     <tr>
//       <th scope="row">{{data_leader.indexOf(leader) + 1}}</th>
//       <td>{{leader.name}}</td>
//       <td>{{leader.point}}</td>
//     </tr>
//   </tbody>
//   <tbody v-for="leader in data_search" v-if="data_search.length">
//     <tr>
//       <th scope="row">{{data_search.indexOf(leader) + 1}}</th>
//       <td >{{leader.name}}</td>
//       <td>{{leader.point}}</td>
//     </tr>
//   </tbody>
// </table>