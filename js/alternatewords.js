
var words = ['Jonatan', 'Kapps', 'Nathalia', 'Mayworm', 'Hugo', 'Alvarenga', 'Teste']

var index = 0

window.onload = function StartProcess(){

  if(index >= words.length)
    index = 0

  var div = document.getElementById('app')
  div.innerHTML = words[index]
  index++;

  setTimeout(StartProcess, 400)
}
