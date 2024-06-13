import React from "react";
import "../CustomerCSS/CustomerProfile.css";
import { Card, Tab, Tabs } from "react-bootstrap";
import CustOrderTab from "./CustOrderTab";
import CustProfileTab from "./CustProfileTab";

const CustomerProfile = () => {
  return (
    <div>
      {/* <h4>Arts</h4> */}
      <div className="customerprofile-container">
        <Card className="customerprofile-card">
          <div className="customerprofile-header">
            <div className="customerprofile-profile">
              <img className="customerprofile-img" />
            </div>
          </div>
          <div className="customerprofile-info">
            <Tabs id="uncontrolled-tab-example" defaultActiveKey="Order">
              <Tab
                eventKey="Order"
                title={<span className="tabname">Order</span>}
              >
                <CustOrderTab />
              </Tab>
              <Tab
                eventKey="Profile"
                title={<span className="tabname">Profile</span>}
              >
                <CustProfileTab />
              </Tab>
            </Tabs>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CustomerProfile;
