let paintings = [
{
  "id": 190,
  "title": "Bone",
  "size": "11\" x 14\" Mat",
  "Year": "1977",
  "material": "Ink on paper",
  "price": "$50 ",
  "category": "Bone",
  "img": "./img/bone/190.jpg",
  "Comment": "Bone"
},
{
  "id": 191,
  "title": "Bone Series 13",
  "size": "11\" x 14\" Mat",
  "Year": "1977",
  "material": "Mixmedia",
  "price": "$50 ",
  "category": "Bone",
  "img": "./img/bone/191.jpg",
  "Comment": "Bone Series 13"
},
{
  "id": 192,
  "title": "Bone Series 14",
  "size": "11\" x 14\" Mat",
  "Year": "1977",
  "material": "Mixmedia",
  "price": "$50 ",
  "category": "Bone",
  "img": "./img/bone/192.jpg",
  "Comment": "Bone Series 14"
},
{
  "id": 193,
  "title": "Bone Series 15",
  "size": "11\" x 14\" Mat",
  "Year": "1977",
  "material": "Ink on paper",
  "price": "$50 ",
  "category": "Bone",
  "img": "./img/bone/193.jpg",
  "Comment": "Bone Series 15"
},
{
  "id": 194,
  "title": "Bone Series 16",
  "size": "11\" x 14\" Mat",
  "Year": "1977",
  "material": "Ink on paper",
  "price": "$50 ",
  "category": "Bone",
  "img": "./img/bone/194.jpg",
  "Comment": "Bone Series 16"
},
{
  "id": 195,
  "title": "Bone Series 17",
  "size": "11\" x 14\" Mat",
  "Year": "1977",
  "material": "Mixmedia",
  "price": "$50 ",
  "category": "Bone",
  "img": "./img/bone/195.jpg",
  "Comment": "Bone Series 17"
},
{
  "id": 196,
  "title": "Bone Series 18",
  "size": "11\" x 14\" Mat",
  "Year": "1977",
  "material": "Mixmedia",
  "price": "$50 ",
  "category": "Bone",
  "img": "./img/bone/196.jpg",
  "Comment": "Bone Series 18"
},
{
  "id": 197,
  "title": "Bone Series 19",
  "size": "11\" x 14\" Mat",
  "Year": "1977",
  "material": "Mixmedia",
  "price": "$50 ",
  "category": "Bone",
  "img": "./img/bone/197.jpg",
  "Comment": "Bone Series 19"
},
{
  "id": 198,
  "title": "Bone Series xx",
  "size": "11\" x 14\" Mat",
  "Year": "1977",
  "material": "Ink on paper",
  "price": "$50 ",
  "category": "Bone",
  "img": "./img/bone/198.jpg",
  "Comment": "Bone Series xx"
},
{
  "id": 199,
  "title": "Bone Series xxi",
  "size": "11\" x 14\" Mat",
  "Year": "1977",
  "material": "Mixmedia",
  "price": "$50 ",
  "category": "Bone",
  "img": "./img/bone/199.jpg",
  "Comment": "Bone Series xxi"
},
{
  "id": 200,
  "title": "Figure Study 1",
  "size": "11\" x 14\" Mat",
  "Year": "1977",
  "material": "Mixmedia",
  "price": "$50 ",
  "category": "Bone",
  "img": "./img/bone/200.jpg",
  "Comment": "Figure Study 1"
},
{
  "id": 201,
  "title": "Figure Study 2",
  "size": "11\" x 14\" Mat",
  "Year": "1977",
  "material": "Mixmedia",
  "price": "$50 ",
  "category": "Bone",
  "img": "./img/bone/201.jpg",
  "Comment": "Figure Study 2"
},
{
  "id": 202,
  "title": "Figure Study 3",
  "size": "11\" x 14\" Mat",
  "Year": "1977",
  "material": "Mixmedia",
  "price": "$50 ",
  "category": "Bone",
  "img": "./img/bone/202.jpg",
  "Comment": "Figure Study 3"
}
]


let pageWrapper = document.getElementById("pageWrapper")
let nav = document.getElementById("topMenu")
let pageLabel = document.getElementById("pageLabel")
let paintingCloseup = document.getElementById("paintingCloseup")
let closeupPic = document.getElementById("closeupPic")
let backToGallery = document.getElementById("backToGallery")
let nextImg = document.getElementById("nextImg")
let prevImg = document.getElementById("prevImg")
let caption = document.getElementById("caption")
let closeCaption = document.getElementById("closeCaption")
let restoreCaption = document.getElementById("restoreCaption")

let createPaintingElements = function(p){
  // Object with all the paintings and info
  var paintingList = document.getElementById("paintingList");
  // Fragment to store the elements before "flushing"
  var myDF = document.createDocumentFragment();
  // Parent div in the fragment, all divs append to it

  // Loop through the paintings array of objects

  for(pi of paintings){
    //Holds pic and info text
    var galleryDiv = document.createElement("div");
    galleryDiv.className += ("galleryPicHolder")
    myDF.appendChild(galleryDiv);
    //img src, class name
    var img = document.createElement("img");
    img.src = pi.img;
    img.number = pi.id;
    img.caption = pi.Comment;
    img.addEventListener("click", function(e){
      paintingList.className = "hidden"
      nav.className="hidden"
      pageWrapper.className="pagesWrapperNoMargin"
      pageLabel.className="hidden"
      paintingCloseup.className= "paintingCloseup"
      closeupPic.src=e.target.src
      closeupPic.number = e.target.number
      caption.textContent = e.target.caption
      console.log(e.target.number)
    })
    galleryDiv.appendChild(img);
    // Info text box at bottom of img
    var infoDiv = document.createElement("div");
    infoDiv.className = ("galleryPicInfoText");
    infoDiv.id = pi.id
    galleryDiv.appendChild(infoDiv);
      var title = document.createElement("div");
      title.className = ("galleryPicTitle")
      title.textContent = pi.title;
      infoDiv.appendChild(title);
      var size = document.createElement("div");
      size.className = ("galleryPicSize")
      size.textContent = pi.size;
      infoDiv.appendChild(size);
      var price = document.createElement("div");
      price.className = ("galleryPicPrice")
      price.textContent = pi.price;
      infoDiv.appendChild(price);

      paintingList.appendChild(myDF);
  }
}


//navigate closeups
let goBack = () => {
paintingCloseup.className = "hidden"
pageWrapper.className = "pagesWrapper"
nav.className="nav"
pageLabel.className="pageLabel"
paintingList.className = "galleryHolder"
}
let next = () => {
let currentNumber = closeupPic.number
if(currentNumber<202){
let newNumber = currentNumber + 1
console.log(newNumber)
closeupPic.number ++
closeupPic.src = `./img/bone/${newNumber}.jpg`
}
newCaption()
}
let prev = () => {
let currentNumber = closeupPic.number
if(currentNumber>190){
let newNumber = currentNumber - 1
console.log(newNumber)
closeupPic.number --
closeupPic.src = `./img/bone/${newNumber}.jpg`
}
newCaption()
}
let newCaption = () => {
let newCaption = ""
for(pi of paintings){
  if(closeupPic.number==pi.id){
    newCaption = pi.Comment
  }
}
caption.textContent=newCaption
}
//clickable buttons
backToGallery.addEventListener("click", function(){
  goBack();
})
nextImg.addEventListener("click", function(){
  next();
})
prevImg.addEventListener("click", function(){
  prev();
})
closeCaption.addEventListener("click", function(){
  caption.className = "hidden"
  closeCaption.className="hidden"
  restoreCaption.className="captionButton"
})
restoreCaption.addEventListener("click", function(){
  caption.className = "caption"
  restoreCaption.className="hidden"
  closeCaption.className = "captionButton"
})
//detect keys
document.onkeydown = function(e) {
  e = e || window.event;
  if (e.keyCode == '38') { }//up
  else if (e.keyCode == '40') { }// down arrow
  else if (e.keyCode == '37') {prev()}
  else if (e.keyCode == '39') {next()}
  else if(e.keyCode=='27') {goBack()}
};


window.onload = createPaintingElements;
