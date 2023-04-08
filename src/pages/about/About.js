import React from 'react';

const About = () => {
    return (
      <div>
        <section class="bg-gray-900 dark:bg-white">
          <div class="container px-6 py-12 mx-auto">
            <div>
              <p class="font-bold text-blue-500 dark:text-sky-700">About us</p>

              <h1 class="mt-2 text-2xl font-bold text-white md:text-3xl dark:text-gray-800">
                Our Features
              </h1>

              <p class="mt-3 text-gray-100 dark:text-gray-800">
                Library materials, programs, and services are offered for
                children, teens, and adults. We proudly serve more than 150,000
                thousand visitors each year and our patrons have access to a
                collection of more than 100,000 books and materials, 20 public
                computers, and a wide range of digital resources, including
                downloadable eBooks, audio books, music and videos. We offer
                over 65 databases, covering areas such as health, biography,
                psychology, science and technology, and travel and careers, and
                we provide literary, cultural and educational programs for
                children, teens, and adults each month.
              </p>
            </div>

            <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
              <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                  <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>

                  <h2 class="mt-4 text-base font-medium text-white  dark:text-gray-800">
                    Email
                  </h2>
                  <p class="mt-2 text-sm text-gray-100 dark:text-gray-800">
                    Our friendly team is here to help.
                  </p>
                  <p class="mt-2 text-sm text-blue-500 dark:text-sky-700">
                    info@weerolibrary.com
                  </p>
                </div>

                <div>
                  <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>

                  <h2 class="mt-4 text-base font-medium text-gray-100 dark:text-gray-800">
                    Office
                  </h2>
                  <p class="mt-2 text-sm text-gray-100 dark:text-gray-800">
                    Come say hello at our office HQ.
                  </p>
                  <p class="mt-2 text-sm text-blue-500 dark:text-sky-700">
                    123 Madison Avenue New York, NY 10010 (800) 123-4567
                  </p>
                </div>

                <div>
                  <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </span>

                  <h2 class="mt-4 text-base font-medium text-gray-100 dark:text-gray-800">
                    Phone
                  </h2>
                  <p class="mt-2 text-sm text-gray-100 dark:text-gray-700">
                    Mon-Fri from 8am to 5pm.
                  </p>
                  <p class="mt-2 text-sm text-blue-500 dark:text-sky-700">
                    +1 (555) 000-0000
                  </p>
                </div>
              </div>

              <div class="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                <iframe
                  width="100%"
                  height="100%"
                  frameborder="0"
                  title="map"
                  marginheight="0"
                  marginwidth="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default About;