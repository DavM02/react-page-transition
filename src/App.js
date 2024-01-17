import './global.scss'
import Nav from './components/navigation/Nav';
import './App.scss'
import RoutComponents from './components/pages/RoutComponents';
import './media.scss'
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <RoutComponents/>
      </main>
      <div className='au'>Davm02</div>
    </div>
  );
}

export default App;
