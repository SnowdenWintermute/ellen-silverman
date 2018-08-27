<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Ellen Silverman - Artworks</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css?family=Architects+Daughter|Roboto+Condensed|Source+Sans+Pro" rel="stylesheet">
</head>
<body>
  <div class="wrapper pagesWrapper">
            <!-- Navbar -->
    <div class="nav">
    <label class="hamburger" for="toggle">&#9776;</label>
    <input type="checkbox" id="toggle"/>
    <div class="menu">
      <a href="./artworks.html">Artworks</a>
      <a href="./exhibitions.html">Exhibitions</a>
      <a href="./cv.html">CV</a>
      <a href="./contact.php">Contact</a>
    </div>
  </div>
            <!-- CV -->
            <p class="pageLabel"><a href="./index.html">Lucretia E. McGuff-Silverman</a> - Contact</p>
            <hr/>
  <div class="pageDiv" id="contactDiv">
    <form id="contactForm" action="contact.php" method="post">
    <input class="contactInput" name="name" type="text" required placeholder="Name"/>
    <input class="contactInput" name="email" type="email" required placeholder="Email"/>
    <textarea class="contactInput contactInputText" name="message" id="contactText" placeholder="Message"></textarea>
    <button class="button transparentButton" name="submit" id="formSubmit" type="submit">Send</i></button>
  </form>
  </div>
<footer>
  <div id="footerLinks">
    <a href="./index.html">Home</a>&nbsp;|
    <a href="./artworks.html">Artworks</a>&nbsp;|
    <a href="./exhibitions.html">Exhibitions</a>&nbsp;|
    <a href="./cv.html">CV</a>&nbsp;|
    <a href="./contact.php">Contact</a>
</div>
<p>Ellen Silverman</p>
</footer>

  </div>
</body>
</html>
