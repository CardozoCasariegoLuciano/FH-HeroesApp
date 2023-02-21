import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../../helpers/getHeroeById";

const HeroPage = () => {
  const navigate = useNavigate();
  const { heroe_id } = useParams();
  const heroe = useMemo(() => getHeroeById(heroe_id!), [heroe_id]);

  const goBack = () => {
    navigate(-1);
  };

  if (!heroe) {
    return <Navigate to={"/marvel"} />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          className="img-thumbnail"
          src={`/assets/heroes/${heroe.id}.jpg`}
          alt={heroe.superhero}
        />
      </div>

      <div className="col-8">
        <h3>{heroe.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alger ego: </b>
            {heroe.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {heroe.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearence: </b>
            {heroe.first_appearance}
          </li>
        </ul>

        <h5 className="mt-4">Characters</h5>
        <p>{heroe.characters}</p>

        <button className="btn btn-outline-primary" onClick={goBack}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
