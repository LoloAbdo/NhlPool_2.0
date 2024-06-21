import { Button } from "@mui/material";
import "./Error.css";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <div id="oopss">
        <div id="error-text">
          <img
            src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
            alt="404"
          />
          <span>404 PAGE</span>
          <p class="p-a">. The page you were looking for could not be found</p>
          <p class="p-b">... Back to previous page</p>
        </div>
        <div className="link-div">
          <Link to="/" className="link-btn">
            <Button variant="contained" size="large" className="hero-btn">
              Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
