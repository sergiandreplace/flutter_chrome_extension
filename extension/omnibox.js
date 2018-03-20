console.log("pop");

chrome.omnibox.onInputEntered.addListener(function(text) { 
  console.log(text)
  var serviceCall2 = 'http://www.google.com/search?q=' + text;
  chrome.windows.create({"url": serviceCall2});
});

var jsonReq = new XMLHttpRequest();
console.log(jsonReq);
jsonReq.open('GET', 'https://docs.flutter.io/flutter/index.json', true);
jsonReq.addEventListener('load', function() {
  searchIndex = JSON.parse(jsonReq.responseText);
  console.log(searchIndex)
});