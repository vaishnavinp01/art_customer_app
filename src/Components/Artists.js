import React from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import ArtistTab from "../ArtistTabs/ArtistTab";
import ArtistProfileTab from "../ArtistTabs/ArtistProfileTab";
import "../CSS/Artists.css";

const Artists = () => {
  return (
    <div>
      <div className="artists-container">
        <div className="artists-card">
          <div className="artists-header">
            <div className="artists-profile">
              <img className="artists-img" />
            </div>
          </div>
          <div className="artists-info">
            <Tabs id="uncontrolled-tab-example" defaultActiveKey="Artist">
              <Tab eventKey="Artist" title="Artist">
                <ArtistTab />
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
