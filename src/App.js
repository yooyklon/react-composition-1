import Card from "./components/Card";

function App() {
  return <Card>
    <div className="card-content">
      <h2 className="card-title">Card title</h2>
      <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, expedita.</p>
      <button className="card-btn">Go somewhere</button>
    </div>
  </Card>;
}

export default App;
