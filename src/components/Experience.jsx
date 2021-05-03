import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CSS from "../assets/css-3.png";
import JS from "../assets/Daco_4562295.png";
import ReactLogo from "../assets/React.png";
import TS from "../assets/ts-logo-128.png";
import GIT from "../assets/Git-Icon-White.png";
import { Parallax } from "rc-scroll-anim";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#262626",
    paddingBottom: "1px",
  },
  experience: {
    paddingTop: "35px",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#DF9B3A",
  },
  image: {
    paddingLeft: "100px",
    paddingRight: "70px",
    paddingTop: "55px",
    paddingBottom: "35px",
  },
  image2: {
    alignItems: "center",
  },
  title: {
    color: "white",
  },
  html: {
    color: "white",
    paddingLeft: "5px",
  },
  css: {
    color: "white",
    paddingLeft: "17px",
  },
  JS: {
    color: "white",
  },
  post: {
    color: "white",
  },
  react: {
    color: "white",
    paddingLeft: "5px",
  },
  type: {
    color: "white",
  },
  git: {
    color: "white",
    paddingLeft: "19px",
  },
}));

const Experience = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid item sm={12} md={12}>
          <Box className={classes.experience}>Experience</Box>
        </Grid>

        <Grid
          container
          spacing={1}
          className={classes.image2}
          alignItems="center"
          justify="center"
        >
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
            // className="code-box-shape"
          >
            <Grid item xs={3} className={classes.image}>
              <img
                src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
                width="63"
                height="64"
                alt="HTML5 Powered"
                title="HTML5 Powered"
              />
              <p className={classes.html}> HTML5</p>
            </Grid>
          </Parallax>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
            // className="code-box-shape"
          >
            <Grid item xs={3} className={classes.image}>
              <img
                src={CSS}
                width="63"
                height="64"
                alt="CSS Logo"
                title="CSS Logo"
              />
              <p className={classes.css}>CSS</p>
            </Grid>
          </Parallax>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
          >
            <Grid item xs={3} className={classes.image}>
              <img
                src={JS}
                width="63"
                height="64"
                alt="JavaScript Logo"
                title="JavaScript Logo"
              />
              <p className={classes.JS}>JavaScript</p>
            </Grid>
          </Parallax>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
            // className="code-box-shape"
          >
            <Grid item xs={3} className={classes.image}>
              <img
                src="https://nodejs.org/static/images/logos/nodejs-new-pantone-white.svg"
                width="63"
                height="64"
                alt="Node"
                title="Node"
              />
              <p className={classes.title}>Node.JS</p>
            </Grid>
          </Parallax>
        </Grid>
        <Grid
          container
          spacing={1}
          className={classes.image2}
          alignItems="center"
          justify="center"
        >
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
            // className="code-box-shape"
          >
            <Grid item xs={3} className={classes.image}>
              <img
                src="https://www.postgresql.org/media/img/about/press/elephant.png"
                width="63"
                height="64"
                alt="Postgresql Logo"
                title="Postgresql Logo"
              />
              <p className={classes.post}> PostgreSQL</p>
            </Grid>
          </Parallax>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
            // className="code-box-shape"
          >
            <Grid item xs={3} className={classes.image}>
              <img
                src={ReactLogo}
                width="63"
                height="64"
                alt="React Logo"
                title="React Logo"
              />
              <p className={classes.react}> React.js</p>
            </Grid>
          </Parallax>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
            // className="code-box-shape"
          >
            <Grid item xs={3} className={classes.image}>

              <img
                src={TS}
                width="63"
                height="64"
                alt="TypeScript Logo"
                title="Typescript Logo"
              />
              <p className={classes.type}> TypeScript</p>
            </Grid>
          </Parallax>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
          >
            <Grid item xs={3} className={classes.image}>
              <img src={GIT} width="63" height="64" alt="Node" title="Node" />
              <p className={classes.git}> Git</p>
            </Grid>
          </Parallax>
      <div id="portfolio"> </div>
        </Grid>
      </Container>
    </div>
  );
};

export default Experience;
