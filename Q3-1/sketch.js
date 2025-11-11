// 心臓の鼓動のようなアニメーション
const cycle = 100; // 1周期のフレーム数
let count; // 何フレーム目か

function setup(){
  createCanvas(200, 200);
  count = 0;
}

let speed = 1; // アニメーションの速さ(speedは1)
function draw(){ //繰り返し処理
  background(160, 192, 255); //背景(水色)
  
  if (keyIsPressed) { 
    speed =2;
  } else{
    speed=1
  }//キーを押しているとspeedが２に
  

  count = (count + speed) % cycle; //周期(100)を超えたら０に戻す
 

  let size = 50; //最初の大きさ
 
  if(count < cycle / 2){
    size = 50 + count; //1周期の前半は size が大きく
  }else{
    size = 50 + cycle - count
  } //後半は size が小さく
  ellipse(width / 2, height / 2, size); //円
}
