import { useEffect, useState } from "react";
import * as GamesAPI from "../utils/games-api";
import NavBar from "../components/ui/NavBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

function ProfileSettings(props) {
  const [gameTitles, setGameTitles] = useState([]);

  useEffect(function () {
    async function getAll() {
      setGameTitles(await GamesAPI.getAllTitles([]));
    }
    getAll();
  }, []);

  return (
    <div
      style={{
        height: "110vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#edf5f5",
      }}
    >
      <NavBar username={props.user.name} />
      <h2 style={{ margin: "4rem 0rem 0rem 4rem" }}>Edit Profile Info</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        style={{ display: "flex", flexDirection: "column", margin: "4rem" }}
      >
        <TextField
          id="standard-basic"
          label={props.user.name}
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label={props.user.email}
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label={props.user.age}
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="New Password"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Confirm Password"
          variant="standard"
        />

        <Button style={{ marginTop: "4rem" }} variant="contained">
          Save
        </Button>
      </Box>

      <Divider />

      <h1 style={{ margin: "2rem 0rem 0rem 4rem" }}>Delete Account</h1>
      <p style={{ margin: "2rem 0rem 0rem 4rem", color: "red" }}>
        Are you sure? This can not be undone.
      </p>
      <Button
        style={{ margin: "4rem 0rem 12rem 4rem", width: "12rem" }}
        variant="contained"
        color="error"
      >
        Delete Account
      </Button>
    </div>
  );
}

export default ProfileSettings;
