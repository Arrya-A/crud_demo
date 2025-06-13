import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";

const useDoc = () => {
  const [doc, setDoc] = useState([]);
  const fetchDoc = async () => {
    try {
      const { data, status } = await axiosInstance.get(
        "/admin/tool-documents?page=1"
      );
      if (status == 200) {
        setDoc(data?.data?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteDoc = async (id) => {
    try {
      const { status } = await axiosInstance.delete(
        `/admin/tool-documents/${id}`
      );
      if (status === 200) {
        fetchDoc();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editDoc = async (id, formData) => {
    try {
    const response = await axiosInstance.post(
      `/admin/tool-documents/${id}?_method=PUT`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (err) {
      console.log(err);
    }
  };

  const addDoc = async (formData) => {
    try {
    const response = await axiosInstance.post(
      "/admin/tool-documents",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDoc();
  }, []);

  return { doc, fetchDoc, deleteDoc, editDoc, addDoc };
};

export default useDoc;
