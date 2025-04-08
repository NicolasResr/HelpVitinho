import axios from "axios";

const api = axios.create({
  baseURL: "https://collectionapi.metmuseum.org/public/collection/v1",
});

// Função para buscar obras com artistas únicos
export const buscarObrasComAutoresUnicos = async (maximoObras = 4) => {
  try {
    // Passo 1: buscar todos os IDs
    const res = await api.get("/objects");
    const allIds = res.data.objectIDs;

    // Embaralhar os IDs pra obter aleatórios
    const idsAleatorios = allIds.sort(() => 0.5 - Math.random());

    const artistasUnicos = new Set();
    const obrasSelecionadas = [];

    for (let id of idsAleatorios) {
      if (obrasSelecionadas.length >= maximoObras) break;

      const obraRes = await api.get(`/objects/${id}`);
      const obra = obraRes.data;

      const artista = obra.artistDisplayName || "Desconhecido";

      if (!artistasUnicos.has(artista) && obra.primaryImageSmall) {
        artistasUnicos.add(artista);

        obrasSelecionadas.push({
          title: obra.title,
          artist: artista,
          date: obra.objectDate || "Data desconhecida",
          image: obra.primaryImageSmall,
        });
      }
    }

    return obrasSelecionadas;
  } catch (err) {
    console.error("Erro ao buscar obras do MET:", err);
    return [];
  }
};

export default api;
