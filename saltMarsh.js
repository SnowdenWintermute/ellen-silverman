let paintings = [
  {
  "id": 27,
  "title": "Salt Marsh, Birds",
  "size": "18\" X 24\"",
  "Year": 2017,
  "material": "Acrylic",
  "price": "$800 ",
  "category": "Salt Marsh",
  "img": "./img/saltMarsh/27.jpg",
  "Comment": "Salt Marsh, Birds"
},
{
  "id": 28,
  "title": "Salt Marsh, September",
  "size": "11\" X 14\"",
  "Year": 2016,
  "material": "Acrylic",
  "price": "$400 ",
  "category": "Salt Marsh",
  "img": "./img/saltMarsh/28.jpg",
  "Comment": "Salt Marsh, September"
},
{
  "id": 29,
  "title": "Salt Marsh, November",
  "size": "11\" X 14\"",
  "Year": 2016,
  "material": "Acrylic",
  "price": "$400 ",
  "category": "Salt Marsh",
  "img": "./img/saltMarsh/29.jpg",
  "Comment": "Salt Marsh, November"
},
{
  "id": 30,
  "title": "Salt Marsh, November 2",
  "size": "11\" X 14\"",
  "Year": 2016,
  "material": "Acrylic",
  "price": "$400 ",
  "category": "Salt Marsh",
  "img": "./img/saltMarsh/30.jpg",
  "Comment": "Salt Marsh, November 2"
},
{
  "id": 31,
  "title": "Salt Marsh, November 3",
  "size": "11\" X 14\"",
  "Year": 2016,
  "material": "Acrylic",
  "price": "$400 ",
  "category": "Salt Marsh",
  "img": "./img/saltMarsh/31.jpg",
  "Comment": "Salt Marsh, November 3"
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
  if(currentNumber<31){
  let newNumber = currentNumber + 1
  console.log(newNumber)
  closeupPic.number ++
  closeupPic.src = `./img/saltMarsh/${newNumber}.jpg`
}
newCaption()
}
let prev = () => {
  let currentNumber = closeupPic.number
  if(currentNumber>27){
  let newNumber = currentNumber - 1
  console.log(newNumber)
  closeupPic.number --
  closeupPic.src = `./img/saltMarsh/${newNumber}.jpg`
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
