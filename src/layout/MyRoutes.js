import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Cart from "../Components/Cart";
import Login from "../Components/Login";
import AddArtWork from "../Components/AddArtWork";
import ArtWorks from "../Components/ArtWorks";
import ArtOrderDetails from "../ArtWorkTabs/ArtOrderDetails";
import AddCustomer from "../Components/AddCustomer";
import Customers from "../Components/Customers";
import CustOrderDetails from "../CustomerTabs/CustOrderDetails";
import AddArtist from "../Components/AddArtist";
import Artists from '../Components/Artists'

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
