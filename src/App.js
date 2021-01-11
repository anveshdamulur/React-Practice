import './App.css';
import { ParentClass } from './Parentchild/ParentClass';
import { ChildParent } from './ChildtoParent/ChildParent'
import { ChildtoChild } from './ChildtoChild/ChildtoChild';
import { Events } from './Events/Events';
import { AxiosCall } from './ApiCallAxios/AxiosCall';

function App() {
  return (
    <div className="App">
        <h1>Welcome to react class</h1>
        <ParentClass />
        <ChildParent />
        <ChildtoChild />
        <Events />
        <AxiosCall/>
    </div>
  );
}

export default App;
