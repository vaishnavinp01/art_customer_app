import React from "react";
import "../CustomerCSS/CustProfileTab.css";
import { Card } from "react-bootstrap";

const CustProfileTab = ({ data }) => {
  return (
    <div className="">
      {console.log(data)}

      <h4 className="custprofiletab-h4">CustProfileTab</h4>
      <div className="custprofiletab-div">
        <Card className="custprofiletab-cards">
          <p className="custprofiletab-p">
            <span>Name:</span> 
            {/* {data?.UserName} */}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default CustProfileTab;
