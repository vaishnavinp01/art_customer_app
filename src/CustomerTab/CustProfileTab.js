import React from "react";
import "../CSS/CustProfileTab.css";
import { Card } from "react-bootstrap";

const CustProfileTab = ({ data }) => {
  return (
    <div className="">
      {console.log(data)}

      <h4 className="profile-h4">CustProfileTab</h4>
      <div className="profile-div">
        <Card className="profile-cards">
          <p className="profile-p">
            <span>Name:</span> 
            {/* {data?.UserName} */}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default CustProfileTab;
