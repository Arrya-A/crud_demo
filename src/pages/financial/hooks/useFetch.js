import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";

const useFetch = () => {
  const [data, setData] = useState({
    balance: "",
    expense: "",
    credits: "",
  });

  const fetchData = async () => {
    try {
      const { status, data } = await axiosInstance.get(
        "/admin/deposit-wallet-data"
      );
      if (status === 200) {
        console.log("usefetch success");
        
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
