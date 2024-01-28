const request = require('request');
request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    const data = JSON.parse(body);
    console.log(body); // APIからのレスポンスをログに記録
    const dogImageUrl = data.message; // 画像のURLにアクセス
    console.log(dogImageUrl); // 画像のURLをログに記録
  }
});
