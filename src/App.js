import React from "react";
import InfoComponent from "./components/info";
import WeatherComponent from "./components/weather";
import FormComponent from "./components/form";

const API_KEY = "110df0281a46472a8e825e777f227429";

class AppComponent extends React.Component {
    
    state = {
        temp : undefined,
        city : undefined,
        country : undefined,
        sunset : undefined,
        sunrise : undefined,
        error : undefined
    }

    gettingWeather = async(event)=>{
        event.preventDefault();
        const city = event.target.elements.city.value;
        
        if(city){
            event.target.elements.city.value ="";
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json(); 
            
            console.log(data);

            var sunset = data.sys.sunset;
            var sunrise = data.sys.sunrise;

            var date = new Date();
            date.setTime(sunset);
            var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            date.setTime(sunrise);
            var sunrise_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            this.setState({
                temp : data.main.temp,
                city : data.name,
                country : data.sys.country,
                sunrise : sunrise_date,
                sunset : sunset_date,
                error : undefined
            });
        }else{
            this.setState({
                city : undefined,
                error : "Введите название города!"
            });
        }
    }
    
    render() {
            return ( 
            < div >
                <InfoComponent/>
                <FormComponent weatherMethod={this.gettingWeather} />
                <WeatherComponent
                    state = {this.state}
                />
            </div> );
    }
}

export default AppComponent;