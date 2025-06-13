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

        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Document Title"
                variant="outlined"
                name="title"
                {...register("title")}
              />
              <TextField
                fullWidth
                label="Sort Order"
                variant="outlined"
                name="sort_order"
                {...register("sort_order")}
              />

              <TextField
                fullWidth
                name="sample_doc"
                variant="outlined"
                type="file"
                label="upload document"
                {...register("document_url")}
                accept=".pdf,.doc,.docx,.jpg,.png"
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="success" type="submit">{submitText}</Button>
            <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default index;
