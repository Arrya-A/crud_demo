import React from "react";
import useDoc from "./hooks/useDoc";
import { Button } from "@mui/material";

const DeleteDocument = ({ id }) => {
  const { deleteDoc } = useDoc();
  const handleDelete = async () => {
    try {
      await deleteDoc(id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Button color="error"  variant="contained" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
};

export default DeleteDocument;
