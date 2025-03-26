import { SignIn } from "@clerk/clerk-react";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const SignedIn = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="mt-24">
          <SignIn
            path="/signin"
            routing="path"
            signUpUrl="/signup"
            forceRedirectUrl="/dashboard"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignedIn;
