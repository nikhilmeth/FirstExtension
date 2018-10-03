let changeColor = document.getElementById('changeColor');
let showDate = document.getElementById('showDate');
let showTime = document.getElementById('showTime');
// get a new date (locale machine date time)
let date = new Date();
// get the date as a string
let n = date.toDateString();
// get the time as a string
let time = date.toLocaleTimeString();
showDate.innerHTML= n;
showTime.innerHTML= time;

changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });

