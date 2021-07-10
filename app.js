// CHAPTER # 38-44    FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-
//                                 WHILE LOOPS

// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
// var num = +prompt("Enter your Number");
// var pow = +prompt("Raised to Power");
// function exp(a,b)
// {
//         var ans = 1;
//         for (var i =1; i <= b; i++)
//         {
//                 ans = a * ans;        
//         }
//         return ans;
// }
// var result = exp(num,pow);
// document.write("Your Number is "+num);
// document.write("<br/>Raised to Power "+pow);
// document.write("<br/>The Result is "+result);

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// var year = +prompt("Enter any Year to check whether it's a Leap Year or not");
// function leapYear(){
    
//         if((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)){
//             alert(year+" is a leap Year"); 
//            }  
//         else{
//             alert(year+" is not a leap Year"); 
//         }
//     }
// leapYear();

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
// var a = +prompt("Enter 1st side of triangle");
// var b = +prompt("Enter 2nd side of triangle");
// var c = +prompt("Enter 3rd side of triangle");

// function forS(a,b,c){
//    var  s = ( a + b + c ) / 2;
// return s;
// }
// var S = forS(a,b,c);
// function forArea(a,b,c){
//   var  Area = S * (S - a) * (S - b) * (S - c);
//     return Area;
// }
// var area = forArea(a,b,c);
// document.write("a = "+a);
// document.write("<br/>b = "+b);
// document.write("<br/>c = "+c);
// document.write("<br/>Area of Triangle: "+area);

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
// var sub1 = +prompt("Enter Obtained Marks of 1st Subject by 75");
// var sub2 = +prompt("Enter Obtained Marks of 2nd Subject by 75");
// var sub3 = +prompt("Enter Obtained Marks of 3rd Subject by 75");

// function Average(){
//   var ave = (sub1 + sub2 + sub3) / 3;
//   return ave;
// }
// function Percentage(){
//   var per = (sub1 + sub2 + sub3)
// }

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.


// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.
// var str = prompt("Enter Some Text");
// vowels = ["a","e","i","o","u","A","E","I","O","U"];
// function checkVowels(){
//     for(var i = 0; i <= str.length; i++){
//       for(var j = 0; j <= vowels.length; j++){
//         if(str[i] === vowels[j]){
//           str = str.replace(i," ");
//           }
//         }
//     }
//     return str;
// }
// var result = checkVowels();
// document.write(result);

//CHAPTER # 43-48 EVENTS

//1. Show an alert box on click on a link.
// function alertBox(){
//   alert("Hello World!");
// }

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.
// function thanks(){
//   alert("Thanks for Purchasing a phone from us");
// }

// 5.Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.
 
// var clicks = 0;

// function onClick() {
//   clicks += 1;
//   document.getElementById("clicks").innerHTML = clicks;
// };
// function onClickLess() {
//   clicks -= 1;
//   document.getElementById("clicks").innerHTML = clicks;
// };