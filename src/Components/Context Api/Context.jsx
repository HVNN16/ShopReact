
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

const States = createContext();

export default function Context({ children }) {
  const [dataFromServer, setDataFromServer] = useState(null);
  const [featuredData, setFeaturedData] = useState(null);

  const handleCategory = (category) => {
    // Thực hiện các hành động cần thiết với category
    console.log(`Selected category: ${category.name}`);
  };

  const handleFeaturedCategory = (category) => {
    // Thực hiện các hành động cần thiết với featured category
    console.log(`Selected featured category: ${category.name}`);
  };

  const fetchDataFromServer = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products'); // Use Axios
      setDataFromServer(response.data);

      // Assume featured data is fetched from a different endpoint
      const featuredResponse = await axios.get('http://localhost:3000/featured'); // Use Axios
      setFeaturedData(featuredResponse.data);
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu từ máy chủ', error);
    }
  };

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  console.log('Context data:', { dataFromServer, featuredData, handleCategory, handleFeaturedCategory });

  return (
    <States.Provider value={{ dataFromServer, featuredData, handleCategory, handleFeaturedCategory }}>
      {children}
    </States.Provider>
  );
}

export { States };
