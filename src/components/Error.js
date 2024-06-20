import { Button } from "@mui/material";
import "./Error.css";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <h1 className="ErrorTitle">Something went wrong...</h1>
      <Button variant="contained" size="large">
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
};
