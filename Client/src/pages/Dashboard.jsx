import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DashboardContent from "../components/DashboardContent";
import CreateAccountDrawer from "../components/CreateAccountDrawer";

const Dashboard = () => {
  return (
    <>
      <Header />
      <DashboardContent />
      <CreateAccountDrawer />
      <Footer />
    </>
  );
};

export default Dashboard;
