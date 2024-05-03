import React from 'react'

function Card(props) {
  return (
    <div>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
            <div className="mb-3">
              <h2 className="text-center text-white dark:text-white font-medium">
                {props.title}
              </h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div className="container">
                <iframe
                  src={props.url}
                  frameborder="0"
                ></iframe>
              </div>
              <a
                href={props.url}
                className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
              >
                Visit Website
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
