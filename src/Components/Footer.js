import YouTubeIcon from '@mui/icons-material/YouTube'
import GitHubIcon from '@mui/icons-material/GitHub'
import pjson from '../../package.json'
import { Grid, IconButton, Typography } from '@mui/material'

export function Footer() {
  return (
    <Grid container style={{ marginTop: 20 }} justifyContent="space-between">
      <Grid item>
        <Typography>Version: {pjson.version}</Typography>
      </Grid>
      <Grid item>
        <IconButton
          target="_blank"
          variant="contained"
          color="primary"
          href="https://www.youtube.com/channel/UCQk0CkSexTb7GQvpGxj4kxw"
        >
          <YouTubeIcon />
        </IconButton>
        <IconButton
          target="_blank"
          variant="contained"
          color="primary"
          href="https://github.com/CJohnson25/femm-sim-gen-app/"
        >
          <GitHubIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}
