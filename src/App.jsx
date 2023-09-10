import './App.css'
import FetchData from './card/UseEfect/FetchData';
import UseEffect from './card/UseEfect/UseEffect';
import UseState from './card/UseState/UseState';
import Card from './card/card'


function App() {
  const data = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 35 },
    { id: 4, name: 'Alice', age: 28 },
  ];

  return (
    <>
    <h1 className=' text-center font-bold'> Wellcome to my Card</h1>
      <div className='grid flex-1 mx-5  gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          data.map( (item) => <Card title={item.name} key={item.id}> </Card>)
        }
        
        
      </div>
      <UseState></UseState>
      <UseEffect></UseEffect>
      <FetchData></FetchData>

    </>
  )
}

export default App
