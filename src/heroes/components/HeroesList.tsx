import { useMemo } from "react";
import {
  getHeroesByPublisher,
  Publishers,
} from "../../helpers/getHeroesByPublisher";
import SingleHeroe from "./SingleHeroe";

const HeroesList = ({ publisher }: heroeListsProptypes) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {heroes.map((elem) => (
        <SingleHeroe key={elem.id} heroe={elem} />
      ))}
    </div>
  );
};

interface heroeListsProptypes {
  publisher: Publishers;
}

export default HeroesList;
