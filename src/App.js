import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import AnotherComponent from './AnotherComponent'

const firstName = "John"
const lastName = "Doe"
const fullName = `${firstName} ${lastName}`

function App() {
  const [status, setStatus] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, {fullName}
        </p>
        <AnotherComponent status={status} onClick={() => setStatus(!status)} />
      </header>
    </div>
  );
}

export default App;
