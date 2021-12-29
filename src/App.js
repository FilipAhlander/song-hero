import songs from './songs/index';
import Card from './components/card';
console.log(songs.length);

function App() {
  return (
    <div className="App">
      <h1 className='font-serif text-2xl font-bold p-9 tracking-widest hover:motion-safe:animate-bounce'>Song hero</h1>
      <div className="container mx-auto mt-9 justify-center flex-row">
        {songs.map((song, index) => <Card props={song} key={index} />)}
      </div>
      
    </div>
  );
}

export default App;
