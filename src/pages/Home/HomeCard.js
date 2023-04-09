import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeCard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://weerolibrary-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section class="bg-gray-900 dark:bg-gray-100">
      <div class="container px-6 py-10 mx-auto">
        <h1
          class="text-2xl font-semibold text-center
         text-gray-100 capitalize lg:text-3xl dark:text-gray-900"
        >
          Our <span class="text-blue-500">Popular Books Category</span>
        </h1>

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-100 dark:text-gray-900">
          Find the best Book and reading experience all over the world!
        </p>
        <div class="flex items-center justify-center">
          <div
            class="flex items-center p-1 border border-blue-600 dark:border-gray-900 
          rounded-xl"
          >
            {categories.map((category) => (
              <button
                class="px-4 py-2 mx-4 text-sm font-medium
             text-blue-600 capitalize transition-colors duration-300 md:py-3
              dark:text-black dark:hover:text-white focus:outline-none
               hover:bg-black hover:text-white rounded-xl md:mx-8 md:px-12"
                key={category.id}
              >
                <Link to={`/category/${category.id}`}>{category.name}</Link>
              </button>
            ))}

            {/* <button
              class="px-4 py-2 mx-4 text-sm font-medium
             text-blue-600 capitalize transition-colors duration-300 md:py-3
              dark:text-black dark:hover:text-white focus:outline-none
               hover:bg-black hover:text-white rounded-xl md:mx-8 md:px-12"
            >
              Australia
            </button>
            <button
              class="px-4 py-2 text-sm font-medium
             text-blue-600 capitalize transition-colors 
             duration-300 md:py-3 dark:text-black dark:hover:text-white
              focus:outline-none hover:bg-black hover:text-white rounded-xl md:px-12"
            >
              Canada
            </button> */}
          </div>
        </div>
        {/* <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          {}
          <div
            class="px-10 py-8 transition-colors duration-300 transform border
           cursor-pointer rounded-xl hover:border-transparent group
            hover:bg-black dark:border-gray-700 dark:hover:border-transparent"
          >
            <div class="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                class="flex-shrink-0 object-cover w-56 h-56 rounded-lg
                sm:mx-4 ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div class="mt-4 sm:mx-4 sm:mt-0">
                <h1
                  class="text-xl font-semibold text-gray-700 
                capitalize md:text-2xl dark:text-black group-hover:text-white"
                >
                  Car
                </h1>

                <p
                  class="mt-2 text-gray-500 capitalize
                 dark:text-gray-900 group-hover:text-gray-300"
                >
                  Price:200$
                </p>
                <p class="mt-4 text-gray-500 capitalize dark:text-gray-900 group-hover:text-gray-300">
                  Best Car In the Town!
                </p>
                <Link
                  to="/cars"
                  class="inline-flex items-center 
                          justify-center mt-10 w-1/2 h-12 px-6
                           font-medium tracking-wide text-white
                        lg:ml-32  cursor-pointer transition-colors duration-200 dark:hover:bg-transparentrounded shadow-md
                             bg-black hover:bg-gray-100 hover:text-black
                              focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                >
                  Pay
                </Link>
              </div>
            </div>
          </div>
          {/* <div
            class="px-10 py-8 transition-colors duration-300 transform border
           cursor-pointer rounded-xl hover:border-transparent group
            hover:bg-black dark:border-gray-700 dark:hover:border-transparent"
          >
            <div class="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                class="flex-shrink-0 object-cover w-56 h-56 rounded-lg
                sm:mx-4 ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div class="mt-4 sm:mx-4 sm:mt-0">
                <h1
                  class="text-xl font-semibold text-gray-700 
                capitalize md:text-2xl dark:text-black group-hover:text-white"
                >
                  Bike
                </h1>

                <p
                  class="mt-2 text-gray-500 capitalize
                 dark:text-gray-900 group-hover:text-gray-300"
                >
                  Price:100$
                </p>
                <p class="mt-4 text-gray-500 capitalize dark:text-gray-900 group-hover:text-gray-300">
                  Best Bike In the Town!
                </p>
                <Link
                  to="/cars"
                  class="inline-flex items-center 
                          justify-center mt-10 w-1/2 h-12 px-6
                           font-medium tracking-wide text-white
                        lg:ml-32  cursor-pointer transition-colors duration-200 dark:hover:bg-transparentrounded shadow-md
                             bg-black hover:bg-gray-100 hover:text-black
                              focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                >
                  Pay
                </Link>
              </div>
            </div>
          </div>
          <div
            class="px-10 py-8 transition-colors duration-300 transform border
           cursor-pointer rounded-xl hover:border-transparent group
            hover:bg-black dark:border-gray-700 dark:hover:border-transparent"
          >
            <div class="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                class="flex-shrink-0 object-cover w-56 h-56 rounded-lg
                sm:mx-4 ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div class="mt-4 sm:mx-4 sm:mt-0">
                <h1
                  class="text-xl font-semibold text-gray-700 
                capitalize md:text-2xl dark:text-black group-hover:text-white"
                >
                  Car
                </h1>

                <p
                  class="mt-2 text-gray-500 capitalize
                 dark:text-gray-900 group-hover:text-gray-300"
                >
                  Price:200$
                </p>
                <p class="mt-4 text-gray-500 capitalize dark:text-gray-900 group-hover:text-gray-300">
                  Best Car In the Town!
                </p>
                <Link
                  to="/cars"
                  class="inline-flex items-center 
                          justify-center mt-10 w-1/2 h-12 px-6
                           font-medium tracking-wide text-white
                        lg:ml-32  cursor-pointer transition-colors duration-200 dark:hover:bg-transparentrounded shadow-md
                             bg-black hover:bg-gray-100 hover:text-black
                              focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                >
                  Pay
                </Link>
              </div>
            </div>
          </div>
          <div
            class="px-10 py-8 transition-colors duration-300 transform border
           cursor-pointer rounded-xl hover:border-transparent group
            hover:bg-black dark:border-gray-700 dark:hover:border-transparent"
          >
            <div class="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                class="flex-shrink-0 object-cover w-56 h-56 rounded-lg
                sm:mx-4 ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div class="mt-4 sm:mx-4 sm:mt-0">
                <h1
                  class="text-xl font-semibold text-gray-700 
                capitalize md:text-2xl dark:text-black group-hover:text-white"
                >
                  Car
                </h1>

                <p
                  class="mt-2 text-gray-500 capitalize
                 dark:text-gray-900 group-hover:text-gray-300"
                >
                  Price:200$
                </p>
                <p class="mt-4 text-gray-500 capitalize dark:text-gray-900 group-hover:text-gray-300">
                  Best Car In the Town!
                </p>
                <Link
                  to="/cars"
                  class="inline-flex items-center 
                          justify-center mt-10 w-1/2 h-12 px-6
                           font-medium tracking-wide text-white
                        lg:ml-32  cursor-pointer transition-colors duration-200 dark:hover:bg-transparentrounded shadow-md
                             bg-black hover:bg-gray-100 hover:text-black
                              focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                >
                  Pay
                </Link>
              </div>
            </div>
          </div> */}
        {/* </div> * */}
      </div>
    </section>
  );
};

export default HomeCard;
