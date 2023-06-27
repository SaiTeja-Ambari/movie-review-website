import './App.css';
import ListMovieComponent from './components/ListMovieComponent';

function App() {
  const myStyle = {
  width : '-webkit-fill-available'
  };

  return (
    <div className='container' style={myStyle}> 
      <ListMovieComponent/>
    </div>
  );
}

export default App;
