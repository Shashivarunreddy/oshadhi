"use client";

import { Navbar } from "./components/Navbar";


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center p-8 pt-24">
        <h1 className="text-4xl font-bold  text-gray-900">
          Welcome to <span className="text-blue-600">Oshadhi</span>
        </h1>
        <p className="text-lg mb-6 text-gray-700">
          Homeopathic Clinic Management Software, your all-in-one solution for managing patient records, appointments, and treatments with ease.
        </p>

        {/* Components */}
        
      </main>
    </div>
  );
}
