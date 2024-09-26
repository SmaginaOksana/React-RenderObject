import style from "./event.module.scss";

const Event = (props) => {
  let className = "";
  return props.data.map((item, index) => {
    const { assist, player, team, match_time } = item;
    for (let key in item) {
      if (key.slice(0, 5) === "event") {
        className = "event: " + item[key];
      }
    }
    return (
      <div className={style.event} key={index}>
        <h1 className={style.h1}>{className}</h1>
        <h2 className={style.h2}>assist: {assist}</h2>
        <h2 className={style.h2}>player: {player}</h2>
        <h2 className={style.h2}>team: {team}</h2>
        <h2 className={style.h2}>match_time: {match_time}</h2>
      </div>
    );
  });
};

export default Event;
