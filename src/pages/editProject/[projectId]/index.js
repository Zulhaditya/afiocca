import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import EditProjectForm from '@/components/EditProjectForm';

export default function EditProject() {
  const router = useRouter();
  const { projectId } = router.query;
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    if (!projectId) {
      return;
    }

    fetch(`/api/project/${projectId}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setProjectData(data);
      })
      .catch((error) => {
        console.error('Error fetching project data: ', error);
      });
  }, [projectId]);

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return <EditProjectForm project={projectData} />;
}
