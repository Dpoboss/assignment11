const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=> n.
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))
  var a =6;
  var b = '89';
  console.log(a===b);
  console.log(a==b);
  console.log(a=b);
var fit = 'ada'
var two = fit.length -1;
console.log(two)

var z = "2";
var z = "tobi"
console.log(z);

//var h = 2++;

var y = 'jknm,'
console.log(y);

var ourName = 'DaisiPeter'
var yourName = "my name is " + ourName + " thanks"
console.log(yourName);

//
var ourName = 'DaisiPeter'
var yourName = "my name is " + ourName + " thank"
yourName += 'you'
console.log(yourName)


// length
var firstName ;
var  doyin = "dance"
firstName = doyin.length;
console.log(firstName)

// bracket notation [  0 means first letter of the word]
var first = ""
var name1 = 'ada'

first = name1[0];
console.log(first);

// change 







function add (a,b){
  return a + b;
}


console.log(add(3,2));





// ANOTHER CLASS

function multiply (b,t){
  return b * t;

}
console.log(multiply(12,2))

function division (gen,car){
  return gen / car;
}
console.log(division(12,2))

function subtract (hi,joh){
  return hi-joh;
}
console.log(subtract(12,2));
function add (john,dayo){;
return john+dayo;
}
console.log(add(12,2));

// to use console instead of return
function addw (hi,jii){
  console.log(hi/jii)

} 
addw(12,2)

/// to use if and else

var age = 18
if (age => 18){
  console.log('please proceed')
}
else{
  console.log('you have to be 18 and above to access this website')
}


var age= 13;
if (age >= 18){
  console.log('please proceed')
}
else{
  console.log('you have to be 18 or above to access this website')
}
var age = 8
if (age >= 60 ){
  console.log('you are an elder')
}
else if( age >= 18){
  console.log('you have to be 18 or below to access this website')
}
else { 
  console.log('get out, you are a baby')
}

// function and else and if 
function scores (score) {
if ( score >= 100) {
    console.log( 'A')
  }
else if ( score >= 70){
  console.log('A EXCELLENCE ')
}

else if ( score >= 60){
  console.log('B = GOOD')
}
else if ( score >= 50){
  console.log('C = CREDIT')
}
else if ( score >= 45){
  console.log('D = PASS')
}
else if ( score <= 0){
  console.log('below score')
}
else if( score <=40){
  console.log( 'F')
}
}

scores(1000);


/// NEW DAY
// CLASSWORK-- CREATE A FUCTION THAT HAS 3 PAREMETERS(INTERGER) THEN GIVE THE RESULT OF THE LOWEST VALUE, IF THE THE USER WRITES A STRING, RETURN, THIS IS NOT A NUMBER

function comp (x,y,z){
  console.log(Math.min(x,y,z))
}
x = 5
y = 6
z = 2



// let fruits = ['apple', 'banana', 'orange']
// let lastFruit = fruits.pop();{
//   console.log(fruits)}// 'orange', fruits = ['apple', 'banana']




/// ASSIGNMENT 1 CREATE A FORMULAR FOR PYTHAGORAS THEOREM

function formular ( C2, A2, B2){
  return C2 = A2 + B2
}
console.log(formular(10^2,2^2));

/* 5 applications of javascript
1. Web Development
2. Data visualization
3. Web Applications
4. Animation
5. Serverless Computing */

// function weather_condition ( weather){
  
//   switch ( weather){
//     case 89:
//       return( 89 +'c' +'Sunny day, wear your shades');
      
//     case 34:
//       console.log(34 + 'c' + 'Raining day, go out with your umbrella')
      
//       case 60:
//         console.log(60 + 'c'+ 'cloudy day')
        
//       default:
//         console.log('check google')
//   }
  
// }
// weather(89)
// console.log( 89 +'c' +'Sunny day, wear your shades');

function weather_condition ( weather){
  
  switch ( weather){
    case 'sunny':
      console.log('Sunny day, wear your shades');
      break;
    case 'raining':
      console.log('Raining day, go out with your umbrella');
      break;
      case cloudy:
        console.log('cloudy day');
        break;
        
      default:
        console.log('check google')
        break;
  }
  
}
/* the compiler traslates codes into binary in several stages, 
1. lexical analysis
2. sytyax analysis 
3. semantic analysis
4. code generatio, 5. optimization


ARITHMETIC OPERATIONS*/

 var sum = 13
 var summer = 2

 const double = sum + summer
 const product = sum * summer
 const remainder = sum % summer
 const divide = sum / summer
 console.log(double)
 console.log(product)
 console.log(remainder)
 console.log(divide)