import React from "react";

const Current = ({ currentWeather, location }) => {
    return (
      <div className='container'>
        <h4 className='text-white text-center mt-3'>
          Current Weather Of: {location.name},{location.region},{location.country}
        </h4>
        <div className='row'>
          {/* Col-1 */}
          <div className='col-3'>
            <div class='card'>
              <img
                src={currentWeather.condition.icon}
                class='card-img-top'
                alt='...'
              />
              <div class='card-body'>
                <h5 class='card-title'>{currentWeather.condition.text}</h5>
              </div>
            </div>
          </div>
          {/* Col-2 */}
          <div className='col-3 mt-5'>
              <div class='card'>
                <div class='card-body'>
                  <h5 class='card-title'>Temp in Celsius: {currentWeather.temp_c}</h5>
                </div>
              </div>
          </div>
          {/* Col-3 */}
          <div className='col-3 mt-5'>
          <div class='card'>
                <div class='card-body'>
                  <h5 class='card-title'>Temp in Farenheit: {currentWeather.temp_f}</h5>
                </div>
              </div>
          </div>
          {/* Col-4 */}
          <div className='col-3 mt-5'>
          <div class='card'>
                <div class='card-body'>
                  <h5 class='card-title'>Humidity: {currentWeather.humidity}</h5>
                </div>
              </div>
          </div>
          {/* Col-5 */}
          <div className='col-3 mt-3'>
          <div class='card'>
                <div class='card-body'>
                  <h5 class='card-title'>Wind_mph: {currentWeather.wind_mph}</h5>
                </div>
              </div>
          </div>
          {/* Col-6 */}
          <div className='col-3 mt-3'>
          <div class='card'>
                <div class='card-body'>
                  <h5 class='card-title'>Wind_Kph: {currentWeather.wind_kph}</h5>
                </div>
              </div>
          </div>
          {/* Col-7 */}
          <div className='col-3 mt-3'>
          <div class='card'>
                <div class='card-body'>
                  <h5 class='card-title'>Wind_Degree: {currentWeather.wind_degree}</h5>
                </div>
              </div>
          </div>
          {/* Col-8 */}
          <div className='col-3 mt-3'>
          <div class='card'>
                <div class='card-body'>
                  <h5 class='card-title'>Wind_Direction: {currentWeather.wind_dir}</h5>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
  export default Current;