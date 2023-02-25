import { femmSimScript } from './femmSimScript'

export const YOUTUBE_URL = 'https://www.youtube.com/channel/UCQk0CkSexTb7GQvpGxj4kxw'
export const GITHUB_URL = 'https://github.com/CJohnson25/femm-sim-gen-app/'
export const CONSENT_COOKIE = 'femm-sim-gen-cookie-consent'

export const INPUT_WIDTH = '100px'

export function formInputToLuaScript(formVals) {
  const stringifiedVals = JSON.stringify(formVals, null, 2)
  const sani = stringifiedVals.replace(/^{\n?|\n?}$/g, '')
  const sani1 = sani.replace(/"(.*)": /g, '$1 = ')
  const sani2 = sani1.replace(/,\n/g, '\n')
  const complete = sani2 + femmSimScript

  return complete
}

// export function detectOs() {
//   var detectOS = ''

//   if (navigator.appVersion.indexOf('Win') !== -1) {
//     detectOS = 'windows'
//   }

//   if (navigator.appVersion.indexOf('Mac') !== -1) {
//     detectOS = 'mac'
//   }

//   if (navigator.appVersion.indexOf('Linux') !== -1) {
//     detectOS = 'linux'
//   }
// }

export const unitTypes = ['millimeters', 'inches']
export const magnetTypes = [
  'N30',
  'N33',
  'N35',
  'N38',
  'N40',
  'N42',
  'N45',
  'N48',
  'N50',
  'N52',
  'N55'
]

export const ironTypes = [
  '1006 Steel',
  '1010 Steel',
  '1018 Steel',
  '1020 Steel',
  '1117 Steel'
]

export const wireGauges = [
  '10 AWG',
  '12 AWG',
  '14 AWG',
  '16 AWG',
  '18 AWG',
  '20 AWG',
  '22 AWG',
  '24 AWG',
  '26 AWG',
  '28 AWG',
  '30 AWG',
  '32 AWG',
  '34 AWG',
  '36 AWG'
]

export const windingTypes = [
  'Toroidal - Distributed',
  'Serpentine - Distributed',
]

export const getUnits = (unit) => {
  const unitsMeta = {
    millimeters: {
      label: 'mm'
    },
    inches: {
      label: 'in'
    }
  }
  return unitsMeta?.[unit]
}

// Set AIR_GAP based on STATOR_HEIGHT and ROTOR_TO_STATOR_GAP if STATOR == 1
export const getAirGap = (formVals) => {
  if (formVals.STATOR === 1) {
    return parseFloat(formVals.STATOR_HEIGHT) + (parseFloat(formVals.ROTOR_TO_STATOR_GAP) * 2)
  }

  return formVals.AIR_GAP
}