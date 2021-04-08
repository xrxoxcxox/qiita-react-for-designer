import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SomeComponent from './SomeComponent'

const firstName = "John"
const lastName = "Doe"
const fullName = `${firstName} ${lastName}`

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello, {fullName}
          </p>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <ul className="linkList">
            <li className="linkItem">
              <Link to="/" className="link">Home</Link>
            </li>
            <li className="linkItem">
              <Link to="/about" className="link">About</Link>
            </li>
            <li className="linkItem">
              <Link to="/users" className="link">Users</Link>
            </li>
          </ul>
        </header>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return (
    <>
      <h2>About</h2>
      <SomeComponent />
    </>
  );
}

function Users() {
  return (
    <>
      <h2>Users</h2>
      <SomeComponent />
    </>
  );
}

export default App;
