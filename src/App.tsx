import React from 'react';
import logo from './logo.svg';
import './App.css';
import IData from './interfaces/Data.interface';
import List from './components/List';

function App() {
  const [data, setData] = React.useState<IData["people"]>([{
    name: "Kamsi"
  }]);

  // data.map((data) => {
  //   data.name = "Kamsi"
  //   return;
  // })

  // console.log(data);
  // const updateData = () => {
  //   setData([
  //     {
  //       name: "kamsi"
  //     }
  //   ]);
  //   console.log(data);
  // }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <List people={data} name="Kamsi" setData={setData}  />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
