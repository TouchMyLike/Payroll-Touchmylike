import { Box, Typography, Grid, Paper, Stack } from '@mui/material'
import avatar from '../assets/images/logo.png'
import { TLogo } from '../styled/Logo'

export default () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 8,
      }}
    >
      <Typography variant='h4' component='h1'>
        Choose your problem - face it
      </Typography>
      <Paper
        elevation={12}
        sx={{
          color: '#000',
          backgroundColor: '#FFF',
          marginTop: 3,
        }}
      >
        <Grid container p={3} spacing={2}>
          {/* Container */}
          <Grid item md={8}>
            <Grid item container spacing={2}>
              <Grid item>
                <Typography variant='body2' component='h1'>
                  TML-Admin404
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' component='h1'>
                  Verified
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='body2' component='h1'>
                id: tml379***006
              </Typography>
            </Grid>
            <Grid item>
              <Grid item container spacing={4}>
                <Grid item>
                  <Typography variant='body2' component='h1'>
                    Regular
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='body2' component='h1'>
                    use TML to get discount
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4}>
            <Box
              sx={{
                display: 'flex',
                height: '120px',
                width: '120px',
              }}
            >
              <TLogo
                style={{
                  width: '100%',
                  height: '100%',
                  marginBottom: 0,
                }}
                src={avatar}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
      
    </Stack>
  )
}
