import { useState } from 'react';
import { Star } from './Star';

interface StarRatingProps {
  maxRating?: number;
  size?: number;
  color?: string;
  defaultRating?: number;
}

export default function StarRating({
  maxRating = 10,
  size = 24,
  color = '#F8D001',
  defaultRating = 0,
}: StarRatingProps) {
  const [rating, setRating] = useState<number>(defaultRating);
  const [hoverRating, setHoverRating] = useState<number>(0);

  function handleRating(rating: number) {
    setRating(rating);
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
  };

  const starContainerStyle = {
    display: 'flex',
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            size={size}
            color={color}
            full={hoverRating ? hoverRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setHoverRating(i + 1)}
            onHoverOut={() => setHoverRating(0)}
          />
        ))}
      </div>
    </div>
  );
}
