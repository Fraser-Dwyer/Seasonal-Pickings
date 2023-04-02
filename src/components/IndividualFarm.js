import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import "../styles/IndividualFarm.css";

const IndividualFarm = ({ farm }) => {
  const navigate = useNavigate();
  const backButton = () => {
    navigate("/local-vendors");
  };

  const {
    content: allVendors,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/local_vendors");

  return (
    <div>
      <img
        className="icon"
        src="https://cdn-icons-png.flaticon.com/512/709/709624.png"
        onClick={backButton}
      ></img>
      {allVendors &&
        allVendors
          .filter((aVendor) => aVendor.url_suffix == farm)
          .map((filteredVendor) => (
            <div>
              <h1 className="vendor_title">{filteredVendor.vendor_name}</h1>
              <h3 className="vendor_desc">
                {filteredVendor.vendor_description}
              </h3>
              <div className="main_div">
                <div className="left_div">
                  <p>
                    A list of ingredients currently being sourced by{" "}
                    {filteredVendor.vendor_name}
                  </p>
                  <ul>
                    {filteredVendor.vendor_products.map((ingredient) => (
                      <li>{ingredient}</li>
                    ))}
                  </ul>
                  <p>Visit the vendor website here:</p>
                  <p className="link">{filteredVendor.vendor_url}</p>
                </div>
                <div className="right_div">
                  <img
                    className="vendor_image"
                    src={filteredVendor.vendor_image}
                  ></img>
                  <p>{filteredVendor.vendor_address}</p>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default IndividualFarm;
