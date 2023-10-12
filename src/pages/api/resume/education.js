import { connectMongoDB } from '@util/mongodb';
import Resume from '@models/resume';

export default async function handler(req, res) {
  await connectMongoDB()

  if (req.method === "POST") {
    try {
      const { degree, study, address, years } = req.body;

      const newEducation = { degree, study, address, years };

      // Ambil dokumen resume
      const resume = await Resume.findOne();

      // Tambahkan data pendidikan baru ke array 'education'
      resume.education.push(newEducation);

      // Simpan dokumen resume yang telah diperbarui
      await resume.save();

      res.status(200).json({ message: "Data Pendidikan berhasil ditambahkan" });
    } catch (error) {
      res.status(500).json({ error: "Kesalahan Server Internal" });
    }
  }
}
