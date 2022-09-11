import { TForms } from '../Components/TML/TForm'
import { Link as Navigation, useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'

export default function ResetPassword() {
  const inputs = [
    {
      id: 'empId',
      label: 'Employee ID',
      name: 'empId',
      autoFocus: true
    }
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
  const navigate = useNavigate()
  const onBtnClick = () => navigate(`/send_otp`)
  return <TForms showLogo inputs={inputs} link={link} showBtn btnTxt={'Forgot Password'} onBtnClick={onBtnClick} />
}
