"use client"

import { useState } from 'react';
// import WebpageItem from '../components/WebpageItem';
import WebpageItem from './components/WebpageItem';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [webpages, setWebpages] = useState([
    {
      name: "Example Site",
      description: "An example description for a saved webpage.",
      url: "https://example.com",
      image: "/example-image.jpg",
      primaryCategory: "Education",
      tags: ["Learning", "Tutorial"]
    },
    // Add more webpage objects as needed
  ]);

  const filteredWebpages = webpages.filter(page =>
    page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // <div className="min-h-screen p-6">
    //   {/* Header */}
    //   <header className="flex justify-between items-center mb-6">
    //     <input
    //       type="text"
    //       placeholder="Search..."
    //       className="w-full max-w-lg p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       value={searchTerm}
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //     />
    //     <button
    //       className="ml-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    //       onClick={() => console.log('Add new item')}
    //     >
    //       +
    //     </button>
    //   </header>

    //   {/* Webpage List */}
    //   <ul className="space-y-4">
    //     {filteredWebpages.map((page, index) => (
    //       <WebpageItem key={index} webpage={page} />
    //     ))}
    //   </ul>
    // </div>

    <div>
      {/* TODO: */}
    </div>

  );
}
