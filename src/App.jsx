import { useEffect, useState } from 'react';
import { BasicForm } from './components';
import Button from 'react-bootstrap/Button';

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [name, setName] = useState("ali");

  useEffect(() => {
    console.log("case 1", count);
  }, [])

  useEffect(() => {
    console.log("Case 2", count);
  })

  useEffect(() => {
    console.log("Case 3", count);
  },[count])

  useEffect(() => {
    console.log("Case 4", count);
  },[count,name])

  return (
    <div className='container'>
      <h1>{name}</h1>
      <h1>{count}</h1>
      <button onClick={()=>{setName("Gulzar")}}>Update Name</button>
      <Button className="me-2" onClick={() => setCount(count + 1)}>Increment</Button>
      <Button variant="secondary" onClick={() => setCount(count - 1)}>Decrement</Button>
    </div>
  );
}

export default App;
