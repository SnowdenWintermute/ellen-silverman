var i=0; //start point
var images=[];
var time = 5000;

// Image List
images[0]='img/4.png';
images[1]='img/3.png';
images[2]='img/2.jpg';

//elements
let bg1 = document.getElementById("bgImg1")
let bg2 = document.getElementById("bgImg2")
let bg3 = document.getElementById("bgImg3")

// Change images
function changeImg(){
  document.bgImg.src = images[i];
  if(i<images.length - 1){
    i++;
  }else{
    i=0;
  }
  setTimeout('changeImg()', time);
}

//change opacity
let changeOpacity = function(){
    if(bg1.className !== "bgImgShow"
    && bg2.className !== "bgImgShow"
    && bg3.className !== "bgImgShow"){
      bg1.className = "bgImgShow"
    }else if(bg1.className==="bgImgShow"){
      bg2.className = "bgImgShow"
      bg1.className = "bgImg"
      // console.log("ey");
    }else if(bg2.className==="bgImgShow"){
      bg3.className = "bgImgShow"
      bg2.className = "bgImg"
      // console.log("oy")
    }else if(bg3.className==="bgImgShow"){
      bg1.className = "bgImgShow"
      bg3.className = "bgImg"
    }
      setTimeout(changeOpacity, time);
}

window.onLoad = changeOpacity();

// window.onload = changeImg;
