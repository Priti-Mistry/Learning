import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/hello_JSX';
import Message from './components/Message';
import Person from './components/Person';
import EventBlind from './components/EventBlind';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';


function App() {
  return (
    <div className="App">
  <NameList/>


    {/* <UserGreeting/> */}
    {/* <EventBlind/> */}
    {/* <Person/> */}
{/* <Message/> */}


      {/* <Greet name='Bruce' heroname='batman'>
      <p>
        this is an chlid component
      </p>
      </Greet>
      <Greet name='clark' heroname='Superman' />
      <Greet name='Diana' heroname='Wonder Woman' />

      <Welcome name='Bruce' heroname='batman'/> 
      <Hello/> */}
    </div>
  );
}

export default App;
