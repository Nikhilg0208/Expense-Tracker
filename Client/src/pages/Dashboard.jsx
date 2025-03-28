import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DashboardContent from "../components/DashboardContent";
import CreateAccountDrawer from "../components/CreateAccountDrawer";
import { Card, CardContent } from "@/components/ui/card";
import { IoMdAdd } from "react-icons/io";
const Dashboard = () => {
  return (
    <>
      <Header />
      <DashboardContent />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CreateAccountDrawer>
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
            <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full p-5">
              <IoMdAdd size={40} />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
