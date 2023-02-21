import { heroes } from "../heroes/data";

export enum Publishers {
  MARVEL = "Marvel Comics",
  DC = "DC Comics",
}

export const getHeroesByPublisher = (publisher: Publishers) => {
  return heroes.filter(heroe => heroe.publisher === publisher)
}
