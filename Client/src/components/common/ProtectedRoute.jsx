import { SignedIn, SignedOut } from "@clerk/clerk-react";
import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <Navigate to="/login" replace />
      </SignedOut>
    </>
  );
};

export default ProtectedRoute;
