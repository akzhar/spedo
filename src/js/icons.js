var selectLanguage = document.getElementById("selectLanguage");
var selectCurrency = document.getElementById("selectCurrency");

selectLanguage.addEventListener("change", function(){
  document.getElementById("iconLanguage").setAttribute("src","img/"+this.value+".svg");
});

selectCurrency.addEventListener("change", function(){
  document.getElementById("iconCurrency").setAttribute("src","img/"+this.value+".svg");
});
