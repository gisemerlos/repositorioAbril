import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const login = () => {
  const theme = useTheme();
  return (
    <Container
      style={{
        color: theme.palette.primary.main,
      }}
    >
      <Stack spacing={"1.5rem"} marginTop={"20vh"} justifyContent={"center"}>
        <Typography variant="h5" color={"inherit"}>
          Ingresa a tu cuenta
        </Typography>

        <TextField
          id="standard-basic"
          label="Correo Electronico"
          variant="standard"
          type="email"
        />

        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
        />

        <Button variant="contained">Iniciar Sesion</Button>
      </Stack>
    </Container>
  );
};

export default login;
