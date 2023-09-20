import React from 'react';

function Rating(props) {
  const { rating } = props;

  const stars = Array(rating).fill(null).map((_, index) => (
    <input
      key={index}
      type="radio"
      name="rating"
      className={`mask mask-star ${index < rating ? 'filled' : ''}`}
    />
  ));

  return <div className="rating rating-sm">{stars}</div>;
}

export default Rating;
