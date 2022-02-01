import * as React from "react";
import logoImage from "./../assets/images/fitnessApp.png";
import { Link } from "react-router-dom";
import { Button, Typography, Toolbar, Box, AppBar } from "@mui/material";

const style = {
  background: "#fff",
  color: "#9b68d9",
};

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} style={style} position="static">
        <Toolbar>
          <Link className="links" to="/">
            <img src={logoImage} className="logoImg" alt="Logo" />
          </Link>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: "4vmin" }}
          >
            <Link className="links" to="/">
              The Fitness App
            </Link>
          </Typography>

          <Link className="links" to="/">
            <Button className="buttons centerElement">Home</Button>
          </Link>
          <Link className="links" to="/myvideos">
            <Button className="buttons centerElement">My Videos</Button>
          </Link>
          <Link className="links" to="/aboutus">
            <Button className="buttons centerElement">About Us</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
