import "./Main.css";

const Main = (props) => {
  return (
    <div className="container">
      <img className="imgStyle" src={props.images} alt="" />
    </div>
  );
};

export default Main;
