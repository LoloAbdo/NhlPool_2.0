import "./TeamPlayers.css";

//Players Regular season + Playoff
import PlayerStats_20232024_RS_PL from "../data/PlayersStats/PlayerStats_20232024_RS_PL.json";
import PlayerStats_20222023_RS_PL from "../data/PlayersStats/PlayerStats_20222023_RS_PL.json";
import PlayerStats_20212022_RS_PL from "../data/PlayersStats/PlayerStats_20212022_RS_PL.json";
import PlayerStats_20202021_RS_PL from "../data/PlayersStats/PlayerStats_20202021_RS_PL.json";

import GoalieStats_20232024_RS_PL from "../data/GoaliesStats/GoalieStats_20232024_RS_PL.json";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const TeamPlayers = () => {
  const params = useParams();
  const [teamPlayersRoster, setPlayersRoster] = useState([]); // Regular season + Playoff
  const [teamGoaliesRoster, setGoaliesRoster] = useState([]); // Regular season + Playoff
  const [season, setSeason] = useState("");
  const [playerType, setPlayerType] = useState("");
  const location = useLocation();

  const rawTricode = location.state || "";
  const widthColumn = 150;

  const handleChangeSeason = (e) => {
    let filterArrayPlayer;
    switch (e.target.value) {
      case "2023-2024":
        filterArrayPlayer = PlayerStats_20232024_RS_PL.filter(
          (item) => item._1 == rawTricode
        );
        break;

      case "2022-2023":
        filterArrayPlayer = PlayerStats_20222023_RS_PL.filter(
          (item) => item._1 == rawTricode
        );
        break;

      case "2021-2022":
        filterArrayPlayer = PlayerStats_20212022_RS_PL.filter(
          (item) => item._1 == rawTricode
        );
        break;
      case "2020-2021":
        filterArrayPlayer = PlayerStats_20202021_RS_PL.filter(
          (item) => item._1 == rawTricode
        );
        break;
    }

    setSeason(e.target.value);
    console.log(filterArrayPlayer);
    setPlayersRoster(filterArrayPlayer);
  };

  const handleChangePlayerType = (e) => {
    setPlayerType(e.target.value);
  };

  useEffect(() => {
    console.log(rawTricode);
    let filterArrayPlayer = PlayerStats_20232024_RS_PL.filter(
      (item) => item._1 == rawTricode
    );

    let filterArrayGoalies = GoalieStats_20232024_RS_PL.filter(
      (item) => item._1 == rawTricode
    );

    setPlayerType("Players"); //default value
    setSeason("2023-2024"); //default value
    setPlayersRoster(filterArrayPlayer);
    setGoaliesRoster(filterArrayGoalies);
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

  const columnsGoalies = [
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
      description: "Team of the player",
    },
    {
      field: "_2",
      headerName: "GP",
      width: widthColumn,
      description: "Game Played",
    },
    {
      field: "Goalies",
      headerName: "W",
      width: widthColumn,
      description: "Games Won",
    },
    {
      field: "_3",
      headerName: "L",
      width: widthColumn,
      description: "Games Lost",
    },
    {
      field: "_4",
      headerName: "OTL",
      width: widthColumn,
      description: "Overtime losses",
    },
    {
      field: "_5",
      headerName: "GAA",
      width: widthColumn,
      description: "Goals against average",
    },
    {
      field: "_6",
      headerName: "GA",
      width: widthColumn,
      description: "Goals against",
    },
    {
      field: "_7",
      headerName: "SA",
      width: widthColumn,
      description: "Shots against",
    },
    {
      field: "_8",
      headerName: "SV",
      width: widthColumn,
      description: "Saves",
    },
    {
      field: "_9",
      headerName: "SV%",
      width: widthColumn,
      description: "Saves Percentage",
    },
    {
      field: "_10",
      headerName: "SO",
      width: widthColumn,
      description: "Shutouts",
    },
    {
      field: "_11",
      headerName: "MIN",
      width: widthColumn,
      description: "Minutes Played",
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
      <div className="Dropdowns">
        <Box className="Box-Season">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Season</InputLabel>
            <Select
              value={season}
              onChange={handleChangeSeason}
              label=""
              defaultValue="2023-2024"
            >
              <MenuItem value={"2023-2024"}>2023-2024</MenuItem>
              <MenuItem value={"2022-2023"}>2022-2023</MenuItem>
              <MenuItem value={"2021-2022"}>2021-2022</MenuItem>
              <MenuItem value={"2020-2021"}>2020-2021</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className="Box-PlayerType">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Type</InputLabel>
            <Select
              value={playerType}
              onChange={handleChangePlayerType}
              label="PlayerType"
              defaultValue={"Players"}
            >
              <MenuItem value={"Players"}>Players</MenuItem>
              <MenuItem value={"Goalies"}>Goalies</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="Main-DataGridPlayers">
        <Box height={350} width={1500}>
          <DataGrid
            getRowId={(obj) => obj.Name}
            columns={playerType == "Players" ? columnsPlayers : columnsGoalies}
            rows={
              playerType == "Players" ? teamPlayersRoster : teamGoaliesRoster
            }
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
