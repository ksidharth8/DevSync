import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Welcome to <span className="text-blue-600">DevSync</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          AI-Powered Real-Time Coding Collaboration Platform
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Link
              to="/editor/new"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Start Coding
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link
              to="/login"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need for collaborative coding
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  🖊
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Real-Time Code Editing</p>
                <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  Multiple users can edit code simultaneously with real-time synchronization.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  💬
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Integrated Chat</p>
                <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  Communicate with your team members through the built-in chat feature.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  🤖
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">AI Code Assistance</p>
                <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  Get intelligent code suggestions and debugging tips powered by AI.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  🔗
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Smart Pairing</p>
                <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  Find the perfect coding partner based on skills and interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 