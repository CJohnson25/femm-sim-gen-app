import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import pjson from '../../package.json'
import { Grid, IconButton, Typography } from '@material-ui/core';

export function Footer() {
  return (
    <Grid container style={{ marginTop: 40 }} justify="flex-end">
      <Grid item xs={8}>
        <Typography>Version: {pjson.version}</Typography>
      </Grid>
      <Grid item xs={1} >
        <IconButton target="_blank" variant="contained" color="primary" href="https://www.youtube.com/channel/UCQk0CkSexTb7GQvpGxj4kxw">
          <YouTubeIcon />
        </IconButton>
      </Grid>
      <Grid item xs={1} >
        <IconButton target="_blank" variant="contained" color="primary" href="https://github.com/CJohnson25/femm-sim-gen-app/">
          <GitHubIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}