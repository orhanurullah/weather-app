const Footer = (props) => {
  return (
    <footer className={props.stil}>
      <div className="head">
        writed by&nbsp;
         <a href={props.path} target="_blank" title={props.title}>
          {props.username}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
