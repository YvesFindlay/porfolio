import React, { useRef, useImperativeHandle } from 'react';

import './Input.scss';

const Input = (props, ref) => {
   const { onBlur, onChange, inputState, type, placeholder, name} = props;
   const lineRef = useRef();

    const showIsValid = () => {
        lineRef.current.style.background = '#6C63FF';
    }

   const showIsInvalid = () => {
        if(!inputState.isValid){
            lineRef.current.style.background = 'red';
        }
   }

   useImperativeHandle(ref, () => {

    return {
        invalidate: showIsInvalid,
        validate: showIsValid
    }

   });

    return (
        <div ref={ref} className='input__wrap'>
            <span>
                <input onBlur={onBlur} onChange={onChange} type={type} placeholder={placeholder} name={name}  />
                <li ref={lineRef} className="line" />
            </span>
        </div>  
    )
}
   
export default React.forwardRef(Input);