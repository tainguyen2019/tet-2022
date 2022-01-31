import React, { useState, useEffect } from 'react';
import HomeButton from '../home-button';
import { distichMapping } from '../constants';
import './styles.css';

function Gift() {
  const [isLoading, setIsLoading] = useState(true);
  const [randomImage, setRandomImage] = useState();
  useEffect(() => {
    const timeID = setTimeout(() => {
      const randomImg = Math.floor(Math.random() * 12) + 1;
      setRandomImage(randomImg);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeID);
  }, []);
  return (
    <div className="box-content">
      <div className="paragraph">
        <div className="title">Chúc tết</div>
        <b>
          <u>Lời chúc:</u>
        </b>
        <br />
        {!isLoading && (
          <div className="distich">
            {distichMapping[randomImage].split('-').map((row, index) => (
              <React.Fragment key={index}>
                {row}
                <br />
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
      {isLoading && (
        <div className="loading">
          <b>
            <i>Chờ xíu nha</i>
          </b>
          <div className="dot-pulse" />
        </div>
      )}
      {!isLoading && (
        <div className="image-container">
          <img
            src={`images/${randomImage}.jpg`}
            alt=""
            className="image-decoration"
          />
        </div>
      )}
      <HomeButton />
    </div>
  );
}

export default Gift;
