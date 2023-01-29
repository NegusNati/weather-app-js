class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.dew_point = document.getElementById("w-dew_point");
    this.image = document.getElementsByClassName("w-image");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.pressure = document.getElementById("w-pressure");
    this.dew_point = document.getElementById("w-dew_point");
    this.wind = document.getElementById("w-wind");
  }


    // getImage(responseData){


    //     const icon = responseData.weather[0].icon;
    //     responseData.then(
    //         (data) => {
    //             const image = new Promise( fetch(`http://openweathermap.org/img/w/${data}.['weather'][0]['icon'].png`))
    //         }
    //     ).then(
    //    (image)=>{
    //     img = image;
    //    }
    //     ).catch(
    //         err=> console.log(err)
    //     );
    // }

  

  paint(data) {
    this.location.textContent = data.name;
    this.desc.textContent = data.weather[0].description;
    this.string.textContent = `${data.main.temp}°C`;
    const icon = data.weather[0].icon;
    // this.image.innerHTML = `<img id="w-icon" alt="Icon" src="http://openweathermap.org/img/wn/${icon}@2x.png">`;
    const i = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    this.icon.setAttribute('src',i);
    
    
  }
}
