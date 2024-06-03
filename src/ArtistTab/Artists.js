import React from "react";
import "../ArtistCSS/Artists.css";
import { Card, Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ArtWorkTab from "../ArtistTab/ArtWorkTab";
import ArtWorkOrderTab from "../ArtistTab/ArtWorkOrderTab";
import ArtistProfileTab from "../ArtistTab/ArtistProfileTab";

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
                <ArtWorkTab />
              </Tab>

              <Tab eventKey="Order" title="Order">
                <ArtWorkOrderTab />
              </Tab>

              <Tab eventKey="Profile" title="Profile">
                <ArtistProfileTab />
              </Tab>
            </Tabs>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ArtWorks;
