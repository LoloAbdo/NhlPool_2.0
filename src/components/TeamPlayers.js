import "./TeamPlayers.css";
import PlayerStats_20202021_RS_PL from "../data/PlayersStats/PlayerStats_20202021_RS_PL.json";
import PlayerStats_20202022_RS_PL from "../data/PlayersStats/PlayerStats_20202021_RS_PL.json";
import PlayerStats_20202023_RS_PL from "../data/PlayersStats/PlayerStats_20202021_RS_PL.json";
import PlayerStats_20202024_RS_PL from "../data/PlayersStats/PlayerStats_20202021_RS_PL.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const TeamPlayers = () => {
  const params = useParams();
  const [teamRoster, setTeamRoster] = useState([]);

  useEffect(() => {
    // let search = use;
  });

  // for data grid column
  // {
  //   "": "Player Name",
  //   "_1": "Team",
  //   "_2": "Pos",
  //   "_3": "Games",
  //   "Overall": "G",
  //   "_4": "A",
  //   "_5": "Pts",
  //   "_6": "+/-",
  //   "_7": "PIM",
  //   "_8": "SOG",
  //   "_9": "GWG",
  //   "PP": "G",
  //   "_10": "A",
  //   "SH": "G",
  //   "_11": "A",
  //   "Defense": "Hits",
  //   "_12": "BS"
  // },

  return (
    <div>
      <h1>Players</h1>
    </div>
  );
};
