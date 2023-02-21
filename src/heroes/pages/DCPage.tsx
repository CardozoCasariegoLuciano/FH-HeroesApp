import {Publishers} from "../../helpers/getHeroesByPublisher";
import HeroesList from "../components/HeroesList";

const DCPage = () => {

  return (
    <>
      <h1>DC Comics</h1>
      <hr/>
      <HeroesList publisher={Publishers.DC}/>
    </>
  );
};

export default DCPage;
