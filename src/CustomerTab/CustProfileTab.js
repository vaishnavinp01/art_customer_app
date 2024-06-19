import React from "react";
import "../CustomerCSS/CustProfileTab.css";
import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import img1 from '../images/profile/OIP1.jpeg'

const CustProfileTab = () => {
  const { UserData } = useSelector((state) => state.user);
  return (
    <div className="">
      <h4 className="custprofiletab-h4">CustProfileTab</h4>
      <div className="custprofiletab-div">
        <Card className="custprofiletab-cards">
        <p className="custprofiletab-p">
            <span style={{fontWeight:'bold'}}>Customer Profile:</span> 
            <img style={{borderRadius:'50%',height:'190px',width:'190px',marginLeft:'20px'}} src={img1}/>
             {/* {UserData?.CustistProfile?.CustomerName} */}
          </p>
          <p className="custprofiletab-p">
            <span style={{fontWeight:'bold'}}>Name:</span> Sayali Walde
             {/* {UserData?.CustistProfile?.CustomerName} */}
          </p>
          <p className="custprofiletab-p">
            <span style={{fontWeight:'bold'}}>Address:</span> Wagh Nager
            {/* {UserData?.custistProfile?.custistAddress} */}
          </p>
          <p className="custprofiletab-p">
            <span style={{fontWeight:'bold'}}>City:</span> Jalgaon
             {/* {UserData?.custistProfile?.custistCity} */}
          </p>
          <p className="custprofiletab-p">
            <span style={{fontWeight:'bold'}}>Mobile No: </span> 7847124036
            {/* {UserData?.custistProfile?.custistMobileNo} */}
          </p>
          <p className="custprofiletab-p">
            <span style={{fontWeight:'bold'}}>Email:</span> sayali@gmail.com
            {/* {UserData?.custistProfile?.custistEmail} */}
          </p>
          <p className="custprofiletab-p">
            <span style={{fontWeight:'bold'}}>State:</span> Maharashtra
            {/* {UserData?.custistProfile?.custistState} */}
          </p>
          <p className="custprofiletab-p">
            <span style={{fontWeight:'bold'}}>Pin Code: </span> 425001
            {/* {UserData?.custistProfile?.custistPincode} */}
          </p>
          <p className="custprofiletab-p">
            <span style={{fontWeight:'bold'}}>Date of Birth:</span> 2024-06-18T16:40:20.000+00:00
            {/* {UserData?.custistProfile?.custistAdharCardNo} */}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default CustProfileTab;
