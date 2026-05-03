import CourseForm from "../../components/courses/CourseForm";
import { BookPlus } from "lucide-react";

const CreateCourse = () => {
    console.log("CreateCourse component rendered");
    return (
        <div className="p-6 bg-surface rounded-lg shadow-md">
            {/* HEADER */}
            <div className="flex items-center gap-3 mb-6">
                <BookPlus size={24} />
                <h2 className="text-xl font-bold">Create New Course</h2>
            </div>
            <CourseForm onSubmit={(data) => console.log("Course Data:", data)} />
        </div>
    );
}
export default CreateCourse;