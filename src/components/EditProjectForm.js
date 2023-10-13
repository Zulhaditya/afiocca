import { useState } from "react"
import { useRouter } from 'next/router';
import Link from "next/link"
import TransitionEffect from "./TransitionEffect";

export default function EditProjectForm(props) {
  const router = useRouter()

  const [formData, setFormData] = useState({
    projectTitle: props.project.projectTitle || '',
    projectCategory: props.project.projectCategory || '',
    projectDescription: props.project.projectDescription || '',
    projectTags: props.project.projectTags || '',
    projectLink: props.project.projectLink || '',
    projectFeature: props.project.projectFeature || '',
    uploadImage: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/project/${props.project._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200) {
          router.push('/dashboard');
        } else {
          console.error('Error updating project');
        }
      })
      .catch((error) => {
        console.error('Error updating project:', error);
      });
  };


  return (
    <div className="mx-auto my-10">
      <TransitionEffect />
      <h1 className="text-4xl text-center text-white font-bold">Edit Project</h1>
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
              value={formData.projectTitle}
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
              value={formData.projectCategory}
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
              value={formData.projectDescription}
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
              value={formData.projectTags}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="projectLink">Project Link</label>
            <input
              type="text"
              id="projectLink"
              name="projectLink"
              className="border border-gray-300 rounded w-full py-2 px-3"
              placeholder="Enter project link"
              value={formData.projectLink}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="projectFeature">Key Feature</label>
            <textarea
              id="projectFeature"
              name="projectFeature"
              className="border bg-gray-100 border-gray-300 rounded w-full py-2 px-3 h-32 resize-none"
              placeholder="Enter project key feature (comma separated)"
              value={formData.projectFeature}
              onChange={handleInputChange}

            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="uploadImage">Upload Image</label>
            <input
              type="file"
              id="uploadImage"
              name="uploadImage"
              accept="image/*"
              className="border border-gray-300 rounded w-full py-2 px-3"
              onChange={handleInputChange}
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
