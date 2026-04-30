import { useState } from "react";
import { Users, Plus, Pencil, Trash2 } from "lucide-react";
import { useEffect } from "react";
import { ArrowUpDown } from "lucide-react";
import { toast } from "react-hot-toast";


const CourseList = () => {
    return (
       <div className="p-6 bg-surface rounded-lg shadow-md">
      
        {/* HEADER */}
        <div className="flex items-center gap-3 mb-6">
            {/* <Course size={24} /> */}
            <h2 className="text-xl font-bold">Course Management</h2>
        </div>
        <div className="flex justify-end mb-4">
            <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                <Plus size={16} />
                Add Course
            </button>
        </div>
        
        <table className="w-full border">
            <thead className="bg-black-100">
            <tr>
                <th
                    // onClick={()=>handleSort("id")}
                    className="p-2 border cursor-pointer"
                >
                <div className="flex items-center justify-center gap-1 text-sm">
                    ID
                    <ArrowUpDown size={12} />
                </div>
                </th>
                <th  
                    // onClick={()=>handleSort("name")}
                    className="p-2 border cursor-pointer"
                >
                <div className="flex items-center justify-center gap-1 text-sm">
                    Title
                    <ArrowUpDown size={12} />
                </div>
                </th>
                <th  
                // onClick={()=>handleSort("email")}
                    className="p-2 border cursor-pointer"
                >
                <div className="flex items-center justify-center gap-1 text-sm">
                    Category
                    <ArrowUpDown size={12} />
                </div>
                </th>
                <th  
                // onClick={()=>handleSort("email")}
                    className="p-2 border cursor-pointer"
                >
                <div className="flex items-center justify-center gap-1 text-sm">
                    Regular Price
                    <ArrowUpDown size={12} />
                </div>
                </th>
                <th  
                // onClick={()=>handleSort("email")}
                    className="p-2 border cursor-pointer"
                >
                <div className="flex items-center justify-center gap-1 text-sm">
                    Discount Price
                    <ArrowUpDown size={12} />
                </div>
                </th>
                <th  
                // onClick={()=>handleSort("email")}
                    className="p-2 border cursor-pointer"
                >
                <div className="flex items-center justify-center gap-1 text-sm">
                    Instructor
                    <ArrowUpDown size={12} />
                </div>
                </th>
                <th  
                // onClick={()=>handleSort("email")}
                    className="p-2 border cursor-pointer"
                >
                <div className="flex items-center justify-center gap-1 text-sm">
                    Level
                    <ArrowUpDown size={12} />
                </div>
                </th>
                <th  
                // onClick={()=>handleSort("email")}
                    className="p-2 border cursor-pointer"
                >
                <div className="flex items-center justify-center gap-1 text-sm">
                    Status
                    <ArrowUpDown size={12} />
                </div>
                </th>
                <th className="p-2 border text-sm">Actions</th>
            </tr>
            </thead>

            <tbody>
            {/* {users.map((user, index) => (
                <tr key={1}>
                <td className="p-2 border flex justify-center">{1}</td>
                <td className="p-2 border">{"ielts"}</td>
                <td className="p-2 border">{"test"}</td>
                <td className="p-2 border flex gap-2 justify-center">

                    

                </td>
                </tr>
             ))} */}
            </tbody>
        </table>

        </div>
    );
};

export default CourseList;