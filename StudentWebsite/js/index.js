$(document).ready(function() {
    var apiKey = "5bc82451636190abd9d7afe6fe9b20b5" // Enter the API key
    var state_obj = state_info['CO']
    var url = 'https://api.weatherstack.com/forecast?access_key='+apiKey+'&query=<latitude>,<longitude>';

    Object.keys(state_info).map(function(key, index)
    {
      var lat = state_info[key].lat;
      var long = state_info[key].lng;
      url = 'https://api.weatherstack.com/forecast?access_key='+apiKey+'&query='+lat+','+long+'';
      function getFarenheitTemp(tempColor)
      {
        return (9*tempColor/5)+32;
      }
      $.ajax({url:url, dataType:"jsonp"}).then(function(data)
      {
        console.log(data);
        var temperature = null;
        temperature = parseInt(getFarenheitTemp(data.current.temperature));
        console.log(temperature);
        tempColor = '#' + key;

      if(temperature <= 10)
        {
          $(tempColor).css('fill', "#6495ED");
        }
      else if(temperature>=11 && temperature<=20)
        {
          $(tempColor).css('fill', "#7FFFD4");
        }
      else if(temperature>=21 && temperature<=30)
         {
          $(tempColor).css('fill', "#0000FF");
        }
      else if(temperature>= 31 && temperature<=40)
        {
          $(tempColor).css('fill', "#008B8B");
        }
      else if(temperature>= 41 && temperature<=50)
        {
          $(tempColor).css('fill', "#00BFFF");
        }
      else if(temperature>= 51 && temperature<=60)
        {
          $(tempColor).css('fill', "#F08080");
        }
      else if(temperature>= 61 && temperature<=70)
        {
          $(tempColor).css('fill', "#CD5C5C");
        }
      else if(temperature>=71 && temperature<=80)
        {
          $(tempColor).css('fill', "#8B0000");
        }
      else if(temperature>=81 && temperature<=90)
        {
          $(tempColor).css('fill', "#B22222");
        }
       else if(temperature>90)
        {
          $(tempColor).css('fill', "#FF0000");
        }
        else
        {
          $(tempColor).css('fill', "#808080");
        }
      });
    });
});
