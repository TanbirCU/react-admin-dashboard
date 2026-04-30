import { useState } from "react";
import { Users, Plus, Pencil, Trash2 } from "lucide-react";
import { useEffect } from "react";
import { ArrowUpDown } from "lucide-react";
import { toast } from "react-hot-toast";
import {getUsers, createUser, updateUser, deleteUser} from "../../services/userService";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editingId, setEditingId] = useState(null);

  const[sortField, setSortField] = useState("");
  const[sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users.data.users.data);
    };
    fetchUsers();
  }, []);

  const handleSort = (field) => {
    
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
    const sorted = [...users].sort((a, b) => {
      if (a[field] < b[field]) return order === "asc" ? -1 : 1;
      if (a[field] > b[field]) return order === "asc" ? 1 : -1;
      return 0;
    });
    setUsers(sorted);
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const loadingToast = toast.loading("Processing...");
    try{
      if(editingId){
        // update User
        const response = await updateUser(editingId, form);
        setUsers((prevUsers)=>prevUsers.map(u=>u.id === editingId ? response.data : u));
        setEditingId(null);
        toast.success(response.data.message, {
          id: loadingToast,
        });


      }else{
        // create User
        const response = await createUser(form);
        toast.success(response.data.message, {
          id: loadingToast,
        });

      }
      setForm({
        name: "",
        email: "",
      });
      await fetchUsers();

    }catch(error){
      console.error("form can not submit",error);
    }
  }
  const fetchUsers = async () => {
    const users = await getUsers();
    setUsers(users.data.users.data);
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email });
    setEditingId(user.id);
  };

  const handleDelete = async (id) => {
    const loadingToast = toast.loading("Processing...");
    try {
      const response = await deleteUser(id);
      setUsers(users.filter(u => u.id !== id));
      toast.success(response.data.message, {
          id: loadingToast,
        });
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error deleting user", {
        id: loadingToast,
      });
    }
  };

  return (
    <div className="p-6 bg-surface rounded-lg shadow-md">
      
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-6">
        <Users size={24} />
        <h2 className="text-xl font-bold">Users Management</h2>
      </div>

      {/* FORM */}
       <form onSubmit={handleSubmit} className="mb-6 flex gap-3">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border p-2 rounded w-full"
          required
        />

        <button className="bg-blue-600 text-white px-4 rounded flex items-center gap-1 cursor-pointer hover:bg-blue-700" type="submit">
          <Plus size={16} />
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      {/* TABLE */}
      <table className="w-full border">
        <thead className="bg-black-100">
          <tr>
            <th
                onClick={()=>handleSort("id")}
                className="p-2 border cursor-pointer"
              >
              <div className="flex items-center justify-center gap-1">
                ID
                <ArrowUpDown size={16} />
              </div>
            </th>
            <th  
                onClick={()=>handleSort("name")}
                className="p-2 border cursor-pointer"
              >
              <div className="flex items-center justify-center gap-1">
                Name
                <ArrowUpDown size={16} />
              </div>
            </th>
            <th  
            onClick={()=>handleSort("email")}
                className="p-2 border cursor-pointer"
              >
              <div className="flex items-center justify-center gap-1">
                Email
                <ArrowUpDown size={16} />
              </div>
            </th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td className="p-2 border flex justify-center">{index + 1}</td>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border flex gap-2 justify-center">

                {/* EDIT */}
                <button
                  onClick={() => handleEdit(user)}
                  className="text-blue-600 cursor-pointer"
                >
                  <Pencil size={18} />
                </button>

                {/* DELETE */}
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-600 cursor-pointer"
                >
                  <Trash2 size={18} />
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default UsersPage;