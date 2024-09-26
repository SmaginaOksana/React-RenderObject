import style from "./tournament.module.scss";
import Event from "../Event/Event";

function Tournament(props) {
  return props.data.map((item, index) => {
    const { location, name, prize_money, year } = item;

    const events = [];
    for (let key in item) {
      if (key.slice(0, 5) === "event") {
        events.push(item[key]);
      }
    }

    return (
      <div className={style.tournament} key={index}>
        <h1 className={style.h1}>
          tournament: {"\n"}
          {name}
        </h1>
        <h2 className={style.h2}>location: {location}</h2>
        <h2 className={style.h2}>prize_money: {prize_money}</h2>
        <h2 className={style.h2}>year: {year}</h2>
        <div className={style.events}>
          <Event data={events} />
        </div>
      </div>
    );
  });
}

export default Tournament;
