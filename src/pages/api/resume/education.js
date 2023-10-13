import { connectMongoDB } from '@util/mongodb';
import Resume from '@models/resume';

export default async function handler(req, res) {
  await connectMongoDB();

  switch (req.method) {
    case "GET":
      try {
        const resume = await Resume.findOne();

        if (!resume) {
          return res.status(404).json({ error: "Resume not found" });
        }

        const education = resume.education;
        res.status(200).json({ education });
      } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
      }
      break;

    case "POST":
      try {
        const { degree, study, address, years, description } = req.body;
        const newEducation = { degree, study, address, years, description };

        const resume = await Resume.findOne();
        resume.education.push(newEducation);
        await resume.save();

        res.status(200).json({ message: "Data Pendidikan berhasil ditambahkan" });
      } catch (error) {
        res.status(500).json({ error: "Kesalahan Server Internal" });
      }
      break;

    default:
      res.status(405).json({ error: "Metode HTTP tidak diizinkan" });
  }
}
