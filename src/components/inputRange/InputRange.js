import React from 'react';
import IR from 'react-input-range';
import "react-input-range/lib/css/index.css";
import { debounce } from 'Util/utils';

const InputRange = (props) => {
  const { input: { value, onChange}, maxValue, minValue} = props;
  return (
    <IR
      maxValue={maxValue}
      minValue={minValue}
      formatLabel={val => `${val}`}
      value={value}
      step={50}
      onChange={val => debounce(onChange(val), 300)}
      onChangeComplete={val => onChange(val)} />
   );
}
 
export default InputRange;