import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import useMembers from "./hooks/useMembers";

const heading = [
  "No",
  "User Name",
  "Email",
  "Rank",
  "Paid Active",
  "Created At",
  "Nominee Name",
  "Relationship with applicant",
  "Action",
];

const NetworkMembers = () => {
  const { data } = useMembers();
  console.log(data[0]);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            {heading.map((head, id) => (
              <TableCell key={id}>{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.rank_id}</TableCell>
              <TableCell>{user.paid_active === 0 ? "no" : "yes"}</TableCell>
              <TableCell>{user.created_at}</TableCell>
              <TableCell>{user.user_profile?.nominee_name || "-"}</TableCell>
              <TableCell>
                {user.user_profile?.relationship_with_applicant || "-"}
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default NetworkMembers;
