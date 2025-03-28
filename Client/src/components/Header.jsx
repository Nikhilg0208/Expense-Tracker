import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import React from "react";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";

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
              <Button variant="outline">
                <MdOutlineDashboard size={18} />
                <span className="hidden md:inline text-sm">Dashboard</span>
              </Button>
            </Link>
            <a href="/transaction/create">
              <Button>
                <GrTransaction size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </a>
          </SignedIn>
          <SignedOut>
            <Button variant={"outline"} onClick={() => navigate("/signin")}>
              Login
            </Button>
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
