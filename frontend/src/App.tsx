import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import { ChangePassword, Homepage, ResetPassword, SendOTP, Test } from './Pages'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
      <Container component='main'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/reset_password' element={<ResetPassword />} />
          <Route path='/send_otp' element={<SendOTP />} />
          <Route path='/change_password' element={<ChangePassword />} />
          <Route path='/test' element={<Test />} />
        </Routes>
        <Footer />
      </Container>
    </>
  )
}
