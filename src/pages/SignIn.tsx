import React, { useState } from 'react';
import Button from '../components/Button';
import { Link } from '../components/Link';
import { Zap, User, Lock, CheckSquare } from 'lucide-react';

const SignIn: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        {formSubmitted ? (
          <div className="text-center py-8">
            <div className="mb-4 inline-flex p-3 bg-green-100 rounded-full">
              <CheckSquare className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {isSignUp ? 'Registration Successful!' : 'Sign In Successful!'}
            </h3>
            <p className="text-gray-600 mb-6">
              {isSignUp 
                ? 'Your account has been created. Welcome to BHARAT EVs!'
                : 'Welcome back to BHARAT EVs!'
              }
            </p>
            <Button 
              variant="primary"
              onClick={() => {
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new CustomEvent('locationchange', { detail: '/' }));
              }}
            >
              Go to Homepage
            </Button>
          </div>
        ) : (
          <>
            <div className="text-center">
              <div className="flex justify-center">
                <div className="inline-flex items-center">
                  <Zap className="h-8 w-8 text-green-500" />
                  <span className="ml-2 text-2xl font-bold">BHARAT <span className="text-green-500">EVs</span></span>
                </div>
              </div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                {isSignUp ? 'Create your account' : 'Sign in to your account'}
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                {isSignUp 
                  ? 'Already have an account?' 
                  : 'Don\'t have an account?'
                }
                {' '}
                <button 
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-green-500 hover:text-green-600 font-medium"
                >
                  {isSignUp ? 'Sign in' : 'Sign up'}
                </button>
              </p>
            </div>
            
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm space-y-4">
                {isSignUp && (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="appearance-none rounded-md relative block w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                )}
                
                <div>
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-md relative block w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500"
                      placeholder="user@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-md relative block w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                
                {isSignUp && (
                  <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="confirm-password"
                        name="confirm-password"
                        type="password"
                        required
                        className="appearance-none rounded-md relative block w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                )}
              </div>

              {!isSignUp && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-green-500 hover:text-green-600">
                      Forgot your password?
                    </a>
                  </div>
                </div>
              )}

              <div>
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  {isSignUp ? 'Sign Up' : 'Sign In'}
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;