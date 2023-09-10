import React, { useEffect, useState } from 'react';

const FetchData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const FetchData = async () => {
            try {
                const URL = `https://openapi.programming-hero.com/api/videos/category/1000`
                const res = await fetch(URL)
                const data = await res.json()
                setData(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        FetchData()
        

    }, [])
    console.log(data);

    return (
        <div>
            {
                data &&
                data.map((item) => <h1 className='text-3xl text-center my-10 font-bold' key={item.index}>{item.title}</h1>)
            }

        </div>
    );
};

export default FetchData;