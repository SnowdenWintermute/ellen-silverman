let paintings = [
  {
  "id": 101,
  "title": "Chet 1",
  "size": "8\" x 10\" Mat",
  "Year": "2009",
  "material": "Watercolor on paper",
  "price": "100",
  "category": "Cold River Camp",
  "img": "./img/crc/101.jpg",
  "Comment": "Chet 1"
},
{
  "id": 102,
  "title": "Chet 2",
  "size": "8\" x 10\" Mat",
  "Year": "2009",
  "material": "Watercolor on paper",
  "price": "100",
  "category": "Cold River Camp",
  "img": "./img/crc/102.jpg",
  "Comment": "Chet 2"
},
{
  "id": 103,
  "title": "Chet 3",
  "size": "8\" x 10\" Mat",
  "Year": "2009",
  "material": "Watercolor on paper",
  "price": "100",
  "category": "Cold River Camp",
  "img": "./img/crc/103.jpg",
  "Comment": "Chet 3"
},
{
  "id": 104,
  "title": "Cold River Field",
  "size": "8\" x 10\" Mat",
  "Year": "2008",
  "material": "Acrylic on paper",
  "price": "100",
  "category": "Cold River Camp",
  "img": "./img/crc/104.jpg",
  "Comment": "Cold River Field"
},
{
  "id": 105,
  "title": "Cold River Library, Night",
  "size": "11\" X 14\" Mat",
  "Year": "2010",
  "material": "Pastels",
  "price": "$400",
  "category": "Cold River Camp",
  "img": "./img/crc/105.jpg",
  "Comment": "Cold River Library, Night"
},
{
  "id": 106,
  "title": "Cold River Porch",
  "size": "11\" X 14\" Mat",
  "Year": "2009",
  "material": "Watercolor on paper",
  "price": "$400",
  "category": "Cold River Camp",
  "img": "./img/crc/106.jpg",
  "Comment": "Cold River Porch"
},
{
  "id": 107,
  "title": "Cold River Cabin",
  "size": "11\" X 14\" Mat",
  "Year": "2013",
  "material": "Watercolor on paper",
  "price": "$400",
  "category": "Cold River Camp",
  "img": "./img/crc/107.jpg",
  "Comment": "Cold River Cabin"
},
{
  "id": 108,
  "title": "Cold River Library 1",
  "size": "11\" X 14\" Mat",
  "Year": "2010",
  "material": "Watercolor on paper",
  "price": "$400",
  "category": "Cold River Camp",
  "img": "./img/crc/108.jpg",
  "Comment": "Cold River Library 1"
},
{
  "id": 109,
  "title": "Cold River Library 2",
  "size": "11\" X 14\" Mat",
  "Year": "2010",
  "material": "Watercolor on paper",
  "price": "$400",
  "category": "Cold River Camp",
  "img": "./img/crc/109.jpg",
  "Comment": "Cold River Library 2"
},
{
  "id": 110,
  "title": "Cold River Porch 2",
  "size": "11\" X 14\" Mat",
  "Year": "2014",
  "material": "Watercolor on paper",
  "price": "$400",
  "category": "Cold River Camp",
  "img": "./img/crc/110.jpg",
  "Comment": "Cold River Porch 2"
},
{
  "id": 111,
  "title": "Cold River Vantican City",
  "size": "11\" X 14\" Mat",
  "Year": "2014",
  "material": "Watercolor on paper",
  "price": "$400",
  "category": "Cold River Camp",
  "img": "./img/crc/111.jpg",
  "Comment": "Cold River Vantican City"
},
{
  "id": 112,
  "title": "Path to Emerald Pool",
  "size": "18\" x 24\"",
  "Year": "2016",
  "material": "Acrylic",
  "price": "$800",
  "category": "Cold River Camp",
  "img": "./img/crc/112.jpg",
  "Comment": "Path to Emerald Pool"
},
{
  "id": 113,
  "title": "Tea House at Cold River",
  "size": "11\" X 14\" Mat",
  "Year": "2009",
  "material": "Watercolor on paper",
  "price": "$400",
  "category": "Cold River Camp",
  "img": "./img/crc/113.jpg",
  "Comment": "Tea House at Cold River"
},
{
  "id": 114,
  "title": "Spring Haven Exterior",
  "size": "11\" X 14\" Mat",
  "Year": "2013",
  "material": "Watercolor on paper",
  "price": "SOLD",
  "category": "Cold River Camp",
  "img": "./img/crc/114.jpg",
  "Comment": "Spring Haven Exterior"
},
{
  "id": 115,
  "title": "Spring Haven Interior",
  "size": "11\" x 14\"  Mat",
  "Year": "2013",
  "material": "Watercolor on paper",
  "price": "SOLD",
  "category": "Cold River Camp",
  "img": "./img/crc/115.jpg",
  "Comment": "Spring Haven Interior"
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
if(currentNumber<115){
let newNumber = currentNumber + 1
console.log(newNumber)
closeupPic.number ++
closeupPic.src = `./img/crc/${newNumber}.jpg`
}
newCaption()
}
let prev = () => {
let currentNumber = closeupPic.number
if(currentNumber>101){
let newNumber = currentNumber - 1
console.log(newNumber)
closeupPic.number --
closeupPic.src = `./img/crc/${newNumber}.jpg`
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
