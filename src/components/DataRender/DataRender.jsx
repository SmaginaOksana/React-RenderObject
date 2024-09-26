import Country from "../Country/Country";

export default function DataRender(props) {
  const countries = [];
  const object = {};

  props.data.countries.map((country) => {
    const name = country.name;
    object[name] = country;
  });

  props.data.tournaments.map((tournament) => {
    for (let key in object) {
      if (tournament.country_id === object[key].country_id) {
        const name = "tournament_" + tournament.tournament_id;
        object[key][name] = tournament;
      }
    }
  });

  props.data.events.map((event) => {
    for (let key in object) {
      for (let item in object[key]) {
        if (item.slice(0, 10) === "tournament") {
          if (event.tournament_id === object[key][item].tournament_id) {
            const name = "event_" + event.event_id;
            object[key][item][name] = event;
          }
        }
      }
    }
  });

  for (let item in object) {
    countries.push(object[item]);
  }
  return (
    <>
      <Country data={countries} />
    </>
  );
}
