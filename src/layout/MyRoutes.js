import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Login from "../Components/Login";
import Profile from "../Components/Profile";
import AddArtist from "../Components/AddArtist";
import AddCustomer from "../Components/AddCustomer";
import AddArtWork from "../Components/AddArtWork";
import ArtWorks from "../Components/ArtWorks";
import CustomersProfile from "../Components/CustomersProfile";
import Cart from "../Components/Cart";
import ArtOrderTab from "../ArtistTabs/ArtOrderTab";
import CustOrderTab from "../CustomerTabs/CustOrderTab";
import ArtOrderDetails from "../ArtistTabs/ArtOrderDetails";
import CustOrderDetails from "../CustomerTabs/CustOrderDetails";

const MyRoutes = () => {
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/customersprofile" element={<CustomersProfile />} />
          <Route path="/artworks" element={<ArtWorks />} />
          <Route path="/addartist" element={<AddArtist />} />
          <Route path="/addartwork" element={<AddArtWork />} />
          <Route path="/addcustomer" element={<AddCustomer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/artordertab" element={<ArtOrderTab />} />
          <Route path="/artorderdetails" element={<ArtOrderDetails />} />
          <Route path="/custordertab" element={<CustOrderTab />} />
          <Route path="/custorderdetails" element={<CustOrderDetails />} />
        </Routes>
      </Container>
    </div>
  );
};

export default MyRoutes;
