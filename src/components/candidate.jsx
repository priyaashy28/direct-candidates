import { Card, CardContent, CardMedia } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import React from "react";
import { Typography } from "@mui/material";

export const Candidate = () => {
  const location = useLocation();
  const state = location.state;
  const user = state.user;
  const image =
    "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg";

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          image={image}
          component="img"
          height="194"
          alt="profile_image"
        ></CardMedia>
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: "18px" }}
          >
            {user.name}
          </Typography>
        </CardContent>
      </Card>
      <Link to="/">Go Back</Link>
    </>
  );
};
