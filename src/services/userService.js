import api from "./api";

// export const getUsers = async () => {
//   const response = await api.get("/users");
//   return response.data;
// };

// export const createUser = async (user) => {
//   const response = await api.post("/users", user);
//   return response.data;
// };  

export const getUsers = () => api.get("/users");

export const createUser = (user) => api.post("/users", user);

export const updateUser = (id, user) => api.put(`/users/${id}`, user);

export const deleteUser = (id) => api.delete(`/users/${id}`);
