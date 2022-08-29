import { Link as Navigation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {
    Box,
    Typography,
    TextField,
    Button,
} from '@mui/material'
import logo from '../../assets/images/logo.png'
import { TLogo } from '../../styled/Logo'

export default function SendOTP() {
    let navigate = useNavigate()
    return (
        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <TLogo src={logo} width={150} height={150} />
            <Box component='form' noValidate>
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3, mb: 2, backgroundColor: '#FFFFFF' }}
                    onClick={() => navigate(`/change_password`)}
                >
                    Send to touchmylike@gmail.com
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3, mb: 2, backgroundColor: '#FFFFFF' }}
                    onClick={() => navigate(`/change_password`)}
                >
                    Send to 0912345678
                </Button>


                <Navigation to="/" style={{ color: '#FFF' }}>
                    <Typography variant="body2" color='text.secondary'>Back to Login?</Typography>
                </Navigation>

                <br />

            </Box>
        </Box>
    )
}