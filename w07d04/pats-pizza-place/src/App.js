import './App.css';
import Header from './components/Header';
// import VisitorCounter from './components/VisitorCounter';
import Pizza from './components/Pizza';

const App = () => {
  return (
    <div className="App">
      <Header title="Pat's Pizza Place" />
      {/* <VisitorCounter /> */}
      <Pizza />
    </div>
  );
};

export default App;
