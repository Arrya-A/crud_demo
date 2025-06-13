import { Button } from "@mui/material";

const DeleteDocument = ({ id, deleteDoc }) => {
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
