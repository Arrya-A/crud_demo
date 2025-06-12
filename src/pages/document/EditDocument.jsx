import React, { useEffect, useState } from "react";
import ShowEditModal from "./dialog";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import axiosInstance from "../../utils/axiosInstance";
import useDoc from "./hooks/useDoc";

const EditDocument = ({ item, fetchDoc }) => {
  const [open, setOpen] = useState(false);
  const { deleteDoc } = useDoc();

  const handleClickOpen = () => {
    setOpen(true);
    reset({
      title: item.title,
      sort_order: item.sort_order,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axiosInstance.put(
        `/admin/tool-documents/${item.id}`,
        data
      );
      handleClose();
      fetchDoc();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = () => {
    deleteDoc(item.id);
  };

  useEffect(() => {
    fetchDoc();
  }, []);

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Edit
      </Button>
      <Button variant="outlined" onClick={handleDelete}>
        Delete
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
