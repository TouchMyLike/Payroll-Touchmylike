import { Link as Navigation, useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import logo from "../../../assets/images/logo.png";
import { TLogo } from "../../../styled/Logo";

export function TForms(props: any) {
  //boolean props
  const { showLogo, showBtn } = props;
  const btnTxt = props.btnTxt || "Submit";
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {showLogo && <TLogo src={logo} width={150} height={150} />}
      {props.title && (
        <Typography variant="h6" component="h1">
          {props.title}
        </Typography>
      )}
      <Box component="form" noValidate>
        {props.inputs &&
          props.inputs.map((element: any, i: number) => (
            <TextField
              key={i}
              margin="normal"
              required
              fullWidth
              id={element.id}
              label={element.label}
              type={element.type}
              name={element.name}
              autoComplete={element.autoComplete}
              autoFocus={element.autoFocus}
              InputProps={{
                startAdornment: (
                  <InputAdornment position={element.position || "start"}>
                    {element.icon}
                  </InputAdornment>
                ),
              }}
              variant="filled"
            />
          ))}
        {props.inputsBtn &&
          props.inputsBtn.map((element: any, i: number) => (
            <Button
              key={i}
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              onClick={() => navigate(element.navigateTo)}
            >
              {element.text}
            </Button>
          ))}
        {props.link && props.link}
        {showBtn && (
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            onClick={props.onBtnClick}
          >
            {btnTxt}
          </Button>
        )}
      </Box>
    </Box>
  );
}
