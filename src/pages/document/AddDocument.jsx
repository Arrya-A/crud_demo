import { Button } from "@mui/material";
import { useState } from "react";
import ShowAddModal from "./dialog";
import { useForm } from "react-hook-form";
import axiosInstance from "../../utils/axiosInstance";
import useDoc from "./hooks/useDoc";

const AddDocument = () => {
  const { addDoc, fetchDoc } = useDoc();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await addDoc(data);
      handleClose();
      fetchDoc();
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
        register={register}
        errors={errors}
        onSubmit={onSubmit}
        title="Add"
        submitText="Add"
      />
    </>
  );
};

export default AddDocument;
