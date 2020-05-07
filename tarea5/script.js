//variables 
var saveBtn = $(".SaveBtn");
var currentHour = moment().format("HH");  
var currentHourInt = parseInt(currentHour); 

//cambiar de color 
$("#row0").attr("data-time",moment("9:00 am", "h:mm a").format("HH"));
$("#row1").attr("data-time",moment("10:00 am", "h:mm a").format("HH"));
$("#row2").attr("data-time",moment("11:00 am", "h:mm a").format("HH"));
$("#row3").attr("data-time",moment("12:00 pm", "h:mm a").format("HH"));
$("#row4").attr("data-time",moment("1:00 pm", "h:mm a").format("HH"));
$("#row5").attr("data-time",moment("2:00 pm", "h:mm a").format("HH"));
$("#row6").attr("data-time",moment("3:00 pm", "h:mm a").format("HH"));
$("#row7").attr("data-time",moment("4:00 pm", "h:mm a").format("HH"));
$("#row8").attr("data-time",moment("5:00 pm", "h:mm a").format("HH"));
$("#row9").attr("data-time",moment("6:00 pm", "h:mm a").format("HH"));

//current day display
$(document).ready(function(){
    

    $("#currentDay").append();

    function addDate(){
        $("#currentDay").html(moment().format("Do MMMM YYYY, h:mm a"));
        

    }
     setInterval (addDate, 1000)

    for (var i = 0; i <= 12; i++) {
       
        var inputHour = $( "#row" + i).attr("data-time");
        var inputHourInt = parseInt(inputHour);
      
        
        if (currentHourInt === inputHourInt) {
            $(".input" + i ).addClass("present");
        }

        if (currentHourInt < inputHourInt) {
            $(".input" + i  ).addClass("futre");
        }

        if (currentHourInt > inputHourInt) {console.log(
            $( ".input" + i))
            $(".input" + i ).addClass("past");
        }

    }

      saveBtn.on("click", function() {
      
        var rowHour = $(this).attr("data-hour");
        var input = $(".input" + rowHour ).val();
        localStorage.setItem(rowHour, input);



      });
      
      function renderPlan(){
          for (var i = 0; i <= 12; i++){
              $(".input" + i ).val(localStorage.getItem(i));
          }
      }
      renderPlan()

    });
    






