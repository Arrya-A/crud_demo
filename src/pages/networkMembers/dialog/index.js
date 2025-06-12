import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { FormProvider } from "react-hook-form";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const index = ({
  open,
  handleClose,
  handleSubmit,
  onSubmit,
  register,
  errors,
  title,
  submitText,
}) => {
  return (
    <>
      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Edit</DialogTitle>
        <FormProvider>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label="title"
                  variant="outlined"
                  {...register("title")}
                />
                <TextField
                  fullWidth
                  label="sort_order"
                  variant="outlined"
                  {...register("sort_order")}
                />
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button type="submit" onClick={handleClose}>
                {submitText}
              </Button>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </form>
        </FormProvider>
      </Dialog>
    </>
  );
};

export default index;
