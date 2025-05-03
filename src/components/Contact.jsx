import { Box, Typography, Stack, Link, Grid, Avatar } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import profile from '../assets/me.jpg';

export default function Contact() {
  return (
    <Box
      sx={{
        backgroundColor: "#111827",
        minHeight: "100vh",
        color: "#fff",
        paddingTop: "20px",
      }}
    >
      {/* Top content in flex row */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          columnGap: 6,
        }}
      >
        <Box
          sx={{
            backgroundColor: '#0f172a',
            color: '#fff',
            padding: 4,
            borderRadius: 2,
            margin: 'auto',
            boxShadow: 3,
          }}
        >

          <Grid container spacing={2} alignItems="center">
            {/* Avatar Column */}
            <Grid item xs={3} sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                alt="Your Name"
                src={profile}
                sx={{ width: 200, height: 200 }}
              />
            </Grid>

            {/* Contacts Column */}
            <Grid item xs={9}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Email sx={{ color: '#00bcd4' }} />
                  <Link href="mailto:thtran@et.esiea.fr" underline="hover" color="inherit">
                    thtran@et.esiea.fr
                  </Link>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Phone sx={{ color: '#4caf50' }} />
                  <Link href="tel: 0768067445" underline="hover" color="inherit">
                    +33 7 68 06 74 45
                  </Link>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocationOn sx={{ color: '#ff9800' }} />
                  <Typography>
                    92340, Bourg-le-Reine, France
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>



        </Box>
      </Box>
    </Box>
  );
}
