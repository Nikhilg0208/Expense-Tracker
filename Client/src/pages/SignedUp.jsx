import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SignUp } from "@clerk/clerk-react";

const SignedUp = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="mt-24">
          <SignUp
            path="/signup"
            routing="path"
            signInUrl="/signin"
            forceRedirectUrl="/signin"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignedUp;
