import { SignIn } from "@clerk/clerk-react";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const SignedIn = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen mt-10 bg-gray-100">
        <SignIn
          path="/signin"
          routing="path"
          signUpUrl="/signup"
          forceRedirectUrl="/dashboard"
        />
      </div>
      <Footer />
    </>
  );
};

export default SignedIn;
