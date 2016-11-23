// Kay Hian Calpito, November 23, 2016, Javascript test review//
var knight = 'Gwain';
var maiden = 'Guinevere';
var monster = 'Dragon';

var weaponChest = ['Mace', 'Sorcerer stone', 'Excalibur']

var hero = {
  'wizard' : 'Merlin',
  'weapon' : 'Mace',
  'power' : '50'
}

function swordInTheStone(worthy){
  if (worthy = 'Arthur') {
    console.log("We have found our King" + " " + worthy)
  }
  else {
    console.log("We must keep searching, for" + worthy + "is unworthy.")
  }
}
swordInTheStone('Gwain')

function trueLove(king, queen){
  if (queen = 'Guinevere' && king = 'Arthur') {
    console.log("On this day, our" + king + "and" + queen + "shall rule happily ever after")
  }
  else {
    console.log("We must keep searching, for true must reign over Camelot.")
  }
}
trueLove('Gwain', 'Guinevere')

function epicBattle(wizard, enemy, power){
  if (power <= 15) {
    console.log("Our" + wizard + "has fallen".)
  }
  else if (power >= 16 && <= 40) {
    console.log(wizard + "has almost slain" + enemy)
  }
  else {
    console.log("Our" + wizard + "has slain the" + enemy + "!")
  }
}
epicBattle('Merlin', 'Dragon', 50)