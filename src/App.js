import songs from './songs/index';
import Card from './components/card';
console.log(songs.length);

function App() {
  return (
    <div className="App">
      <div className="container mx-auto mt-9">
        {songs.map((song, index) => <Card props={song} key={index} />)}
      </div>
      
    </div>
  );
}

export default App;
