import React from 'react';
import './RangeSlider.scss';
import {useEventListener} from '../../hooks';

export const RangeSlider = ({
  historicalSearch,
  setHistoricalSearch,
  crypts,
  newSearch
}) => {
  const rangeLineRef = React.useRef(null);
  const rangeBulletRef = React.useRef(null);
  const [moved, setMoved] = React.useState(false);

  React.useEffect( () => {
    adjustSliderBullet();
  }, [rangeLineRef.current, crypts]);

  const adjustSliderBullet = React.useCallback( () => {
    function setPosition() {
      const rangeSlider = rangeLineRef.current;
      const rangeBounds = rangeLineRef.current.getBoundingClientRect();
      const rangeBullet = rangeBulletRef.current;
      let bulletPosition = (rangeSlider.value / rangeSlider.max);
      rangeBullet.innerHTML = rangeSlider.value;
      let widthRange = (rangeBounds.width / rangeSlider.max);
      let posLeft = (bulletPosition * rangeBounds.width + widthRange) + "px";
      rangeBullet.style.left = posLeft;
    }
    if (rangeLineRef.current) {
      setPosition();
    }
  },[historicalSearch, rangeLineRef]);

  const fireNewSearch = React.useCallback( () => {
    if (rangeLineRef.current && moved) {
      const rangeSlider = rangeLineRef.current;
      newSearch(rangeSlider.value);
      setMoved(false);
    }
  }, [rangeLineRef, newSearch])

  useEventListener("input", adjustSliderBullet);
  useEventListener("mouseup", fireNewSearch);

  const handleRangeSliderChange = (event) => {
    event.preventDefault();
    setHistoricalSearch(event.target.value);
    setMoved(true);
  }
  return (
    <div className="range-container">
      <span 
        ref={rangeBulletRef} 
        id="range-bullet" 
        className="rs-label"
      />
      <input 
        type="range"
        id="range-slider-line" 
        ref={rangeLineRef}
        min={1}
        max={365*12}
        step={1}
        value={historicalSearch === 'max' ? "4000" : historicalSearch} 
        onChange={e => handleRangeSliderChange(e)}
      />
    </div>
  )
}