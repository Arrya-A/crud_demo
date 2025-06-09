import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";

const useFetch = () => {
  const [data, setData] = useState({
    balance: "",
    expense: "",
    credits: "",
  });

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    console.log("token", token);

    try {
      const { status, data } = await axiosInstance.get("/deposit-wallet-data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      if (status === 200) {
        setData(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return data;
};

export default useFetch;
