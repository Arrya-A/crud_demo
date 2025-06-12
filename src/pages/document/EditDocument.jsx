import React, { useState } from "react";
import ShowEditModal from "./dialog";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
const EditDocument = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();


  const onSubmit=async(data)=>{
    console.log(data);
    
  }
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Edit
      </Button>
      <ShowEditModal
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        onSubmit={onSubmit}
        title="Edit"
        submitText="Edit"
      />
    </div>
  );
};

export default EditDocument;
