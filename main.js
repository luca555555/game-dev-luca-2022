jump = 1
touch = 1
dashlim = 0
onblk = 1
pts = 0
pts2 = 0


//Check if divs are overlaping
function myHitOther(my1,my2){
  left1   = parseInt(document.getElementById(my1).style.left)
  right1  = left1 + parseInt(document.getElementById(my1).style.width)
  top1    = parseInt(document.getElementById(my1).style.top)   
  bottom1 = top1   + parseInt(document.getElementById(my1).style.height)
  left2   = parseInt(document.getElementById(my2).style.left)
  right2  = left2 + parseInt(document.getElementById(my2).style.width)
  top2    = parseInt(document.getElementById(my2).style.top)   
  bottom2 = top2   + parseInt(document.getElementById(my2).style.height)
  if ((right1  >=  left2  ) &&      	   
      (bottom1 >=  top2   ) &&
      (left1   <=  right2 ) &&
      (top1    <=  bottom2) ){
      return true
  }
}

function myCheckHit(){

  //Gravity logic
  if (touch == 2) {
  } else {
    document.getElementById('player01').style.top = parseInt(document.getElementById('player01').style.top) + 1 + 'px'
    onblk = 1
  }

  //Death :)
  if ( myHitOther('player01', 'die') ){
    document.write('You died noob')
  }
  if ( myHitOther('player01', 'alsodie') ){
    document.write('You died noob')
  }


  //Ground
  if ( myHitOther('player01','floor01') ){
    touch = 2
    jump = 2
  } else {
    touch = 1
    jump = 1
    onblk = 1
  }

  //Block 1
  if ( myHitOther('player01','floor02') ){
    touch = 2
    jump = 2
    onblk = 2
  }
  if ( myHitOther('player01','Lwall01') ){
    document.getElementById('player01').style.left = parseInt(document.getElementById('player01').style.left) + -5 + 'px'
  }
  if ( myHitOther('player01','Rwall01') ){
    document.getElementById('player01').style.left = parseInt(document.getElementById('player01').style.left) + 5 + 'px'
  }

  //Block 2
  if ( myHitOther('player01','floor03') ){
    touch = 2
    jump = 2
    onblk = 2
  }
  if ( myHitOther('player01','Lwall02') ){
    document.getElementById('player01').style.left = parseInt(document.getElementById('player01').style.left) + -5 + 'px'
  }
  if ( myHitOther('player01','Rwall02') ){
    document.getElementById('player01').style.left = parseInt(document.getElementById('player01').style.left) + 5 + 'px'
  }

  //Block 3
  if ( myHitOther('player01','floor04') ){
    touch = 2
    jump = 2
    onblk = 2
  }
  if ( myHitOther('player01','Lwall03') ){
    document.getElementById('player01').style.left = parseInt(document.getElementById('player01').style.left) + -5 + 'px'
  }
  if ( myHitOther('player01','Rwall03') ){
    document.getElementById('player01').style.left = parseInt(document.getElementById('player01').style.left) + 5 + 'px'
  }

  //Block 4
  if ( myHitOther('player01','floor05') ){
    touch = 2
    jump = 2
    onblk = 2
  }
  if ( myHitOther('player01','Lwall04') ){
    document.getElementById('player01').style.left = parseInt(document.getElementById('player01').style.left) + -5 + 'px'
  }
  if ( myHitOther('player01','Rwall04') ){
    document.getElementById('player01').style.left = parseInt(document.getElementById('player01').style.left) + 5 + 'px'
  }
}







//Timers
let clock1;
let clock2;
let clock3;
let clock4;
let clock5;


 function srt() { //Run mycheckhit
 clearInterval(clock1)
  clock1 = setInterval(function(){
    myCheckHit()
  }, 2)
}

sploop = 1

function srt2() { //Track score
  clearInterval(clock2)
   clock2 = setInterval(function(){
    pts = pts + 1
    if (pts == 60 || pts > 60) {
      pts = pts - 60
      pts2 = pts2 + 1
    }

    if (pts == 30 && sploop == 1) {
      sploop = 2
      document.getElementById('l2').style.opacity = '100%'
    }

    document.getElementById('score').innerHTML = pts2 + 'm ' + pts + 's'
   }, 1000)
 }

speed = 5

 function srt3() { //cycle platforms
  clearInterval(clock3)
   clock3 = setInterval(function(){

    if (onblk == 2) {
      document.getElementById('player01').style.left = parseInt(document.getElementById('player01').style.left) + -1 + 'px'
    } else {}
    
    //Block 1
    document.getElementById('floor02').style.left = parseInt(document.getElementById('floor02').style.left) + -1 + 'px'
    document.getElementById('Rwall01').style.left = parseInt(document.getElementById('Rwall01').style.left) + -1 + 'px'
    document.getElementById('Lwall01').style.left = parseInt(document.getElementById('Lwall01').style.left) + -1 + 'px'

    if (document.getElementById('floor02').style.left < 0 + 'px') {
    document.getElementById('floor02').style.left = parseInt(document.getElementById('floor02').style.left) + 1400 + 'px'
    document.getElementById('Rwall01').style.left = parseInt(document.getElementById('Rwall01').style.left) + 1400 + 'px'
    document.getElementById('Lwall01').style.left = parseInt(document.getElementById('Lwall01').style.left) + 1400 + 'px'

    slash = Math.floor(Math.random() * 630) + 90 + 'px'
    document.getElementById('floor02').style.top = slash
    document.getElementById('Rwall01').style.top = parseInt(slash) + 10 + 'px'
    document.getElementById('Lwall01').style.top = parseInt(slash) + 10 + 'px'

    document.getElementById('floor02').style.height = parseInt(document.getElementById('floor02').style.height) + 500 + 'px'
    document.getElementById('Rwall01').style.height = parseInt(document.getElementById('Rwall01').style.height) + 500 + 'px'
    document.getElementById('Lwall01').style.height = parseInt(document.getElementById('Lwall01').style.height) + 500 + 'px'
    }


    //Block 2
    document.getElementById('floor03').style.left = parseInt(document.getElementById('floor03').style.left) + -1 + 'px'
    document.getElementById('Rwall02').style.left = parseInt(document.getElementById('Rwall02').style.left) + -1 + 'px'
    document.getElementById('Lwall02').style.left = parseInt(document.getElementById('Lwall02').style.left) + -1 + 'px'

    if (document.getElementById('floor03').style.left < 0 + 'px') {
    document.getElementById('floor03').style.left = parseInt(document.getElementById('floor03').style.left) + 1400 + 'px'
    document.getElementById('Rwall02').style.left = parseInt(document.getElementById('Rwall02').style.left) + 1400 + 'px'
    document.getElementById('Lwall02').style.left = parseInt(document.getElementById('Lwall02').style.left) + 1400 + 'px'

    slash = Math.floor(Math.random() * 630) + 90 + 'px'
    document.getElementById('floor03').style.top = slash
    document.getElementById('Rwall02').style.top = parseInt(slash) + 10 + 'px'
    document.getElementById('Lwall02').style.top = parseInt(slash) + 10 + 'px'

    document.getElementById('floor03').style.height = parseInt(document.getElementById('floor03').style.height) + 500 + 'px'
    document.getElementById('Rwall02').style.height = parseInt(document.getElementById('Rwall02').style.height) + 500 + 'px'
    document.getElementById('Lwall02').style.height = parseInt(document.getElementById('Lwall02').style.height) + 500 + 'px'
    }


    //Block 3
    document.getElementById('floor04').style.left = parseInt(document.getElementById('floor04').style.left) + -1 + 'px'
    document.getElementById('Rwall03').style.left = parseInt(document.getElementById('Rwall03').style.left) + -1 + 'px'
    document.getElementById('Lwall03').style.left = parseInt(document.getElementById('Lwall03').style.left) + -1 + 'px'

    if (document.getElementById('floor04').style.left < 0 + 'px') {
    document.getElementById('floor04').style.left = parseInt(document.getElementById('floor04').style.left) + 1400 + 'px'
    document.getElementById('Rwall03').style.left = parseInt(document.getElementById('Rwall03').style.left) + 1400 + 'px'
    document.getElementById('Lwall03').style.left = parseInt(document.getElementById('Lwall03').style.left) + 1400 + 'px'

    slash = Math.floor(Math.random() * 630) + 90 + 'px'
    document.getElementById('floor04').style.top = slash
    document.getElementById('Rwall03').style.top = parseInt(slash) + 10 + 'px'
    document.getElementById('Lwall03').style.top = parseInt(slash) + 10 + 'px'

    document.getElementById('floor04').style.height = parseInt(document.getElementById('floor04').style.height) + 500 + 'px'
    document.getElementById('Rwall03').style.height = parseInt(document.getElementById('Rwall03').style.height) + 500 + 'px'
    document.getElementById('Lwall03').style.height = parseInt(document.getElementById('Lwall03').style.height) + 500 + 'px'
    }


    //Block 4
    document.getElementById('floor05').style.left = parseInt(document.getElementById('floor05').style.left) + -1 + 'px'
    document.getElementById('Rwall04').style.left = parseInt(document.getElementById('Rwall04').style.left) + -1 + 'px'
    document.getElementById('Lwall04').style.left = parseInt(document.getElementById('Lwall04').style.left) + -1 + 'px'

    if (document.getElementById('floor05').style.left < 0 + 'px') {
    document.getElementById('floor05').style.left = parseInt(document.getElementById('floor05').style.left) + 1400 + 'px'
    document.getElementById('Rwall04').style.left = parseInt(document.getElementById('Rwall04').style.left) + 1400 + 'px'
    document.getElementById('Lwall04').style.left = parseInt(document.getElementById('Lwall04').style.left) + 1400 + 'px'

    slash = Math.floor(Math.random() * 630) + 90 + 'px'
    document.getElementById('floor05').style.top = slash
    document.getElementById('Rwall04').style.top = parseInt(slash) + 10 + 'px'
    document.getElementById('Lwall04').style.top = parseInt(slash) + 10 + 'px'

    document.getElementById('floor05').style.height = parseInt(document.getElementById('floor05').style.height) + 500 + 'px'
    document.getElementById('Rwall04').style.height = parseInt(document.getElementById('Rwall04').style.height) + 500 + 'px'
    document.getElementById('Lwall04').style.height = parseInt(document.getElementById('Lwall04').style.height) + 500 + 'px'
    }
   }, speed)
 }

 function srt4() {
  clearInterval(clock4)
  clock4 = setInterval(function(){
    if (jump == 1) {
      document.getElementById('player01').src = 'images/Drawing02.png'
    }

    if (jump == 2) {
      document.getElementById('player01').src = 'images/Drawing.png'
    }
  }, 500)
  }

  let myGlobalX = 0

  //WTF
  function srt5() {
    clearInterval(clock5)
    clock5 = setInterval(function(){
      myTemp = '100px 0px'
      myGlobalX -= 5
      myTemp =  myGlobalX + 'px 0px'
      document.getElementById('myBody').style.backgroundPosition = myTemp
    }, 15)
    }


//Controles && Movement
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 32) {
    console.log(jump)
    if (jump == 2) {
      document.getElementById('player01').src = 'images/Drawing02.png'
    document.getElementById('player01').style.top = parseInt(document.getElementById('player01').style.top) + -300 + 'px'
    }
  };
});

document.addEventListener("keyup", function(e) {
  if (e.keyCode == 65) {
   document.getElementById('player01').src = 'images/Drawing04.png'
   document.getElementById('player01').style.left = parseInt(document.getElementById('player01').style.left) + -100 + 'px'
  };
});

document.addEventListener("keyup", function(e) {
  if (e.keyCode == 68) {
    document.getElementById('player01').src = 'images/Drawing03.png'
   document.getElementById('player01').style.left = parseInt(document.getElementById('player01').style.left) + 100 + 'px'
  };
});


document.addEventListener("keydown", function(e) {
  if (e.keyCode == 16) {
    alert('Block hight: ' + slash + '\nOther: ' + '\nOther: ')
    document.getElementById('player01').src = 'images/Drawing02.png'
  };
});
