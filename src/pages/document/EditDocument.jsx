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
      const formData = new FormData();
    formData.append("title", data.title);
    formData.append("sort_order", data.sort_order);

    if (data.document_url && data.document_url[0]) {
      formData.append("document_url", data.document_url[0]);
    }
      await editDoc(item.id, formData);
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
