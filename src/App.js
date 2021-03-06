import { useState } from 'react';
import songs from './songs/index';
import Card from './components/card';
console.log(songs.length);

function App() {
  const [filter, setFilter] = useState('');
  return (
    <div className="App">
      <div className="container mx-auto mt-9 justify-center flex-row">
      <h1 className='font-serif text-2xl font-bold p-9 tracking-widest hover:motion-safe:animate-bounce'>Song hero</h1>
        <form>
          <input
          className='shadow-xl ml-2 rounded-md'
            type="text"
            value={filter}
            name="filter"
            onChange={(event) => setFilter(event.target.value)}/>
            <label for="filter" className='ml-2' onClick={() => setFilter('')}>&#8592; Filter</label>
        </form>
        {songs
          .sort((a, b) => (a.artist > b.artist) ? 1 : -1)
          .filter((song) => (
            song.artist.toUpperCase().includes(filter.toUpperCase())
            || song.song.toUpperCase().includes(filter.toUpperCase())
            || song.lyrics.toUpperCase().includes(filter.toUpperCase())))
          .map((song, index) => <Card props={song} key={index} />)}
      </div>
      
    </div>
  );
}

export default App;
