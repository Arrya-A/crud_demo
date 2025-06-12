import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import useProfile from "./hook/useProfile";
const heading = ["Firstname", "Email", "zipcode", "mobile"];

const Profile = () => {
  const { profiledata } = useProfile();
  console.log(profiledata);

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
          <TableRow>
            <TableCell>{profiledata?.username}</TableCell>
            <TableCell>{profiledata?.email}</TableCell>
            <TableCell>{profiledata?.user_profile?.zipcode || "-"}</TableCell>
            <TableCell>{profiledata?.user_profile?.mobile || "-"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Profile;
