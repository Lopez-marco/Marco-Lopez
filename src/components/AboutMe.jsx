import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Parallax } from "rc-scroll-anim";
import Resume from "../assets/cv (1).png";
import Github from "../assets/github (1).png";
import Link from "../assets/linkedin.png";
import ResumeFile from "../assets/MarcoLopez.docx"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#2F2E36",
    paddingBottom: "1px",
  },
  paper: {
    paddingTop: "45px",
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
    backgroundColor: "transparent",
    borderColor: "",
  },
  about: {
    paddingTop: "45px",
    paddingBottom: "0px",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "1.5rem",
    color: "#DF9B3A",
    backgroundColor: "transparent",
    borderColor: "",
  },
  WhereTo: {
    paddingTop: "30px",
    paddingBottom: "45px",
    fontSize: "1.5rem",
    fontWeight: "600",
    textAlign: "center",
    color: "#DF9B3A",
    backgroundColor: "transparent",
    borderColor: "",
  },
  findme: {
    alignItems: "center",
    textAlign: "center",
    // paddingBottom: "25px",
  },
  image: {
    paddingBottom: "35px",
  },
  title: {
    color: "white",
    paddingLeft: "2px",
  },
}));

const AboutMe = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.3, 0.9] }}
          style={{ transform: "translateX(-100px)", opacity: 0 }}
          className="code-box-shape"
        >
          <Grid item sm={12} md={12}>
            <Box className={classes.about}>About Me</Box>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box className={classes.paper}>
                <img
                  className="mePicture"
                  src="https://github.com/Lopez-marco/Marco-Lopez/blob/main/src/assets/IMG-2400.jpg?raw=true"
                  alt="Marco Lopez"
                  title="Marco Lopez"
                ></img>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Box className={classes.paper}>
                <p>
                  As I can recall my innovation has always been revolving around
                  anything that involves technology in my early stages of a
                  teen, and since than it has grown more and more each day
                  emerging into new projects and starting a new career with
                  Eleven Fifty Academy. Coming From a family of 3 brothers and I
                  being the oldest and having two wonderful encouraging parents
                  and leaving everything behind in my hometown, I’ve had the
                  opportunity to grow in my future with my wonderful wife and my
                  only beautiful daughter. My life has changed exceedingly in
                  many innumerable ways. Having an open window to pursuit my
                  dream has changed my life completely, studying to become a Web
                  Developer is a new chance to open a path for my daughter’s
                  future. Also, to make many customers happy and meet their
                  needs. I am very compelling and at times I can be a little too
                  passive in accelerating situations. I have learned in my
                  previous jobs as picking packing and inventory and stocking
                  that patience is always the key to every hard outcome, because
                  numbers are not always right, we always end up readdressing
                  what went wrong. Now knowing that my life has taken a 180
                  degree turn I learned that focusing and being persistent will
                  get me in the right lane to concentrate in a new career and a
                  new future.
                </p>
                <div id="resume"></div>
              </Box>
            </Grid>
          </Grid>
          <Grid item sm={12} md={12}>
            <Box className={classes.WhereTo}>Find Me Also</Box>
          </Grid>
          <Grid container spacing={0} className={classes.findme}>
            <Grid item xs={12} sm={12} md={4} lg={4} className={classes.image}>
              <a href={ResumeFile} download>
                <img
                  src={Resume}
                  width="63"
                  height="64"
                  alt="Resume"
                  title="Resume"
                />
              </a>
              <p className={classes.title}>Download Resume</p>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} className={classes.image}>
              <a href="https://github.com/Lopez-marco">
                <img
                  src={Github}
                  width="63"
                  height="64"
                  alt="Github"
                  title="Github"
                />
              </a>
              <p className={classes.title}>GitHub</p>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} className={classes.image}>
              <a href="https://www.linkedin.com/in/marco-lopez-hdez/">
                <img
                  src={Link}
                  width="63"
                  height="64"
                  alt="Linkedin"
                  title="Linkedin"
                />
              </a>
              <p className={classes.title}>LinkedIn</p>
            </Grid>
          </Grid>
        </Parallax>
      </Container>
    </div>
  );
};

export default AboutMe;
