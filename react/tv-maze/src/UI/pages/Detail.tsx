import { useParams } from "react-router-dom";
import { fetchShowsById } from "../../api/show.api";
import { useEffect, useState } from "react";

const Detail = () => {
  const { id } = useParams();
  const [show, setShow] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchShowsById(id);
        setShow(data);
      } catch (err) {
        setError("Errore durante il caricamento");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Dettaglio Show</h1>
      <p>
        <h1>{show.name}</h1>
        {show.image && <img src={show.image.medium} alt={show.name} />}
        <p>
          <strong>Genere:</strong> {show.genres.join(", ")}
        </p>
        <p>
          <strong>Lingua:</strong> {show.language}
        </p>
        <p>
          <strong>Tipo:</strong> {show.type}
        </p>
        <p>
          <strong>Stato:</strong> {show.status}
        </p>
        <p>
          <strong>In onda:</strong> {show.schedule.days.join(", ")} alle{" "}
          {show.schedule.time}
        </p>
        <p>
          <strong>Rete:</strong> {show.network?.name} (
          {show.network?.country?.name})
        </p>
        <p>
          <strong>Data di inizio:</strong> {show.premiered}
        </p>
        <p>
          <strong>Data di fine:</strong> {show.ended}
        </p>
        <p>
          <strong>Rating medio:</strong> {show.rating?.average || "N/A"}
        </p>
      </p>
    </div>
  );
};
export default Detail;
