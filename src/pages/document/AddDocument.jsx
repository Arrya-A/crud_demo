import { Button } from "@mui/material";
import { useState } from "react";
import ShowAddModal from "./dialog";
import { useForm } from "react-hook-form";
import useDoc from "./hooks/useDoc";

const AddDocument = ({fetchDoc}) => {
  const { addDoc } = useDoc();
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
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("sort_order", data.sort_order);

      if (data.document_url && data.document_url[0]) {
        formData.append("document_url", data.document_url[0]);
      }

      await addDoc(formData);
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
