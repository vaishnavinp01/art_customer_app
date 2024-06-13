import React from "react";
import "../ArtistCSS/ArtistProfile.css";
import { Card, Tab, Tabs } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import ArtWorkTab from "../ArtistTab/ArtWorkTab";
import ArtWorkOrderTab from "../ArtistTab/ArtWorkOrderTab";
import ArtistProfileTab from "../ArtistTab/ArtistProfileTab";
import { useSelector } from "react-redux";

const ArtistProfile = () => {
  // const { UserData } = useSelector((state) => state.user);
  // const { artistData } = useLocation().state;
  const navigator = useNavigate();
  return (
    <div>
      {/* <h4>ArtWorks</h4> */}
      <div className="artistprofile-container">
        <Card className="artistprofile-card">
          <div className="artistprofile-header">
            <div className="artistprofile-profile">
              <div className="artistprofile-names">
                <h1 className="username">
                  <h4 style={{ marginLeft: "10px" }}>
                    {/* {data?.ArtistFullName} */}
                  </h4>
                </h1>
                <small className="artistprofile-titles"></small>
              </div>
              <img className="artistprofile-img" />
              <button
                onClick={() => navigator("/addartwork")}
                className="artistprofile-button"
              >
                AddArtWork
              </button>
            </div>
          </div>
          <div className="artistprofile-info">
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

export default ArtistProfile;
