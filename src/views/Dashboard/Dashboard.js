import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import React, { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Dashboard = () => {
  const { logOut, admin } = useAuth();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <>
      <div className="h-full bg-sky-500">
        <div>
          {/* Mobile */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 flex z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div
                  style={{
                    background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
                  }}
                  className="ml-auto relative max-w-xs w-full h-full shadow-xl  pb-12 flex flex-col overflow-y-auto"
                >
                  <div className="px-4 flex items-center justify-between">
                    <Link to="/">
                      {" "}
                      <h3 className="font-semibold text-2xl ml-4 mt-4">
                        DOCTORS APP
                      </h3>
                    </Link>
                    <button
                      type="button"
                      className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400 mt-4"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <form className="mt-4 ml-6 ">
                    {/* mobile */}
                    <ul className="space-y-4  font-medium text-gray-900 px-2 py-3">
                      <li>
                        {" "}
                        <Link
                          className="text-gray-700 text-base hover:text-gray-900"
                          to="/dashboard"
                        >
                          Dashboard
                        </Link>
                      </li>

                      <li>
                        <Link
                          className="text-gray-700 text-base hover:text-gray-900"
                          to={`/dashboard/appointment`}
                        >
                          My Appointments
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-gray-700 text-base hover:text-gray-900"
                          to={`/dashboard/addreview`}
                        >
                          Add Review
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-gray-700 text-base hover:text-gray-900"
                          to={`/dashboard/manageAppointment`}
                        >
                          Manage Appointments
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-gray-700 text-base hover:text-gray-900"
                          to={`/dashboard/manageReviews`}
                        >
                          Manage Reviews
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-gray-700 text-base hover:text-gray-900"
                          to={`/dashboard/makeAdmin`}
                        >
                          Make an Admin
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-gray-700 text-base hover:text-gray-900"
                          to={`/dashboard/discount`}
                        >
                          Manage Discount
                        </Link>
                      </li>
                      <button
                        onClick={logOut}
                        className="text-gray-800 absolute bottom-6 left-8 "
                      >
                        Logout
                      </button>
                    </ul>
                  </form>
                </div>
              </Transition.Child>
            </Dialog>
          </Transition.Root>

          <main className="max-w-7xl  mx-6 lg:mx-0   ">
            <div className="relative z-10 flex items-baseline justify-end pt-8 lg:pt-0 ">
              <div className="flex items-center">
                <button
                  type="button"
                  className="p-2 -m-2 ml-4 sm:ml-6 text-gray-600 hover:text-gray-700 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Mobile Menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <section
              aria-labelledby="products-heading"
              className="pt-6 lg:pt-0  "
            >
              <div className="grid grid-cols-1 lg:grid-cols-4  gap-y-10">
                {/* Filters */}
                <form
                  className="hidden w-72 min-h-screen lg:block  pt-6 bg-yellow-900"
                >
                  {/* large device */}
                  <Link to="/">
                    {" "}
                    <h3 className="font-semibold text-yellow-50 text-2xl pl-4 pb-4">
                      General Hospital
                    </h3>
                  </Link>

                  <ul className=" space-y-4  pb-6 ml-4 ">
                    <li className="text-yellow-50">
                      {" "}
                      <Link className="" to="/dashboard">
                        Dashboard
                      </Link>
                    </li>

                    <div className="space-y-4">
                      <li className="text-yellow-50">
                        <Link className="" to={`/dashboard/appointment`}>
                          My Appointments
                        </Link>
                      </li>

                      <li className="text-yellow-50">
                        <Link className="" to={`/dashboard/addreview`}>
                          Add Review
                        </Link>
                      </li>
                    </div>

                    {admin && (
                      <div className="space-y-4">
                        <li className="text-yellow-50">
                          <Link
                            className=""
                            to={`/dashboard/manageAppointment`}
                          >
                            Manage Appointments
                          </Link>
                        </li>
                        <li className="text-yellow-50">
                          <Link className="" to={`/dashboard/makeAdmin`}>
                            Make an Admin
                          </Link>
                        </li>
                        <li className="text-yellow-50">
                          <Link className="" to={`/dashboard/manageReviews`}>
                            Manage Reviews
                          </Link>
                        </li>

                        <li className="text-yellow-50">
                          <Link className="" to={`/dashboard/discount`}>
                            Manage Discount
                          </Link>
                        </li>
                      </div>
                    )}

                    <button className="text-yellow-50" onClick={logOut} >
                      Logout
                    </button>
                  </ul>
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3  lg:rounded-none rounded-xl  ">
                  {/* Replace with your content */}
                  <Outlet></Outlet>

                  {/* /End replace */}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
