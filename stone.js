let paintings = [
 {
   "id": 32,
   "title": "Stone in the Middle of the Road, Split in Two",
   "size": "10\" x 10\"",
   "Year": 2015,
   "material": "Acrylic",
   "price": "$100",
   "category": "Stone in the Middle of the Road",
   "img": "./img/stone/32.jpg",
   "Comment": "Stone in the Middle of the Road, Split in Two"
 },
 {
   "id": 33,
   "title": "Stone in the Middle of the Road, In the Woods",
   "size": "10\" x 10\"",
   "Year": 2015,
   "material": "Acrylic",
   "price": "$100",
   "category": "Stone in the Middle of the Road",
   "img": "./img/stone/33.jpg",
   "Comment": "Stone in the Middle of the Road, In the Woods"
 },
 {
   "id": 34,
   "title": "Stone in the Middle of the Road, From Both Sides",
   "size": "10\" x 10\"",
   "Year": 2015,
   "material": "Acrylic",
   "price": "$100",
   "category": "Stone in the Middle of the Road",
   "img": "./img/stone/34.jpg",
   "Comment": "Stone in the Middle of the Road, From Both Sides"
 },
 {
   "id": 35,
   "title": "Stone in the Middle of the Road,  As the Leaves Fall",
   "size": "10\" x 10\"",
   "Year": 2015,
   "material": "Acrylic",
   "price": "$100",
   "category": "Stone in the Middle of the Road",
   "img": "./img/stone/35.jpg",
   "Comment": "Stone in the Middle of the Road,  As the Leaves Fall"
 },
 {
   "id": 36,
   "title": "Stone in the Middle of the Road, It Grows On You",
   "size": "10\" x 10\"",
   "Year": 2015,
   "material": "Acrylic",
   "price": "$100",
   "category": "Stone in the Middle of the Road",
   "img": "./img/stone/36.jpg",
   "Comment": "Stone in the Middle of the Road, It Grows On You"
 },
 {
   "id": 37,
   "title": "Stone in the Middle of the Road, Could Not Stop Nature",
   "size": "10\" x 10\"",
   "Year": 2015,
   "material": "Acrylic",
   "price": "$100",
   "category": "Stone in the Middle of the Road",
   "img": "./img/stone/37.jpg",
   "Comment": "Stone in the Middle of the Road, Could Not Stop Nature"
 },
 {
   "id": 38,
   "title": "Stone in the Middle of the Road, Diverts the Path",
   "size": "10\" x 10\"",
   "Year": 2015,
   "material": "Acrylic",
   "price": "$100",
   "category": "Stone in the Middle of the Road",
   "img": "./img/stone/38.jpg",
   "Comment": "Stone in the Middle of the Road, Diverts the Path"
 },
 {
   "id": 39,
   "title": "Stone in the Middle of the Road, As a Bridge",
   "size": "10\" x 10\"",
   "Year": 2015,
   "material": "Acrylic",
   "price": "$100",
   "category": "Stone in the Middle of the Road",
   "img": "./img/stone/39.jpg",
   "Comment": "Stone in the Middle of the Road, As a Bridge"
 },
 {
   "id": 40,
   "title": "Stone in the Middle of the Road, Split in Two, a Different View",
   "size": "10\" x 10\"",
   "Year": 2015,
   "material": "Acrylic",
   "price": "$100",
   "category": "Stone in the Middle of the Road, Split in Two",
   "img": "./img/stone/40.jpg",
   "Comment": "Stone in the Middle of the Road, Split in Two, a Different View"
 },
 {
   "id": 41,
   "title": "Stone in the Middle of the Road, It is the Small Things That Make a Difference ",
   "size": "10\" x 10\"",
   "Year": 2015,
   "material": "Acrylic",
   "price": "$100",
   "category": "Stone in the Middle of the Road",
   "img": "./img/stone/41.jpg",
   "Comment": "Stone in the Middle of the Road, It is the Small Things That Make a Difference "
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
if(currentNumber<41){
let newNumber = currentNumber + 1
console.log(newNumber)
closeupPic.number ++
closeupPic.src = `./img/stone/${newNumber}.jpg`
}
newCaption()
}
let prev = () => {
let currentNumber = closeupPic.number
if(currentNumber>32){
let newNumber = currentNumber - 1
console.log(newNumber)
closeupPic.number --
closeupPic.src = `./img/stone/${newNumber}.jpg`
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
