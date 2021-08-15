import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import { getMatchDetail } from "../api/Api";

const MyCard = ({ match }) => {
  const [detail, setDatail] = useState({});
  const [open, setOpen] = useState(false);

  const getMatchCard = () => (
    <div>
      <Card
        style={{
          background: match.matchStarted ? "#e2e2e2" : "",
          marginTop: 15,
        }}
      >
        <CardContent>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item>
              <Typography variant="h5">{match["team-1"]}</Typography>
            </Grid>
            <Grid item> VS
              <background-image
                style={{ width: 85 }}
                src= "../img/vs2.png"
                alt=""
              />
            </Grid>
            <Grid item>
              <Typography variant="h5">{match["team-2"]}</Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Grid container justify="center">
            <Button
              onClick={() => {
                showDetailBtnClicked(match["unique_id"]);
              }}
              variant="outlined"
              color="secondary"
            >
              Show Detail
            </Button>
            <Button
              style={{ marginLeft: 5 }}
              variant="outlined"
              color="primary"
            >
              Starting time {new Date(match.dateTimeGMT).toLocaleString()}
            </Button>
            <Button style={{ marginLeft: 5 }}
              variant="outlined"
              color="primary">
            <Typography variant="h7">Type - {match["type"]}</Typography>
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );

  const showDetailBtnClicked = (id) => {
    getMatchDetail(id)
      .then((data) => {
        console.log(data);
        setDatail(data);
        handleClickOpen();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {match.type == "Twenty20" ? getMatchCard() : ""}
      {match.type == "ODI" ? getMatchCard() : ""}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Match Detail..."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography>{detail.stat}</Typography>
            <Typography>
              Match
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {" "}
                {detail.matchStarted ? "Started" : "Still not started"}
              </span>
            </Typography>
            <Typography>
              Score
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                {" "}
                {detail.score}
              </span>
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MyCard;