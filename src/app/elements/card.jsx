import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import personImg from "../../../public/Recommender1.jpeg";
import Image from "next/image";

export default function ActionAreaCard({name, description, work, date}) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <Image src={personImg} height={"250"} width="250" />
        <CardContent>
          {name} { date}
          <Typography variant="body2" color="text.secondary">
           {work}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
