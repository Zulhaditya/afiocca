import Link from 'next/link'
import { useEffect, useState } from 'react';

const AdminProject = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    // get data from api
    fetch('/api/project/', {
      method: 'GET',
    }).then((response) => response.json()).then((data) => {
      setProjects(data)
    }).catch((error) => {
      console.error('Error fetching data: ', error)
    })
  }, [])

  // handle delete project
  const handleDeleteProject = async (projectId) => {
    try {
      const response = await fetch(`/api/project/${projectId}`, {
        method: 'DELETE',
      });

      if (response.status === 200) {
        // Hapus proyek dari state lokal
        setProjects((prevProjects) =>
          prevProjects.filter((project) => project._id !== projectId)
        );
      } else {
        console.error('Error deleting project');
      }
    } catch (error) {
      console.error('Error deleting project!', error);
    }
  };

  return (
    <div className="text-center my-10 mx-auto w-[1200px]">
      <h1 className="text-4xl font-bold text-white">Dashboard</h1>
      <div className="mx-auto mt-2 w-10 border-t-2 border-green-300"></div>
      <p className="my-4 text-white">Admin dashboard page to manage your projects and resumes.</p>
      <Link href="/add-projects">
        <button className="mt-4 mx-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
          🗃️&nbsp;New Project
        </button>
      </Link>
      <Link href="/edit-resume">
        <button className="mt-4 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded">
          📃&nbsp;Edit Resume
        </button>
      </Link>

      <div className="mt-8 grid grid-cols-3 gap-y-10 text-white">
        {projects.map((project) => (
          <div
            key={project._id}
            className="border rounded p-4 shadow-md w-[350px] h-[450px]"
          >
            <img
              src=""
              alt={project.projectTitle}
              className="w-full h-52 object-cover"
            />
            <h2 className="text-lg font-semibold mt-2">{project.projectTitle}</h2>
            <p className="text-sm text-gray-500">{project.projectCategory}</p>
            <div className="mt-4 flex justify-center">
              <button onClick={() => handleDeleteProject(project._id)} className="bg-red-500 text-white font-semibold hover:bg-red-600 text-base py-2 px-3 rounded-full mr-2">
                Delete
              </button>
              <Link href={`/editProject/${project._id}`}>
                <button className="bg-slate-700 text-white font-semibold hover:bg-slate-800 py-2 px-3 rounded-full">
                  Update
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProject;
