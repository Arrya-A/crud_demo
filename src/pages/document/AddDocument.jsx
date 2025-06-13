import { Button } from "@mui/material";
import { useState } from "react";
import ShowAddModal from "./dialog";
import { useForm } from "react-hook-form";
import axiosInstance from "../../utils/axiosInstance";

const AddDocument = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    methods.reset();
  };

  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await axiosInstance.post("/admin/tool-documents", data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Button type="submit" variant="contained" onClick={handleClickOpen}>
        Add
      </Button>
      <ShowAddModal
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        methods={methods}
        errors={errors}
        onSubmit={onSubmit}
        title="Add"
        submitText="Add"
      />
    </>
  );
};

export default AddDocument;
