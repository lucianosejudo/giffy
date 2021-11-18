import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function GistList() {
  const [gifs, setGifs] = useState([]);

  useEffect(async () => {
    const gifs = await getGifs("doom");
    setGifs(gifs);
  }, []);

  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} url={url} title={title} id={id} />
      ))}
    </div>
  );
}
