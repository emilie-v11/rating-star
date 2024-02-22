import React from 'react';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
};

function RatingStar() {
  return (
    <div style={containerStyle}>
      <div>
        {Array.from({ length: 10 }, (_, i) => (
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
