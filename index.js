/* Пробовал создать функцию, чтобы избежать повторений в блоке свича, что-то наподобие такого:
function soundGeneration(soundName){
  let soundDeclaration = new Audio('sounds/' + soundName + '.mp3');
  soundDeclaration.play();
}
И пытался ее использовать, но почему-то не получалось, хотя так было бы красивее.
*/


let drumButtons = document.querySelectorAll('.drum');

for(let drumKey of drumButtons){

  drumKey.addEventListener('click', function(){

    let clickedButton = this.innerHTML;
    makeSound(clickedButton);
    buttonAnimation(clickedButton);

  });
}


document.addEventListener('keypress', function(event){

  let pressedKey = event.key;
  makeSound(pressedKey);
  buttonAnimation(pressedKey);

});


function buttonAnimation(currentKey){

  let usedKey = document.querySelector('.' + currentKey);
  usedKey.classList.add('pressed');

  setTimeout(function(){
    usedKey.classList.remove('pressed');
  }, 300);

}


function makeSound(key){

  switch(key){

    case 'w':
    let crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

    case 'a':
    let kick_bass = new Audio('sounds/kick-bass.mp3');
    kick_bass.play();
    break;

    case 's':
    let snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case 'd':
    let tom_1 = new Audio('sounds/tom-1.mp3');
    tom_1.play();
    break;

    case 'j':
    let tom_2 = new Audio('sounds/tom-2.mp3');
    tom_2.play();
    break;

    case 'k':
    let tom_3 = new Audio('sounds/tom-3.mp3');
    tom_3.play();
    break;

    case 'l':
    let tom_4 = new Audio('sounds/tom-4.mp3');
    tom_4.play();
    break;

    default: 
    console.log('Sounds dont work!')
  }

}

