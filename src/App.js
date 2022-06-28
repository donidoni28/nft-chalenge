import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap';
import CardComponent from './Components/CardComponent';
import './App.css'
function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center" style={{ backgroundColor: 'hsl(217, 54%, 11%)',minHeight: `${window.innerHeight}px`}}>
        <CardComponent style={{ margin:'auto' }} />
      
    </div>
  );
}

export default App;
