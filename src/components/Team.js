import "./Team.css";
import { useParams } from "react-router-dom";
import teamsSeason202324 from "../data/Summary_teamStats20232024.json";
import teamsSeason202223 from "../data/Summary_teamStats20222023.json";
import teamsSeason202122 from "../data/Summary_teamStats20212022.json";
import teamsSeason202021 from "../data/Summary_teamStats20202021.json";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export const Team = () => {
  const params = useParams();
  const [teamStats, setTeamStats] = useState([]);
  const widthColumn = 150;

  // Colums
  const columns = [
    {
      field: "Season",
      headerName: "Season",
      width: widthColumn,
      description: "Season",
    },
    {
      field: "GP",
      headerName: "GP",
      width: widthColumn,
      description: "Game Played",
    },
    { field: "W", headerName: "W", width: widthColumn, description: "Wins" },
    { field: "L", headerName: "L", width: widthColumn, description: "Losses" },
    {
      field: "OT",
      headerName: "OT",
      width: widthColumn,
      description: "Overtime Losses",
    },
    {
      field: "P",
      headerName: "PTS",
      width: widthColumn,
      description: "Points",
    },
    {
      field: "P%",
      headerName: "P%",
      width: widthColumn,
      description: "Point percentage",
    },
    {
      field: "RW",
      headerName: "RW",
      width: widthColumn,
      description: "Regulation wins",
    },
    {
      field: "ROW",
      headerName: "ROW",
      width: widthColumn,
      description: "Regulation + Overtime Wins",
    },
    {
      field: "S/O Win",
      headerName: "S/O Win",
      width: widthColumn,
      description: "Shootout Wins",
    },
    {
      field: "GF",
      headerName: "GF",
      width: widthColumn,
      description: "Goal For",
    },
    {
      field: "GA",
      headerName: "GA",
      width: widthColumn,
      description: "Goal Against",
    },
    {
      field: "GF/GP",
      headerName: "GF/GP",
      width: widthColumn,
      description: "Goal For Per Game Played",
    },
    {
      field: "GA/GP",
      headerName: "GA/GP",
      width: widthColumn,
      description: "Goal Against Per Game Played",
    },
    {
      field: "PP%",
      headerName: "PP%",
      width: widthColumn,
      description: "Power Play Percentage",
    },
    {
      field: "PK%",
      headerName: "PK%",
      width: widthColumn,
      description: "Penality Kill Percentage",
    },
    {
      field: "Net PP%",
      headerName: "Net PP%",
      width: widthColumn,
      description: "Net Power Play",
    },
    {
      field: "Net PK%",
      headerName: "Net PK%",
      width: widthColumn,
      description: "Net Penality kill",
    },
    {
      field: "Shots/GP",
      headerName: "Shots/GP",
      width: widthColumn,
      description: "Shots Per Game Played",
    },
    {
      field: "SA/GP",
      headerName: "SA/GP",
      width: widthColumn,
      description: "Save Per Game Played",
    },
    {
      field: "FOW%",
      headerName: "FOW%",
      width: widthColumn,
      description: "Face-Off Wins Percentage",
    },
  ];

  //Loading data in 1 big array
  useEffect(() => {
    let search = teamsSeason202324.findIndex((item) =>
      item.Team.includes(params.teamId)
    );
    let team = [...teamStats];
    team.push(teamsSeason202324[search]); // 2023-2024

    search = teamsSeason202223.findIndex((item) =>
      item.Team.includes(params.teamId)
    );
    team.push(teamsSeason202223[search]); // 2022-2023

    search = teamsSeason202122.findIndex((item) =>
      item.Team.includes(params.teamId)
    );
    team.push(teamsSeason202122[search]); // 2021-2022

    search = teamsSeason202021.findIndex((item) =>
      item.Team.includes(params.teamId)
    );
    team.push(teamsSeason202021[search]); // 2020-2021

    // set the state
    setTeamStats(team);
  }, []);

  return (
    <div className="Main-DataGrid">
      <Box
        height={350}
        width={1500}
        sx={{ "--DataGrid-containerBackground": "#ad5151 !important" }}
      >
        <DataGrid
          getRowId={(obj) => obj.Season}
          columns={columns}
          rows={teamStats}
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
  );
};
