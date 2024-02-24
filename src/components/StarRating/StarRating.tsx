import { useState } from 'react';
import { Star } from './Star';

interface StarRatingProps {
  maxRating?: number;
  size?: number;
  color?: string;
  defaultRating?: number;
  className?: string;
  onSetRating?: (rating: number) => void;
}

export default function StarRating({
  maxRating = 10,
  size = 24,
  color = '#F8D001',
  defaultRating = 0,
  className = '',
  onSetRating,
}: StarRatingProps) {
  const [rating, setRating] = useState<number>(defaultRating);
  const [hoverRating, setHoverRating] = useState<number>(0);

  function handleRating(rating: number) {
    setRating(rating);
    // optional callback
    if (onSetRating) {
      onSetRating(rating);
    }
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
  };

  const starContainerStyle = {
    display: 'flex',
    padding: 0,
  };

  return (
    <div
      style={containerStyle}
      className={className}
    >
      <ul style={starContainerStyle}>
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
      </ul>
    </div>
  );
}
