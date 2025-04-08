import { useEffect, useState } from "react";
import { buscarObrasComAutoresUnicos } from "../services/axios";

const ArtworksList = () => {
  const [artworks, setArtworks] = useState([]);
  const [troca, setTroca] = useState(false);

  useEffect(() => {
    carregarObras();
  }, [troca]);

  const carregarObras = async () => {
    const obras = await buscarObrasComAutoresUnicos();
    setArtworks(obras);
  };

  const trocarObras = () => {
    setTroca((prev) => !prev);
  };

  return (
    <div className="artworks-container">
      <h1>Obras de Arte do MET</h1>
      <button onClick={trocarObras}>Trocar Obras</button>
      <div className="scroll-container">
        {artworks.map((artwork, index) => (
          <div key={index} className="obra-card">
            <h2>{artwork.title}</h2>
            <p>Artista: {artwork.artist}</p>
            <p>Ano: {artwork.date}</p>
            <img src={artwork.image} alt={artwork.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtworksList;
