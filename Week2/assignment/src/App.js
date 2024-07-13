import './App.css';

function App() {
  // class is reserved keyword in JavaScript, so we use className instead
  const val = 31;
  const liked = 10;
  const link ="https://reactjs.org";
  // any js code can be written before return statement
  return (
    <div className="App"> 
      {/* <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="content">
        <h1>Hello World{val}</h1>
        <p>Liked {liked}</p>
        <p>{[1,2,3]}</p>
        <a href={link}> Site</a>
      </div>
    </div>
  );
}

export default App;
