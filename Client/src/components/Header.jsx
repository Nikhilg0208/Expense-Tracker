import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border border-gray-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="Welth Logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-blue-600">
            Features
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600">
            Testimonials
          </a>
        </div>
        <div className="flex items-center space-x-4">
          {/* <SignedIn> */}
          {/* <Link
              href="/dashboard"
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <a href="/transaction/create">
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </a>
          </SignedIn> */}
          {/* <SignedOut> */}
          {/* <SignInButton forceRedirectUrl="/dashboard"> */}
          <button className="text-black h-9 w-18 rounded-md hover:bg-gray-100  border border-gray-300 shadow-md cursor-pointer">
            Login
          </button>

          {/* </SignInButton> */}
          {/* </SignedOut> */}
          {/* <SignedIn> */}
          {/* <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            /> */}
          {/* </SignedIn> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
