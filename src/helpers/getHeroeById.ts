import { heroes } from "../heroes/data";

export const getHeroeById = (id: string) => {
  return heroes.find(heroe => (heroe.id === id))
}
