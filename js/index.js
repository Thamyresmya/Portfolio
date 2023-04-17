// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}



// referente ao carrosel dos prjetos
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
  nextImage();
}, 5000)

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("radio"+count).checked = true;
}



