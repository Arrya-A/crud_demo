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
import { FormProvider, useForm } from "react-hook-form";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const index = ({
  open,
  handleClose,
  handleSubmit,
  register,
  errors,
  onSubmit,
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
        <DialogTitle>{title}</DialogTitle>
        <FormProvider>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label="Document Title"
                  variant="outlined"
                  {...register("title")}
                  
                />
                <TextField
                  fullWidth
                  label="Sort Order"
                  variant="outlined"
                  {...register("sort_order")}
                  
                />
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button type="submit" >
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
