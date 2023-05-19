import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./range.css";
import $ from 'jquery';

const MultiRangeSlider = ({ min, max, onChange }) => {

  const search = window.location.search;
  const car_min_price = new URLSearchParams(search).get('car_min_price');
  const car_max_price = new URLSearchParams(search).get('car_max_price');

  if (car_min_price) {
    var min_price = car_min_price;
    var max_price = car_max_price;
  } else {
    var min_price = 50000;
    var max_price = 4000000;
  }

  const [minVal, setMinVal] = useState(min_price);
  const [maxVal, setMaxVal] = useState(max_price);
  const [MinStep, setminStep] = useState(50000);
  const [MaxStep, setmaxStep] = useState(50000);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="container1">
      <input
        type="range"
        min={min}
        max={max}
        step={MinStep}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;

          if(value < 300000){
            setminStep(50000)
          }
          else if(value >= 300000 && value < 500000){
            if(value==300000){
              setMinVal(value);
            }
            else{
              var stepval = value - 50000;
              setMinVal(stepval);
            }
            setminStep(100000);
          }
          else if(value >= 500000 && value < 700000){
            if(value==550000){
              var stepval = value - 50000;
              setMinVal(stepval);
              setminStep(200000);
            }
            else if(value==650000){
              var stepval = value + 50000;
              setMinVal(stepval);
              setminStep(300000)
            }
          }
          else if(value >= "700000" && value < "1000000"){
            var stepval = value + 50000;
            setMinVal(stepval);
            setminStep(500000);
          }
          else if(value >= "1000000" && value < "2000000"){
            var stepval = value - 50000;
            setMinVal(stepval);
            setminStep(500000);
          }
          else if(value >= "2000000" && value < "4000000"){
            var stepval = value - 50000;
            setMinVal(stepval);
            setminStep(1000000)
          }
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
        name="car_min_price"
      />
      <input
        type="range"
        min={min}
        max={max}
        step={MaxStep}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          // const value = Number(event.target.value);
          setMaxVal(value);
          maxValRef.current = value;

          // else if(value >= 1500000 && value <= 3000000){
          //   // setMaxVal(50000000);
          //   setmaxStep(1500000-50000);
          // }
          // else if(value >= 1000000 && value <= 1500000){
          //   // setMaxVal(50000000);
          //   setmaxStep(500000);
            
          // }
          // else if(value > 700000 && value <= 1000000){
          //   // setMaxVal(50000000);
          //   setmaxStep(300000);
          // }
          // else if(value > 500000 && value <= 700000){
          //   // setMaxVal(50000000);
          //   setmaxStep(200000);
          // }
          // else if(value > 300000 && value <= 500000){
          //   // setMaxVal(50000000);
          //   setmaxStep(100000);
          // }
          // else if(value > 50000 && value <= 300000){
          //   // setMaxVal(50000000);
          //   setmaxStep(50000);
          // }
          if(value > 3000000){
            setMaxVal(3000000);
            setmaxStep(1000000);
          }
          else if(value > 2000000 && value < 3000000){
            var stepval = value - 50000;
            setMaxVal(stepval);
            setmaxStep(500000);
          }
          else if(value > 1500000 && value < 2000000){
            var stepval = value - 50000;
            setMaxVal(stepval);
            setmaxStep(500000);
          }
          else if(value > 1000000 && value < 1500000){
            var stepval = value - 50000;
            setMaxVal(stepval);
          }
          else if(value > 500000 && value < 1000000){
            var stepval = value + 50000;
            setMaxVal(stepval);
            setmaxStep(200000);
          }
          else if(value > 400000 && value < 700000){
            var stepval = value + 50000;
            setMaxVal(stepval);
            setmaxStep(100000);
          }
        }}
        className="thumb thumb--right"
        name="car_max_price"
      />

      <div className="slider">
        <div className="slider__track" />
        <div className="slider__left-value">Rs. {new Intl.NumberFormat('US').format(minVal)}</div>
        <div className="slider__right-value">Rs. {new Intl.NumberFormat('US').format(maxVal)}</div>
        <div ref={range} className="slider__range" />
        <div className="slider__left-name">Minimum Price</div>
        <div className="slider__right-name">Maximum Price</div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;
