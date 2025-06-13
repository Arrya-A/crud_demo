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
import Map from "../components/Map";
import dayjs from "dayjs";

const heading = [
  "No",
  "File title",
  "sort order",
  "url",
  "created date",
  "action",
];

const Document = () => {
  const { doc, fetchDoc } = useDoc();

  return (
    <>
      {/* <AddDocument /> */}
      <Table>
        <TableHead>
          <TableRow>
            <Map
              list={heading}
              render={(heading, id) => (
                <TableCell key={id}>{heading}</TableCell>
              )}
            />
          </TableRow>
        </TableHead>
        <TableBody>
          <Map
            list={doc}
            render={(item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.sort_order}</TableCell>
                <TableCell component="a" href={item.doc_url}>
                  Download pdf
                </TableCell>
                <TableCell>
                  {dayjs(item.created_at).format("DD MMM YYYY")}
                </TableCell>
                <TableCell>
                  <EditDocument item={item} fetchDoc={fetchDoc} />{" "}
                </TableCell>
              </TableRow>
            )}
          />
        </TableBody>
      </Table>
    </>
  );
};

export default Document;