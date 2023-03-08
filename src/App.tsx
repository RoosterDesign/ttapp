import './App.css';
import ClientList from './components/ClientList/ClientList';

function App() {

  return (   
    <div className="App">
      <h1>Time Tracking App!</h1>

      <h2>Clients</h2>

      <ClientList />

    </div>
  );
}

export default App;
