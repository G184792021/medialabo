/* let data = {
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
    "wind.speed": "北京市",
    "cod": 200
  }




  console.log("都市名"+data.wind.speed);
  console.log("最高気温"+data.main.temp_max);
  console.log("最低気温"+data.main.temp_min);
 */
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
   //  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+array[0]+'-'+array[j]+'-'+array[j]+'-'+array[j]+'-'+array[j]+'-'+array[j]+'-'+array[j]+'-'+array[j]+'-'+array[j]+'-'+array[j]+'-'+array[10]+'-.json';
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
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }   
  ara[count] = data;
    
  count = count +1;

  // ara[i] = data;
  // for (let r=0;r<data.length;r++){
  //   let bmin = document.querySelector('div#bmin');
  //   bmin.textContent = ara[i].main.temp_min;
  // }.
  for(let j=0;j<ara.length;j++){
    if(0===ara[j].wind.speed){
    document.querySelector('div#amax').textContent = ara[j].main.temp_max;
    document.querySelector('div#amin').textContent = ara[j].main.temp_min;
    document.querySelector('div#ahum').textContent = ara[j].main.humidity;
    document.querySelector('div#awea').textContent = ara[j].wind.speed;
    } else if(2.7===ara[j].wind.speed){
    document.querySelector('div#bmax').textContent = ara[j].main.temp_max;
    document.querySelector('div#bmin').textContent = ara[j].main.temp_min;
    document.querySelector('div#bhum').textContent = ara[j].main.humidity;
    document.querySelector('div#bwea').textContent = ara[j].wind.speed;
  } else if(1.34===ara[j].wind.speed){
    document.querySelector('div#cmax').textContent = ara[j].main.temp_max;
    document.querySelector('div#cmin').textContent = ara[j].main.temp_min;
    document.querySelector('div#chum').textContent = ara[j].main.humidity;
    document.querySelector('div#cwea').textContent = ara[j].wind.speed;
  } else if(2.65===ara[j].wind.speed){
    document.querySelector('div#dmax').textContent = ara[j].main.temp_max;
    document.querySelector('div#dmin').textContent = ara[j].main.temp_min;
    document.querySelector('div#dhum').textContent = ara[j].main.humidity;
    document.querySelector('div#dwea').textContent = ara[j].wind.speed;
  } else if(6.17===ara[j].wind.speed){
    document.querySelector('div#emax').textContent = ara[j].main.temp_max;
    document.querySelector('div#emin').textContent = ara[j].main.temp_min;
    document.querySelector('div#ehum').textContent = ara[j].main.humidity;
    document.querySelector('div#ewea').textContent = ara[j].wind.speed;
  } else if(82===ara[j].main.humidity){
    document.querySelector('div#fmax').textContent = ara[j].main.temp_max;
    document.querySelector('div#fmin').textContent = ara[j].main.temp_min;
    document.querySelector('div#fhum').textContent = ara[j].main.humidity;
    document.querySelector('div#fwea').textContent = ara[j].wind.speed;
  } else if(2.24===ara[j].wind.speed){
    document.querySelector('div#gmax').textContent = ara[j].main.temp_max;
    document.querySelector('div#gmin').textContent = ara[j].main.temp_min;
    document.querySelector('div#ghum').textContent = ara[j].main.humidity;
    document.querySelector('div#gwea').textContent = ara[j].wind.speed;
  } else if(3.6===ara[j].wind.speed){
    document.querySelector('div#hmax').textContent = ara[j].main.temp_max;
    document.querySelector('div#hmin').textContent = ara[j].main.temp_min;
    document.querySelector('div#hhum').textContent = ara[j].main.humidity;
    document.querySelector('div#hwea').textContent = ara[j].wind.speed;
  } else if(4.63===ara[j].wind.speed){
    document.querySelector('div#imax').textContent = ara[j].main.temp_max;
    document.querySelector('div#imin').textContent = ara[j].main.temp_min;
    document.querySelector('div#ihum').textContent = ara[j].main.humidity;
    document.querySelector('div#iwea').textContent = ara[j].wind.speed;
  } else if(1.21===ara[j].wind.speed){
    document.querySelector('div#jmax').textContent = ara[j].main.temp_max;
    document.querySelector('div#jmin').textContent = ara[j].main.temp_min;
    document.querySelector('div#jhum').textContent = ara[j].main.humidity;
    document.querySelector('div#jwea').textContent = ara[j].wind.speed;
  } else if(6.07===ara[j].main.temp){
    document.querySelector('div#kmax').textContent = ara[j].main.temp_max;
    document.querySelector('div#kmin').textContent = ara[j].main.temp_min;
    document.querySelector('div#khum').textContent = ara[j].main.humidity;
    document.querySelector('div#kwea').textContent = ara[j].wind.speed;
  } else if(1.54===ara[j].wind.speed){
    document.querySelector('div#lmax').textContent = ara[j].main.temp_max;
    document.querySelector('div#lmin').textContent = ara[j].main.temp_min;
    document.querySelector('div#lhum').textContent = ara[j].main.humidity;
    document.querySelector('div#lwea').textContent = ara[j].wind.speed;
  }
}
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