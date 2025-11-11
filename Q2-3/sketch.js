// ギリシャ国旗（ほかの国旗に挑戦してもOK）
function setup() {
  createCanvas(270, 180);
  noStroke();
  background(255);

  const d = height / 9; // 縞1本の太さ
  const blue = color(0, 51, 160); //青色

  // 縞を描く
  for(let i = 0; i < 9; i++){
    if(i%2===0){ // 2で割った余りが０が青
    fill(blue);
    rect(0, i * d, width, d); 
  }
}
  // 十字を描く
  const size = d * 5;
  fill(blue);
  rect(0, 0, size, size); //青の正方形
  fill(255);
  rect(d * 2, 0, d, size);　//十字の縦
  rect(0,d*2,size,d)//十字の横
}