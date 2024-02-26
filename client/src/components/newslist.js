import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsList = ({ maxItems }) => {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://alpha-trade.onrender.com/api/news"
        );
        setNews(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch news. Please try again.");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const openNewsModal = (index) => {
    setSelectedNews(news[index]);
  };

  const closeNewsModal = () => {
    setSelectedNews(null);
  };

  return (
    <div className="container mx-auto p-8">
      {loading && (
        <p className="text-gray-500 flex justify-center text-5xl font-light">
          Loading News...
        </p>
      )}
      {error && (
        <p className="text-red-500 mb-4 font-bold flex justify-center">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.slice(0, maxItems).map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-md">
            <h2
              className="text-xl font-bold mb-2 cursor-pointer text-blue-500 hover:underline"
              onClick={() => openNewsModal(index)}
            >
              {item.title}
            </h2>
            <p className="text-gray-600">{item.summary}</p>

            <p className="text-gray-500">
              <strong className="text-black">Author:</strong> {item.author}
            </p>
            <p className="text-gray-500">
              <strong className="text-black">Source:</strong> {item.source}
            </p>
          </div>
        ))}
      </div>

      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md shadow-md max-w-3xl w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedNews.title}</h2>
            <p className="text-gray-600 mb-4">{selectedNews.summary}</p>

            <p className="text-gray-500">
              <strong className="text-black">Author:</strong>{" "}
              {selectedNews.author}
            </p>
            <p className="text-gray-500">
              <strong className="text-black">Source:</strong>{" "}
              {selectedNews.source}
            </p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={closeNewsModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsList;
