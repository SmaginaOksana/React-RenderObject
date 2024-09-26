import style from "./country.module.scss";
import Tournament from "../Tournament/Tournament";

function Country(props) {
  return props.data.map((item, index) => {
    const { name, continent, population } = item;
    const className = "country" + name.slice(8, 9);

    const tournaments = [];
    for (let key in item) {
      if (key.slice(0, 10) === "tournament") {
        tournaments.push(item[key]);
      }
    }
    console.log(tournaments);

    return (
      <div className={style[className]} key={index}>
        <h1>{name}</h1>
        <h2>continent: {continent}</h2>
        <h2>population: {population}</h2>
        <Tournament data={tournaments} />
      </div>
    );
  });
}

export default Country;
