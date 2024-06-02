import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import ArtWorkTab from "../ArtistTab/ArtWorkTab";
import ArtistProfileTab from "../ArtistTab/ArtistProfileTab";
import "../CSS/Artists.css";
import { useLocation } from "react-router-dom";

const Artists = () => {
  const artistData = useLocation().state;

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
                    {artistData?.ArtistFullName}
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
              <Tab eventKey="ArtWork" title="ArtWork">
                <ArtWorkTab />
              </Tab>

              <Tab eventKey="Profile" title="Profile">
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
