import { Grid } from "@mui/material";
import React from "react";
import "./Home.css";
import HomePageImg from "./../../assets/images/homePageImage.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Grid container>
        <Grid item className="centerElement homePageImageDiv" xs={12} md={6}>
          <img src={HomePageImg} className="homePageImage" alt="Home Page" />
        </Grid>
        <Grid item xs={12} md={6}>
          <p className="homeHeader centerElement">
            Get Your Perfect Workout <br />
            With The Perfect Exercises
          </p>
          <Grid container>
            <Grid item xs={2} />
            <Grid item xs={8}>
              <p className="homeHeaderDescription ">
                Motivation is what gets you started. Habit is what keeps you
                going. Don't wait until you've reached your goal to be proud of
                yourself. Be proud of every step you take toward reaching that
                goal. When you're at the gym feeling like you'll never be one of
                those people who look like they've been at it their entire
                lives, remember that they all started somewhere.
              </p>
              <div className="centerElement">
                <Link className="homePageButton" to="/myvideos">
                  My Videos
                </Link>

                <Link className="homePageButton" to="/aboutus">
                  About Us
                </Link>
              </div>
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
