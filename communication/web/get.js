// Config
var testUrl = 'some-url.com';

fetch('https://' + testUrl).then(response => {
  return response.json();
}).then(json => {
  console.log(json);
});
