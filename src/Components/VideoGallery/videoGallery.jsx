import React from 'react';
import './videoGallery.css';

const videos = [
  {
    id: '1',
    title: 'Assembly on Indian Airforce Day ',
    url: 'https://www.youtube.com/embed/ciQ_J3DHJug?si=lAg92E4p72NLLlzY'
  },
  {
    id: '2',
    title: 'Khatak dance',
    url: 'https://www.youtube.com/embed/i9nrNfIBnJA?si=vvH3DfYH8AdJ4J4o" title="YouTube video player'
  },
  {
    id: '3',
    title: 'Classical Dance',
    url: 'https://www.youtube.com/embed/LwF3B--5YDc?si=vokfE9k5xfNzv9ut" title="YouTube video player'
  },
  {
    id: '4',
    title: 'Award Winning ',
    url: 'https://www.youtube.com/embed/bJ4FGB_Jm9M?si=mnUlvACZLX2O10aL" title="YouTube video player'
  }
];

function VideoGallery() {
  return (
    <>
    <h2>Our Video</h2>
    <div className="video-gallery">
      {videos.map(video => (
        <div key={video.id} className="video-container">
          <div className="video-wrapper">
            <iframe
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p>{video.title}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default VideoGallery;
