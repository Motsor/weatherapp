import React from 'react';
import ReactDOM from 'react-dom';
import WeatherCard from './components/WeatherCard';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async (city = 'Helsinki') => {
  try {
    const response = await fetch(`${baseURL}/weather?city=${city}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: null,
      searchValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentWillMount() {
    const weatherData = await getWeatherFromApi();
    this.setState({
      weatherData,
    });
  }

  handleChange(event) {
    this.setState({
      searchValue: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.persist();
    const weatherData = await getWeatherFromApi(this.state.searchValue);
    this.setState({
      weatherData,
    });
    event.preventDefault();
  }

  render() {
    const { weatherData } = this.state;

    // Render <div /> until the data is fully fetched
    if (!weatherData) {
      return <div />;
    }

    return (
      <div className="icon">
        <div>
          <label htmlFor="city">City: </label>
          <input id="city" type="text" value={this.state.searchValue} onChange={this.handleChange} />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </div>
        {
        weatherData.weather ? <WeatherCard weatherData={weatherData} /> : <p>Location not found.</p>
        }
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
