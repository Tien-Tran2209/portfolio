import React from 'react';

const RoundedPentagonPhoto = ({ image }) => {
  return (
      <svg viewBox="0 0 100 100" style={{ width: "70%", height: "auto", display: 'block' }}>
        <defs>
          <clipPath id="rounded-pentagon" clipPathUnits="objectBoundingBox">
            <path
              d="
                M 0.5 0.04
                C 0.53 0.04, 0.95 0.37, 0.95 0.4
                C 0.95 0.43, 0.79 0.96, 0.76 0.96
                H 0.24
                C 0.21 0.96, 0.05 0.43, 0.05 0.4
                C 0.05 0.37, 0.47 0.04, 0.5 0.04
                Z
              "
            />
          </clipPath>
        </defs>
        <image
          href={image}
          width="100%"
          height="100%"
          // preserveAspectRatio="xMidYMid slice"
          preserveAspectRatio="xMidYMin slice" 
          clipPath="url(#rounded-pentagon)"
        />
      </svg>
  );
};

export default RoundedPentagonPhoto;
