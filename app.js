//Muuttujat
var input = document.querySelector('.text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

//Luodaan pyyntö
button.addEventListener('click', function(name){
  fetch("https://api.openweathermap.org/data/2.5/weather?q=oulu&units=metric&appid=23cfeea3681cab21bd1e170d2d87f2e7")
  //Pyynnön lähetys
.then(response => response.json())
.then(data => {
  //Tiedon haku
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Ilma - "+descValue;
  temp.innerHTML = "Lämpötila°C  "+tempValue; 
  input.value ="";

})
;
})