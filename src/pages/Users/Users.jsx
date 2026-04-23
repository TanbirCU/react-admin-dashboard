import { useState } from "react";
import { Users, Plus, Pencil, Trash2 } from "lucide-react";

const UsersPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Tanvir Ahmed", email: "tanvir@gmail.com" },
    { id: 2, name: "John Doe", email: "john@gmail.com" },
  ]);

  const [form, setForm] = useState({ name: "", email: "" });
  const [editingId, setEditingId] = useState(null);

  // ADD / UPDATE
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      setUsers(users.map(u =>
        u.id === editingId ? { ...u, ...form } : u
      ));
      setEditingId(null);
    } else {
      setUsers([
        ...users,
        { id: Date.now(), ...form }
      ]);
    }

    setForm({ name: "", email: "" });
  };

  // EDIT
  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email });
    setEditingId(user.id);
  };

  // DELETE
  const handleDelete = (id) => {
    setUsers(users.filter(u => u.id !== id));
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

        <button className="bg-blue-600 text-white px-4 rounded flex items-center gap-1">
          <Plus size={16} />
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      {/* TABLE */}
      <table className="w-full border">
        <thead className="bg-black-100">
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border flex gap-2 justify-center">

                {/* EDIT */}
                <button
                  onClick={() => handleEdit(user)}
                  className="text-blue-600"
                >
                  <Pencil size={18} />
                </button>

                {/* DELETE */}
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-600"
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