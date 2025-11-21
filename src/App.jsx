import { useState } from 'react';
import { BasicForm } from './components';
import Button from 'react-bootstrap/Button';

function App() {
  const [type, setType] = useState('login');

  return (
    <div className='container'>
      <div className="row justify-content-center p-5">
        <div className="col-6">
          <h2>{type === "login" ? "Login" : "Register"}</h2>
          <BasicForm />
          <Button onClick={()=>{{type === "login"  ? setType("register") : setType("login")}}} variant="link">{type === "login" ? "Register" : "Login"} Now</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
