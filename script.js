 function getWeather(){
     const apikey= '46e6720ac0448abc7c6122e0dfbbf988'
     const city= document.getElementById('city').ariaValueMax;
      if(!city){
        alert('please enter a city');
        return ;
    
      }
      const currentWeatherUrl='https://api.openweathermap.org/data/2.5/weather?q'
 }