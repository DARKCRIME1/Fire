<html>
  <head>
    <title>FIRE MOVIES</title>
    
    <link rel="shortcut icon" href="https://telegra.ph/file/6852aab70c51bf2797244.jpg"> 
   
    <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


<style>
    
    
            @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");

* {
    box-sizing: border-box;
}



body {
    background-color:rgba(10, 10, 9, 0.884);
    font-family: "Poppins", sans-serif;
    margin: 0;
}

header {
    background-color: #00010700;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
}

.search {
    background-color: transparent;
    border: 2px solid #afafb6;
    border-radius: 50px;
    color: #fff;
    font-family: inherit;
    font-size: 1rem;
    padding: 0.5rem 1rem;
}

.search::placeholder {
    color: #afafb6;
}

.search:focus {
    background-color: #22254b;
    outline: none;
}

main {
    display: flex;
    flex-wrap: wrap;
}

.movie {
    background-color: #373b69;
    border-radius: 3px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    position: relative;
    margin: 1rem;
    width: 300px;
}

.movie img {
    width: 100%;
}

.movie-info {
    color: #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem 1rem;
    letter-spacing: 0.5px;
}

.movie-info h3 {
    margin: 0;
}

.movie-info span {
    background-color: #22254b;
    border-radius: 3px;
    font-weight: bold;
    padding: 0.25rem 0.5rem;
}
.movie-info span.green {
    color: rgb(39, 189, 39);
}

.movie-info span.orange {
    color: orange;
}

.movie-info span.red {
    color: rgb(189, 42, 42);
}

.overview {
    background-color: #fff;
    padding: 2rem;
    position: absolute;
    max-height: 100%;
    overflow: auto;
    left: 0;
    bottom: 0;
    right: 0;
    transform: translateY(101%);
    transition: transform 0.3s ease-in;
}

.overview h3 {
    margin-top: 0;
}

.card:hover .overview {
    transform: translateY(0);
}
       
    
    
    
</style>

<style>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
body {
	font-family: 'Open Sans', sans-serif;
	background: #2c3e50;
}
nav{
	position: relative;
	margin: 4px auto 0;
	width: 350px;
	height: 50px;
	background: #34495e;
	border-radius: 8px;
	font-size: 0;
	box-shadow: 0 2px 3px 0 rgba(0,0,0,.1);
}
nav a{
	font-size: 13px;
	text-transform: uppercase;
	color: white;
	text-decoration: none;
	line-height: 50px;
	position: relative;
	z-index: 1;
	display: inline-block;
	text-align: center;
}
nav .animation{
	position: absolute;
	height: 100%;
	/* height: 5px; */
	top: 0;
	/* bottom: 0; */
	z-index: 0;
	background: #1abc9c;
	border-radius: 8px;
	transition: all .5s ease 0s;
}
nav a:nth-child(1){
	width: 70px;
}
nav .start-home, a:nth-child(1):hover~.animation{
	width: 10px;
	left: 0;
}
nav a:nth-child(2){
	width: 70px;
}
nav a:nth-child(2):hover~.animation{
	width: 60px;
	left: 75px;
}
nav a:nth-child(3){
	width: 100px;
}
nav a:nth-child(3):hover~.animation{
	width: 85px;
	left: 145px;
}
nav a:nth-child(4){
	width: 80px;
}
nav a:nth-child(4):hover~.animation{
	width: 87px;
	left: 235px;
}
nav a:nth-child(5){
	width: 80px;
}
nav a:nth-child(5):hover~.animation{
	width: 70px;
	left: 470px;
}

</style>
<style>
   
body {
  font-family: Arial;
}

* {
  box-sizing: border-box;
}

.openBtn {
  background: #f1f1f1;
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
}
.openBtn:hover {
  background: #bbb;
}

.overlay {
  height: 100%;
  width: 100%;
  display: none;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
}

.overlay-content {
  position: relative;
  top: 46%;
  width: 80%;
  text-align: center;
  margin-top: 30px;
  margin: auto;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
  cursor: pointer;
  color: white;
}

.overlay .closebtn:hover {
  color: #ccc;
}
.overlay input[type=text] {
  padding: 15px;
  font-size: 17px;
  border: none;
  float: left;
  width: 80%;
  background: white;
}

.overlay input[type=text]:hover {
  background: #f1f1f1;
}

.overlay button {
  float: left;
  width: 20%;
  padding: 15px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.overlay button:hover {
  background: #bbb;
}
</style>
<style>
* {
  box-sizing: border-box;
}

#myInput {
  background-image: url('/css/searchicon.png');
  background-position: 10px 12px;
  background-repeat: no-repeat;
  width: 100%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
}
#myUL {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

#myUL li a {
  border: 1px solid #ddd;
  margin-top: -1px; /* Prevent double borders */
  background-color: #f6f6f6;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: block
}

#myUL li a:hover:not(.header) {
  background-color: #eee;
}
</style>
    <style>
.card {
  background-color: #373b69;
    border-radius: 3px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    position: relative;
    margin: 1rem;
    width: 300px;
}

.title {
  color: #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem 1rem;
    letter-spacing: 0.5px;
}
button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}
input.down {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}
button.openBtn {
    background-color: black;
    color: #1abc9c;
    outline: 1;
    border: none;
    text-align: center;
    width: 30%;
    height: 6%;
    padding: 8px;
    font-size: 15px;
    margin-left: 100px;
}
img.logo{
    margin-top: 3px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}
button:hover, a:hover {
  opacity: 0.7;
}

h1.top {
    color: #1abc9c;
    font-size: 15px;
    padding: 5px;
}
</style>
  </head>
  <body>
      <!-- HEADER -->
      <div id="header"><h1 class="top" align="left" id="toppage">FIRE MOVIES
      <button class="openBtn" onclick="openSearch()">Search</button>
   <a href="https://fire-movies.herokuapp.com/">
  <img class="logo" src="https://telegra.ph/file/6852aab70c51bf2797244.jpg" width="40" height="40"align="right"></h1></a>
  
  <!-- SEARCH BAR -->
  <div id="myOverlay" class="overlay">
  <span class="closebtn" onclick="closeSearch()" title="Close Overlay">×</span>
  <div class="overlay-content">
    <form action="/film">
      <input id="myInput" type="text" placeholder="Search your Film.." name="q" onkeyup="myFunction()">
     
      <ul id="myUL">
  <li><a href="#sonic 2022">Sonic 2022</a></li>
  <li><a href="#avatar 2009">Avatar</a></li>

  <li><a href="#spiderman 2004">Spider Man 2004</a></li>
  
 
  
</ul>
    </form>
  </div>
</div>
<!-- SEARCH BAR END -->
  <!-- HEADER END -->
  <!-- NAVIGATION BAR -->
  </div>
    <nav id="navbar">
      <a href="home">Home</a>
      <a href="film">Film</a>
      <a href="about">About Us</a>
      <a href="contact">Contact Us</a>
      <div class="animation start-home"></div>
    </nav>
    <!-- NAVIGATION END -->
    <!-- FILM CARD START -->
    <br><br>
    <div id="sonic 2022"class="card">
  <img src="https://dx35vtwkllhj9.cloudfront.net/paramountpictures/sonic-the-hedgehog-2/images/regions/us/onesheet.jpg" alt="Sonic 2022" style="width:100%">
  <div class="movie-info">
  <h3>Sonic</h3>
  <p class="title">2022</p>
  </div>
  <div class="overview">
  <p>Overview:- After discovering a small, blue, fast hedgehog, a small-town police officer must help him defeat an evil genius who wants to do experiments on him.</p>
  <p><input class="down"type=button onClick="parent.location='https://cinecloud.xyz/0:/Movies2/Sonic.the.Hedgehog.2.2022.WEBRip-%5BCineSubz.com%5D-1080P.mp4'" value='1080p'></p>
  </div>
  </div>
<br>

<div id="avatar 2009"class="card">
  <img src="https://i.pinimg.com/564x/cd/61/92/cd6192cae18a5a0298bbe6407f96f188.jpg" alt="Avatar" style="width:100%">
  <div class="movie-info">
  <h3>Avatar</h3>
  <p class="title">2009</p>
  </div>
  <div class="overview">
  <p>Des:- After discovering a small, blue, fast hedgehog, a small-town police officer must help him defeat an evil genius who wants to do experiments on him.</p>
  <p><input class="down"type=button onClick="parent.location='https://001.cinecloud.gq/0:/Movies/2021-10-19/CineSubz.com%20-%20Avatar.ECE.2009.1080p.BrRip.mp4'" value='1080p'></p></div>
</div><br>

<div id="spiderman 2004"class="card">
  <img src="https://cdn.mos.cms.futurecdn.net/zJkM3wNgH6mSFnzP37NaPi.png" alt="Avatar" style="width:100%">
  <div class="movie-info">
  <h3>Spider Man</h3>
  <span class="year">2004</spam>
  </div>
  <div class="overview">
  <p>Des:- Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius.</p>
  <p><input class="down"type=button onClick="parent.location='https://001.cinecloud.gq/0:/Movies/2021-09-20/CineSubz.com%20-Spider.Man.2.2004.1080p.BluRay.mp4'" value='1080p'></p></div>
</div><br>


    <!-- FILM CARD CLOSE -->
    
    <!-- SCRIPTS -->
    
<script>
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
</script>
<script>
    function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
    
</script>

<!-- SCRIPT END -->

  </body>
</html>
