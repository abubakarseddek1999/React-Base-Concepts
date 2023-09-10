import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [value, setValue]=useState(0);
    const [data, setData]=useState("babo");
    const handleClick =()=>{
        setValue(value+1);
    }
    const handleMinus =()=>{
        setData("Abu bakar")
    }
    useEffect(()=>{
        console.log('running from useEffect')

    },[data])
    return (
        <div className='text-center text-5xl font-medium'>
            <h1>{value}</h1>
            <button className='btn mb-12 border-t-cyan-700' onClick={handleClick}>Add</button>
            <h1>{data}</h1>
            <button className='btn mb-12 border-t-cyan-700' onClick={handleMinus}>Change</button>

            
        </div>
    );
};

export default UseEffect;