import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SignUp } from "@clerk/clerk-react";

const SignedUp = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen mt-20 bg-gray-100">
        <SignUp
          path="/signup"
          routing="path"
          signInUrl="/signin"
          forceRedirectUrl="/signin"
        />
      </div>
      <Footer />
    </>
  );
};

export default SignedUp;
