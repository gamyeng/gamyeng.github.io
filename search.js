function search() {
 var input = document.getElementById("search-input");
 var value = input.value.toLowerCase();
 var result = document.getElementsByClassName("result");
 for (var i = 0; i < result.length; i++) {
  if (result[i].innerText.toLowerCase().indexOf(value) !== -1) {
   result[i].style.display = "block";
  } else {
   result[i].style.display = "none";
  }
 }
}
