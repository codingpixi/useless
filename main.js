let mouseClick = document.querySelector("body");
mouseClick.addEventListener("click", logEvent);

function logEvent() {
  console.log('event'); //event was in parenthasis without signle quotes
}

function makeup() {

  $.get('http://makeup-api.herokuapp.com/api/v1/products.json', function(data) {
    console.log(data);
    // console.log(data[0].brand);
    $('.brand').text(data.title)
  });
};
makeup();


function mascara() {

  $.get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner', function(mascaraData) {
    console.log(mascaraData[0].brand);
  });
};
mascara();

// function directions() {
//$.get('https://maps.googleapis.com/maps/api/directions/json?origin=75+9th+Ave+New+York,+NY&destination=MetLife+Stadium+1+MetLife+Stadium+Dr+East+Rutherford,+NJ+07073&key=')
// }


/*
BUILDING APU URL
var api = 'https://twitter.com/search?q=%23'
var key = T27Py93Fv9389kdGnBb3b6yfgl;
var buttonContent =
var url = api + buttonContent;


makeup hashtag url
https://twitter.com/search?q=%23makeup&src=typd
*/
