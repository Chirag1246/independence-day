document.getElementById('generateButton').addEventListener('click', function() {
  var name = document.getElementById('typingPad').value;
  var messages = [
    `Congratulations, ${name}! Wishing you a joyful Independence Day.`,
    `Sending you lots of good wishes on this Independence Day, ${name}.`,
    `With love and warmth, wishing you a Happy Independence Day, ${name}!`
  ];

  var randomIndex = Math.floor(Math.random() * messages.length);
  var message = messages[randomIndex];

  document.getElementById('messageArea').innerText = message;
});

// Title bar animation
var title = "Happy Independence Day";
var titleIndex = 0;

function animateTitle() {
  document.title = title.substring(titleIndex) + title.substring(0, titleIndex);
  titleIndex++;
  if (titleIndex > title.length) {
    titleIndex = 0;
  }
}

setInterval(animateTitle, 200);
