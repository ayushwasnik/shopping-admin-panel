import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function onLogin() {
    navigate("/pages");
  }
  return (
    <div className="login-container">
      <Card sx={{ maxWidth: 400, padding: 2 }}>
        <CardHeader title="Sign In"></CardHeader>
        <CardContent>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            margin="normal"
          />
        </CardContent>

        <CardActions>
          <Button fullWidth variant="contained" onClick={onLogin}>
            Login
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Login;
