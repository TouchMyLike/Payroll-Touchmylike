import { TForms } from '../components/TML/TForm'
import { Link as Navigation } from 'react-router-dom'
import { Typography } from '@mui/material'

export default function ResetPassword() {
  const inputsBtn = [
    {
      navigateTo: '/change_password',
      text: 'Send to touchmylike@gmail.com',
    },
    {
      navigateTo: '/change_password',
      text: 'Send to 0912345678',
    },
  ]

  const link = (
    <>
      <Navigation to='/' style={{ color: '#FFF' }}>
        <Typography variant='body2' color='text.secondary'>
          Back to Login?
        </Typography>
      </Navigation>
    </>
  )
  return <TForms showLogo inputsBtn={inputsBtn} link={link} />
}
