import { Button } from "@mui/material";
import React, { useState } from "react";
import ShowAddModal from "./dialog";
import { useForm } from "react-hook-form";
import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";

const AddDocument = () => {
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
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/admin/tool-documents", data);
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
