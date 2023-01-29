class Weather{
 constructor(city){
    this.apiKey = 'be2f2d133df4c10e749cc9944f6cc5dd';
    this.city = city;
 }


 //fetch the weather api
 async getData(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);


    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    const responseData = await response.json();

  

    return responseData;
 }



 //change location 
 changeLocation(city){ 
    this.city = city;
 }

}