import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";

const useDoc = () => {
  const [doc, setDoc] = useState();
  const fetchDoc = async () => {
    try {
      const { data, status } = await axiosInstance.get(
        "/admin/tool-documents?page=1"
      );
      console.log(data.data);
      
      if (status == 200) {
        setDoc(data.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchDoc();
  }, []);
  return {doc};
};

export default useDoc;
