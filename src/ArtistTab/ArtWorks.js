import React from "react";
import "../ArtistCSS/ArtWorks.css";
import { Card, Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ArtistTab from "../ArtWorkTab/ArtistTab";
import ArtWorkOrderTab from "./ArtWorkOrderTab";
import ArtWorkProfileTab from '../ArtWorkTab/ArtWorkProfileTab'

const ArtWorks = () => {
  const navigator = useNavigate();
  return (
    <div>
      {/* <h4>Arts</h4> */}
      <div className="artworks-container">
        <Card className="artworks-card">
          <div className="artworks-header">
            <div className="artworks-profile">
              <img className="artworks-img" />
              <button
                onClick={() => navigator("/addartwork")}
                className="artworks-button"
              >
                AddArtWork
              </button>
            </div>
          </div>
          <div className="artworks-info">
            <Tabs id="uncontrolled-tab-example" defaultActiveKey="ArtWork">
              <Tab eventKey="ArtWork" title="ArtWork">
                <ArtistTab />
              </Tab>

              <Tab eventKey="Order" title="Order">
                <ArtWorkOrderTab />
              </Tab>
              <Tab eventKey="Profile" title="Profile">
                <ArtWorkProfileTab />
              </Tab>
            </Tabs>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ArtWorks;