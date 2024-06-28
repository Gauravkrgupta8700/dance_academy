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
    title: 'Patriotic Mashup',
    url: 'https://www.youtube.com/embed/M937K1_aJ84?si=F0XvDZv-s3bE_aTI" title="YouTube video player'
  },
  {
    id: '3',
    title: 'Murli Manohar',
    url: 'https://www.youtube.com/embed/P5YkFAwBDx8'
  },
  {
    id: '4',
    title: 'Natrang Ubha',
    url: 'https://www.youtube.com/embed/_yYcur51ZvA?si=Yggmv9Bdmg2wuVx-'
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
