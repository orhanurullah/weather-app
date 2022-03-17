import { useEffect, useState } from "react";
import "./assets/style.css";
import sunny from "./assets/images/sunny.jpg";
import cloudy from "./assets/images/cloudy.jpg";
import rainy from "./assets/images/rainy.jpg";
import snowy from "./assets/images/snowy.jpg";
import map from "./assets/images/map.png";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Card from "./components/Card";

function App() {
  const [req, setReq] = useState("");
  const [data, setData] = useState({});
  const [isLocate, setIsLocate] = useState(false);
  const [image, setImage] = useState(sunny);

  useEffect(() => {
    if(typeof data.clouds != 'undefined'){
      if(data.weather[0].main === "Clear"){
        setImage(sunny);
      }else if(data.weather[0].main === "Rain"){
        setImage(rainy);
      }else if(data.weather[0].main === "Snow"){
        setImage(snowy);
      }else{
        setImage(cloudy);
      }
    }
  })

  const handleSearchRequest = (event) => {
    if (event.key === "Enter") {
      fetch(
        `${process.env.REACT_APP_API_URL}/weather?q=${req}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          setReq("");
          setIsLocate(false);
        })
        .catch((err) => console.log(err));
    }
  };
  const handleTakeDataWithClickInLocation = () => {
    const takeLocation = async () => {
      navigator.geolocation.getCurrentPosition(function (pos) {
        let lat = pos.coords.latitude;
        let long = pos.coords.longitude;
        fetch(
          `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
        )
          .then((res) => res.json())
          .then((result) => {
            setData(result);
            setIsLocate(true);
          });
      });
    };
    takeLocation();
  };
  console.log(data);
  console.log(isLocate);
  const dateParse = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Thuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div className="app">
      {<style>{`body {background-image: url(${image})}`}</style>}
      <Header tittle="Weather APP" />
      <main className="main">
        <div className="form">
          <input
            className="input"
            title="write city, country or province"
            type="text"
            name="search"
            onChange={(e) => setReq(e.target.value)}
            value={req}
            onKeyPress={handleSearchRequest}
            placeholder="Search..."
          />
          <img
            className="map-icon"
            src={map}
            onClick={handleTakeDataWithClickInLocation}
            alt="Map Icon"
            title="Get for your location"
          />
        </div>
        {typeof data.main != "undefined" ? (
          <Card data={data} dateParse={dateParse}/>
        ) : (
          <div className="no-info">
            <h5>There is no data yet.</h5>
            <h6>Firstly write location and then click enter. or click map icon for get your location's weather</h6>
          </div>
        )}
      </main>
      <Footer
        stil="footer"
        title="See on github"
        username="orhanurullah"
        path="https://github.com/orhanurullah"
      />
    </div>
  );
}

export default App;
