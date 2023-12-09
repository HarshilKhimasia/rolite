// mob-menu start
function myFunction() {
  var x = document.getElementById("drop-list");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let cross = document.querySelector("#nav-icon3");
cross.addEventListener("click", myFunction);
$(document).ready(function () {
  $("#nav-icon3").click(function () {
    $(this).toggleClass("open");
  });
});
// mob-menu end
