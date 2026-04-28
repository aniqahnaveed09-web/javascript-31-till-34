// question 1

// var today = new Date()
// document.write(today)

// question 2
// var months = [
//   "January", "February", "March", "April", "May", "June", 
//   "July", "August", "September", "October", "November", "December"
// ];

// var date = new Date();
// var currentMonth = months[date.getMonth()];
// alert("Current month: " + currentMonth);

// question 3

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var now = new Date();
// var dayName = days[now.getDay()]; 
// var shortDay = dayName.slice(0, 3); 

// alert("Today is " + shortDay);

// question 4

// var days = [,"Sun","Mon" ,"Tue","wed","Thur","fri", "Sat" , ];
// var date = new Date();
// var currentDay = days[date.getDay()]
// document.write("today is " + currentDay)

// if(currentDay=== "Sat" || currentDay==="Sun"){
//     alert("have fun day")
// }


// question 5

// var date = new Date();
// var dayOfMonth = date.getDate();
// if (dayOfMonth < 16) {
//   document.write("First fifteen days of the month");
// } else {
//   document.write("Last days of the month");
// }


// question 6

// var date = new Date()
// document.write(date + "<br>")
// var milliSec = Date.now()
// document.write("elipsed millisecond since 1 january 1970 : "+ milliSec + "<br>")

// var minute = Math.floor(milliSec/1000);
// document.write("elipsed minutes since januart 1970 : " + minute)

// question 7 

// var date = new Date()
// var time = date.getTime()
// if(time < 12 ){
//     alert("It's AM")
// }else{
//     alert("It's PM")
// }

// question 8

// var laterDate = new Date(2020, 11, 31);

// console.log("Later date: " + laterDate);


// question 9

// var today = new Date()
// var ramadanDate = new Date(2015, 6 , 18)

// var todayMs = today.getTime()
// var ramadanMs = ramadanDate.getTime()
// console.log(ramadanMs)
// var diff = todayMs - ramadanMs 
// var days = Math.floor(diff/86400000)
// console.log(days)
// document.write(days + " days has been passed since 1st ramadan 2015")

// question 10
// var reference = new Date("Sat dec 05 2015 22:50:55 ")
// var beginningOf2015 = new Date("Jan 01 2015 00:00:00")
// var RefInSec = reference.getTime()
// var beginningOf2015InSec = beginningOf2015.getTime()
// var diff =  RefInSec  - beginningOf2015InSec 
// console.log(diff)
// var Second = Math.floor(diff/1000)
// document.write("since the reference date " + reference + Second + "has been passed since the begining of 2015")


// question 11

// var now = new Date();
// document.write("Current date: " + now + "<br>");

// now.setHours(now.getHours() + 1);
// document.write("1 hour ahead, it is: " + now);


// question 12
// var now = new Date()
// document.write("curret date is : " + now + "<br>")

// now.setFullYear(now.getFullYear()-100);
// document.write("100 years back the date was" + now)

// question 13

// var userAge = prompt("Enter your age:");
// var currentYear = new Date().getFullYear();

// var birthYear = currentYear - userAge;

// document.write("Your age is " + userAge + "<br>");
// document.write("Your birth year is " + birthYear);

// question 14

// var months = ["January", "February", "March", "April", "May", "June", 
//               "July", "August", "September", "October", "November", "December"];

// var now = new Date();
// var currentMonth = months[now.getMonth()];

// // alert("Current month: " + currentMonth);

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var now = new Date();
// var dayName = days[now.getDay()]; 
// var shortDay = dayName.slice(0, 3); 

// alert("Today is " + shortDay);

// var customerName = prompt("enter name");
// var months = ["January", "February", "March", "April", "May", "June", 
//               "July", "August", "September", "October", "November", "December"];
// var now = new Date();
// var currentMonth = months[now.getMonth()];
// var numberOfUnits = 410;
// var chargesPerUnit = 16;
// var latePaymentSurcharge = 350;

// var netAmountPayable = numberOfUnits * chargesPerUnit;
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Month: " + currentMonth + "<br>");
// document.write("Number of units: " + numberOfUnits + "<br>");
// document.write("Charges per unit: " + chargesPerUnit + "<br><br>");

// document.write("Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "<br>");
// document.write("Late payment surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2));


