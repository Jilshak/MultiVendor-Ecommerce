import React, { useState } from 'react';

function Carousal() {
  const [activeSlide, setActiveSlide] = useState(1);

  const handlePrevSlide = () => {
    if (activeSlide === 1) {
      setActiveSlide(4);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (activeSlide === 4) {
      setActiveSlide(1);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <div className='mx-[50px] my-10'>
      <div className="carousel w-full h-[350px] relative overflow-hidden">
        {/* Slide 1 */}
        <div id="slide1" className={`carousel-item absolute w-full transform ${activeSlide === 1 ? 'translate-x-0 opacity-100 transition-transform duration-1000' : '-translate-x-full opacity-0 transition-transform duration-500'}`}>
          <img src={`https://source.unsplash.com/vpOeXr5wmR4/`} className="w-full h-[350px] rounded-2xl" />
        </div>

        {/* Slide 2 */}
        <div id="slide2" className={`carousel-item absolute w-full transform ${activeSlide === 2 ? 'translate-x-0 opacity-100 transition-transform duration-1000' : '-translate-x-full opacity-0 transition-transform duration-1000'}`}>
          <img src={`https://source.unsplash.com/vpOeXr5wmR4/`} className="w-full h-[350px] rounded-2xl" />
        </div>

        {/* Slide 3 */}
        <div id="slide3" className={`carousel-item absolute w-full transform ${activeSlide === 3 ? 'translate-x-0 opacity-100 transition-transform duration-1000' : '-translate-x-full  opacity-0 transition-transform duration-1000'}`}>
          <img src={`https://source.unsplash.com/vpOeXr5wmR4/`} className="w-full h-[350px] rounded-2xl" />
        </div>

        {/* Slide 4 */}
        <div id="slide4" className={`carousel-item absolute w-full transform ${activeSlide === 4 ? 'translate-x-0 opacity-100 transition-transform duration-1000' : '-translate-x-full opacity-0 transition-transform duration-1000'}`}>
          <img src={`https://source.unsplash.com/vpOeXr5wmR4/600x600`} className="w-full h-[350px] rounded-2xl" />
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-44">
          <button onClick={handlePrevSlide} className="btn btn-circle">❮</button>
          <button onClick={handleNextSlide} className="btn btn-circle">❯</button>
        </div>
      </div>
    </div>
  );
}

export default Carousal;
