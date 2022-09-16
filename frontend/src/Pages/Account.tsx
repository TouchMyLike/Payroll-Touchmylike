import {
  Avatar,
  Box,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Verified, VisibilityOff } from "@mui/icons-material";
import logo from "../assets/images/user.png";
import { TLogo } from "../styled/Logo";

export default function Account() {
  const box = [
    {
      name: "Calendar",
      navigateTo: "",
      icon: "",
    },
    {
      name: "Account",
      navigateTo: "",
      icon: "",
    },
    {
      name: "Manage Employee",
      navigateTo: "",
      icon: "",
    },
    {
      name: "Add your menu",
      navigateTo: "",
      icon: "",
    },
  ];
  return (
    <Grid>
      <Typography variant="h3" align="center">
      Choose your problem - face it
      </Typography>
      <Grid container sx={{ display: "flex", justifyContent: "center" }} item>
        <Box
          sx={{
            color: "#000",
            padding: "1rem",
            borderRadius: "10px",
            boxShadow: 3,
            marginTop: 8,
          }}
        >
          <Grid container spacing={5}>
            <Grid item>
              <Stack direction="row" spacing={2}>
                <Box>
                  <Typography variant="body2" paragraph>
                    TML-Admin404
                  </Typography>
                </Box>
                <Box>
                  <Chip
                    icon={<Verified>M</Verified>}
                    label="Verified"
                    color="primary"
                  />
                </Box>
              </Stack>
              <Stack>
                <Typography variant="caption">
                  id: tml379***006 <VisibilityOff />
                </Typography>
              </Stack>
              <Box
                sx={{
                  backgroundColor: "#D9D9D9",
                  display: "flex",
                  justifyContent: "space-between",
                  borderRadius: "20px",
                  p: 1,
                }}
              >
                <Box>
                  <Typography variant="caption">Regular</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">
                    use tml coin to discount
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item>
              <TLogo src={logo} width="150" height="150" />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item>
        <Container maxWidth="sm">
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 4,
            }}
            spacing={4}
          >
            {box.map((card: any) => (
              <Grid md={5} item key={card}>
                <Box
                  sx={{
                    color: "#000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: "10px",
                    boxShadow: 3,
                    p: 2,
                  }}
                >
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    Icon
                  </Avatar>

                  <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
