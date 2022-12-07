import React from 'react'
import CookieConsent from 'react-cookie-consent'
import { Typography, Button, Grid } from '@mui/material'
import { CONSENT_COOKIE } from '../util'

export default function CookieConsentProvider({ ...rest }) {
  const option = {
    cookieName: CONSENT_COOKIE,
    headerText: 'Cookies Privacy',
    contentText:
      'Cookies are used to save input values in the event of a refresh. Also they are used for Google Analytics visitor tracking.',
  }

  return (
    <CookieConsent
      {...rest}
      buttonText="I Accept"
      cookieName={option.cookieName}
      hideOnAccept
      // Styles
      disableStyles
      style={{
        padding: '10px 0',
        width: '100%',
        left: 0,
        position: 'fixed',
        zIndex: 1300,
        background: '#333'
      }}
      disableButtonStyles
      ButtonComponent={Button}
      enableDeclineButton
    >
      <Grid container spacing={1} direction="column">
        <Grid item>
          <Typography variant="subtitle1" color="white">
            {option.headerText}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="white">
            {option.contentText}
          </Typography>
        </Grid>
      </Grid>
    </CookieConsent>
  )
}