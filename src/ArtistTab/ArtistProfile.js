import React from "react";
import "../ArtistCSS/ArtistProfile.css";
import { Card, Tab, Tabs } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import ArtTab from "../ArtistTab/ArtTab";
import ArtOrderTab from "../ArtistTab/ArtOrderTab";
import ArtProfileTab from "../ArtistTab/ArtProfileTab";
import { useSelector } from "react-redux";

const ArtistProfile = () => {
  // const { UserData } = useSelector((state) => state.user);
  // const { artistData } = useLocation().state;
  // console.log(UserData?.ArtistId?.data?.ArtistFullName);
  const navigator = useNavigate();
  return (
    <div>
      <div className="artistprofile-container">
        <Card className="artistprofile-card">
          <div className="artistprofile-header">
            <div className="artistprofile-profile">
              <div className="artistprofile-names">
                <h1 className="artistprofile-username">
                  <h4 style={{ marginLeft: "10px" }}>
                    {/* {UserData?.data.ArtistFullName} */}
                  </h4>
                </h1>
                <small className="artistprofile-titles"></small>
              </div>
              <img
                className="artistprofile-img"
                // src={`http://localhost:5000${UserData?.data?.ArtistProfile}`}
              />
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
                <ArtTab />
              </Tab>

              <Tab
                eventKey="Order"
                title={<span className="tabname">Order</span>}
              >
                <ArtOrderTab />
              </Tab>
              <Tab
                eventKey="Profile"
                title={<span className="tabname">Profile</span>}
              >
                <ArtProfileTab />
              </Tab>
            </Tabs>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ArtistProfile;
