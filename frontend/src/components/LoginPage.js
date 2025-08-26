// Install dependencies first:
// npm install react-icons

import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaFacebook } from 'react-icons/fa';

export default function AuthPage() {
  const [tab, setTab] = useState('login');
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-700 to-green-900 relative font-sans">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center opacity-30" />
      <div className="relative w-full max-w-md rounded-3xl shadow-2xl p-0 overflow-hidden border border-green-300/20 backdrop-blur-xl">
        {/* Tabs */}
        <div className="flex justify-center overflow-hidden">
          <button
            className={`flex-1 py-4 text-lg font-bold transition ${tab === 'login' ? 'bg-green-600 text-white scale-105' : 'bg-white text-green-600'}`}
            onClick={() => setTab('login')}
          >
            Sign In
          </button>
          <button
            className={`flex-1 py-4 text-lg font-bold transition ${tab === 'register' ? 'bg-green-600 text-white scale-105' : 'bg-white text-green-600'}`}
            onClick={() => setTab('register')}
          >
            Sign Up
          </button>
        </div>
        <div className="px-8 py-10 bg-white/20">
          {/* Animated content */}
          <form className="flex flex-col gap-6 animate-fade-in">
            {tab === 'register' && (
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400" />
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-green-300 bg-white/50 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  required
                />
              </div>
            )}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-green-300 bg-white/50 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                required
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400" />
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-green-300 bg-white/50 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                required
              />
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 cursor-pointer select-none"
                onClick={() => setShowPass((v) => !v)}
              >
                {showPass ? '🙈' : '👁️'}
              </span>
            </div>
            {tab === 'register' && (
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400" />
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-green-300 bg-white/50 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  required
                />
              </div>
            )}
            {tab === 'login' && (
              <div className="flex justify-end text-green-700 text-sm">
                <a href="#forgot" className="hover:underline">Forgot password?</a>
              </div>
            )}
            <button
              className="w-full py-3 mb-2 font-bold rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg hover:brightness-110 transition"
              type="submit"
            >
              {tab === 'login' ? 'Sign In' : 'Sign Up'}
            </button>
          </form>
          {/* Social buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <button className="w-full py-3 rounded-xl flex items-center justify-center gap-2 bg-white/80 border border-green-300 font-semibold text-green-700 hover:bg-green-100 transition">
              <FaGoogle className="text-xl" /> Continue with Google
            </button>
            <button className="w-full py-3 rounded-xl flex items-center justify-center gap-2 bg-white/80 border border-blue-300 font-semibold text-blue-700 hover:bg-blue-100 transition">
              <FaFacebook className="text-xl" /> Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add this to your App.js or home page:

// <AuthPage />
