import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
} from "@mui/material";
import { InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { UsersApi } from "../context/apiContext";
import { styled } from "@mui/material/styles";

const PREFIX = "CandidatesList";

const classes = {
  container: `${PREFIX}-container`,
  card: `${PREFIX}-card`,
  cardMedia: `${PREFIX}-cardMedia`,
  cardContent: `${PREFIX}-cardContent`,
  verified: `${PREFIX}-verified`,
  divider: `${PREFIX}-divider`,
  role: `${PREFIX}-role`,
  header: `${PREFIX}-header`,
};

const ContainerDiv = styled("div")(({ theme }) => ({
  [`& .${classes.container}`]: {
    display: "flex",
    justifyContent: "initial",
  },
  [`& .${classes.card}`]: {
    maxWidth: 300,
    // margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  [`& .${classes.cardMedia}`]: {
    paddingTop: "56.25%",
  },
  [`& .${classes.cardContent}`]: {
    textAlign: "left",
    padding: theme.spacing.unit * 3,
  },
  [`& .${classes.name}`]: {
    fontWeight: "bold",
  },
  [`& .${classes.verified}`]: {
    color: "blue",
  },
  [`& .${classes.divider}`]: {
    margin: `${theme.spacing.unit * 3}px 0`,
    color: "grey",
  },
  [`& .${classes.role}`]: {
    fontWeight: "bold",
    paddingTop: "5px",
    fontSize: "14px",
    display: "flex",
  },
  [`& .${classes.header}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "30px",
  },
}));

export const CandidatesList = () => {
  const { users } = UsersApi();
  const image =
    "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg";
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchInput) => {
    setSearchInput(searchInput);
    if (searchInput !== "") {
      const filteredData = users.filter((user) => {
        return Object.values(user)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    }
  };
  return (
    <ContainerDiv className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h4">Direct Candidates</Typography>
        <TextField
          margin="normal"
          placeholder="Search"
          onChange={(e) => searchItems(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {searchInput.length > 1
          ? filteredResults.map((user, index) => {
              return (
                <Grid item xs={2} sm={4} md={4}>
                  <Card key={index} className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={image}
                    ></CardMedia>
                    <CardContent className={classes.cardContent}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: "bold", fontSize: "18px" }}
                      >
                        {user.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        className={classes.verified}
                        sx={{ fontSize: "16px" }}
                      >
                        BORDERLESS VERIFIED
                      </Typography>
                      <Typography variant="h6" className={classes.role}>
                        Location: {user.address?.city}
                      </Typography>
                      <Divider className={classes.divider} />
                      <Typography variant="h6" className={classes.role}>
                        Role: Carer
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })
          : users.map((user, index) => {
              return (
                <Grid item xs={2} sm={4} md={4}>
                  <Card key={index} className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={image}
                    ></CardMedia>
                    <CardContent className={classes.cardContent}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: "bold", fontSize: "18px" }}
                      >
                        {user.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        className={classes.verified}
                        sx={{ fontSize: "16px" }}
                      >
                        BORDERLESS VERIFIED
                      </Typography>
                      <Typography variant="h6" className={classes.role}>
                        Location: {user.address?.city}
                      </Typography>
                      <Divider className={classes.divider} />
                      <Typography variant="h6" className={classes.role}>
                        Role: Carer
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link
                        to={{ pathname: `/candidate/${user.id}` }}
                        state={{ user: user }}
                      >
                        <Typography variant="h6" sx={{ fontSize: "12px" }}>
                          View Profile
                        </Typography>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
      </Grid>
    </ContainerDiv>
  );
};
