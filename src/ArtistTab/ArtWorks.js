import React from "react";
import "../ArtistCSS/ArtWorks.css";
import { Card, Tab, Tabs } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import ArtWorkTab from "../ArtistTab/ArtWorkTab";
import ArtWorkOrderTab from "../ArtistTab/ArtWorkOrderTab";
import ArtistProfileTab from "../ArtistTab/ArtistProfileTab";
import { useSelector } from "react-redux";

const ArtWorks = () => {
  const { UserData } = useSelector((state) => state.user);
  // const { artistData } = useLocation().state;
  const navigator = useNavigate();
  return (
    <div>
      {/* <h4>ArtWorks</h4> */}
      <div className="artworks-container">
        <Card className="artworks-card">
          <div className="artworks-header">
            <div className="artworks-profile">
              <div className="artworks-names">
                <h1 className="username">
                  <h4 style={{ marginLeft: "10px" }}>
                    {UserData?.data?.ArtistFullName}
                  </h4>
                </h1>
                <small className="artworks-titles"></small>
              </div>
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
              <Tab
                eventKey="ArtWork"
                title={<span className="tabname">ArtWork</span>}
              >
                <ArtWorkTab />
              </Tab>

              <Tab
                eventKey="Order"
                title={<span className="tabname">Order</span>}
              >
                <ArtWorkOrderTab />
              </Tab>
              <Tab
                eventKey="Profile"
                title={<span className="tabname">Profile</span>}
              >
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
