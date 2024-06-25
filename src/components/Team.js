import { useParams } from "react-router-dom";
import teamsSeason202324 from "../data/Summary_teamStats20232024.json";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

export const Team = () => {
  const params = useParams();
  const [teamParam, setTeam] = useState();

  useEffect(() => {
    const st = teamsSeason202324.findIndex((item) =>
      item.Team.includes(params.teamId)
    );

    setTeam(teamsSeason202324[st]);
  }, []);

  return (
    <div>
      <h1>{teamParam?.Team}</h1>
    </div>
  );
};
