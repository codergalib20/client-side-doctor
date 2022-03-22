import React from 'react';

const Banner = () => {
  const bannerStyle = {
    background: "radial-gradient(rgba(255,255,255, 0.5), rgba(255,255,2,0.5)),url(/banner.jpg) no-repeat center center",
    minHeight: '400px',
    width: "100%",
    backgroundSize: 'cover',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backdropFilter: "blur(7px)"
  }
  return (
    <div style={bannerStyle} >
      <div className="container">
        <h1 className="text-2xl md:text-4xl font-bold">Medical Radiography </h1>
        <p className="text-md md:text-xl font-medium">Brussels finest outpatient diagnostic imaging center</p>
      </div>
    </div>
  );
};

export default Banner;