import React from "react";
import "../CSS/ArtWorks.css";
import { Card, Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ArtWorkTab from "../ArtWorkTab/ArtWorkTab";
import ArtOrderTab from "../ArtWorkTab/ArtOrderTab";
import ArtProfileTab from "../ArtWorkTab/ArtProfileTab";

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
                <ArtOrderTab />
              </Tab>

              <Tab eventKey="Profile" title="Profile">
                <ArtProfileTab />
              </Tab>
            </Tabs>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ArtWorks;
