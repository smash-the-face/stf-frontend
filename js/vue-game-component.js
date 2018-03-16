Vue.component('face-to-smash', {
  template: `
  <span >
    <img 
      :src="source" 
      height="auto"
      width="140px" 
      class="animated slideInUp"
      @click="smashFace"
      v-if="muncul">  </span>`,
   data: function(){
     return {
     }
   },
   props: ['muncul','source'],
   methods: {
    smashFace: function(){
      this.$emit('smashing');

    }
   }
});

Vue.component('nyawa',{
  template: `
      <div class="lives">
        <img id="heart" src="../assets/images/lives.png" v-for="n in nyawa" >  
      </div>
`,
  props: ['nyawa']
})
