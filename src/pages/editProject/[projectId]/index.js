import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import EditProjectForm from '@/components/EditProjectForm';

export default function EditProject() {
  const router = useRouter();
  const { projectId } = router.query;
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    // Pastikan projectId ada sebelum melakukan pengambilan data proyek
    if (!projectId) {
      return;
    }

    // Lakukan pengambilan data proyek berdasarkan projectId
    fetch(`/api/project/${projectId}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        // Set data proyek ke dalam state
        setProjectData(data);
      })
      .catch((error) => {
        console.error('Error fetching project data: ', error);
      });
  }, [projectId]);

  // Tampilkan pesan loading jika data masih diambil
  if (!projectData) {
    return <div>Loading...</div>;
  }

  return <EditProjectForm project={projectData} />;
}
