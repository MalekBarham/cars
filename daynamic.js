// confirm ("welcome to my cars website");

// to welcome guest 
var userName =prompt("what is your name?")
var age = prompt ("how old are you ?")
if (age >= 18) {alert("welcome here")
} 
else{
    alert("You need your parents to continue!")
} 

var element=document.getElementById('touser');
element.innerText='welcome ' +userName+ ' to our webiste'
var r1= parseInt(prompt ("how much satisfied are you with our paint service (1-10)?")) ;
var r2= parseInt(prompt ("How much satisfied are you with our tier service (1-10)?"));
var r3= parseInt(prompt ("How much satisfied are you with our washing service (1-10)"));

function avgCalculation(a,b,c){
    console.log("5925")
    var sum=parseInt(a)+parseInt(b)+parseInt(c);
    var avg=sum/3;
    
    alert("this is your satisfied " +avg );
    
    for (var i = 0; i < avg; i++) {
        document.write('<img src="https://d1e00ek4ebabms.cloudfront.net/production/4b0c56ef-0f1b-43ba-ad65-627cd8850bfb.jpg">');
    }




}
avgCalculation(r1,r2,r3)






    



    














