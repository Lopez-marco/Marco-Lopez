import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      // margin: theme.spacing(1),
      // width: '100ch',
    },
    flexGrow: 1,
    backgroundColor: "#262626",
    paddingBottom: "15px",
    paddingLeft: "20px",
  },
  contact: {
    paddingTop: "45px",
    paddingBottom: "0px",
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#DF9B3A",
    backgroundColor: "transparent",
    borderColor: "",
  },
  Text: {
    "& > *": {
      //   margin: theme.spacing(1),
    //   width: "35ch",
      color: "white",
    },
    flexGrow: 1,
    backgroundColor: "#262626",
    paddingBottom: "1px",
    // paddingRight: "20px",
    "& .MuiInput-underline:after": {
      borderBottomColor: "#DF9B3A",
    },
    "& label.Mui-focused": {
      color: "#DF9B3A",
    },
  },
  TextLine: {
    "& > *": {
      //   margin: theme.spacing(1),
    //   width: "40ch",
      color: "white",
    },
    flexGrow: 1,
    backgroundColor: "#262626",
    paddingBottom: "1px",
    "& .MuiInput-underline:after": {
      borderBottomColor: "#DF9B3A",
    },
    "& label.Mui-focused": {
      color: "#DF9B3A",
    },
  },
  button: {
    "& > *": {
      //   margin: theme.spacing(1),
    //   width: "40ch",
      color: "white",
    },
    flexGrow: 1,
    backgroundColor: "#DF9B3A",
    textAlign: "center"
  },
}));

const Contact = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid item sm={12} xl={12}>
          <Box className={classes.contact}>Contact Me</Box>
        </Grid>
        <form className={classes.root} noValidate autoComplete="off" name="simple-contact-form" accept-charset="utf-8"
                   action="https://formspree.io/f/xayaqydj"
                   method="POST">
          <Grid container spacing={3}>
            <Grid item sm={12} md={6} lg={6}>
              <TextField
                id="standard-basic"
                name="fname"
                label="First Name"
                autoComplete="off"
                fullWidth={true}
                className={classes.Text}
              />
            </Grid>
            <Grid item sm={12} md={6} lg={6}>
              <TextField
                id="standard-basic"
                label="Last Name"
                name="lname"
                fullWidth={true}
                className={classes.Text}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item sm={12} md={6} lg={6}>
              <TextField
                id="standard-basic"
                label="Phone Number"
                fullWidth={true}
                name="phone"
                className={classes.Text}
              />
            </Grid>
            <Grid item sm={12} md={6} lg={6}>
              <TextField
                id="standard-basic"
                label="Email"
                name="email"
                fullWidth={true}
                className={classes.Text}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item sm={12} xl={12}>
              <TextField
                id="standard-textarea"
                label="Message"
                placeholder="Placeholder"
                multiline
                name="message"
                fullWidth={true}
                rows={4}
                className={classes.TextLine}
              />
            </Grid>
          </Grid>
          <Grid item sm={12} xl={12}>
            <Box className={classes.contact}>
              <Button type="submit" variant="contained" className={classes.button}>
                Send Message
              </Button>
            </Box>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
