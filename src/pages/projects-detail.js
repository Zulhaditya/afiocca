import { useRouter } from "next/router";
import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";
import { useState, useEffect } from "react";

export default function ProjectDetail() {
  const router = useRouter();
  const { projectId } = router.query;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/project/${projectId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Project not found");
        }
      })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [projectId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="min-h-screen p-10">
      <TransitionEffect />
      <div className="max-w-3xl form-bg mx-auto">
        <h1 className="text-2xl text-white font-bold mb-2 text-center">
          {project.projectTitle}
        </h1>
        <p className="text-gray-400 mb-4 text-center">{project.projectCategory}</p>
        <Image
          src={project.uploadImage}
          width={600}
          height={0}
          alt={project.projectTitle}
          className="mb-4 rounded-lg mx-auto"
        />
        <div className="mb-4">
          <p className="text-gray-300">{project.projectDescription}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl text-gray-100 font-semibold mb-2">Key Features:</h2>
          <ul className="list-disc pl-6 text-gray-300">
            {project.projectFeature.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap mx-auto">
          {project.projectTags.map((tag, index) => (
            <span key={index} className="mr-3 mb-2 py-1 px-3 bg-gray-700 text-white rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
