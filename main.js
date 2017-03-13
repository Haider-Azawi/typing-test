
var text = 'Test your text here'
for (var i = 0; i < text.length; i++) {
  var $letter = document.createElement('span')
  $letter.textContent = text[i]
  document.body.appendChild($letter)
}

var $first = document.querySelector('span')
$first.classList.add('current')

document.addEventListener('keypress', function(event) {
  var $current = document.querySelector('.current')
  var $currentCharacter = $current.textContent
  if (event.key === $currentCharacter) {
    $current.classList.remove('current')
    $current.nextSibling.classList.add('current')
  }
  else {
    $current.classList.add('wrong')
  }
})
var $wrong = document.querySelectorAll('.wrong')
var $result = document.createElement('p')
$result.textContent = 'You have made ' + $wrong.length + ' mistakes!'
document.body.appendChild($result)
