import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import { setAuthToken } from '../../hooks/useToken'

import Lottie from "lottie-react";
import signup from "../../assets/signup.json";
import { UserAuthContext } from "../../contexts/AuthContext/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { SignUp, updateUserProfile, setLoader } = useContext(UserAuthContext);
  const [signupError, setSignupError] = useState("");

  const role = ["Buyer", "Seller"];

  const handleUserSignUp = (data) => {
    console.log(data);
    SignUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        setSignupError("");
        const profile = {
          displayName: data.name,
        };
        updateUserProfile(profile)
          .then(() => {
            //   savedUser(data.name, data.email)
            const user = {
              name: data.name,
              email: data.email,
              role: data.role,
              image: data.photoURL,
            };
            fetch(
              "https://mall-of-recondition-laptops-server.vercel.app/users",
              {
                method: "post",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(user),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                toast.success("Registration Done");
                console.log(data);
                // setAuthToken(data)
                setLoader(false);
              });
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e.message);
        setSignupError(e.message);
      });
  };

  return (
    <div className="lg:ml-10 sm:mx-3 ">
      <section class="bg-gray-900 dark:bg-gray-100">
        <div class="flex justify-center min-h-screen">
          <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div class="w-full">
              <h1
                class="text-2xl font-semibold tracking-wider text-gray-800 capitalize
               dark:text-gray-900"
              >
                Get your free account now.
              </h1>

              <p class="mt-4 text-gray-500 dark:text-gray-900">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your profile.
              </p>

              <div class="mt-6">
                <h1 class="text-gray-500 dark:text-gray-900">
                  Select type of account
                </h1>

                <div class="mt-3 md:flex md:items-center md:-mx-2">
                  <button
                    class="flex justify-center w-full px-6 py-3 text-white 
                  bg-black rounded-lg md:w-auto md:mx-2 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span class="mx-2">Rider</span>
                  </button>

                  <button
                    class="flex justify-center w-full px-6 py-3 mt-4
                   text-blue-400 border border-blue-400 rounded-lg md:mt-0 
                   md:w-auto md:mx-2 dark:border-gray-900  dark:text-gray-800 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span class="mx-2">Driving Learner</span>
                  </button>
                </div>
              </div>

              <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-900">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    class="block w-full px-5 py-3 mt-2 text-gray-700
                     placeholder-gray-400 bg-white border border-gray-200
                      rounded-lg dark:placeholder-gray-600 dark:bg-gray-100
                       dark:text-gray-900 dark:border-gray-700 focus:border-blue-400
                        dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none
                         focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-900">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Address"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-900">
                    Phone number
                  </label>
                  <input
                    type="text"
                    placeholder="XXX-XX-XXXX-XXX"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-900">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johnsnow@example.com"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-900">
                    Age
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your age"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-900">
                    Area
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Area"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-900">
                    Driving licence picture
                  </label>
                  <input
                    type="file"
                    placeholder="Enter driving licence picture"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-900">
                    Nid picture
                  </label>
                  <input
                    type="file"
                    placeholder="Enter nid picture"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-900">
                    Profile picture
                  </label>
                  <input
                    type="file"
                    placeholder="Enter profile picture"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-900">
                    Car Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Car Name"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-900">
                    Car Model
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Car Model"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-900">
                    Car Palate
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Car Palate"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-900">
                    Vehicle Type
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Area"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-900">
                    Role
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Area"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-900">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <button
                  class="flex items-center justify-between 
                w-full px-6 py-3 text-sm tracking-wide 
                text-white capitalize transition-colors duration-300 transform
                 bg-gray-800 rounded-lg hover:bg-gray-900 
                 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  <span>Sign Up </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-gray-700  dark:text-white">
          Register
        </h1>

        <form onSubmit={handleSubmit(handleUserSignUp)} className="mt-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-800 dark:text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          {errors.name && (
            <p className="text-red-600">{errors.name?.message}</p>
          )}
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-800 dark:text-gray-900"
            >
              Photo
            </label>
            <input
              type="file"
              {...register("image", {
                required: "image is required",
              })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          {errors.image && (
            <p className="text-red-600">{errors.image?.message}</p>
          )}
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-800 dark:text-gray-900"
            >
              Email
            </label>
            <input
              type="Email"
              {...register("email", {
                required: "email is required",
              })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800 dark:text-gray-900"
              >
                Password
              </label>
            </div>

            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be 8 characrters",
                },

                pattern: {
                  value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])/,
                  message:
                    "Password must be oneUpper&SmallLetter,one number and one special characters ",
                },
              })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          {errors.password && (
            <p className="text-red-600">{errors.password?.message}</p>
          )}
          {signupError && <p className="text-red-600">{signupError}</p>}

          {/* <select
            {...register("role")}
            className="select select-bordered w-full max-w-xs mt-2"
          > */}
      {/* <option >
              Buyers
            </option> */}

      {/* {role.map((r, i) => (
              <option key={r.i} value={r}>
                {r}
              </option>
            ))} */}
      {/* </select> */}

      {/* <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Register
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <Link
            to="#"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or Register with Social Media
          </Link>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <button
            type="button"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span className="hidden mx-2 sm:inline text-gray-900">
              Register with Google
            </span>
          </button>

          <Link
            to="#"
            className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-md hover:bg-gray-200"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
            </svg>
          </Link>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          {" "}
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-gray-700 dark:text-gray-900 hover:underline"
          >
            Login
          </Link>
        </p> */}
      {/* </div>  */}

      {/* <div className="flex items-center  justify-center h-26 w-90% ">
        <Lottie animationData={signup} loop={true}></Lottie>
      </div> */}
    </div>
  );
};

export default SignUp;
