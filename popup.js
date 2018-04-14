document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('referrer').href = 'javascript: void(0)';
  document.getElementById('referrer').style = 'color: grey';
  chrome.tabs.executeScript({
    code: 'document.referrer'
  }, function(result) {
      if (result && result != '') {
        document.getElementById('referrer').innerHTML = result;
        document.getElementById('referrer').href = result;
        document.getElementById('referrer').style = 'color: #4D7BD6';
      } else {
        document.getElementById('referrer').innerHTML = 'Unknown';
        document.getElementById('referrer').href = 'javascript: void(0)';
        document.getElementById('referrer').style = 'color: grey';
      }
  });
});
