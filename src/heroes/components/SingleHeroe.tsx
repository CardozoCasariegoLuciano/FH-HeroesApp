import React from "react";
import { Link } from "react-router-dom";

const SingleHeroe = React.memo(({ heroe }: any) => {
  const heroImage = `/assets/heroes/${heroe.id}.jpg`;

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImage} className="card-img" alt={heroe.superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{heroe.superhero}</h5>
              <p className="card-text">{heroe.alter_ego}</p>

              {heroe.alter_ego !== heroe.characters && (
                <p>{heroe.characters}</p>
              )}

              <p className="card-text">
                <small className="text-muted">{heroe.first_appearance}</small>
              </p>

              <Link to={`/hero/${heroe.id}`}>Mas ...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default SingleHeroe;
