
// Random Quote Generator
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

function clearField(){
  document.getElementById("insultName").value = "";
}

function getQuote(){
  var name = document.getElementById("insultName").value;
  if(name == "Enter a name" || name === "") name = "Trump";
  $.get("https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=" + name, function(data,status){
    $(".quote-text").text(data.message);
    var quote = "https://twitter.com/intent/tweet?text=" + data.message + " via ";
    $(".twitter-share-button").attr("href", quote);
  })
}


$(document).ready(function() {
  $.getJSON(url, get, 'jsonp');
});

$("#quote").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});
