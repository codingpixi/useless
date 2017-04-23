// let mouseClick = document.querySelector("body");
// mouseClick.addEventListener("click", logEvent);
//
// function logEvent() {
//   console.log('event'); //event was in parenthasis without signle quotes
// }
//
function makeup() {

  $.get('http://makeup-api.herokuapp.com/api/v1/products.json', function(data) {
    console.log(data);
    // console.log(data[0].brand);
  });
};
makeup();


// function directions() {
//$.get('https://maps.googleapis.com/maps/api/directions/json?origin=75+9th+Ave+New+York,+NY&destination=MetLife+Stadium+1+MetLife+Stadium+Dr+East+Rutherford,+NJ+07073&key=')
// }
