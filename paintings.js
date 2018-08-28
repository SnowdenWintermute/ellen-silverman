let paintings = [
    {
      "id": 1,
      "title": "Sunset Beach",
      "size": "8\" x 10\"",
      "price": "$400.00",
      "img":"./img/professorsInteriors/Aunt Tullie s Livingroom.jpg",
      "sold": false
    },
    {
      "id": 2,
      "title": "Shipwreck",
      "size": "8.5\" x 11\"",
      "price": "$500.00",
      "img":"./img/2.jpg",
      "sold": false
    },
    {
      "id": 3,
      "title": "Fancy Chair",
      "size": "5\" x 7\"",
      "price": "$250.00",
      "img":"./img/3.jpg",
      "sold": false
    },
    {
      "id": 3,
      "title": "Fancy Chair",
      "size": "5\" x 7\"",
      "price": "$250.00",
      "img":"./img/3.jpg",
      "sold": false
    }
  ]


  let createPaintingElements = function(p){
    // Object with all the paintings and info
    var paintingList = document.getElementById("paintingList");
    // Fragment to store the elements before "flushing"
    var myDF = document.createDocumentFragment();
    // Parent div in the fragment, all divs append to it

    // Loop through the paintings array of objects

    for(pi of paintings){
      var galleryDiv = document.createElement("div");
      galleryDiv.className += ("galleryPicHolder")
      myDF.appendChild(galleryDiv);
      //img src, class name
      var img = document.createElement("img");
      img.src = pi.img;
      galleryDiv.appendChild(img);
      // Info text box at bottom of img
      var infoDiv = document.createElement("div");
      infoDiv.className = ("galleryPicInfoText");
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

window.onload = createPaintingElements;
