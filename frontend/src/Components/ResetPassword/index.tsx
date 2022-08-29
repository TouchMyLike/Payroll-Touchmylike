import { Link as Navigation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {
    Link,
    Box,
    Typography,
    TextField,
    Button,
} from '@mui/material'
import logo from '../../assets/images/logo.png'
import { TLogo } from '../../styled/Logo'

export default function ResetPassword() {
    let navigate = useNavigate()
    return (
        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <TLogo src={logo} width={150} height={150} />
            <Typography variant="h6" component="h1">Reset Password</Typography>
            <Box component='form' noValidate>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Employee ID"
                    type="text"
                    variant="filled"
                />


                <Navigation to="/" style={{ color: '#FFF' }}>
                    <Typography variant="body2" color='text.secondary'>Back to Login?</Typography>
                </Navigation>

                <br />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3, mb: 2, backgroundColor: '#FFFFFF' }}
                    onClick={() => navigate(`/send_otp`)}
                >
                    Forgot Password
                </Button>
            </Box>
        </Box>
    )
}