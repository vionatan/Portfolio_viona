
document.getElementById("event").addEventListener("click", function(){

        if(document.getElementById("event").selectedIndex == 0){
                document.getElementById("date").innerHTML = "<option value="+ "event" +"selected>" + 	"6:00pm " + "</option>" +
                "<option value="+ "event2>" + "7:30pm " + "</option>" +
                "<option value="+"event3>" + "6:30pm" + "</option>";
              
        }else if (document.getElementById("event").selectedIndex == 1) {
                       document.getElementById("date").innerHTML= "<option value="+ "event" +"selected>" + "6:00pm " + "</option>" +
                       "<option value="+ "event2>" + "12:00pm " + "</option>" +
                       "<option value="+"event3>" + "5:00pm" + "</option>"
              
        }else if (document.getElementById("event").selectedIndex == 2) {
                       document.getElementById("date").innerHTML = "<option value="+ "event1" +"selected>" + "6:30pm " + "</option>" +
                       "<option value="+ "event2>" + "9:00pm " + "</option>" +
                       "<option value="+"event3>" + "11:00pm" + "</option>"
        }
                  
}, false);
