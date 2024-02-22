import React from 'react';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
};

interface RatingStarProps {
  maxRating: number;
}

function RatingStar({maxRating}: RatingStarProps) {
  return (
    <div style={containerStyle}>
      <div>
        {Array.from({ length: maxRating }, (_, i) => (
          <span
            key={i}
            role="img"
            aria-label="star"
          >
            ⭐️
          </span>
        ))}
      </div>
    </div>
  );
}

export default RatingStar;
