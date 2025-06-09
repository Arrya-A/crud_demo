import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "./hooks/useAuth";
import { useState } from "react";

const defaultValues = {
  email: "",
  password: "",
};

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email id").required("Email is required"),
  password: yup.string().required("Password is required"),
});
const Login = () => {
  const [loginerror, setLoginerror] = useState("");
  const navigate = useNavigate();
  const { loginUser } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    const { success, token } = loginUser({ email, password });

    if (success) {
      setLoginerror("");
      alert("Login successful");
      console.log("token:", token)
      navigate("/home");
    } else {
      setLoginerror("Invalid credentials");
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: 400,
            p: 3,
            boxShadow: 3,
            borderRadius: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Typography>Sign In</Typography>
              <TextField
                variant="outlined"
                label="Email"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              ></TextField>
              <TextField
                variant="outlined"
                type="password"
                label="Password"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              ></TextField>
              <Button fullWidth type="submit" variant="contained">
                Sign In
              </Button>
              {loginerror && (
                <Typography color="error">{loginerror}</Typography>
              )}
              <Typography>
                New User? Sign Up <Link to={"/register"}>here</Link>
              </Typography>
            </Stack>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Login;
