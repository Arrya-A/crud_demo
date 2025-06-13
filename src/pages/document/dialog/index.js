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
  methods,
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
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label="Document Title"
                  variant="outlined"
                  name="title"
                />
                <TextField
                  fullWidth
                  label="Sort Order"
                  variant="outlined"
                  name="sort_order"
                />

                {/* <TextField
                  fullWidth
                  name="sample_doc"
                  variant="outlined"
                  type="file"
                  label="upload document"
                  {...register("doc_url")}
                /> */}
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button type="submit">{submitText}</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </form>
        </FormProvider>
      </Dialog>
    </>
  );
};

export default index;
