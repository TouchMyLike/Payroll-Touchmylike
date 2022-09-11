import { TForms } from '../Components/TML/TForm'
import { Lock } from '@mui/icons-material'

export default function ChangePassword() {
  const inputs = [
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      name: 'password',
      autoComplete: 'current-password',
      autoFocus: true,
      position: 'start',
      icon: <Lock />
    },
    {
      id: 'Cpassword',
      label: 'Confirm Password',
      type: 'password',
      name: 'Cpassword',
      autoComplete: 'current-password',
      position: 'start',
      icon: <Lock />
    }
  ]

  return <TForms showLogo showBtn inputs={inputs} btnTxt={'Confirm to reset password'} />
}
