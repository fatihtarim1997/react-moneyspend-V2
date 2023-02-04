import "./Signup.module.css";
import { useSignup } from "../../hooks/useSignup";
import {
  Container,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const { signup, error, loading } = useSignup();
  const [values, setValues] = useState({
    email: "",
    password: "",
    userName: "",
    showPassword: false,
  });
  const handleVisibility = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleChange = (pros) => (e) => {
    setValues({ ...values, [pros]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(values.email, values.password, values.userName);
    navigate("/");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography
          sx={{ mt: 15, ml: 5, fontWeight: "bold" }}
          variant="h4"
          color="darkslateblue"
        >
          Signup
        </Typography>
        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            value={values.email}
            onChange={handleChange("email")}
            id="email"
            label="Email"
          />
        </FormControl>
        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="user-name">User Name</InputLabel>
          <OutlinedInput
            value={values.userName}
            onChange={handleChange("userName")}
            id="user-name"
            label="User Name"
          />
        </FormControl>
        <FormControl fullWidth sx={{ my: 5 }}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            id="password"
            label="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleVisibility}>
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {!loading && (
          <Button
            variant="outlined"
            type="submit"
            color="info"
            size="large"
            sx={{ mt: 5 }}
          >
            Login
          </Button>
        )}
        {loading && ( <Button
          variant="outlined"
          disabled
          type="submit"
          color="info"
          size="large"
          sx={{ mt: 5 }}
        >
          Please wait...
        </Button>)}
        {error && (
          <Typography sx={{ mt: 5 }} variant="h6" color="red">
            {error}
          </Typography>
        )}
      </form>
    </Container>
  );
}
