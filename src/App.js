import logo from './logo.svg';
import './App.css'
import React, {useState} from "react"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [valuecounter, setvaluecounter] = useState(0)
    return (
        <div className="App">

            <h2 className={"App-header"}>Welcome To Clicker App </h2>
            <div>
                <h5>{valuecounter}</h5>
                <Button onClick={() => setvaluecounter(valuecounter + 1)}
                        variant="outline-primary">Click Here</Button>{' '}
            </div>
        </div>
    );
}

export default App;
