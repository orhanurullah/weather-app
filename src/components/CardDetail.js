const CardDetail = (props) => {
  return (
    <div className="info-details">
      <span>
        <div>{props.title} </div> {props.value} &#8451;
      </span>
      <span>
        <div>{props.title2} </div> {props.value2}
      </span>
    </div>
  );
};
export default CardDetail;
