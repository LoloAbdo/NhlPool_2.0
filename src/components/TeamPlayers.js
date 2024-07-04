import "./TeamPlayers.css";
import PlayerStats_20232024_RS_PL from "../data/PlayersStats/PlayerStats_20232024_RS_PL.json";
import GoalieStats_20232024_RS_PL from "../data/GoaliesStats/GoalieStats_20232024_RS_PL.json";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export const TeamPlayers = () => {
  const params = useParams();
  const [teamRoster_RS_PL, setTeamRoster_RS_PL] = useState([]); // Regular season + Playoff
  const location = useLocation();
  const rawTricode = location.state || "";
  const widthColumn = 150;

  useEffect(() => {
    console.log(rawTricode);
    let filterArrayPlayer = PlayerStats_20232024_RS_PL.filter(
      (item) => item._1 == rawTricode
    );
    let filterArrayGoalies = GoalieStats_20232024_RS_PL.filter(
      (item) => item._1 == rawTricode
    );
    console.log(filterArrayPlayer);
    setTeamRoster_RS_PL(filterArrayPlayer);
  }, []);

  const columnsPlayers = [
    {
      field: "Name",
      headerName: "Player Name",
      width: widthColumn,
      description: "Name of the player",
    },
    {
      field: "_1",
      headerName: "Team",
      width: widthColumn,
      description: "Team",
    },
    {
      field: "_2",
      headerName: "Pos",
      width: widthColumn,
      description: "Position of the player",
    },
    {
      field: "_3",
      headerName: "GP",
      width: widthColumn,
      description: "Game played",
    },
    {
      field: "Overall",
      headerName: "G",
      width: widthColumn,
      description: "Goals",
    },
    {
      field: "_4",
      headerName: "A",
      width: widthColumn,
      description: "Assists",
    },
    {
      field: "_5",
      headerName: "Pts",
      width: widthColumn,
      description: "Points",
    },
    {
      field: "_6",
      headerName: "+/-",
      width: widthColumn,
      description: "Differencial",
    },
    {
      field: "_7",
      headerName: "PIM",
      width: widthColumn,
      description: "Penality minutes",
    },
    {
      field: "_8",
      headerName: "SOG",
      width: widthColumn,
      description: "Shots on goal",
    },
    {
      field: "_9",
      headerName: "GWG",
      width: widthColumn,
      description: "Game winning goal",
    },
    {
      field: "PP",
      headerName: "PPG",
      width: widthColumn,
      description: "Power Play goals",
    },
    {
      field: "_10",
      headerName: "PPA",
      width: widthColumn,
      description: "Power Play assists",
    },
    {
      field: "SH",
      headerName: "PKG",
      width: widthColumn,
      description: "Penality Kill goals",
    },
    {
      field: "_11",
      headerName: "PKA",
      width: widthColumn,
      description: "Penality Kill assists",
    },
    {
      field: "Defense",
      headerName: "Hits",
      width: widthColumn,
      description: "Hits",
    },
    {
      field: "Defense",
      headerName: "Hits",
      width: widthColumn,
      description: "Hits",
    },
    {
      field: "_12",
      headerName: "BS",
      width: widthColumn,
      description: "Blocked Shots",
    },
  ];

  return (
    <div>
      <div className="Team-Logo-div">
        <img
          alt={rawTricode}
          className="Team-Logo-img"
          src={`/pictures/${rawTricode}.png`}
        />
      </div>
      <div className="Team-Header">
        <h1>{params.teamId}</h1>
      </div>
      <div className="Main-DataGrid">
        <Box height={350} width={1500}>
          <DataGrid
            getRowId={(obj) => obj.Name}
            columns={columnsPlayers}
            rows={teamRoster_RS_PL}
            density="standard"
            disableColumnResize={true}
            disableColumnMenu={true}
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: "white",
              color: "white",
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
            }}
          />
        </Box>
      </div>
    </div>
  );
};
