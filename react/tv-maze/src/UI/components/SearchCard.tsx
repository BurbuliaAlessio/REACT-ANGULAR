import { useNavigate } from "react-router-dom";

const SearchCard = ({ show }: any) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${show.id}`);
  };

  return (
    <li onClick={handleClick}>
      <h3>{show.name}</h3>
      {show.image && <img src={show.image.medium} alt={show.name} />}
    </li>
  );
};

export default SearchCard;
