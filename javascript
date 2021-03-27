/* javaScript
*  Brett Wiley
*  1/9/2020
*  filename: orbits.js
*/

"use strict"; // interpret contents in Javascript strict mode

// create date object to obtain current date
var dateObject = new Date();  

//create displayCalendar function with variables
function displayCalendar(whichMonth)  {
   var date;
   var dateToday = new Date();
   var dayOfWeek;
   var daysInMonth;
   var dateCells;
   var captionValue;
   var month;
   var year;

//create month array
   var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
   //get current month and year  
   month = dateObject.getMonth();
   year = dateObject.getFullYear();
   dateObject.setDate(1);
   dayOfWeek = dateObject.getDay();

//current month will be assigned to the variable captionValue
   captionValue = monthArray[month] + " " + year;

//current month will be displayed in html
   document.getElementById("cal").innerHTML = captionValue;

//determine number of days in each of month   
       if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) { daysInMonth = 31;
   }   else if (month === 1) {
	if (year % 4 === 0) {
	   if (year % 100 === 0)  {
		if (year % 400 === 0) {daysInMonth = 29;} 
		else { daysInMonth = 28;}
		}
	        else { daysInMonth = 29;}
		}
            else {daysInMonth = 28;  }
		}
	 else { daysInMonth = 30;  }
     
       dateCells = document.querySelectorAll("p.date");

//clearing days of month from calendar
     for(var i = 0; i < dateCells.length; i++)  {        
      dateCells[i].innerHTML = "";
      dateCells[i].className = "";
      } 
     
//days of month put on calendar
     for (var i = dayOfWeek; i < daysInMonth + dayOfWeek; i++)  {
         dateCells[i].innerHTML = dateObject.getDate(); 
         dateCells[i].className = "date"; 
      
      date = dateObject.getDate() + 1;
      dateObject.setDate(date);
      }
           
     dateObject.setMonth(dateObject.getMonth() - 1);
     document.getElementById("cal").style.display = "block";


}


displayCalendar(); 


 

