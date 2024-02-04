function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".burger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}  

document.getElementById('myGif').addEventListener('mouseenter', function() {
  var image = document.getElementById('myGif');
  var imageUrl = image.src;
  image.src = "";
  image.src = imageUrl;
});