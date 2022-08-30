import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
// import ResetPassword from './Components/ResetPassword'
// import SendOTP from './Components/SendOTP'
// import ChangePassword from './Components/ChangePassword'
import Footer from './Components/Footer'
import { Homepage, ResetPassword, SendOTP, ChangePassword } from './Pages'

function App() {
  return (
    <Container component='main'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/reset_password' element={<ResetPassword />} />
        <Route path='/send_otp' element={<SendOTP />} />
        <Route path='/change_password' element={<ChangePassword />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
