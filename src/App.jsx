import { BasicForm } from './components';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className='container'>
      <div className="row justify-content-center p-5">
        <div className="col-6">
          <h2>Login</h2>
          <BasicForm />
          <Button variant="link">Register Now</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
