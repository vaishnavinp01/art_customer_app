import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "../ArtWorkCSS/Artists.css";
import { useLocation } from "react-router-dom";
import ArtistProfileTab from "../ArtWorkTab/ArtistProfileTab";
import ArtWorkTab from "../ArtWorkTab/ArtWorkTab";
import { useSelector } from "react-redux";

const Artists = () => {
  // const artistData = useLocation().state;
  const { UserData } = useSelector((state) => state.user);

  return (
    <div>
      <div className="artists-container">
        <div className="artists-card">
          <div className="artists-header">
            <div className="artists-profile">
              {/* <h5>UserId: </h5>{artistData._id} */}
              <div className="artists-names">
                <h1 className="username">
                  <h4 style={{ marginLeft: "10px" }}>
                    {UserData?.ArtistFullName}
                  </h4>
                </h1>
                <small className="page-titles"></small>
              </div>
              <img className="artists-img" />
            </div>
          </div>
          <div className="artists-info">
            <div className="artist-div">
              <h5 className="artist-h5">UserId: </h5>
              {/* <span className="artist-span">{artistData._id}</span> */}
            </div>
            <Tabs id="uncontrolled-tab-example" defaultActiveKey="ArtWork">
              <Tab
                eventKey="ArtWork"
                title={<span className="tabname">ArtWork</span>}
              >
                <ArtWorkTab />
              </Tab>

              <Tab
                eventKey="Profile"
                title={<span className="tabname">Profile</span>}
              >
                <ArtistProfileTab />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
