
let searchIndex = []
if (searchIndex.length == 0) {
fetch('https://docs.flutter.io/flutter/index.json')
  .then((response) => response.json())
  .then((json) => {
    searchIndex = json;
  })
}

chrome.omnibox.onInputEntered.addListener((text) => { 
  chrome.omnibox.
  console.log(text)
  var serviceCall2 = 'http://www.google.com/search?q=' + text;
  chrome.windows.create({"url": serviceCall2});
});

chrome.omnibox.onInputStarted.addListener(() => {

})

chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  let results=searchIndex
    .filter((item)=> item.qualifiedName.includes(text))
    .filter((item)=> item.type=="class")
    .map((item) => ({"content": item.qualifiedName, "description": `<i>${item.type}: </i>${item.qualifiedName}`}))
  suggest(results);
})


