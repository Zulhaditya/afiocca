import { connectMongoDB } from '@util/mongodb';
import Resume from '@models/resume';

export default async function handler(req, res) {
  try {
    await connectMongoDB();

    const { method, query } = req;
    const { section, index } = query;

    switch (method) {
      case 'PUT':
        // Pastikan body permintaan berisi data yang diperbarui
        const updatedData = req.body;

        if (!updatedData) {
          return res.status(400).json({ message: 'Bad Request: Updated data is required' });
        }

        // Temukan resume dengan indeks yang sesuai
        const resumes = await Resume.find();
        const targetResume = resumes[0]; // Anda mungkin perlu menyesuaikan ini sesuai dengan data yang Anda simpan

        if (!targetResume) {
          return res.status(404).json({ message: 'Resume not found' });
        }

        // Update data sesuai dengan bagian (section) dan indeks yang diberikan
        if (section === 'education') {
          targetResume.education[index] = updatedData;
        } else if (section === 'experience') {
          targetResume.experience[index] = updatedData;
        } else if (section === 'certificates') {
          targetResume.certificates[index] = updatedData;
        } else if (section === 'skills') {
          targetResume.skills[index] = updatedData;
        } else {
          return res.status(400).json({ message: 'Bad Request: Invalid section' });
        }

        // Simpan perubahan ke database
        await targetResume.save();

        res.status(200).json({ message: 'Resume data updated successfully' });
        break;

      default:
        res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
