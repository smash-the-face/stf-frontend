Vue.component('face-to-smash', {
  template: `
  <span >
    <img 
      :src="source" 
      height="auto"
      width="140px" 
      :class="animate"
      @click="smashFace"
      v-if="muncul">  </span>`,
   data: function(){
     return {
     }
   },
  data : function(){
    return {
      animate: 'animated slideInUp',
    }
  },
   props: ['muncul','source'],
   methods: {
    smashFace: function(){
      this.animate = 'animated bounceOut'
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
