// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8; // マスの一辺の長さ
  noStroke();
  //マスを書く
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
     if((i+j)%2===0){ //i+jの余りが０のところは白、それ以外はグレー
      fill(255);//白いマス
     }else{
      fill(160);//グレーマス
     } 
     rect(size*i,size*j,size,size);// BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
    }
  }
//丸を置く
//赤丸
for(let j = 0; j<3; j++){ //上３段
  for(let i=0; i<8; i++){
    if((i+j)%2===1){ //グレーのマスだけに置く
    fill(220,0,0);
    circle(size*i + size / 2,size*j + size / 2,size*0.9)
  }
}
}
//黒丸
for(let j = 5; j<8; j++){　//下３段
  for(let i = 0; i<8; i++){
    if((i+j)%2===1){ //グレーのマスだけに置く
      fill(0);
      circle(size*i + size / 2,size*j + size / 2,size*0.9)
    }
  }
}

}