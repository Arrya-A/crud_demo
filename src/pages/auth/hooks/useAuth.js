const UseAuth = () => {
  const addUser = (userData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
  };

  const isUserRegistered = (email) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users.find((user) => user.email === email);
  };
  const loginUser = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      const tokenPayload = { email: user.email, username: user.username };
      const token = btoa(JSON.stringify(tokenPayload));
      localStorage.setItem("token", token);
      return { success: true, token };
    }
    return { success: false };
  };

  const getToken = () => localStorage.getItem("token");

  const verifyToken = () => {
    const token = getToken();
    console.log("tokengf", token);

    if (!token) return null;
    try {
      const decodedToken = JSON.parse(atob(token));
      console.log("Decoded token:", decodedToken);
      return decodedToken;
    } catch (err) {
      return null;
    }
  };
  return {
    isUserRegistered,
    addUser,
    loginUser,
    verifyToken,
    getToken,
  };
};

export default UseAuth;
