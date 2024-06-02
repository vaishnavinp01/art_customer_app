import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Cart from "../Components/Cart";
import Login from "../Components/Login";
import AddArtWork from "../ArtWorkTabs/AddArtWork";
import ArtWorks from "../ArtWorkTabs/ArtWorks";
import ArtOrderDetails from "../ArtWorkTabs/ArtOrderDetails";
import AddCustomer from "../CustomerTabs/AddCustomer";
import Customers from "../CustomerTabs/Customers";
import CustOrderDetails from "../CustomerTabs/CustOrderDetails";
import AddArtist from "../ArtistTabs/AddArtist";
import Artists from "../ArtistTabs/Artists";

const MyRoutes = () => {
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addartwork" element={<AddArtWork />} />
          <Route path="/artworks" element={<ArtWorks />} />
          <Route path="/artorderdetails" element={<ArtOrderDetails />} />
          <Route path="/addcustomer" element={<AddCustomer />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/cusorderdetails" element={<CustOrderDetails />} />
          <Route path="/addartist" element={<AddArtist />} />
          <Route path="/artists" element={<Artists />} />
        </Routes>
      </Container>
    </div>
  );
};

export default MyRoutes;
