let data = {
    "coord": {
      "lon": 116.3972,
      "lat": 39.9075
    },
  "weather": 
      {
        "id": 803,
        "main": "Clouds",
        "description": "曇りがち",
        "icon": "04d"
      }
    ,
    "base": "stations",
    "main": {
      "temp": 9.94,
      "feels_like": 8.65,
      "temp_min": 9.94,
      "temp_max": 9.94,
      "pressure": 1022,
      "humidity": 14,
      "sea_level": 1022,
      "grnd_level": 1016
    },
    "visibility": 10000,
    "wind": {
      "speed": 2.65,
      "deg": 197,
      "gust": 4.84
    },
    "clouds": {
      "all": 53
    },
    "dt": 1646542386,
    "sys": {
      "type": 1,
      "id": 9609,
      "country": "CN",
      "sunrise": 1646520066,
      "sunset": 1646561447
    },
    "timezone": 28800,
    "id": 1816670,
    "name": "北京市",
    "cod": 200
  }




  console.log("都市名"+data.name);
  console.log("最高気温"+data.main.temp_max);
  console.log("最低気温"+data.main.temp_min);
 let bmax = document.querySelector('div#bmax');
 bmax.textContent = data.main.temp_max;
 let bmin = document.querySelector('div#bmin');
 bmin.textContent = data.main.temp_min;
 let bhum = document.querySelector('div#bhum');
 bhum.textContent = data.main.humidity;
 let bwea = document.querySelector('div#bwea');
 bwea.textContent = data.weather.main;




 let b = document.querySelector('#sendRequest');
 b.addEventListener('click', sendRequest);
 
 
 // 通信を開始する処理
 function sendRequest() {
   let s = 
     // URL を設定
     var array1 = [360630,524901,993800,1816670,1850147,1880252,2147714,2643743,3451189,5128581,5368361];
     let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2643743.json';
     // 通信開始
     axios.get(url)
         .then(showResult)   // 通信成功
         .catch(showError)   // 通信失敗
         .then(finish);      // 通信の最後の処理
 }
 
 // 通信が成功した時の処理
 function showResult(resp) {
     // サーバから送られてきたデータを出力
     let data = resp.data;
 
     // data が文字列型なら，オブジェクトに変換する
     if (typeof data === 'string') {
         data = JSON.parse(data);
     }
 
     // data をコンソールに出力
     console.log(data);
 
     // data.x を出力
     console.log(data.x);
 }
 
 // 通信エラーが発生した時の処理
 function showError(err) {
     console.log(err);
 }
 
 // 通信の最後にいつも実行する処理
 function finish() {
     console.log('Ajax 通信が終わりました');
 }
