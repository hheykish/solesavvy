import React from "react";
import ReactPlayer from "react-player";
import "./VideosSection.css";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";

export const VideosSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1 className="home-h">Sneak Into Extraordinary</h1>
        <div className="video-container">
          <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
            <ReactPlayer
              onClick={() => navigate("/product/654e1624e31789abf3fe6432")}
              // url={`${process.env.PUBLIC_URL}/assets/videos/hero-video-1.mp4`}
              url="https://res.cloudinary.com/drb7l3onb/video/upload/w_400,f_auto,q_auto/v1/Ecommerce-app/hero-video-1"
              playing
              playbackRate={1.15}
              muted
              loop
              controls={false}
              width="100%"
              height="119.9%"
            />
            
            <h3>Nike Phantom Version</h3>
            <span className="notch"></span>
          </Tilt>{" "}
          <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
            <ReactPlayer
              onClick={() => navigate("/product-details/39")}
              // url={`${process.env.PUBLIC_URL}/assets/videos/hero-video-2.mp4`}
              url="https://res.cloudinary.com/drb7l3onb/video/upload/w_400,f_auto,q_auto/v1/Ecommerce-app/hero-video-2"
              playing
              playbackRate={1.6}
              muted
              loop
              controls={false}
              width="100%"
              height="112.65%"
            />

            <h3>By Nike</h3>
            <span className="notch"></span>
          </Tilt>
          <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
            <ReactPlayer
              onClick={() => navigate("/product/654e1624e31789abf3fe642d")}
              url="https://res.cloudinary.com/drb7l3onb/video/upload/w_400,f_auto,q_auto/v1/Ecommerce-app/hero-video-3"
              playing
              playbackRate={2.8}
              muted
              loop
              controls={false}
              width="100%"
              margin="0px"
              padding="0px"
              height="119.9%"
            />

            <h3>Nike React Miler</h3>
            <span className="notch"></span>
          </Tilt>
          <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
            {" "}
            <ReactPlayer
              onClick={() => navigate("/product/654e1624e31789abf3fe6431")}
              // url={`${process.env.PUBLIC_URL}/assets/videos/hero-video-4.mp4`}
              url="https://res.cloudinary.com/drb7l3onb/video/upload/w_400,f_auto,q_auto/v1/Ecommerce-app/hero-video-4"
              playing
              playbackRate={1}
              muted
              loop
              controls={false}
              width="100%"
              height="119.8%"
            />
            <h3>Nike Phantom Vision Elite</h3>
            <span className="notch"></span>
          </Tilt>
        </div>
      </div>
    </>
  );
};
