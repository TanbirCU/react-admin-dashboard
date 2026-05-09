import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CourseForm = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    short_description: "",
    description: "",
    thumbnail: null,
    intro_video: "",
    category: "",
    level: "beginner",
    language: "bangla",
    regular_price: "",
    discount_price: "",
    is_free: false,
    duration: "",
    total_lessons: "",
    total_quizzes: "",
    instructor: "",
    status: "draft",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="space-y-8">
      {/* Optional: You can add a sub-header here if needed, but CreateCourse already has one */}
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Info */}
        <div className="premium-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-6 text-text-main">Basic Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Course Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />

            <InputField
              label="Slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
            />

            <InputField
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />

            <InputField
              label="Instructor"
              name="instructor"
              value={formData.instructor}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Description */}
        <div className="premium-card p-6 rounded-xl space-y-6">
          <h2 className="text-xl font-semibold text-text-main">Description</h2>
          <TextAreaField
            label="Short Description"
            name="short_description"
            value={formData.short_description}
            onChange={handleChange}
          />

          <TextAreaField
            label="Full Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={6}
          />
        </div>

        {/* Media */}
        <div className="premium-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-6 text-text-main">Media</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-text-muted">
                Course Thumbnail
              </label>
              <input
                type="file"
                name="thumbnail"
                onChange={handleChange}
                className="w-full border border-white/10 rounded-xl p-3 bg-background/50 text-text-main focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <InputField
              label="Intro Video URL"
              name="intro_video"
              value={formData.intro_video}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Course Settings */}
        <div className="premium-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-6 text-text-main">Course Settings</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <SelectField
              label="Level"
              name="level"
              value={formData.level}
              onChange={handleChange}
              options={[
                { value: "beginner", label: "Beginner" },
                { value: "intermediate", label: "Intermediate" },
                { value: "advanced", label: "Advanced" },
              ]}
            />

            <SelectField
              label="Language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              options={[
                { value: "bangla", label: "Bangla" },
                { value: "english", label: "English" },
              ]}
            />

            <SelectField
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={[
                { value: "draft", label: "Draft" },
                { value: "published", label: "Published" },
                { value: "archived", label: "Archived" },
              ]}
            />
          </div>
        </div>

        {/* Pricing */}
        <div className="premium-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-6 text-text-main">Pricing</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <InputField
              label="Regular Price"
              type="number"
              name="regular_price"
              value={formData.regular_price}
              onChange={handleChange}
            />

            <InputField
              label="Discount Price"
              type="number"
              name="discount_price"
              value={formData.discount_price}
              onChange={handleChange}
            />

            <div className="flex items-center gap-4 mt-8">
              <input
                type="checkbox"
                name="is_free"
                checked={formData.is_free}
                onChange={handleChange}
                className="w-5 h-5 accent-primary"
              />
              <label className="font-medium text-text-main">Free Course</label>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="premium-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-6 text-text-main">Course Statistics</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <InputField
              label="Duration (Hours)"
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
            />

            <InputField
              label="Total Lessons"
              type="number"
              name="total_lessons"
              value={formData.total_lessons}
              onChange={handleChange}
            />

            <InputField
              label="Total Quizzes"
              type="number"
              name="total_quizzes"
              value={formData.total_quizzes}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end gap-4 pt-6">
          <button
            type="button"
            className="px-6 py-3 rounded-xl border border-white/10 text-text-muted hover:bg-white/5 transition-colors"
           onClick={navigate(-1)}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-primary text-white hover:opacity-90 shadow-lg shadow-primary/20 transition-all"
          >
            Save Course
          </button>
        </div>
      </form>
    </div>
  );

}

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div>
      <label className="block mb-2 font-medium text-text-muted">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary bg-background/50 text-text-main placeholder:text-text-muted/50 transition-all"
      />
    </div>
  );
}

function TextAreaField({
  label,
  name,
  value,
  onChange,
  rows = 3,
}) {
  return (
    <div>
      <label className="block mb-2 font-medium text-text-muted">{label}</label>
      <textarea
        rows={rows}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary bg-background/50 text-text-main placeholder:text-text-muted/50 transition-all"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}) {
  return (
    <div>
      <label className="block mb-2 font-medium text-text-muted">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary bg-background/50 text-text-main transition-all appearance-none cursor-pointer"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-surface text-text-main">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
export default CourseForm;