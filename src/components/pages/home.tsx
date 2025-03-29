import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight, Settings, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../supabase/auth";

export default function LandingPage() {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full bg-[rgba(255,255,255,0.8)] backdrop-blur-md border-b border-[#f5f5f7]/30">
        <div className="max-w-[1200px] mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl text-blue-600">
              ShipTrack Pro
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center gap-4">
                <Link to="/dashboard">
                  <Button
                    variant="ghost"
                    className="text-sm font-medium hover:text-blue-600"
                  >
                    Dashboard
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="h-8 w-8 hover:cursor-pointer">
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`}
                        alt={user.email || ""}
                      />
                      <AvatarFallback>
                        {user.email?.[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="rounded-xl border-none shadow-lg"
                  >
                    <DropdownMenuLabel className="text-xs text-gray-500">
                      {user.email}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onSelect={() => signOut()}
                    >
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="ghost"
                    className="text-sm font-medium hover:text-blue-600"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-700 text-sm px-4">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero section */}
        <section className="py-20 text-center bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-5xl font-bold tracking-tight mb-2 text-blue-900">
              Shipping Management Dashboard
            </h2>
            <h3 className="text-2xl font-medium text-gray-600 mb-6 max-w-3xl mx-auto">
              A comprehensive platform for managing your entire shipping
              operation from warehouse to delivery
            </h3>
            <div className="flex justify-center space-x-6 text-xl text-blue-600 mb-10">
              <Link to="/signup" className="flex items-center hover:underline">
                Get started <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/dashboard"
                className="flex items-center hover:underline"
              >
                View demo <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 bg-white p-8 rounded-2xl shadow-lg max-w-5xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&q=80"
                alt="Shipping Dashboard"
                className="rounded-xl w-full h-auto shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Role-based access section */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-4xl font-bold tracking-tight mb-2 text-blue-900">
              Role-Based Access Control
            </h2>
            <h3 className="text-xl font-medium text-gray-600 mb-8 max-w-3xl mx-auto">
              Tailored dashboards for every role in your shipping operation
            </h3>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-8 rounded-2xl shadow-sm text-left hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-medium mb-2 text-blue-800">
                  Admin Dashboard
                </h4>
                <p className="text-gray-600">
                  Complete system control with user management, analytics, and
                  configuration settings.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl shadow-sm text-left hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-medium mb-2 text-blue-800">
                  Warehouse Manager
                </h4>
                <p className="text-gray-600">
                  Inventory management, outgoing shipment processing, and
                  barcode scanning tools.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl shadow-sm text-left hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-medium mb-2 text-blue-800">
                  Delivery Personnel
                </h4>
                <p className="text-gray-600">
                  Real-time delivery status updates, signature capture, and
                  issue reporting tools.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-8 rounded-2xl shadow-sm text-left hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-medium mb-2 text-blue-800">
                  Shipping Officer
                </h4>
                <p className="text-gray-600">
                  Create shipments, assign delivery personnel, and generate
                  shipping labels.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl shadow-sm text-left hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-medium mb-2 text-blue-800">
                  Accounts
                </h4>
                <p className="text-gray-600">
                  Financial tracking, invoicing, and payment processing for all
                  shipments.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl shadow-sm text-left hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-medium mb-2 text-blue-800">
                  Customer
                </h4>
                <p className="text-gray-600">
                  Track shipments, view delivery status, and manage shipping
                  preferences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard features section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-[1200px] mx-auto">
          <div className="bg-blue-50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-2 text-blue-900">
              Interactive Delivery Map
            </h2>
            <h3 className="text-lg font-medium text-gray-600 mb-4">
              Real-time tracking of all your shipments
            </h3>
            <div className="flex justify-center space-x-6 text-lg text-blue-600 mb-6">
              <Link to="/" className="flex items-center hover:underline">
                View demo <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-4 bg-white p-4 rounded-xl shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=800&q=80"
                alt="Interactive Map"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
          <div className="bg-blue-50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-2 text-blue-900">
              Analytics Dashboard
            </h2>
            <h3 className="text-lg font-medium text-gray-600 mb-4">
              Comprehensive insights into your shipping operations
            </h3>
            <div className="flex justify-center space-x-6 text-lg text-blue-600 mb-6">
              <Link to="/" className="flex items-center hover:underline">
                View demo <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-4 bg-white p-4 rounded-xl shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Analytics Dashboard"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Common features section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white text-center">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-4xl font-bold tracking-tight mb-2 text-blue-900">
              Common Dashboard Features
            </h2>
            <h3 className="text-xl font-medium text-gray-600 mb-8 max-w-3xl mx-auto">
              Available to all users regardless of role
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2 text-blue-800">
                  Shipment Status Cards
                </h4>
                <p className="text-gray-600 text-sm">
                  At-a-glance view of all shipment statuses
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2 text-blue-800">
                  Analytics Visualizations
                </h4>
                <p className="text-gray-600 text-sm">
                  Customizable charts and graphs for data analysis
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2 text-blue-800">
                  Interactive Delivery Map
                </h4>
                <p className="text-gray-600 text-sm">
                  Real-time tracking of all shipments on a map
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2 text-blue-800">
                  Theme Customization
                </h4>
                <p className="text-gray-600 text-sm">
                  Toggle between dark and light mode for comfort
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Link to="/signup">
                <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-6">
                  Start Your Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 py-12 text-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="border-b border-blue-700 pb-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg text-white mb-4">
                ShipTrack Pro
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-blue-300 text-blue-100">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-300 text-blue-100">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-300 text-blue-100">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-300 text-blue-100">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-blue-300 text-blue-100">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-300 text-blue-100">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-300 text-blue-100">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-300 text-blue-100">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-blue-300 text-blue-100">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-300 text-blue-100">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-300 text-blue-100">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-300 text-blue-100">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-blue-300 text-blue-100">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-300 text-blue-100">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-300 text-blue-100">
                    Security
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-300 text-blue-100">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-4 text-blue-200">
            <p>© 2025 ShipTrack Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
