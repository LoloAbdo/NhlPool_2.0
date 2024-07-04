import "./Teams.css";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  InputLabel,
  FormControl,
  FilledInput,
  InputAdornment,
} from "@mui/material";
import franchises from "../data/franchises.json";
import teams from "../data/teams.json";
import { Link } from "react-router-dom";

export const Teams = () => {
  const [items, setItems] = useState([]); // set array
  const [searchValue, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const nonNhlTeams = [
      11, 27, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
      47, 48, 49, 50, 51, 56, 57, 58, 59, 70, 99,
    ];

    let filteredTeams = teams.data.filter(
      (team) => !nonNhlTeams.includes(team.id)
    );
    const sortedTeams = filteredTeams.sort((a, b) => {
      if (a.fullName < b.fullName) return -1;
      if (a.fullName > b.fullName) return 1;
      return 0;
    });

    franchises.data.forEach((element) => {
      const index = sortedTeams.findIndex(
        (i) => i.fullName === element.fullName
      );
      if (index === -1) {
        return;
      }
      sortedTeams[index].teamCommonName = element.teamCommonName;
      sortedTeams[index].teamPlaceName = element.teamPlaceName;
    });

    setItems([...sortedTeams]);
    console.log(franchises.data);
  }, []);

  return (
    <div className="mainContainer">
      <div className="searchBar">
        <FormControl
          fullWidth
          sx={{ width: 900, maxWidth: "100%" }}
          variant="filled"
        >
          <InputLabel
            htmlFor="filled-adornment-amount"
            sx={{ color: "#0A0F20" }}
          >
            Search
          </InputLabel>
          <FilledInput
            id="filled-adornment-square"
            endAdornment={<InputAdornment>◾</InputAdornment>}
            onChange={handleChange}
          />
        </FormControl>
      </div>
      <div className="HockeyCards">
        {/* si items est pas vide on prend items.data et map*/}
        {items.map((item) => {
          console.log(item.teamCommonName);
          return (
            <div
              key={item.id}
              className="customs-cards"
              style={
                item.fullName.toLowerCase().includes(searchValue.toLowerCase())
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <Card sx={{ maxWidth: 300 }}>
                <div className="card-image">
                  <CardMedia
                    sx={{ height: 300, width: 300 }}
                    image={`pictures/${item.rawTricode}.png`}
                    title={item.fullName}
                    className="customs-cards-media"
                  />
                  <CardContent className="customs-cards-content">
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      className="customs-cards-teamName"
                    >
                      {item.teamCommonName}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      className="customs-cards-cityName"
                    >
                      {item.teamPlaceName}
                    </Typography>
                  </CardContent>
                </div>
                <div className="card-btn">
                  <CardActions>
                    <Link
                      key={item.rawTricode}
                      to={`/teams/team/players/${item.teamCommonName}`}
                      state={item.rawTricode}
                      className="link-cards"
                    >
                      <Button
                        className="hero-btn"
                        variant="contained"
                        size="small"
                      >
                        Players
                      </Button>
                    </Link>
                  </CardActions>
                  <CardActions>
                    <Link
                      key={item.rawTricode}
                      to={{
                        pathname: `/teams/team/stats/${item.teamCommonName}`,
                      }}
                      state={item.rawTricode}
                      relative="path"
                      className="link-cards"
                    >
                      <Button
                        className="hero-btn"
                        variant="contained"
                        size="small"
                      >
                        Stats
                      </Button>
                    </Link>
                  </CardActions>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
