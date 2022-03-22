import React from 'react';

const Banner = () => {
  const bannerStyle = {
    background: "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.3)),url(/banner.jpg)",
    minHeight: '400px',
    width: "100%"
  }
  return (
    <div style={bannerStyle} >
      <div className="container"></div>
    </div>
  );
};

export default Banner;