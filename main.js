
var text = 'Test your text here'
for (var i = 0; i < text.length; i++) {
  var $letter = document.createElement('span')
  $letter.textContent = text[i]
  document.body.appendChild($letter)
}

var $first = document.querySelector('span')
$first.classList.add('current')
