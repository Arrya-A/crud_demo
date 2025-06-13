import { useState } from "react";
import ShowEditModal from "./dialog";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import useDoc from "./hooks/useDoc";

const EditDocument = ({ item, fetchDoc }) => {
  const { editDoc } = useDoc();
  const [open, setOpen] = useState(false);

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
    try {
      await editDoc(item.id, data);
      handleClose();
      fetchDoc();
    } catch (err) {
      console.log(err);
    }
  };

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
