import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "../ArtWorkCSS/ArtistDetails.css";
import { useLocation } from "react-router-dom";
import ArtistProfileTab from "../ArtWorkTab/ArtistProfileTab";
import ArtWorkTab from "../ArtWorkTab/ArtWorkTab";
import { useSelector } from "react-redux";

const ArtistDetails = () => {
  const artistData = useLocation().state;
  // const { UserData } = useSelector((state) => state.user);

  return (
    <div style={{marginLeft:'110px'}}>
      <div className="artistdetails-container">
        <div className="artistdetails-card">
          <div className="artistdetails-header">
            <div className="artistdetails-profile">
              <div className="artistdetails-names">
                <h1 className="artistdetails-username">
                  <h4 style={{ marginLeft: "10px" }}>
                    {artistData?.ArtistFullName}
                  </h4>
                </h1>
                <small className="artistdetails-titles"></small>
              </div>
              <img
                className="artistdetails-img"
                src={`http://localhost:5000${artistData?.ArtistProfile}`}
              />
            </div>
          </div>
          <div className="artistdetails-info">
            <div className="artistdetails-div">
              <h5 className="artistdetails-h5">UserId: </h5>
              <span className="artistdetails-span">{artistData?._id}</span>
            </div>
            <Tabs id="uncontrolled-tab-example" defaultActiveKey="ArtWork">
              <Tab
                eventKey="ArtWork"
                title={<span className="tabname">ArtWork</span>}
              >
                <ArtWorkTab data={artistData} />
              </Tab>

              <Tab
                eventKey="Profile"
                title={<span className="tabname">Profile</span>}
              >
                <ArtistProfileTab data={artistData} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetails;
