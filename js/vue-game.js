new Vue({
  el: '#app-game',
  data: {
    nyawa: 4,
    point: 0,
    name: '',
    muncul: {
      monster1: false,
      monster2: false,
      monster3: false,
      monster4: false,
      monster5: false,
      monster6: false,
      monster7: false,
      monster8: false,
      monster9: false,
      monster10: false,
      monster11: false,
      monster12: false,
      monster13: false,
      monster14: false,
      monster15: false,
      monster16: false,
    },
    monsterNyerang: false,
    gameStart: false,
    urlPhoto: '/images/scary-monster.png'
  },
  mounted: function(){
    
  },
  methods:{
    sendClick: function(){
      request.put('/api/photos/',{}).then(res =>{

      }).catch(err => {
        console.log(err);

      })
    },
    sendPlayerPoint: function(){
      console.log('Send Player Poin')
      let app = this;
      let name = this.name;
      let point = this.point;
      request.post('/api/players-point',{name,point}).then(res =>{
        console.log(res.data)
        $.notify({
          // options
          message: '<b>Success</b> add to leaderboard'
        },{
          // settings
          type: 'success'
        });
        app.nyawa = 4;

      }).catch(err => {
        console.log(err)
      });
    },
    cekKemunculanMonster: function(){
      var app = this;
      let monsterMana  =  Math.floor(Math.random() * Math.floor(16)) + 1;
      this.clearMonster();

      if(app.monsterNyerang && app.nyawa != 0){
        this.nyawa--;
      }
      if(app.nyawa != 0 ){
        app.monsterNyerang = false;
        app.muncul[`monster${monsterMana}`] = true;
        app.monsterNyerang = true;
      }
    },
    tembakMonster: function(){
      this.monsterNyerang = false;
      this.point++;
      console.log(this.point)
      console.log(this.monsterNyerang,'status monster')
      alert('Monster Ketembak');
    },
    clearMonster: function(){
      this.muncul =  {
        monster1: false,
        monster2: false,
        monster3: false,
        monster4: false,
        monster5: false,
        monster6: false,
        monster7: false,
        monster8: false,
        monster9: false,
        monster10: false,
        monster11: false,
        monster12: false,
        monster13: false,
        monster14: false,
        monster15: false,
        monster16: false,
      }
    },
    startGame: function(){
      var app = this;
      app.nyawa = 4;
      app.monsterNyerang = false;
      app.point =  0;
      var gameStart = setInterval(function(){ 
        console.log('mulaii');
         if (app.nyawa == 0) {
          console.log('berhenti');
           app.clearMonster();
           clearInterval(gameStart);
         } else {
           app.cekKemunculanMonster()
         }

       }, 1000);
    }

  }

})
