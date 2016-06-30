$(function(){
    $('form').submit(function(){
        var cityName = $('#cityName').val();
        var stateName = $('#stateName').val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "%2C"+ stateName+"&APPID=cf0ea130cf2834d213fb931a7436000a";
        
        $.get(url, function(res){
            var w = res.wind.deg;
            var windDir;
            var pubDate = new Date(res.dt *1000);
            if (w >10 && w<80){ windDir = "NE"; }
            else if (w>=80 && w<=100) { windDir = "N"; }
            else if (w>100 && w<170) { windDir = "NW"; }
            else if (w>=170 && w<=190) { windDir = "W"; }
            else if (w>190 && w<260) { windDir = "SW"; }
            else if (w>=260 && w<=280) { windDir = "S"; }
            else if (w>280 && w<350) { windDir = "SE"; }
            else { windDir = "E"; }
            
            $("#weatherOutput").append('<div class="printCityInfo"><span>' + cityName +' ' +stateName+ '</span><br/><p id="degrees">Temperature: ' + Math.round((res.main.temp * 9/5 - 459.67 )) + 'F</p><p id="windSpeed">Wind speed: ' + res.wind.speed+ 'mph</p><p id="windDirection">Wind direction: ' + windDir + '</p><p id="time">Date/time: ' +pubDate+ '</p></div>')
            $('#cityResult').text(res.weather[0].main);
        })
        $('#cityName, #stateName').val("");
        return false;
    })
})