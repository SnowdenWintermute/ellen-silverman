let paintings =
[
{
  "id": 166,
  "title": "C1",
  "size": "11\" x 14\"",
  "Year": "2016",
  "material": "Acrylic",
  "price": "$400 ",
  "category": "Abstract and Fantasy",
  "img": "./img/abstract/166.jpg",
  "Comment": "C1"
},
{
  "id": 167,
  "title": "Clay Print 2",
  "size": "11\" x 14\" Mat",
  "Year": "2008",
  "material": "Clay",
  "price": "$50 ",
  "category": "Abstract and Fantasy",
  "img": "./img/abstract/167.jpg",
  "Comment": "Clay Print 2"
},
{
  "id": 168,
  "title": "Clay Print 3",
  "size": "11\" x 14\" Mat",
  "Year": "2008",
  "material": "Clay",
  "price": "$50 ",
  "category": "Abstract and Fantasy",
  "img": "./img/abstract/168.jpg",
  "Comment": "Clay Print 3"
},
{
  "id": 169,
  "title": "Clay Print with Felting",
  "size": "11\" x 14\" Mat",
  "Year": "2008",
  "material": "Clay and Wool",
  "price": "$50 ",
  "category": "Abstract and Fantasy",
  "img": "./img/abstract/169.jpg",
  "Comment": "Clay Print with Felting"
},
{
  "id": 170,
  "title": "Day of the Dead Freda Portrait",
  "size": "8\" x 10\"   ",
  "Year": "2016",
  "material": "Acrylic",
  "price": "$150 ",
  "category": "Abstract and Fantasy",
  "img": "./img/abstract/170.jpg",
  "Comment": "Day of the Dead Freda Portrait"
},
{
  "id": 171,
  "title": "Day of the Dead",
  "size": "8\" x 12\"",
  "Year": "2008",
  "material": "Oil",
  "price": "$150 ",
  "category": "Abstract and Fantasy",
  "img": "./img/abstract/171.jpg",
  "Comment": "Day of the Dead"
},
{
  "id": 172,
  "title": "Fairies Sleeping",
  "size": "11\" x 14\"",
  "Year": "2009",
  "material": "Watercolor on paper",
  "price": "$400 ",
  "category": "Abstract and Fantasy",
  "img": "./img/abstract/172.jpg",
  "Comment": "Fairies Sleeping"
},
{
  "id": 173,
  "title": "Illuminated Writing 2",
  "size": "8\" x 10\" Mat",
  "Year": "1977",
  "material": "Mixmedia",
  "price": "$50 ",
  "category": "Abstract and Fantasy",
  "img": "./img/abstract/173.jpg",
  "Comment": "Illuminated Writing 2"
},
{
  "id": 174,
  "title": "Illuminated Writing 3",
  "size": "8\" x 10\" Mat",
  "Year": "1977",
  "material": "Mixmedia",
  "price": "$50 ",
  "category": "Abstract and Fantasy",
  "img": "./img/abstract/174.jpg",
  "Comment": "Illuminated Writing 3"
},
{
  "id": 175,
  "title": "Illuminated Writing 4",
  "size": "8\" x 10\" Mat",
  "Year": "1977",
  "material": "Mixmedia",
  "price": "$50 ",
  "category": "Abstract and Fantasy",
  "img": "./img/abstract/175.jpg",
  "Comment": "Illuminated Writing 4"
},
{
  "id": 176,
  "title": "Illuminated Writing 5",
  "size": "8\" x 10\" Mat",
  "Year": "1977",
  "material": "Mixmedia",
  "price": "$50 ",
  "category": "Abstract and Fantasy",
  "img": "./img/abstract/176.jpg",
  "Comment": "Illuminated Writing 5"
},
{
  "id": 177,
  "title": "Illuminated Writing 6",
  "size": "8\" x 10\" Mat",
  "Year": "1977",
  "material": "Mixmedia",
  "price": "$50 ",
  "category": "Abstract and Fantasy",
  "img": "./img/abstract/177.jpg",
  "Comment": "Illuminated Writing 6"
},
{
  "id": 178,
  "title": "Post Card Intersection",
  "size": "5\" x 7\"",
  "Year": "2010",
  "material": "Mixmedia",
  "price": "SOLD",
  "category": "Abstract and Fantasy",
  "img": "./img/abstract/178.jpg",
  "Comment": "Post Card Intersection"
},
{
  "id": 179,
  "title": "Natures Bath",
  "size": "18\" x 24\" Mat",
  "Year": "2009",
  "material": "Pastels",
  "price": "$800 ",
  "category": "Abstract and Fantasy",
  "img": "./img/abstract/179.jpg",
  "Comment": "Natures Bath"
},
{
  "id": 180,
  "title": "The Source",
  "size": "11\" x 14\" ",
  "Year": "2015",
  "material": "Acrylic",
  "price": "$400 ",
  "category": "Abstract and Fantasy",
  "img": "./img/abstract/180.jpg",
  "Comment": "The Source"
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
if(currentNumber<180){
let newNumber = currentNumber + 1
console.log(newNumber)
closeupPic.number ++
closeupPic.src = `./img/abstract/${newNumber}.jpg`
}
newCaption()
}
let prev = () => {
let currentNumber = closeupPic.number
if(currentNumber>166){
let newNumber = currentNumber - 1
console.log(newNumber)
closeupPic.number --
closeupPic.src = `./img/abstract/${newNumber}.jpg`
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
