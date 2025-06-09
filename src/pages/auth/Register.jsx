import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import UseAuth from "./hooks/useAuth";

const registerSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
});
const Register = () => {
  const { isUserRegistered, addUser } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    const { email } = data;

    const registeredUser = isUserRegistered(email);

    if (registeredUser) {
      alert("Account already exists");
    } else {
      addUser(data);
      alert("Reisteration successfull");
      reset();
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
              <Typography>Sign Up</Typography>
              <TextField
                fullWidth
                variant="outlined"
                label="Username"
                {...register("username")}
                error={!!errors.username}
                helperText={errors?.username?.message}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                {...register("email")}
                error={!!errors.email}
                helperText={errors?.email?.message}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="password"
                label="Password"
                {...register("password")}
                error={!!errors.password}
                helperText={errors?.password?.message}
              />
              <Button fullWidth type="submit" variant="contained">
                Sign Up
              </Button>
              <Typography>
                Already have an account?Sign In <Link to={"/"}>here</Link>
              </Typography>
            </Stack>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Register;
