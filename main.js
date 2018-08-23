var i=0; //start point
var images=[];
var time = 6000;

// Image List
images[0]='img/1.jpg';
images[1]='img/2.jpg';
images[2]='img/3.jpg';
images[3]='img/4.jpg';

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

window.onload = changeImg;
