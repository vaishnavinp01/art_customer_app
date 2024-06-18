import React from "react";
import "../CustomerCSS/CustomerProfile.css";
import { Card, Tab, Tabs } from "react-bootstrap";
import CustOrderTab from "./CustOrderTab";
import CustProfileTab from "./CustProfileTab";
import { useSelector } from "react-redux";

const CustomerProfile = () => {
  const { UserData } = useSelector((state) => state.user);
  console.log("data", UserData?.data?._id);
  return (
    <div>
      {/* <h4>Arts</h4> */}
      <div className="customerprofile-container">
        <Card className="customerprofile-card">
          <div className="customerprofile-header">
            <div className="customerprofile-profile">
              <div className="customerprofile-names">
                <h1 className="customerprofile-username">
                  <h4 style={{ marginLeft: "10px" }}>
                    {UserData?.CustomerProfile?.CustomerName}
                  </h4>
                </h1>
                <small className="customerprofile-titles"></small>
              </div>
              <img className="customerprofile-img" src={`http://localhost:5000${UserData?.CustomerProfile?.CustomerProfile}`}/>
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
