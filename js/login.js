function statusChangeCallback(response) {
    if (response.status === 'connected') {
        $('.social-btn').hide();
    } else {
        FB.login(response => {
            console.log(response.authResponse.accessToken);
            if (response.status === 'connected') {    
                request.post('/api/signin', {}, {
                    headers: {
                        access_token: response.authResponse.accessToken
                    }
                })
                .then(function(response) {
                    if (response.status === 200) {
                    localStorage.token = response.data.token;
                    $('.social-btn').hide();
                  }
                });
            } else {
                console.log('belum login');
            }
        })
    }
}

window.fbAsyncInit = function() {
    FB.init({
      appId      : '369326503475419',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.12'
    });

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
};

function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
}

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/id_ID/sdk.js#xfbml=1&version=v2.12&appId=369326503475419&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));