let paintings = [
  {
  "id": 15,
  "title": "Aunt Tullie's Living Room ",
  "size": "11\" X 14\" mat",
  "Year": 2016,
  "material": "Acrylic on paper",
  "price": 400,
  "category": "The Professor's Interiors",
  "img": "./img/professorsInteriors/15.jpg",
  "Comment": "The Professor always loved Aunt Tullie?s Living Room, it felt like late spring there, even in the middle of winter."
},
{
  "id": 16,
  "title": "Director's Office",
  "size": "11\" X 14\" mat",
  "Year": 2016,
  "material": "Acrylic on paper",
  "price": 400,
  "category": "The Professor's Interiors",
  "img": "./img/professorsInteriors/16.jpg",
  "Comment": "The Professor always enjoyed having lunch with the Director in his office."
},
{
  "id": 17,
  "title": "English Living Room",
  "size": "14\" X 11\" mat",
  "Year": 2016,
  "material": "Watercolor on paper",
  "price": 400,
  "category": "The Professor's Interiors",
  "img": "./img/professorsInteriors/17.jpg",
  "Comment": "The Professor?s Grandmother?s Living Room in England always brought back fond memories of having High Tea with Grandmother and Aunt Tullie."
},
{
  "id": 18,
  "title": "Favorite Restaurant in Italy",
  "size": "11\" X 14\" mat",
  "Year": 2016,
  "material": "Acrylic on paper",
  "price": 400,
  "category": "The Professor's Interiors",
  "img": "./img/professorsInteriors/18.jpg",
  "Comment": "At the Professor?s favorite restaurant, the food was not as memorable as the people, but there had never been a meal that was not pure delight."
},
{
  "id": 19,
  "title": "Harry's Enclosed Porch",
  "size": "11\" X 14\" mat",
  "Year": 2016,
  "material": "Acrylic on paper",
  "price": 400,
  "category": "The Professor's Interiors",
  "img": "./img/professorsInteriors/19.jpg",
  "Comment": "The Professor and Harry, sat in Harry?s enclosed porch on New Year?s Day and had lunch."
},
{
  "id": 20,
  "title": "Harry's Living Room",
  "size": "14\" X 11\" mat",
  "Year": 2016,
  "material": "Acrylic on paper",
  "price": 400,
  "category": "The Professor's Interiors",
  "img": "./img/professorsInteriors/20.jpg",
  "Comment": "The family always spent New Year?s Eve at Harry, the Professor's brother?s house. At midnight the tradition has been to wear the animal mask that they had got in Africa when they were children and tickling each other with peacock feathers. In years past their whole family would get involved, but this year it was just the two of them. It was good to have a brother to share a tradition with."
},
{
  "id": 21,
  "title": "Lydia's for Thanksgiving",
  "size": "22\" x 28\" mat",
  "Year": 2017,
  "material": "Acrylic on paper",
  "price": 800,
  "category": "The Professor's Interiors",
  "img": "./img/professorsInteriors/21.jpg",
  "Comment": "Lydia always had everyone over for Thanksgiving. During dinner there were people sitting in the hall, and even on the stairs, but somehow there was still stimulating conversation and always laughter."
},
{
  "id": 22,
  "title": "Museum Court Yard",
  "size": "11\" X 14\" mat",
  "Year": 2017,
  "material": "Acrylic on paper",
  "price": 400,
  "category": "The Professor's Interiors",
  "img": "./img/professorsInteriors/22.jpg",
  "Comment": "The museum court yard was the perfect place to do research. It was so nice that they let you take some of their archive material, out there to study."
},
{
  "id": 23,
  "title": "The Professor's Front Hall",
  "size": "11\" X 14\" mat",
  "Year": 2015,
  "material": "Acrylic on paper",
  "price": 400,
  "category": "The Professor's Interiors",
  "img": "./img/professorsInteriors/23.jpg",
  "Comment": "The professor?s grandfather clock was a gift from grandfather Smith, it use to sit in the farm house in New Hampshire. When it chimed in the morning one almost expected to hear the rooster crow."
},
{
  "id": 24,
  "title": "The Professor's Study",
  "size": "14\" X 11\" mat",
  "Year": 2015,
  "material": "Acrylic on paper",
  "price": 400,
  "category": "The Professor's Interiors",
  "img": "./img/professorsInteriors/24.jpg",
  "Comment": "The Geology Club met every second Wednesday at 5:00 here in the study. During that time the room was always packed with life and laughter."
},
{
  "id": 25,
  "title": "The Professor's Unattached Porch",
  "size": "14\" X 11\" mat",
  "Year": 2017,
  "material": "Acrylic on paper",
  "price": 400,
  "category": "The Professor's Interiors",
  "img": "./img/professorsInteriors/25.jpg",
  "Comment": "In the Spring the unattached porch was used at a study. Countless papers were revised at the table while kids and pets dashed in and out."
},
{
  "id": 26,
  "title": "Tea Time at the Professor's",
  "size": "14\" X 11\" mat",
  "Year": 2015,
  "material": "Watercolor on paper",
  "price": 400,
  "category": "The Professor's Interiors",
  "img": "./img/professorsInteriors/26.jpg",
  "Comment": "Tea Time at the Professor? House several students came by every Thursday for a traditional Tea."
},
  ]


  let paintingCloseup = document.getElementById("paintingCloseup")
  let closeupPic = document.getElementById("closeupPic")
  let backToGallery = document.getElementById("backToGallery")
  let nextImg = document.getElementById("nextImg")
  let prevImg = document.getElementById("prevImg")

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
      img.addEventListener("click", function(e){
        paintingList.className = "hidden"
        paintingCloseup.className= "paintingCloseup"
        closeupPic.src=e.target.src
        closeupPic.number = e.target.number
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

  backToGallery.addEventListener("click", function(){
    paintingCloseup.className = "hidden"
    paintingList.className = "galleryHolder"
  })

  nextImg.addEventListener("click", function(){
    let currentNumber = closeupPic.number
    if(currentNumber<26){
    let newNumber = currentNumber + 1
    console.log(newNumber)
    closeupPic.number ++
    closeupPic.src = `./img/professorsInteriors/${newNumber}.jpg`
  }
  })

  prevImg.addEventListener("click", function(){
    let currentNumber = closeupPic.number
    if(currentNumber>15){
    let newNumber = currentNumber - 1
    console.log(newNumber)
    closeupPic.number --
    closeupPic.src = `./img/professorsInteriors/${newNumber}.jpg`
  }
  })

window.onload = createPaintingElements;
