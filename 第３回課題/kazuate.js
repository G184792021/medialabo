// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;


// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
let b = document.querySelector('#print');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {      // 第5回課題:テキストボックスの数値をここに代入
    
    let o = document.querySelector('input[name="lll"]');
    let yoso = o.value;
    // 課題3-1：ここの判定処理を作成する．
    

        console.log(kaisu+"回目の予想: "+yoso);
        if(kaisu<3) {
            if(kotae==yoso){
                let aba = document.querySelector("p#result");
                aba.textContent=("正解です．おめでとう!");
                kaisu=kaisu+99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
            }else if(kotae!==yoso && kaisu==4){
                let aba = document.querySelector("p#result");
                aba.textContent=("まちがい．残念でした答えは "+kotae+ "です．");
                kaisu=kaisu+1;
            }else if(yoso<kotae){
                let aba = document.querySelector("p#result");
                aba.textContent=("まちがい．答えはもっと大きいですよ");
                kaisu=kaisu+1;
            }else if(yoso>kotae){
                let aba = document.querySelector("p#result");
                aba.textContent=("まちがい．答えはもっと小さいですよ");
                kaisu=kaisu+1;
            }
        }else {
            let aba = document.querySelector("p#result");
            aba.textContent=("答えは "+kotae+" でした．すでにゲームは終わっています");
        }
    
    
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
    let aba = document.querySelector("span#kaisu");
    aba.textContent=kaisu;
    let aaaaaa = document.querySelector("span#yoso");
    aaaaaa.textContent=yoso;
    let ababb = document.querySelector("span#kotae");
    ababb.textContent=kotae;
}
