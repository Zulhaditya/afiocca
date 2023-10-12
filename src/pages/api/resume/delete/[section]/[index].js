import { connectMongoDB } from '@util/mongodb';
import Resume from '@models/resume';

export default async function handler(req, res) {
  try {
    await connectMongoDB();

    switch (req.method) {
      case "DELETE":
        const { section, index } = req.query;

        if (!section || !index) {
          res.status(400).json({ message: 'Invalid request.' });
          return;
        }

        // Temukan dokumen Resume berdasarkan ID atau kriteria lain
        const resume = await Resume.findOne(); // Sesuaikan dengan kriteria pencarian yang sesuai

        if (!resume) {
          res.status(404).json({ message: 'Data not found.' });
          return;
        }

        // Hapus data dari bagian yang sesuai (education, experience, certificates, skills)
        if (section === 'education') {
          resume.education.splice(index, 1);
        } else if (section === 'experience') {
          resume.experience.splice(index, 1);
        } else if (section === 'certificates') {
          resume.certificates.splice(index, 1);
        } else if (section === 'skills') {
          resume.skills.splice(index, 1);
        } else {
          res.status(400).json({ message: 'Invalid section.' });
          return;
        }

        // Simpan perubahan
        await resume.save();

        res.status(200).json({ message: 'Data deleted successfully.' });
        break;

      default:
        res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
