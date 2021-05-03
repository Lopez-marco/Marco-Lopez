import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Parallax } from "rc-scroll-anim";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#2F2E36",
    paddingBottom: "45px",
    paddingRight: "50px",
    paddingLeft: "50px",
  },
  portfolio: {
    textAlign: "center",
    paddingTop: "45px",
    color: "#DF9B3A",
    fontWeight: "600",
    fontSize: "1.5rem",
    paddingBottom: "45px",
  },
  card: {
    alignItems: "center",
    color: "white",
    backgroundColor: "#262626",
    border: `1px solid black`,
    borderRadius: "10px",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  content: {
    height: "135px",
    color: "white",
  },
  button: {
    backgroundColor: "#DF9B3A",
  },
});

const Portfolio = (div) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Container fixed> */}
        <Grid item sm={12} md={12}>
          <Box className={classes.portfolio}>Portfolio</Box>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.3, 0.8] }}
              style={{ transform: "translateX(-100px)", opacity: 0 }}
              className="code-box-shape"
            >
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://github.com/Lopez-marco/Marco-Lopez/blob/main/src/assets/2020-06-23-18-32-lopez-marco.github.io.png?raw=true"
                    title="Contemplative Reptile"
                  />
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Static Layout
                    </Typography>
                    <Typography variant="body2" color="#7C7C7F" component="p">
                      This is my first project as a student atending to Eleven
                      Fifty Academy. here you can see a miror webpage of the
                      Hulu front page.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="contained"
                    className={classes.button}
                    size="small"
                    href="https://lopez-marco.github.io/staticLayout-hulus/"
                    target="_blank"
                  >
                    Visit Site
                  </Button>
                </CardActions>
              </Card>
            </Parallax>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.3, 0.8] }}
              style={{ transform: "translateY(0px)", opacity: 0 }}
              className="code-box-shape"
            >
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://github.com/Lopez-marco/Marco-Lopez/blob/main/src/assets/2020-06-23-18-39-mal-api.firebaseapp.com%20(1).png?raw=true"
                    title="Contemplative Reptile"
                  />
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                      API project
                    </Typography>
                    <Typography variant="body2" color="#7C7C7F" component="p">
                      Taste the Food project. A website app to find recipes.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="contained"
                    className={classes.button}
                    size="small"
                    href="https://mal-api.firebaseapp.com/"
                    target="_blank"
                  >
                    Visit Site
                  </Button>
                </CardActions>
              </Card>
            </Parallax>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.3, 0.8] }}
              style={{ transform: "translateX(100px)", opacity: 0 }}
              className="code-box-shape"
            >
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://github.com/Lopez-marco/Marco-Lopez/blob/main/src/assets/2020-09-04-22-40-mal-caroclockfront2.herokuapp.com.png?raw=true"
                    title="Contemplative Reptile"
                  />
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Car-O-Clock
                    </Typography>
                    <Typography variant="body2" color="#7C7C7F" component="p">
                      WebSide develop with NodeJS, React & Reactstrap. A WebSide
                      for Vehicle Sales.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="contained"
                    className={classes.button}
                    size="small"
                    href="https://mal-caroclockfront2.herokuapp.com/"
                    target="_blank"
                  >
                    Visit Site
                  </Button>
                </CardActions>
              </Card>
            </Parallax>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item sm={12} md={6} lg={4}>
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.3, 0.8] }}
              style={{ transform: "translateX(-100px)", opacity: 0 }}
              className="code-box-shape"
            >
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://github.com/Lopez-marco/Marco-Lopez/blob/main/src/assets/2021-02-24-14-19-www.templobetel.us.png?raw=true"
                    title="Contemplative Reptile"
                  />
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Templo Betel
                    </Typography>
                    <Typography variant="body2" color="#7C7C7F" component="p">
                      WebSite develop with NodeJS, React & Reactstrap
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="contained"
                    className={classes.button}
                    size="small"
                    href="http://www.templobetel.us/"
                    target="_blank"
                  >
                    Visit Site
                  </Button>
                </CardActions>
              </Card>
            </Parallax>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.3, 0.8] }}
              style={{ transform: "translateY(0px)", opacity: 0 }}
              className="code-box-shape"
            >
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://github.com/Lopez-marco/Marco-Lopez/blob/main/src/assets/2021-03-12-20-39-keilizcakesupplies.com%20(1).png?raw=true"
                    title="Contemplative Reptile"
                  />
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Keliz Cake Supplies
                    </Typography>
                    <Typography variant="body2" color="#7C7C7F" component="p">
                      Simple responsive Website create with Html, Css, and
                      Bootstrap
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="contained"
                    className={classes.button}
                    size="small"
                    href="https://keilizcakesupplies.com/"
                    target="_blank"
                  >
                    Visit Site
                  </Button>
                </CardActions>
              </Card>
            </Parallax>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.3, 0.8] }}
              style={{ transform: "translateX(100px)", opacity: 0 }}
              className="code-box-shape"
            >
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://github.com/Lopez-marco/Marco-Lopez/blob/main/src/assets/2020-12-07-12-53-deliciosocart-server.herokuapp.com.png?raw=true"
                    title="Contemplative Reptile"
                  />
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                      DeliciosoCart
                    </Typography>
                    <Typography variant="body2" color="#7C7C7F" component="p">
                      WebSide develop with NodeJS, React, Material-Ui, and
                      Typescript. A website for people who likes to save.
                      Manufacturing coupons, store finder a Shopping List.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="contained"
                    className={classes.button}
                    size="small"
                    href="https://deliciosocart-server.herokuapp.com/"
                    target="_blank"
                  >
                    Visit site
                  </Button>
                </CardActions>
              </Card>
            </Parallax>
          </Grid>
        </Grid>
      {/* </Container> */}
    </div>
  );
};

export default Portfolio;
