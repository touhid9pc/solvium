import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-950 text-white font-sans p-6 text-center">
      <div className="max-w-md w-full">
        <h1 className="text-9xl font-extrabold text-red-500 mb-4 animate-pulse">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-neutral-400 text-lg mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary/50 transition-colors duration-200"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
