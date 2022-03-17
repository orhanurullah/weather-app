import CardDetail from "./CardDetail";

const Card = (props) => {
  return (
    <div className="card">
      <div className="location">
        <h4>
          {props.data.name}, {props.data.sys.country}
        </h4>
        <h5 className="date">{props.dateParse(new Date())}</h5>
      </div>
      <div className="carda">
        <div className="temperature">{Math.round(props.data.main.temp)} &#8451;</div>
        <div className="temp-state">
          <h4>{props.data.weather[0].main}</h4>
          <img
            className="temp-icon"
            src={`${process.env.REACT_APP_ICON_URL}/${props.data.weather[0].icon}.png`}
            alt="icon"
          />
        </div>
      </div>
      <CardDetail title="Feels Like" value={Math.round(props.data.main.feels_like)} title2="Humidity" value2={"%" + props.data.main.humidity}/>
      
      <div className="info-details">
        <span>
          <div>Minimum &#8451; </div>
          {Math.round(props.data.main.temp_min)} &#8451;
        </span>
        <span>
          <div>Maximum &#8451; </div> {Math.round(props.data.main.temp_max)} &#8451;
        </span>
      </div>
      <div className="info-details">
        <span>
          <div>Wind Speed </div>
          {props.data.wind.speed} km/h
        </span>
        <span>
          <div>Wind Degree </div>
          {props.data.wind.deg}&#176;
        </span>
        <span>
          <div>Clouds </div>%{props.data.clouds.all}
        </span>
      </div>
    </div>
  );
};
export default Card;