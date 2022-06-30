import React from 'react'

import { Grid, Typography } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GitHubIcon from '@mui/icons-material/GitHub'

import pjson from '../../package.json'
import { GridRow } from '../Containers/GridRow'
import { GITHUB_URL, YOUTUBE_URL } from '../util'
import { FooterIcon } from '../Containers/FooterIcon'

export function Footer() {
  return (
    <GridRow item style={{ marginTop: 20 }} justifyContent="space-between">
      <Grid item>
        <Typography>Version: {pjson.version}</Typography>
      </Grid>
      <Grid item>
        <FooterIcon Icon={YouTubeIcon} href={YOUTUBE_URL} />
        <FooterIcon Icon={GitHubIcon} href={GITHUB_URL} />
      </Grid>
    </GridRow>
  )
}
