var countDownDate = new Date("december 27, 2018 9:00:00").getTime();
        
        // Update the count down every 1 second
        var x = setInterval(function() {
        
            // Get todays date and time
            var now = new Date().getTime();
            
            // Find the distance between now an the count down date
            var distance = countDownDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById("days").innerHTML = days + "<span>days</span>:";
            document.getElementById("hours").innerHTML = hours + "<span>hours</span>:";
            document.getElementById("minutes").innerHTML = minutes  + "<span>mins</span>:";
            document.getElementById("seconds").innerHTML = seconds  + "<span>secs</span>";
            
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
            }
        }, 1000);