'use client';
import { useState } from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-800 to-purple-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">TheBytePlay</h1>
          <p className="text-xl text-gray-300 mb-8">
            Your ultimate gaming community hub. Connect, compete, and conquer with fellow gamers.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200">
              Join Community
            </button>
            <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
              Browse Games
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Gaming Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Gaming Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Community Chat</h3>
                <p className="text-gray-300">Connect with fellow gamers in real-time chat rooms and forums.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Tournaments</h3>
                <p className="text-gray-300">Join competitive tournaments and climb the leaderboards.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Game Reviews</h3>
                <p className="text-gray-300">Read and write reviews for the latest games in the community.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
