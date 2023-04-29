import logo from './logo.svg';
import './App.css';
import SubmissionCard from './SubmissionCard';

function App() {
  return (
    <div className="App">
      <div className='songssent'>
        <h3>2597 Songs Sent</h3>
      </div>
      <SubmissionCard />
    </div>
  );
}

export default App;
