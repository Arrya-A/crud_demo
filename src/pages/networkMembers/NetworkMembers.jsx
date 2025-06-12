import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import useMembers from "./hooks/useMembers";
import dayjs from "dayjs";
import EditNetworkMembers from "./EditNetworkMembers";
import { useState } from "react";

const heading = [
  "No",
  "User Name",
  "Email",
  "Sponsor",
  "Leg",
  "Paid Active",
  "Document Signed",
  "Commission status",
  "Created at",
  "Action",
];

const NetworkMembers = () => {
  const [user, setUser] = useState();
  const { data } = useMembers();
  console.log(data);

  const handleEditUser = (updatedUser) => {
    console.log("handleedit");
    setUser((prevUser) =>
      prevUser.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

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
              <TableCell>{user.sponsor}</TableCell>
              <TableCell>{user.tree_table_user?.leg}</TableCell>
              <TableCell>{user.paid_active === 0 ? "no" : "yes"}</TableCell>
              <TableCell>
                {user.user_profile?.is_signed_document === 0 ? "no" : "yes"}
              </TableCell>
              <TableCell>{user.commission_status}</TableCell>
              <TableCell>
                {dayjs(user.created_at).format("DD MMM YYYY")}
              </TableCell>
              <TableCell>
                <EditNetworkMembers
                  userData={user}
                  onEditUser={handleEditUser}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default NetworkMembers;
