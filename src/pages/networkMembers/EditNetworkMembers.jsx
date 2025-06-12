import { Button } from "@mui/material";
import React, { use, useEffect, useState } from "react";
import ShowEditModal from "./dialog";
import { useForm } from "react-hook-form";
import axiosInstance from "../../utils/axiosInstance";

const EditNetworkMembers = ({ userData, onEditUser }) => {
  const [openEdit, setOpenEdit] = useState(false);

  const handleClickOpen = () => {
    setOpenEdit(true);
  };

  const handleClose = () => {
    setOpenEdit(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: userData || { username: "", email: "" } });

  const onSubmit = async (data) => {
    const updatedUser = {
      ...userData,
      ...data,
    };
    try {
      const response = await axiosInstance.put(
        `/admin/users/${userData.id}?page=1&type=network`,
        data
      );
      onEditUser(updatedUser);
      handleClose();
      reset(updatedUser);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    reset(userData);
  }, [userData, reset]);

  return (
    <>
      <Button type="submit" variant="contained" onClick={handleClickOpen}>
        Edit
      </Button>

      <ShowEditModal
        open={openEdit}
        handleClose={handleClose}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
    </>
  );
};

export default EditNetworkMembers;
