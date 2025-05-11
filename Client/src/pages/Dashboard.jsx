import React, { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DashboardContent from "../components/DashboardContent";
import CreateAccountDrawer from "../components/CreateAccountDrawer";
import { Card, CardContent } from "@/components/ui/card";
import { IoMdAdd } from "react-icons/io";
import { useAuth, useUser } from "@clerk/clerk-react";
import { saveUserInfo } from "@/utils/api/saveUserInfo";
const Dashboard = () => {
  const { isSignedIn, user } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    const sendUserInfoToBackend = async () => {
      try {
        const alreadySaved = localStorage.getItem("userSaved");
        console.log("alreadySaved", alreadySaved);
        if (isSignedIn && user && !alreadySaved) {
          const token = await getToken();
          const userData = {
            clerkUserId: user.id,
            email: user.primaryEmailAddress?.emailAddress,
            name: user.fullName,
            imageUrl: user.imageUrl,
          };
          await saveUserInfo(userData, token);
          localStorage.setItem("userSaved", "true");
        }
      } catch (error) {
        console.error("Failed to save user info:", error);
      }
    };

    sendUserInfoToBackend();
  }, [isSignedIn, user]);
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
