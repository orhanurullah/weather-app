const Header = (props) => {
  return (
    <header className="app-header">
      <div className="head title">
        {props.tittle}
      </div>
    </header>
  );
};
export default Header;
