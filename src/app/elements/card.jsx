import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Image from "next/image";

export default function ActionAreaCard({
  name,
  description,
  recommendation,
  date,
  personImg,
  ref
}) {
  return (
    <Card sx={{ width:500, height:500 }} ref={ref}>
      <CardActionArea>
        <Image
          src={personImg}
          height={"300"}
          width="352"
          // style={{ marginLeft: "51px" }}
        />
        <CardContent>
          {name} {date}
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {recommendation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
