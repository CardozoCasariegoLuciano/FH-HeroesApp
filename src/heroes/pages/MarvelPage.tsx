import {Publishers} from "../../helpers/getHeroesByPublisher"
import HeroesList from "../components/HeroesList"

const MarvelPage = () =>{
  return( 
    <>
      <h1>Marvel Comics</h1>
      <hr/>
      <HeroesList publisher={Publishers.MARVEL}/>
    </>
 )
}

export default MarvelPage
