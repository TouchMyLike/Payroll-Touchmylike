import { Link as Navigation } from "react-router-dom"
import {
    Typography,
    Box,
    TextField,
    Button,
    InputAdornment
} from '@mui/material'
import { AccountCircle, Lock } from '@mui/icons-material'
import logo from '../../assets/images/logo.png'
import { TLogo } from '../../styled/Logo'

export default function ChangePassword() {
    return (
        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <TLogo src={logo} width={150} height={150} />
            <Box component='form' noValidate>


                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                        ),
                    }}
                    variant="filled"
                />


                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Confirm Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                        ),
                    }}
                    variant="filled"
                />

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3, mb: 2, backgroundColor: '#FFFFFF' }}
                >
                    Confirm to reset password
                </Button>
            </Box>
        </Box>
    )
}