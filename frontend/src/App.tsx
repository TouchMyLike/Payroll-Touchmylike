import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Footer from './components/Footer'
import { Account, Homepage, ResetPassword, SendOTP, ChangePassword } from './pages'

function App() {
  return (
    <Container component='main'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/account' element={<Account />} />
        <Route path='/reset_password' element={<ResetPassword />} />
        <Route path='/send_otp' element={<SendOTP />} />
        <Route path='/change_password' element={<ChangePassword />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
