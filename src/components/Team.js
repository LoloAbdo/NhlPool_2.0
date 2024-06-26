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

  const columns = [
    { field: "Season", headerName: "Season" },
    { field: "GP", headerName: "Game played" },
    { field: "W", headerName: "Wins" },
    { field: "L", headerName: "Loses" },
    { field: "OT", headerName: "Overtime loses" },
    { field: "P", headerName: "Points" },
    { field: "P%", headerName: "Point percentage" },
    { field: "RW", headerName: "Regulation wins" },
    { field: "ROW", headerName: "Regulation + overtime wins" },
    { field: "S/O Win", headerName: "Shootout Win" },
    { field: "GF", headerName: "Goal for" },
    { field: "GA", headerName: "Goal against" },
    { field: "GF/GP", headerName: "Goal for per game played" },
    { field: "GA/GP", headerName: "Goal against per game played" },
    { field: "PP%", headerName: "Power play percentage" },
    { field: "PK%", headerName: "Penality kill percentage" },
    { field: "Net PP%", headerName: "Power play net percentage" },
    { field: "Net PK%", headerName: "Penality kill net percentage" },
    { field: "Shots/GP", headerName: "Shots per game played" },
    { field: "SA/GP", headerName: "Save per game played" },
    { field: "FOW%", headerName: "Face off wins percentage" },
  ];

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
    <Box>
      <DataGrid
        getRowId={(obj) => obj.Season}
        columns={columns}
        rows={teamStats}
      />
    </Box>
  );
};
