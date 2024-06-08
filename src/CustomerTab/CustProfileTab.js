import React from "react";
import "../CustomerCSS/CustProfileTab.css";
import { Card } from "react-bootstrap";

const CustProfileTab = ({ data }) => {
  return (
    <div className="">
      {console.log(data)}

      <h4 className="custprofile-h4">CustProfileTab</h4>
      <div className="custprofile-div">
        <Card className="custprofile-cards">
          <p className="custprofile-p">
            <span>Name:</span> 
            {/* {data?.UserName} */}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default CustProfileTab;
