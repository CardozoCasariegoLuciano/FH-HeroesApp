import { heroes } from "../heroes/data";
export const getHeroeByName = (name: string) => {
  name = name.toLowerCase().trim();

  if (name.length === 0) return [];

  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
