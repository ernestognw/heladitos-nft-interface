import { FC, useState } from "react";
import { Transition } from "@headlessui/react";
import ConnectButton from "./ConnectButton";
import { navRoutes } from "./utils";
import routes from "@config/routes";
import Link from "next/link";
import Button from "@components/Button";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-500 fixed top-0 left-0 right-0 z-20 drop-shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:block flex items-center">
            <div className="flex items-baseline space-x-14">
              {navRoutes.map(({ name, href }) => (
                <Link key={name} href={href} passHref>
                  <a className="text-white hover:text-gray-200 py-2 rounded-md text-sm font-medium">
                    {name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-purple-500 inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex gap-3">
            <ConnectButton />
            <Link href={routes.create} passHref>
              <Button size="sm" color="strawberry">
                Create
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navRoutes.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="hover:bg-purple-700 pl-2 text-white block py-2 rounded-md text-base font-medium"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
