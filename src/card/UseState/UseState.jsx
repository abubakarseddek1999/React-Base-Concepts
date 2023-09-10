import { useState } from 'react';

const UseState = () => {
    const arrayOfObjects = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'David' },
        { id: 5, name: 'Eve' },
        { id: 6, name: 'Frank' },
        { id: 7, name: 'Grace' },
        { id: 8, name: 'Hannah' },
        { id: 9, name: 'Ivy' },
        { id: 10, name: 'Jack' },
    ];

    const [data, setData] = useState(arrayOfObjects);
    const handleRemoveAll= ()=>setData([]);
    const handleSingleRemove =(id)=> {
        const filterData =data.filter((item)=> item.id !== id);
        setData(filterData);
    }
   

    return (
        <div className=' my-12 text-4xl text-white text-center'>
            {data&&
                data?.map((item) => <div  key={item.id}>
                    <h1> {item.name} </h1>
                    <button onClick={()=> handleSingleRemove(item.id)} className='btn btn-sm btn-primary'>REMOVE</button>
                </div>)
            }

            <button onClick={handleRemoveAll} className='btn mt-5 btn-secondary'>remove all</button>
        </div>
    );
};

export default UseState;