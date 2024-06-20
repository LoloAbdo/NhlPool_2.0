import { Button } from "@mui/material";
import "./Main.css";
import { Link } from "react-router-dom";

export const Main = () => {
  //CSS

  return (
    <div className="ComponentApp">
      <div id="NHL-logo">
        <img src="./pictures/NHL_logo_PNG12.png" />
      </div>
      <div id="Headers">
        <h1 id="Header-1">Build your own</h1>
        <h1 id="Header-2">Fantasy Team</h1>
      </div>
      <div id="ButtonsMain">
        <Link to="/players" className="link-btn">
          <Button className="hero-btn" variant="contained" size="large">
            Players
          </Button>
        </Link>
        <Link to="/fantasyTeam" className="link-btn">
          <Button className="hero-btn" variant="contained" size="large">
            Make a Fantasy Team
          </Button>
        </Link>
        <Link to="/teams" className="link-btn">
          <Button
            className="hero-btn"
            variant="contained"
            size="large"
            href="/"
          >
            Teams
          </Button>
        </Link>
      </div>
    </div>
  );
};
