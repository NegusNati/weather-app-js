//Init weather object

const weather = new Weather("London");
const ui = new UI();

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





