import  { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";

const useProfile = () => {
  const [profiledata, setProfiledata] = useState();

  const fetchProfile = async () => {
    try {
      const { data, status } = await axiosInstance.get("/profile");
      if (status === 200) {
        setProfiledata(data.data.user);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return {profiledata};
};

export default useProfile;
