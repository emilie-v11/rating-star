import { useEffect, useRef, useState } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);

  function handleRating(rating: number) {
    setRating(rating);
    // optional callback
    onSetRating?.(rating);
  }

  const handleKeyDown = (event: React.KeyboardEvent<Element>) => {
    if (event.key === 'Enter') {
      containerRef.current?.focus();

      const newRating = hoverRating > 0 ? hoverRating : rating;
      setRating(newRating);
      // optional callback
      onSetRating?.(newRating);
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && containerRef.current) {
        containerRef.current.focus();
      }
    };
    document.addEventListener('keydown', handleGlobalKeyDown);

    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

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
      tabIndex={-1}
      ref={containerRef}
      onKeyDown={handleKeyDown}
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
            onEnterKeyDown={handleKeyDown}
          />
        ))}
      </ul>
    </div>
  );
}
