const hostname = document.location.hostname;

if (hostname == '127.0.0.1' || hostname == 'localhost')  {

  var request = axios.create({
    baseURL: 'http://localhost:3000',
  });
} else {
  var request = axios.create({
    baseURL: 'http://stf-api.geekosta.com',
  });
}
