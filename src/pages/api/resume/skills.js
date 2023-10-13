import { connectMongoDB } from '@util/mongodb';
import Resume from '@models/resume';

export default async function handler(req, res) {
  await connectMongoDB();

  switch (req.method) {
    case "GET":
      try {
        const resume = await Resume.findOne();

        if (!resume) {
          return res.status(404).json({ error: "Resume tidak ditemukan" });
        }

        const skills = resume.skills;
        res.status(200).json({ skills });
      } catch (error) {
        res.status(500).json({ error: "Kesalahan Server Internal" });
      }
      break;

    case "POST":
      try {
        const { skillName } = req.body;
        const newSkills = { skillName };

        const resume = await Resume.findOne();

        resume.skills.push(newSkills);

        await resume.save();

        res.status(200).json({ message: "Data Skills berhasil ditambahkan" });
      } catch (error) {
        res.status(500).json({ error: "Kesalahan Server Internal" });
      }
      break;

    default:
      res.status(405).json({ error: "Metode HTTP tidak diizinkan" });
  }
}
