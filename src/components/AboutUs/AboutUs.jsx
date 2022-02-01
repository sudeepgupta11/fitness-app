import { Grid } from "@mui/material";
import React from "react";
import aboutUsImage from "./../../assets/images/aboutUsImage.png";
import "./AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const socialMediaHandles = [
  {
    iconName: faInstagram,
    url: "https://www.instagram.com/cultfitOfficial/",
  },
  {
    iconName: faYoutube,
    url: "https://www.youtube.com/channel/UCSE72IaHOL-1Tv-m3JHE4Cg",
  },
  {
    iconName: faFacebook,
    url: "https://www.facebook.com/cultfitofficial/",
  },
  {
    iconName: faTwitter,
    url: "https://twitter.com/cultfitOfficial",
  },
];
function AboutUs() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid className="aboutUsLeftSide" container>
            <Grid className="centerElement " item xs={12}>
              <img src={aboutUsImage} className="aboutUsImage" alt="About Us" />
            </Grid>
            <Grid id="socialMediaDiv" item xs={2} />

            {socialMediaHandles.map((handle, index) => (
              <Grid key={index} item xs={2}>
                <a href={handle.url} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    className="socialMediaIcons"
                    icon={handle.iconName}
                  />
                </a>
              </Grid>
            ))}
            <Grid item xs={2} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <p className="homeHeader centerElement">Join Us NOW!!</p>
          <Grid container>
            <Grid item xs={2} />
            <Grid item xs={8}>
              <p className="homeHeaderDescription ">
                Visit our centre and experience mindfulness with our guided
                yoga, meditation & therapy sessions. Experience mindfulness with
                our guided yoga, meditation & therapy sessions.Experience
                mindfulness with our guided yoga, meditation & therapy
                sessions.Fitness requires that some kind of activity be
                performed. Health requires a healthy lifestyle that promotes all
                systems of the body. We can keep ourselves fit by exercising
                daily, taking enough rest and having good food.
                <br />
                <br />
                Check out social media handles to stay updated with our latest
                offers and courses.
              </p>
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AboutUs;
