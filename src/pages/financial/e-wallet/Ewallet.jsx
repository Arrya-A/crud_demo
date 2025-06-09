import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import useFetch from "../hooks/useFetch";

const heading = [
  "No",
  "User Name",
  "From User",
  "Payment Amount",
  "Payment Type",
  "Amount Type",
  "Date",
];
const Ewallet = () => {
  const { balance, expense, credits } = useFetch();
  return (
    <>
      <Grid container spacing={2} sx={{ width: "100vw" }}>
        <Grid item xs={12} md={4}>
          <Box sx={{ height: "100px", p: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography>Balance: ₹ {balance}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ height: "100px", p: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography>Expense: ₹ {expense}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ height: "100px", p: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography>Total Credit: ₹ {credits}</Typography>
          </Box>
        </Grid>
      </Grid>
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
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Ewallet;
