const hostname = document.location.hostname;
console.log(hostname)
if (hostname == '127.0.0.1' || hostname == 'localhost')  {
  const request = axios.create({
    baseURL: 'http://localhost:3000',
  });
} else {
  const request = axios.create({
    baseURL: 'http://stf-api.geekosta.com',
  });
}
