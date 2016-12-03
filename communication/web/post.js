// Config
var testUrl = 'some-url.com';
var someData = {
  name: 'someName',
  type: 'someType'
};

fetch('https://' + testUrl, {
  mode: 'POST',
  body: someData.toString() // or JSON.stringify(someData)
}).then(response => {
  console.log(response);
});
