new Vue({
    el: '#uploadform',
    data: {
    },
    methods: {
        sendForm(){
            const fileInput = document.querySelector( '#form3' );
            const formData = new FormData();
            formData.append( 'file', fileInput.files[0] );
            request.post( '/api/upload', formData, {
                headers: {
                    token: localStorage.token
                }
            })
            .then( ( response ) => {
                $.notify({
                    // options
                    message: '<b>Success</b> upload file'
                  },{
                    // settings
                    type: 'success'
                  });
                  $('#form3').val('');
            } )
            .catch( ( error ) => {
                console.log(error);
            } );
          },
    }
  })