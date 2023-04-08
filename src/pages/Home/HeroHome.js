import React from "react";
import Hero from '../../assets/images/heroo.jpg'

const HeroHome = () => {
  return (
    <div>
      <header class="bg-black dark:bg-gray-100">
        <div class="container px-6 py-16 mx-auto">
          <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
              <div class="lg:max-w-lg">
                <h1 class="text-3xl font-semibold text-gray-100 dark:text-gray-900 lg:text-4xl">
                  The Wonderful <br /> World{" "}
                  <span class="text-blue-500 ">of Reading</span>
                </h1>

                <p class="mt-3 text-gray-600 dark:text-gray-700">
                  The library is a place for everyone to explore, discover, and
                  engage
                </p>

                <section
                  class="max-w-4xl p-6 mx-auto bg-gray-900
                 rounded-md shadow-md dark:bg-gray-100 mt-3"
                >
                  <form>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
                      <div>
                        <input
                          placeholder="Enter Book Title"
                          id="username"
                          type="text"
                          class="block w-full px-4 py-2 mt-2
                  text-gray-100 bg-gray-900 border border-gray-200
                   rounded-md dark:bg-gray-100 dark:text-gray-900
                    dark:border-gray-600 focus:border-blue-400
                     focus:ring-blue-300 focus:ring-opacity-40 
                     dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                      </div>

                      <div>
                        <input
                          placeholder="Enter Description"
                          id="emailAddress"
                          type="email"
                          class="block w-full px-4 py-2 mt-2 text-gray-100 bg-gray-900 border
                 border-gray-200 rounded-md dark:bg-gray-100 dark:text-gray-900
                  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300
                   focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                      </div>
                    </div>

                    <div class="flex justify-end mt-6">
                      <button class="px-8 py-2.5 leading-5 text-white transition-colors 
                      duration-300 transform bg-gray-800 rounded-md
                       hover:bg-gray-900 focus:outline-none focus:bg-gray-600">
                        View Collections
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                class="w-full h-full lg:max-w-3xl"
                src={Hero}
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeroHome;
