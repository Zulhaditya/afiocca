import Link from 'next/link';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { storage } from '@util/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

const AddProject = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    projectTitle: '',
    projectCategory: '',
    projectDescription: '',
    projectTags: '',
    projectLink: '',
    projectFeature: '',
    uploadImage: '',
  });

  const [imgUrl, setImgUrl] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fileInput = document.getElementById('uploadImage');
      const file = fileInput.files[0];

      if (!file) return;

      const storageRef = ref(storage, `projects/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed",
        (snapshot) => {
          // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          // setProgressPercent(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgUrl(downloadURL);

            const formDataWithImage = {
              ...formData,
              uploadImage: downloadURL,
            };

            fetch("/api/project/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formDataWithImage),
            }).then(async (response) => {
              if (response.status === 201) {
                Swal.fire({
                  icon: "success",
                  title: "Success!",
                  text: "Project uploaded successfully.",
                }).then(() => {
                  router.push("/dashboard");
                });
              } else {
                console.error("Failed to add project");
              }
            });
          });
        }
      );
    } catch (error) {
      console.error("Internal server error: ", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="mx-auto my-10">
      <h1 className="text-4xl text-center text-white font-bold">Add Project</h1>
      <div className="mx-auto mt-2 w-16 border-t-2 border-green-300"></div>
      <div className="form-bg p-8 mt-8 w-1/2 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="projectTitle" className="text-gray-200">Project Title</label>
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
            <label htmlFor="projectCategory" className="text-gray-200">Project Category</label>
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
            <label htmlFor="projectDescription" className="text-gray-200">Project Description</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              className="border bg-gray-100 border-gray-300 rounded w-full py-2 px-3 h-32 resize-none"
              placeholder="Enter project description"
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="projectTags" className="text-gray-200">Tags</label>
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
            <label htmlFor="projectLink" className="text-gray-200">Project Link</label>
            <input
              type="text"
              id="projectLink"
              name="projectLink"
              className="border border-gray-300 rounded w-full py-2 px-3"
              placeholder="Enter project Link"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="projectFeature" className="text-gray-200">Key Feature</label>
            <textarea
              id="projectFeature"
              name="projectFeature"
              className="border bg-gray-100 border-gray-300 rounded w-full py-2 px-3 h-32 resize-none"
              placeholder="Enter project key feature (comma separated)"
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="uploadImage" className="text-gray-200">Upload Image</label>
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
                className="bg-gray-600 text-white py-2 px-4 rounded-full mr-2"
              >
                Back
              </button>
            </Link>
            <button
              type="submit"
              className="bg-cyan-500 font-bold text-white py-2 px-4 rounded-full"
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
