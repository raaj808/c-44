var inp
var butten
var bulls
var cows
var words  
var r
var cw
var pw
var bn = 0
var cn = 0


function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
 inp = createInput().position(window.innerWidth/6,window.innerHeight/2)
 butten = createButton("sumbit").position(window.innerWidth/6,window.innerHeight/1.7)
 words = createElement("h1").html("words").position(800,50)
 butten.mousePressed(result)
 bulls = createElement("h1").html("bulls").position(1000,50)
 cows = createElement("h1").html("cows").position(1200,50)
 r = Math.round(random(0,s.length-1))
 console.log(r)
 cw = s[r]
 console.log(cw)
}

function draw() {
  background(255,255,255);  
}
function result (){
if(inp.value().length!=4){
  alert("please enter a four leater word only :)")
}
pw=inp.value().toLowerCase()
console.log(pw)
// condition for bulls
if(cw.charAt(0)===pw.charAt(0)){
bn = bn+1
}

if(cw.charAt(1)===pw.charAt(1)){
  bn = bn+1
  }

  if(cw.charAt(2)===pw.charAt(2)){
    bn = bn+1
    }

    if(cw.charAt(3)===pw.charAt(3)){
      bn = bn+1
      }

      //condition for cows
      if(cw.charAt(0)===pw.charAt(1)||cw.charAt(0)===pw.charAt(2)||cw.charAt(0)===pw.charAt(3)){
        cn= cn+1
      }

      if(cw.charAt(1)===pw.charAt(0)||cw.charAt(1)===pw.charAt(2)||cw.charAt(1)===pw.charAt(3)){
        cn= cn+1
      }

      if(cw.charAt(2)===pw.charAt(1)||cw.charAt(2)===pw.charAt(0)||cw.charAt(2)===pw.charAt(3)){
        cn= cn+1
      }

      if(cw.charAt(3)===pw.charAt(1)||cw.charAt(3)===pw.charAt(0)||cw.charAt(3)===pw.charAt(2)){
        cn= cn+1
      }
      if(inp.value().length===4){
       for(var i = 0;i<s.length;i++){
       if(s[i].includes(pw)){
         break
       }
       } 
      }
    }