import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {Parallax} from "rc-scroll-anim";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    color: "white",
    paddingTop: "20px",
    paddingBottom: "20px",
    backgroundColor: "#2F2E36",
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  const Year = () => {
    let d = new Date();
    return d.getFullYear();
  };

  return (
    <div className={classes.root}>
      <Container fluid>
          Copyright © {Year()} Marco Lopez
          
          </Container>
    </div>
  );
};

export default Footer;
