import React, { useState } from "react";

export default function Card(props) {
  const [active, setActive] = useState(false);
  const song = props.props;
  return(
  <div onClick={() => setActive(!active)} className="shadow-lg p-3 my-9 rounded-xl m-2 block flex-grow font-serif">
    <h1 className="text-xl font-bold">{song.artist}</h1>
    <p className="font-semibold">{song.song}</p>
    {song.melody ? <p className="italic">Melodi: {song.melody}</p> : ''}
    <pre className={active ? 'my-6 font-serif text-sm whitespace-pre-line' : 'hidden'}>
      {song.lyrics}
    </pre>
  </div>);
}