// src/components/ImageDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageDisplay = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          'https://api.unsplash.com/photos/random/?client_id=O8zIfC2xEfjAcVbOoI9PGbGhzWLQBBKkScpnGjF7XOc'
        );
        setImageUrl(response.data.urls.regular);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Unsplash" style={{ maxWidth: '100%' }} />}
    </div>
  );
};

export default ImageDisplay;
