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

        const experience = resume.experience;
        res.status(200).json({ experience });
      } catch (error) {
        res.status(500).json({ error: "Internal server Error" });
      }
      break;

    case "POST":
      try {
        const { jobDesk, years, company, address, description } = req.body;
        const newExperience = { jobDesk, years, company, address, description };

        const resume = await Resume.findOne();
        resume.experience.push(newExperience);
        await resume.save();

        res.status(200).json({ message: "Succesfully added new experience" });
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
      break;

    default:
      res.status(405).json({ error: "Metode not allowed" });
  }
}
