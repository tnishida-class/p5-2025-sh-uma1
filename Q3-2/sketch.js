// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64); //色
  rect(0, groundY, width, height - groundY);

  // BLANK[1] キャラクターの左右移動(速度１)
  if(keyIsDown(LEFT_ARROW)){vx -= 1; }; //←で左に
  if(keyIsDown(RIGHT_ARROW)){vx += 1; }; //→で右に

  // 左右キー＋Aでダッシュ(速度２)
　if(keyIsDown(LEFT_ARROW) && keyIsDown("A".charCodeAt(0))){vx -= 2; };
  if(keyIsDown(RIGHT_ARROW) && keyIsDown("A".charCodeAt(0))){vx += 2; };

  //地面との摩擦
  vx *= 0.8;

  //重力とジャンプ
  vy +=g; //重力 
  if(y >= groundY - size/2){ //空中ジャンプができないように(キャラが地面にいる時)
    if(keyIsDown(" ".charCodeAt(0))){vy -= 20; } //スペースでジャンプ
  }

 
  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置を更新
  x += vx;
  y += vy;

  // 画面外に出たら反対側から戻る
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; };

  // キャラが地面に埋まらないように
  if(y > groundY - size/2){ y = groundY - size/2; };
  

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
}