var index = 0
var words;

window.onload = function Init(){

  var content = document.getElementById('app')
  words = content.innerHTML.split(' ')
  StartProcess()

}


function StartProcess(){

  if(index >= words.length)
    index = 0

  var div = document.getElementById('app')
  div.className = "";

  div.innerHTML = words[index]
  index++;

  setTimeout(StartProcess, 300)
}
