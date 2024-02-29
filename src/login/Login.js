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

function Login() {
  return (
    <div className="login-container">
      <Card sx={{ maxWidth: 400 ,padding:2}}>
        <CardHeader title="Sign In"></CardHeader>
        <CardContent>
          <TextField fullWidth label="Email" variant="outlined" margin="normal" /> 
       
          <TextField fullWidth label="Password" variant="outlined"margin="normal" />
        </CardContent>

        <CardActions>
          <Button fullWidth variant="contained">Login</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Login;
