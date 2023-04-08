import React from "react";
import { Link } from "react-router-dom";

const HeroMiddleSection = () => {
  return (
    <section class="bg-gray-900 dark:bg-gray-100">
      <div class="container px-6 py-10 mx-auto">
        <h1
          class="text-2xl font-semibold text-center text-gray-100 capitalize 
        lg:text-3xl dark:text-black"
        >
          Upcoming
          <br /> Library<span class="text-blue-500 ml-2">Events</span>
        </h1>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </span>

            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Sunday,April:12 2023-3:00PM
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              <span className="font-bold text-2xl">
                {" "}
                New Little Engine written by Christopher Awdry
              </span>{" "}
              <br />
              New Little Engine - is an addition story to the railway series in
              which we meet the narrow gauge engine Ivo Hugh, the new recruit to
              the Thin Controller's Little Railway.
            </p>

            <Link
              to="/"
              class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span class="mx-1">read more</span>
              <svg
                class="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>

          <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </span>

            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Tuesday,April:14 2023-3:00PM
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              <span className="font-bold text-2xl">
                {" "}
                A Woman’s Story, by Annie Ernaux
              </span>{" "}
              <br />A trilogy of books intersect at her youth: the story of
              Ernaux's father, told in La Place; her semi-autobiographical first
              novel, Cleaned Out; and A Woman's Story . In this work, the woman
              of the title is the author's mother and the story is a brief,
              aching requiem for an intense but qualified relationship
            </p>

            <Link
              to="/"
              class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span class="mx-1">read more</span>
              <svg
                class="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>

          <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </span>

            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Tuesday,May:14 2023-3:00PM
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              <span className="font-bold text-2xl">
                {" "}
                Ascendant, by Jack Campbell.
              </span>{" "}
              <br />A young fleet officer and a Marine stand together to defend
              their colony in the continuation of the powerful and action-packed
              Genesis Fleet saga from New York Times bestselling author Jack
              Campbell… Join the reading book club.
            </p>

            <Link
              to="/"
              class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span class="mx-1">read more</span>
              <svg
                class="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMiddleSection;
