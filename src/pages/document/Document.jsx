import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import useDoc from "./hooks/useDoc";
import AddDocument from "./AddDocument";
import EditDocument from "./EditDocument";
const heading = ["No", "File title", "sort order", "created date", "action"];
const Document = () => {
  const { doc } = useDoc();
  console.log(doc);

  return (
    <>
      <AddDocument />
      <Table>
        <TableHead>
          <TableRow>
            {heading.map((head, id) => (
              <TableCell key={id}>{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {doc &&
            doc.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.sort_order}</TableCell>
                <TableCell>{item.created_at}</TableCell>
                <TableCell><EditDocument/></TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Document;
