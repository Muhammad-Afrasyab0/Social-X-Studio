import "./loader.css";
import loadImg from "../../assets/load.png";

export default function Loader() {
  return (
    <div className="loader-overlay">
      <img src={loadImg} alt="loading" className="loader-img" />
    </div>
  );
}