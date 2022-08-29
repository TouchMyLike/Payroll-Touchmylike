import {
  Routes,
  Route,
} from "react-router-dom";
import { Container } from '@mui/material'
import Footer from './Components/Footer'
import Login from './Components/Login'
import ResetPassword from './Components/ResetPassword'
import SendOTP from "./Components/SendOTP";
import ChangePassword from "./Components/ChangePassword";

function App() {
  return (
    <Container component='main'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/send_otp" element={<SendOTP />} />
        <Route path="/change_password" element={<ChangePassword />} />
      </Routes>
        <Footer />
    </Container>
  )
}

export default App
