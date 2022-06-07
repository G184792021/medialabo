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

//  let bmin = document.querySelector('div#bmin');
//  bmin.textContent = data.main.temp_min;
//  let bhum = document.querySelector('div#bhum');
//  bhum.textContent = data.main.humidity;
//  let bwea = document.querySelector('div#bwea');
//  bwea.textContent = data.wind.speed;




 let b = document.querySelector('#sendRequest');
 b.addEventListener('click', sendRequest);
 
 
 // 通信を開始する処理
 var ara = new Array(12);
 var count = 0;

 function sendRequest() {
  // URL を設定
  var array = [360630,524901,993800,1816670,1850147,1880252,2147714,2643743,2968815,3451189,5128581,5368361];
  for(let i=0;i<array.length;i++){
   //  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+array[0]+'-'+array[1]+'-'+array[2]+'-'+array[3]+'-'+array[4]+'-'+array[5]+'-'+array[6]+'-'+array[7]+'-'+array[8]+'-'+array[9]+'-'+array[10]+'-.json';
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+array[i]+'.json';
  
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理   
  }
 }

// 通信が成功した時の処理
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;
  ara[count] = data;
  count = count +1;
  if (typeof data === 'string') {
    data = JSON.parse(data);
}
  // ara[i] = data;
  // for (let r=0;r<data.length;r++){
  //   let bmin = document.querySelector('div#bmin');
  //   bmin.textContent = ara[i].main.temp_min;
  // }

  console.log(data);
  document.querySelector('div#amax').textContent = ara[0].main.temp_max;
  document.querySelector('div#amin').textContent = ara[0].main.temp_min;
  document.querySelector('div#ahum').textContent = ara[0].main.humidity;
  document.querySelector('div#awea').textContent = ara[0].wind.speed;
  document.querySelector('div#bmax').textContent = ara[1].main.temp_max;
  document.querySelector('div#bmin').textContent = ara[1].main.temp_min;
  document.querySelector('div#bhum').textContent = ara[1].main.humidity;
  document.querySelector('div#bwea').textContent = ara[1].wind.speed;
  document.querySelector('div#cmax').textContent = ara[2].main.temp_max;
  document.querySelector('div#cmin').textContent = ara[2].main.temp_min;
  document.querySelector('div#chum').textContent = ara[2].main.humidity;
  document.querySelector('div#cwea').textContent = ara[2].wind.speed;
  document.querySelector('div#dmax').textContent = ara[3].main.temp_max;
  document.querySelector('div#dmin').textContent = ara[3].main.temp_min;
  document.querySelector('div#dhum').textContent = ara[3].main.humidity;
  document.querySelector('div#dwea').textContent = ara[3].wind.speed;
  document.querySelector('div#emax').textContent = ara[4].main.temp_max;
  document.querySelector('div#emin').textContent = ara[4].main.temp_min;
  document.querySelector('div#ehum').textContent = ara[4].main.humidity;
  document.querySelector('div#ewea').textContent = ara[4].wind.speed;
  document.querySelector('div#fmax').textContent = ara[5].main.temp_max;
  document.querySelector('div#fmin').textContent = ara[5].main.temp_min;
  document.querySelector('div#fhum').textContent = ara[5].main.humidity;
  document.querySelector('div#fwea').textContent = ara[5].wind.speed;
  document.querySelector('div#gmax').textContent = ara[6].main.temp_max;
  document.querySelector('div#gmin').textContent = ara[6].main.temp_min;
  document.querySelector('div#ghum').textContent = ara[6].main.humidity;
  document.querySelector('div#gwea').textContent = ara[6].wind.speed;
  document.querySelector('div#hmax').textContent = ara[7].main.temp_max;
  document.querySelector('div#hmin').textContent = ara[7].main.temp_min;
  document.querySelector('div#hhum').textContent = ara[7].main.humidity;
  document.querySelector('div#hwea').textContent = ara[7].wind.speed;
  document.querySelector('div#imax').textContent = ara[8].main.temp_max;
  document.querySelector('div#imin').textContent = ara[8].main.temp_min;
  document.querySelector('div#ihum').textContent = ara[8].main.humidity;
  document.querySelector('div#iwea').textContent = ara[8].wind.speed;
  document.querySelector('div#jmax').textContent = ara[9].main.temp_max;
  document.querySelector('div#jmin').textContent = ara[9].main.temp_min;
  document.querySelector('div#jhum').textContent = ara[9].main.humidity;
  document.querySelector('div#jwea').textContent = ara[9].wind.speed;
  document.querySelector('div#kmax').textContent = ara[10].main.temp_max;
  document.querySelector('div#kmin').textContent = ara[10].main.temp_min;
  document.querySelector('div#khum').textContent = ara[10].main.humidity;
  document.querySelector('div#kwea').textContent = ara[10].wind.speed;
  document.querySelector('div#lmax').textContent = ara[11].main.temp_max;
  document.querySelector('div#lmin').textContent = ara[11].main.temp_min;
  document.querySelector('div#lhum').textContent = ara[11].main.humidity;
  document.querySelector('div#lwea').textContent = ara[11].wind.speed;
  
  // data が文字列型なら，オブジェクトに変換する
}




// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}