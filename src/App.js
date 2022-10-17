import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import api from "./api/api.json";
import Table from "./Table";
import "./App.css";
function App() {
  const [dataTable, setDataTable] = useState([]);
  useEffect(() => {
    setDataTable(api);
  }, []);
  const column = [
    { heading: "Id", value: "id" },
    { heading: "Season", value: "season" },
    { heading: "City", value: "city" },
    { heading: "Date", value: "date" },
    { heading: "Team1", value: "team1" },
    { heading: "Team2", value: "team2" },
    { heading: "Toss_winner", value: "toss_winner" },
    { heading: "Toss_decision", value: "toss_decision" },
    { heading: "Result", value: "result" },
    { heading: "Dl_applied", value: "dl_applied" },
    { heading: "Winner", value: "winner" },
    { heading: "Win_by_runs", value: "win_by_runs" },
    { heading: "Win_by_wickets", value: "win_by_wickets" },
    { heading: "Player_of_match", value: "player_of_match" },
    { heading: "Venue", value: "venue" },
    { heading: "Umpire1", value: "umpire1" },
    { heading: "Umpire2", value: "umpire2" },
    { heading: "Umpire3", value: "umpire3" },
  ];
  return (
    <div className="App">
      <h1>IPL data from 2008 to 2017</h1>
      <hr />
      <hr />
      <h2> WINNER'S STATS OVER THE YEAR</h2>
      <br />
      <Plot
        data={[
          {
            x: api.map((data) => data.winner),
            y: api.map((data) => data.win_by_runs),
            type: "bar",
            mode: "lines+markers",
            marker: { color: "green" },
          },
        ]}
        layout={{
          width: 900,
          height: 600,
          title: "* Winner Vs Win by run plot",
        }}
      />
      <br />
      <Plot
        data={[
          {
            x: api.map((data) => data.winner),
            y: api.map((data) => data.win_by_wickets),
            type: "bar",
            mode: "lines+markers",
            marker: { color: "blue" },
          },
        ]}
        layout={{
          width: 900,
          height: 600,
          title: "* Winner Vs Win by wickets plot",
        }}
      />
      <br />
      <hr />
      <hr />
      <h2> MATCH DATA OF ENTIRE SEASON</h2>

      <Table data={dataTable} column={column} />
    </div>
  );
}

export default App;
