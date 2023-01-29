//Init weather object

const weather = new Weather("London");
const ui = new UI();

//change location event

document.getElementById('w-change-btn').addEventListener('click', (e)=>{

    const city = document.getElementById('city').value;

    weather.changeLocation(city);

    

    //call get weather for the new data
    getWeather();

    //colse modal using jQuery
    // $('#locModal').modal().hide();
    // $('#locModal').modal('hide');
    $('#locModal').modal('toggle');

});

//Get weather when DOM load

document.addEventListener("DOMContentLoaded", getWeather());

// weather.changeLocation("miami");

function getWeather() {
  weather
    .getData()
    .then((data) => {
      console.log(data);
        // ui.getImage(data)
      ui.paint(data);
    })
    .catch((err) => console.log(err));
}





