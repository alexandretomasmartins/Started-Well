var fadeEffect = document.querySelector('.fadeEffect');

setTimeout( function() {
    fadeEffect.style.opacity = '0';
    setTimeout( function() {
        fadeEffect.style.display = 'none';
      }, 500);
  }, 500);

var mockUpOperator = document.querySelector('.mockUpOperator');
var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

mockUpOperator.innerHTML += OSName;

// function myFunction() {
//     var d = new Date();
//     var n = d.getHours();
//     var m = d.getMinutes();
//     document.querySelector(".mockUpHour").innerHTML = n + ':' + m;
// }

var introSection = document.querySelector('.introSection');
var startButton = document.querySelector('.startButton');
var mobileContainer = document.querySelector('.mobileContainer');
var mockUpImage = document.querySelector('.mockUpImage');
var mockUpMenu = document.querySelector('.mockUpMenu');
var screenContainer = document.querySelector('.screenContainer');
var backHomeButtonLink = document.querySelector('.backHomeButtonLink');
var messageIcon = document.querySelector('.messageIcon');
var notification = document.querySelector('.notification');
var messagesContainer = document.querySelector('.messagesContainer');
var backMenuButton = document.querySelector('.backMenuButton');
var messageBox = document.querySelectorAll('.messageBox');
var conversationContainer = document.querySelector('.conversationContainer');
var backMessagesButton = document.querySelector('.backMessagesButton');

startButton.addEventListener('click', function() {
  introSection.style.transition = '1s';
  introSection.style.opacity = '0';
  mobileContainer.style.display = 'flex';
  setTimeout( function() {
      introSection.style.display = 'none';
      mobileContainer.style.position = 'absolute';
      mobileContainer.style.top = '50%';
      mobileContainer.style.transform = 'translateY(-50%)';
      mockUpImage.classList.add('shadowEffect');
    }, 1000);
    messageIcon.addEventListener('click', function() {
      mockUpMenu.style.display = 'none';
      notification.style.display = 'none';
      messagesContainer.style.display = 'block';
      for (var i = 0; i < messageBox.length; i++) {
        messageBox[i].addEventListener('click', function() {
          messagesContainer.style.display = 'none';
          conversationContainer.style.display = 'block';
        });
      }
      backMessagesButton.addEventListener('click', function() {
        messagesContainer.style.display = 'block';
        conversationContainer.style.display = 'none';
      });
    });
});

backHomeButtonLink.addEventListener('click', function() {
  mobileContainer.style.top = '150vh';
  setTimeout( function() {
      window.location.href = "index.html";
    }, 1000);
});
