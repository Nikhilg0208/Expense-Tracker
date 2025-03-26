import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import React from "react";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border border-gray-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="SpendWise Logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut>
            <a href="#features" className="text-gray-600 hover:text-blue-600">
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600"
            >
              Testimonials
            </a>
          </SignedOut>
        </div>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link to="/dashboard" className="">
              <button className="flex items-center justify-center gap-3 bg-white border hover:bg-gray-100 px-4 py-2 border-gray-200 text-black h-9 rounded-md cursor-pointer">
                <MdOutlineDashboard size={18} />
                <span className="hidden md:inline text-sm">Dashboard</span>
              </button>
            </Link>
            <a href="/transaction/create">
              <button className="flex items-center justify-center gap-3 bg-black hover:bg-gray-800 px-4 py-2 text-gray-100 rounded-md cursor-pointer transition duration-200 ">
                <GrTransaction size={18} />
                <span className="hidden md:inline text-sm">
                  Add Transaction
                </span>
              </button>
            </a>
          </SignedIn>
          <SignedOut>
            <button
              className="text-black h-9 w-18 rounded-md hover:bg-gray-100 border border-gray-300 shadow-md cursor-pointer"
              onClick={() => navigate("/signin")}
            >
              Login
            </button>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
