import { useState, useEffect } from "react";
import s1Logo from "../../assets/logos/logowithoutbgf.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery("");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
      style={{ backgroundColor: "#0a1f38" }}
    >
      {/* Top Bar - Visible on large screens */}
      <div className="hidden lg:flex items-center justify-between px-6 py-3" style={{ backgroundColor: "#0a1f38" }}>
        <div className="flex items-center space-x-4">
          <img src={s1Logo} alt="Company Logo" className="h-12 object-contain" />
          <div className="text-white">
            <h1 className="text-xl font-bold">M/S FAIZ-UR-REHMAN & CO</h1>
            <p className="text-sm">Engineering Excellence Since 1962</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            style={{ backgroundColor: "#1e4a7a" }}
          >
            EMPLOYEE LOGIN
          </button>
          <button 
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
            style={{ backgroundColor: "#f0f0f0" }}
          >
            COMPANY PROFILE
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav style={{ backgroundColor: "#0a1f38" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Mobile logo and heading */}
            <div className="flex items-center lg:hidden">
              <img src={s1Logo} alt="Company Logo" className="h-10" />
              <div className="text-white ml-2">
                <h1 className="text-sm font-bold">M/S FAIZ-UR-REHMAN & CO</h1>
                <p className="text-xs">Since 1962</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <a
                href="/"
                className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                HOME
              </a>
              <a
                href="/aboutus"
                className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                ABOUT US
              </a>
              <a
                href="/services"
                className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                SERVICES
              </a>
              <a
                href="/resources"
                className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                RESOURCES
              </a>

              {/* Projects Dropdown */}
              <div className="relative group">
                <button className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium flex items-center transition-colors">
                  PROJECTS
                  <svg
                    className="ml-1 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <a
                    href="/projects"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    CURRENT PROJECTS
                  </a>
                  <a
                    href="/projects"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    EXECUTED PROJECTS
                  </a>
                </div>
              </div>

              <a
                href="/qhse"
                className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                QHSE
              </a>
              <a
                href="/careers"
                className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                CAREERS
              </a>
              <a
                href="/contact"
                className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                CONTACT
              </a>
            </div>

            {/* Search and Login for desktop */}
            <div className="hidden lg:flex lg:items-center">
              <div className="relative flex items-center">
                {isSearchOpen ? (
                  <form
                    onSubmit={handleSearch}
                    className="flex items-center transition-all duration-300"
                  >
                    <input
                      type="text"
                      placeholder="Search"
                      className="px-3 py-1 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-48"
                      style={{
                        borderColor: "#f4cb4b",
                        color: "white",
                        backgroundColor: "#4a5568",
                        borderWidth: "1px",
                        borderStyle: "solid"
                      }}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="p-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
                      style={{ backgroundColor: "#1e4a7a" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={toggleSearch}
                    className="p-2 text-white hover:text-blue-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Mobile search and menu buttons */}
            <div className="flex items-center lg:hidden space-x-2">
              <button
                onClick={toggleSearch}
                className="p-2 text-white hover:text-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="lg:hidden px-4 py-2" style={{ backgroundColor: "#0a1f38" }}>
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-3 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{
                  borderColor: "#f4cb4b",
                  color: "white",
                  backgroundColor: "#4a5568",
                  borderWidth: "1px",
                  borderStyle: "solid"
                }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
                style={{ backgroundColor: "#1e4a7a" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden" style={{ backgroundColor: "#0a1f38" }}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="block px-3 py-2 text-base font-medium text-white hover:text-blue-300 hover:bg-blue-900/30 rounded"
              >
                HOME
              </a>
              <a
                href="/aboutus"
                className="block px-3 py-2 text-base font-medium text-white hover:text-blue-300 hover:bg-blue-900/30 rounded"
              >
                ABOUT US
              </a>
              <a
                href="/services"
                className="block px-3 py-2 text-base font-medium text-white hover:text-blue-300 hover:bg-blue-900/30 rounded"
              >
                SERVICES
              </a>
              <a
                href="/resources"
                className="block px-3 py-2 text-base font-medium text-white hover:text-blue-300 hover:bg-blue-900/30 rounded"
              >
                RESOURCES
              </a>
              <div>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-white hover:text-blue-300 hover:bg-blue-900/30 rounded"
                >
                  PROJECTS
                  <svg
                    className="ml-1 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="pl-4">
                  <a
                    href="/projects"
                    className="block px-3 py-2 text-sm font-medium text-white hover:text-blue-300 hover:bg-blue-900/30 rounded"
                  >
                    CURRENT PROJECTS
                  </a>
                  <a
                    href="/projects"
                    className="block px-3 py-2 text-sm font-medium text-white hover:text-blue-300 hover:bg-blue-900/30 rounded"
                  >
                    EXECUTED PROJECTS
                  </a>
                </div>
              </div>
              <a
                href="/qhse"
                className="block px-3 py-2 text-base font-medium text-white hover:text-blue-300 hover:bg-blue-900/30 rounded"
              >
                QHSE
              </a>
              <a
                href="/careers"
                className="block px-3 py-2 text-base font-medium text-white hover:text-blue-300 hover:bg-blue-900/30 rounded"
              >
                CAREERS
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-white hover:text-blue-300 hover:bg-blue-900/30 rounded"
              >
                CONTACT
              </a>
              <div className="pt-4 pb-2 border-t border-blue-900/50">
                <button 
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-2"
                  style={{ backgroundColor: "#1e4a7a" }}
                >
                  EMPLOYEE LOGIN
                </button>
                <button className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                  COMPANY PROFILE
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;