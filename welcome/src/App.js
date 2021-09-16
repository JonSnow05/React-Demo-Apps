import logo from './logo.svg';
import './App.css';
import PersonList from './Components/ListAndKey/PersonList'
import Greet from './Components/Greet';
import Welcome from './Components/Wecome';
import HelloJxs from './Components/HelloJxs';
import StateExmpl from './Components/StateExmpl'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {/* <Greet name="bruce" hero="Batman">
           <p>This child element</p>
           </Greet>
         <Greet name="clark" hero="Superman"/>
         <Greet name="diana" hero="Wonder Woman"/>
         <Welcome name="bruce" hero="Batman"></Welcome>
         <Welcome name="clark" hero="Superman"></Welcome>
         <HelloJxs/> */}
         {/* <StateExmpl /> */}
         <PersonList />
        </p>
      </header>
    </div>
  );
}

export default App;
