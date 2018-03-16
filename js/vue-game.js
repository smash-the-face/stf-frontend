new Vue({
  el: '#app-game',
  data: {
    nyawa: 4,
    point: 0,
    name: '',
    files: [],
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
    shake: '',
    gameStart: false,
    urlPhoto: '/images/scary-monster.png'
  },
  mounted: function(){
    
    this.getAllFile();
  },
  methods:{
    getAllFile: function(){
      var app = this;
      request.get('/api/file').then(data => {
        app.files = data.data.file;
      }).catch(err => {
        console.log(err)

        })

    },
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
      let fotoMana  =  Math.floor(Math.random() * Math.floor(this.files.length - 1 ));
      let urlFoto = this.files[fotoMana].url;
    
      this.urlPhoto = urlFoto ;
      console.log(this.urlPhoto)
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
           app.shake = 'animated shake';
            document.getElementById("btn-stop-music").click();
            document.getElementById("btn-gameover").click();
           clearInterval(gameStart);
         } else {
           app.cekKemunculanMonster()
         }

       }, 800);
    }

  }

})
