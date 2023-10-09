import Link from 'next/link';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

const AddProject = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    projectTitle: "",
    projectCategory: "",
    projectDescription: "",
    projectTags: "",
    uploadVideo: "",
    uploadImage: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })

      if (response.status === 201) {
        // if data successfuly send, do next/redirect
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Project uploaded successfully.",
        }).then(() => {
          // Mengarahkan pengguna kembali ke halaman /dashboard
          router.push("/dashboard");
        });
      } else {
        // error handling
        console.error("Failed to add project")
      }
    } catch (error) {
      console.error("Internal server error: ", error)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="mx-auto my-10">
      <h1 className="text-4xl text-center text-white font-bold">Add Project</h1>
      <div className="mx-auto mt-2 w-16 border-t-2 border-green-300"></div>
      <div className="bg-white rounded p-8 mt-8 w-1/2 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="projectTitle">Project Title</label>
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              className="border border-gray-300 rounded w-full py-2 px-3"
              placeholder="Enter project title"
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="projectCategory">Project Category</label>
            <input
              type="text"
              id="projectCategory"
              name="projectCategory"
              className="border border-gray-300 rounded w-full py-2 px-3"
              placeholder="Enter project category"
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="projectDescription">Project Description</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              className="border bg-gray-100 border-gray-300 rounded w-full py-2 px-3 h-32 resize-none"
              placeholder="Enter project description"
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="projectTags">Tags</label>
            <input
              type="text"
              id="projectTags"
              name="projectTags"
              className="border border-gray-300 rounded w-full py-2 px-3"
              placeholder="Enter project tags (comma separated)"
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="uploadVideo">Upload Video</label>
            <input
              type="file"
              id="uploadVideo"
              name="uploadVideo"
              accept="video/*"
              onChange={handleInputChange}
              className="border border-gray-300 rounded w-full py-2 px-3"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="uploadImage">Upload Image</label>
            <input
              type="file"
              id="uploadImage"
              name="uploadImage"
              accept="image/*"
              onChange={handleInputChange}
              className="border border-gray-300 rounded w-full py-2 px-3"
            />
          </div>

          <div className="flex justify-end">
            <Link href="/dashboard">
              <button
                type="button"
                className="bg-gray-400 text-white py-2 px-4 rounded-full mr-2"
              >
                Back
              </button>
            </Link>
            <button
              type="submit"
              className="bg-green-500 font-bold text-white py-2 px-4 rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;