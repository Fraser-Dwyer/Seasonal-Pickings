import "../styles/AboutFarms.css";
import { useNavigate } from "react-router-dom";

const AboutFarms = () => {
  // top left Penhill produce
  // bottom left is Bath city farm
  // right is Bath organic group

  const navigate = useNavigate();

  const handleClick = (farm_url) => {
    const go_farm_url = "/local-vendors" + farm_url;
    navigate(go_farm_url);
  };

  return (
    <div>
      <h1 className="farms_title">About Farms</h1>
      <p className="explain">
        Click on any of the carrots to find out more about some of the local
        vendors!
      </p>
      <img className="map" src="/images/map.png"></img>
      <div className="penhill_p">
        <img
          onClick={() => handleClick("/penhill-produce")}
          className="farm_icon_penhill"
          src="/images/logo.png"
        ></img>
        <p>Penhill Produce</p>
      </div>
      <div className="city_farm_p">
        <img
          onClick={() => handleClick("/bath-city-farm")}
          className="farm_icon_bath_city_farm"
          src="/images/logo.png"
        ></img>
        <p>Bath City Farm</p>
      </div>
      <div className="organic_p">
        <img
          onClick={() => handleClick("/bath-organic-group")}
          className="farm_icon_bath_organic_group"
          src="/images/logo.png"
        ></img>
        <p>Bath Organic Group</p>
      </div>
    </div>
  );
};

export default AboutFarms;
