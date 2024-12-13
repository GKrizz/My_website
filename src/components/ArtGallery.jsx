import React, { useState } from 'react';

const ArtGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  // Sample images (replace with actual paths)
  const images = [
    '/src/assets/images/art1.jpeg',
    '/src/assets/images/art2.jpeg',
    '/src/assets/images/art3.jpeg',
    '/src/assets/images/art4.jpeg',
    '/src/assets/images/art5.jpeg',
    '/src/assets/images/art6.jpeg',
  ];

  const openModal = (img) => {
    setModalImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  return (
    <div>
      {/* Art Gallery Thumbnails */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem', padding: '1rem' }}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Art ${idx}`}
            style={{
              width: '300px',  // Increased size for thumbnails
              height: '200px',
              cursor: 'pointer',
              border: '2px solid #FF6347', // Orange border
              borderRadius: '8px',
              transition: 'transform 0.2s ease, box-shadow 0.3s ease',
            }}
            onClick={() => openModal(img)}
          />
        ))}
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              position: 'relative',
              backgroundColor: '#fff',
              padding: '1rem',
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(255, 99, 71, 0.6)', // Orange glow around modal
              maxWidth: '90vw',  // Adjust modal size based on viewport width
              maxHeight: '90vh', // Adjust modal size based on viewport height
              overflow: 'hidden', // Prevent any overflow
            }}
          >
            <img
              src={modalImage}
              alt="Expanded Art"
              style={{
                width: '100%',  // Ensure the image is responsive and fits within modal
                height: 'auto',
                maxWidth: '800px', // Set a limit on the image width
                maxHeight: '80vh', // Set a maximum height for the image to prevent overflow
                objectFit: 'contain', // Preserve aspect ratio without distorting
                margin: '0 auto',  // Center the image inside the modal
                display: 'block',  // Center the image block-level
              }}
            />
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#FF6347',  // Orange close button
                fontSize: '24px',
                cursor: 'pointer',
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtGallery;
