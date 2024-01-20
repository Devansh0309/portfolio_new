import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Image from "next/image";

export default function UserCard({
  name,
  profession,
  recommendation,
  date,
  personImg,
  ref,
}) {
  return (
    <Box
      sx={{
        width: "100%",
        // position: 'relative',
        overflow: { xs: "auto", sm: "initial" },
      }}
      ref={ref}
    >
      {/* <Box
        sx={{
          position: 'absolute',
          display: 'block',
          width: '1px',
          bgcolor: 'warning.300',
          left: '500px',
          top: '-24px',
          bottom: '-24px',
          '&::before': {
            top: '4px',
            content: '"vertical"',
            display: 'block',
            position: 'absolute',
            right: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
          '&::after': {
            top: '4px',
            content: '"horizontal"',
            display: 'block',
            position: 'absolute',
            left: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
        }}
      /> */}
      <Card
        orientation="vertical"
        sx={{
          width: "100%",
          flexWrap: "wrap",
          //   [`& > *`]: {
          //     '--stack-point': '500px',
          //     minWidth:
          //       'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          //   },
          // make the card resizable for demo
          overflow: "auto",
          //   resize: 'horizontal',
        }}
      >
        {/* <AspectRatio flex ratio="1" maxHeight={352} sx={{ minWidth: 352}}> */}
        <Image
          src={personImg}
          loading="lazy"
          alt=""
          width="200px"
          height="200px"
        />
        {/* </AspectRatio> */}
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            {name} {date}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            {profession}
          </Typography>
          {/* <Sheet
            sx={{
              bgcolor: 'background.level1',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              '& > div': { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" fontWeight="lg">
                {recommendation}
              </Typography>
            </div>
          </Sheet> */}
          <div>
            <Typography level="body-xs" fontWeight="lg">
              {recommendation}
            </Typography>
          </div>
          <Box sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}>
            <Button variant="solid" color="primary">
              Follow
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
