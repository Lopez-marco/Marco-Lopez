import React, { useState, useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import InfoIcon from '@material-ui/icons/Info';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import AttachmentIcon from '@material-ui/icons/Attachment';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import {
  List,
  ListItem,
  Grid,
  SwipeableDrawer,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    button: {
      backgroundColor: "",
      "&:hover": {
        backgroundColor: "#DF9B3A",
        
      },
    },
    list: {
        width: 250,
        marginRight: "2px"
      },
      fullList: {
        width: 'auto',
      },
      drawerPaper: {
        color: "blue",
      },
  })
);

const Navbar = (props) => {
  const classes = useStyles();

  const [drawerActive, setDrawerActive] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setDrawerActive(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1050) {
        setDrawerActive(true);
      } else {
        setDrawerActive(false);
      }
    });
  }, []);

  const createDrawer = () => {
    return (
      <div>
        <AppBar position="fixed" style={{ background: "#2F2E36", width: "100%" }}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <HomeIcon style={{ color: "#DF9B3A" }} />
              </IconButton>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon
                  style={{ color: "#DF9B3A" }}
                  onClick={() => {
                    setDrawer(true);
                  }}
                />
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer className={{paper: classes.drawerPaper}}
          open={drawer}
          onClose={() => {
            setDrawer(false);
          }}
          onOpen={() => {
            setDrawer(true);
          }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => {
              setDrawer(false);
            }}
            onKeyDown={() => {
              setDrawer(false);
            }}
          >
            <List className={classes.list}>
              <ListItem key={1} button divider>
               <InfoIcon style={{marginRight: "10px"}} />  ABOUT ME
              </ListItem>
              <ListItem key={2} button divider>
                <FolderSharedIcon style={{marginRight: "10px"}} />PORTFOLIO
              </ListItem>
              <ListItem key={2} button divider>
                <AttachmentIcon style={{marginRight: "10px"}} /> RESUME
              </ListItem>
              <ListItem key={3} button divider>
               <ContactMailIcon style={{marginRight: "10px"}} /> CONTACT ME
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
      </div>
    );
  };

  const destroyDrawer = () => {
    return (
      <AppBar position="fixed" style={{ background: "#2F2E36", width: "100%"}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <HomeIcon style={{ color: "#DF9B3A" }} />
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>
          <Button color="inherit" className={classes.button}>
            About Me
          </Button>
          <Button color="inherit" className={classes.button}>
            Portfolio
          </Button>
          <Button color="inherit" className={classes.button}>
            Resume
          </Button>
          <Button color="inherit" className={classes.button}>
            Contact ME
          </Button>
        </Toolbar>
      </AppBar>
    );
  };

  const Navbar = drawerActive ? createDrawer() : destroyDrawer();

  return <div className={classes.root}>{Navbar}</div>;
};

export default Navbar;
