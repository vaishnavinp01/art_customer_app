import React from "react";
import "../CustomerCSS/Customers.css";
import { Card, Tab, Tabs } from "react-bootstrap";
import CustOrderTab from "./CustOrderTab";
import CustProfileTab from "./CustProfileTab";

const Customers = () => {
  return (
    <div>
      {/* <h4>Arts</h4> */}
      <div className="customers-container">
        <Card className="customers-card">
          <div className="customers-header">
            <div className="customers-profile">
              <img className="customers-img" />
            </div>
          </div>
          <div className="customers-info">
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

export default Customers;
