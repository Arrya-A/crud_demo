const useDoc = () => {
  const [doc, setDoc] = useState([]);

  const fetchDoc = async () => {
    try {
      const { data, status } = await axiosInstance.get("/admin/tool-documents?page=1");
      if (status === 200) {
        setDoc(data?.data?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addDoc = async (formData) => {
    try {
      const response = await axiosInstance.post("/admin/tool-documents", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      await fetchDoc(); // 🟢 MOVE THIS HERE
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDoc();
  }, []);

  return { doc, fetchDoc, addDoc, deleteDoc, editDoc };
};
