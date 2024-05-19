import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import CustOrderTab from "../CustomerTabs/CustOrderTab";
import ProfileTab from "../CustomerTabs/ProfileTab";

const CustomersProfile = () => {
  return (
    <div>
      <h4>Customers Profile</h4>
      <Tabs defaultActiveKey="Order">
        <Tab eventKey="Order" title="Order">
          <CustOrderTab />
        </Tab>
        <Tab eventKey="Profile" title="Profile">
          <ProfileTab />
        </Tab>
      </Tabs>
    </div>
  );
};

export default CustomersProfile;
