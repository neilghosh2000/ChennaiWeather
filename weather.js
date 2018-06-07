$(document).ready(function () {
    $("#getWeather").click(function () {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=9eeb3a83b51e6ad048aed48f337f9ea3&units=metric",
            success: function (theWeather) {
                var temp = theWeather.main.temp;
                var hum = theWeather.main.humidity;
                                $("#result").text("The temperature is " + temp + " degrees and the humidity is " + hum + " %");
                             
                                 
            }
        });
    });


});
