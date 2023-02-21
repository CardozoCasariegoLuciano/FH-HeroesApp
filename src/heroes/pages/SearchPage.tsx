import queryString from "query-string";
import { FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroeByName } from "../../helpers/getHeroeByName";
import { useForm } from "../../hooks/useForm";
import SingleHeroe from "../components/SingleHeroe";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroeByName(q as string);

  const showSearch = q!.length === 0;
  const showError = q!.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q as string,
  });

  const onSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Serching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div
            className="alert alert-primary"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>

          <div
            className="alert alert-danger"
            style={{ display: showError ? "" : "none" }}
          >
            There is not results for <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <SingleHeroe heroe={hero} key={hero.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
