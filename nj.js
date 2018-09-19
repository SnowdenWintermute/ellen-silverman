let paintings = [
{
  "id": 283,
  "title": "Allentown Street Scene",
  "size": "8\" x 10\" Mat",
  "Year": "",
  "material": "Acrylic",
  "price": "SOLD",
  "category": "NJ Town and Shops",
  "img": "./img/nj/283.jpg",
  "Comment": "Allentown Street Scene"
},
{
  "id": 284,
  "title": "Bruno's Bicycles, Bruno at Front Counter",
  "size": "11\" x 14\" Mat",
  "Year": "",
  "material": "Acrylic",
  "price": "$400 ",
  "category": "NJ Town and Shops",
  "img": "./img/nj/284.jpg",
  "Comment": "Bruno's Bicycles, Bruno at Front Counter"
},
{
  "id": 285,
  "title": "Bruno's Bicycles, Front Window",
  "size": "11\" x 14\" Mat",
  "Year": "",
  "material": "Acrylic",
  "price": "$400 ",
  "category": "NJ Town and Shops",
  "img": "./img/nj/285.jpg",
  "Comment": "Bruno's Bicycles, Front Window"
},
{
  "id": 286,
  "title": "Bruno's Bicycles, Dog Bar",
  "size": "11\" x 14\" Mat",
  "Year": "",
  "material": "Acrylic",
  "price": "$400 ",
  "category": "NJ Town and Shops",
  "img": "./img/nj/286.jpg",
  "Comment": "Bruno's Bicycles, Dog Bar"
},
{
  "id": 287,
  "title": "Bruno's Bicycles, One Sweet Ride Candy Counter",
  "size": "11\" x 14\" Mat",
  "Year": "",
  "material": "Acrylic",
  "price": "$400 ",
  "category": "NJ Town and Shops",
  "img": "./img/nj/286.jpg",
  "Comment": "Bruno's Bicycles, One Sweet Ride Candy Counter"
},
{
  "id": 288,
  "title": "House on Virginia Avenue",
  "size": "11\" x 14\" Mat",
  "Year": "",
  "material": "Acrylic",
  "price": "$400 ",
  "category": "NJ Town and Shops",
  "img": "./img/nj/287.jpg",
  "Comment": "House on Virginia Avenue"
},
{
  "id": 289,
  "title": "Laurita Winery 5",
  "size": "11\" x 14\" Mat",
  "Year": "",
  "material": "Acrylic",
  "price": "$400 ",
  "category": "NJ Town and Shops",
  "img": "./img/nj/288.jpg",
  "Comment": "Laurita Winery 5"
},
{
  "id": 290,
  "title": "Mill Pond Shop",
  "size": "8\" x 10\" Mat",
  "Year": "",
  "material": "Acrylic",
  "price": "SOLD",
  "category": "NJ Town and Shops",
  "img": "./img/nj/289.jpg",
  "Comment": "Mill Pond Shop"
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
if(currentNumber<290){
let newNumber = currentNumber + 1
console.log(newNumber)
closeupPic.number ++
closeupPic.src = `./img/nj/${newNumber}.jpg`
}
newCaption()
}
let prev = () => {
let currentNumber = closeupPic.number
if(currentNumber>283){
let newNumber = currentNumber - 1
console.log(newNumber)
closeupPic.number --
closeupPic.src = `./img/nj/${newNumber}.jpg`
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
