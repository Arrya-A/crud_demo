import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
const useMembers = () => {
  const [data, setData] = useState([]);

  const fetchMembers = async () => {
    try {
      const { status, data } = await axiosInstance.get(
        "/admin/users?page=1&type=network"
      );
      if (status == 200) {
        console.log("usemember success");
        console.log(data.data.data);
        setData(data.data.data);
      }
    } catch (err) {
      console.log(err);
      console.log("usemember failed");
    }
  };
  useEffect(() => {
    fetchMembers();
  }, []);
  return { data };
};

export default useMembers;
