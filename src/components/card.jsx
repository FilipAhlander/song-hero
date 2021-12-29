import React, { useState } from "react";

export default function Card(props) {
  const [active, setActive] = useState(false);
  const song = props.props;
  return(
  <div onClick={() => setActive(!active)} className="shadow-lg p-9">
    <h1>{song.artist}</h1>
    <p>{song.title}</p>
    <p>{song.melody}</p>
    <pre className={active ? 'block' : 'hidden'}>{song.lyrics}</pre>
  </div>);
}