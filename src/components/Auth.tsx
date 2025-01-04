import React from 'react';

type AuthPageProps = {}

const Auth: React.FC<AuthPageProps> = () => {
  return (
    <div className="p-0 w-full h-full flex flex-col justify-center items-center bg-gradient-to-r from-indigo-800 to-blue-600 text-white font-[family-name:var(--font-geist-sans)]">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          Unlock Your Potential for Interviews
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          Take your coding skills to the next level with powerful resources and training materials tailored to help you succeed in technical interviews.
        </p>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center space-y-6">
        <button
          className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-10 rounded-full text-xl font-semibold shadow-lg transition-all duration-300"
        >
          Get Started
        </button>

        <p className="text-center text-sm text-gray-200">
          Already have an account? 
          <a href="/login" className="text-white hover:underline ml-1">Log In</a>
        </p>
      </div>

      {/* Footer Section (Optional) */}
      <footer className="absolute bottom-4 text-sm text-gray-200">
        <p>©{`${new Date().getFullYear()}`} Leetcode. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Auth;
