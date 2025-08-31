import { Link, useLocation } from "react-router";
import { ModeToggle } from "../mode-toggle";
import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useState } from "react";


function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const { pathname } = useLocation();
  
  return (
    <>
      <nav className="py-2 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 border-b border-b-blue-200 dark:border-b-blue-800">
        <div className="flex items-center mx-4 md:mx-8">
          <Link
            to="/"
            className="text-blue-600 dark:text-blue-50 text-2xl font-bold mr-3 flex items-center"
          >
            Space Library
          </Link>
          <Button
            onClick={() => setDropdown((p) => !p)}
            className="md:hidden ml-auto"
          >
            <MenuIcon />
          </Button>
          <div className="md:hidden ms-3">
            <ModeToggle />
          </div>
          <ul className="items-center gap-5 hidden md:flex ml-auto">
            <li>
              <Link
                className={cn(
                  "px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-500/20 hover:text-blue-700 dark:hover:text-blue-200 hover:scale-105",
                  pathname === "/" &&
                    "bg-blue-500 text-white dark:bg-blue-600 shadow-md"
                )}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  "px-3 py-2 rounded-lg transition-all duration-200 hover:bg-teal-500/20 hover:text-teal-700 dark:hover:text-teal-200 hover:scale-105",
                  pathname.startsWith("/books") &&
                    "bg-teal-500 text-white dark:bg-teal-600 shadow-md"
                )}
                to="/books"
              >
                All Books
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  "px-3 py-2 rounded-lg transition-all duration-200 hover:bg-indigo-500/20 hover:text-indigo-700 dark:hover:text-indigo-200 hover:scale-105",
                  pathname.startsWith("/create-book") &&
                    "bg-indigo-500 text-white dark:bg-indigo-600 shadow-md"
                )}
                to="/create-book"
              >
                Add Book
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  "px-3 py-2 rounded-lg transition-all duration-200 hover:bg-purple-500/20 hover:text-purple-700 dark:hover:text-purple-200 hover:scale-105",
                  pathname.startsWith("/borrow-summary") &&
                    "bg-purple-500 text-white dark:bg-purple-600 shadow-md"
                )}
                to="/borrow-summary"
              >
                Borrow Summary
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
      </nav>
      {dropdown && (
        <ul className="items-center flex flex-col py-5 justify-center gap-8 row md:hidden mx-4 md:mx-8 bg-blue-50 dark:bg-blue-900/50 rounded-lg mt-2 shadow-lg">
          <li onClick={() => setDropdown((p) => !p)}>
            <Link
              className={cn(
                "px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-500/20 hover:text-blue-700 dark:hover:text-blue-200 block w-full text-center",
                pathname === "/" &&
                  "bg-blue-500 text-white dark:bg-blue-600 shadow-md"
              )}
              to="/"
            >
              Home
            </Link>
          </li>
          <li onClick={() => setDropdown((p) => !p)}>
            <Link
              className={cn(
                "px-3 py-2 rounded-lg transition-all duration-200 hover:bg-teal-500/20 hover:text-teal-700 dark:hover:text-teal-200 block w-full text-center",
                pathname.startsWith("/books") &&
                  "bg-teal-500 text-white dark:bg-teal-600 shadow-md"
              )}
              to="/books"
            >
              All Books
            </Link>
          </li>
          <li onClick={() => setDropdown((p) => !p)}>
            <Link
              className={cn(
                "px-3 py-2 rounded-lg transition-all duration-200 hover:bg-indigo-500/20 hover:text-indigo-700 dark:hover:text-indigo-200 block w-full text-center",
                pathname.startsWith("/create-book") &&
                  "bg-indigo-500 text-white dark:bg-indigo-600 shadow-md"
              )}
              to="/create-book"
            >
              Add Book
            </Link>
          </li>
          <li onClick={() => setDropdown((p) => !p)}>
            <Link
              className={cn(
                "px-3 py-2 rounded-lg transition-all duration-200 hover:bg-purple-500/20 hover:text-purple-700 dark:hover:text-purple-200 block w-full text-center",
                pathname.startsWith("/borrow-summary") &&
                  "bg-purple-500 text-white dark:bg-purple-600 shadow-md"
              )}
              to="/borrow-summary"
            >
              Borrow Summary
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default Navbar;
