import { TForms } from '../Components/TML/TForm'
import { AccountCircle, Lock } from '@mui/icons-material'
import { Link as Navigation } from 'react-router-dom'
import { Typography } from '@mui/material'

export default function Homepage() {
  const inputs = [
    {
      id: 'email',
      label: 'Email Address',
      name: 'email',
      autoComplete: 'email',
      autoFocus: true,
      position: 'start',
      icon: <AccountCircle />
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      name: 'password',
      autoComplete: 'current-password',
      position: 'start',
      icon: <Lock />
    }
  ]

  const link = (
    <>
      <Navigation to='/reset_password' style={{ color: '#FFF' }}>
        <Typography variant='body2' color='text.secondary'>
          Forgot Password?
        </Typography>
      </Navigation>
    </>
  )
  return <TForms showLogo showBtn inputs={inputs} btnTxt={'Login'} link={link} />

  // <TForms>
  //   ddddd
  // </TForms>
}
