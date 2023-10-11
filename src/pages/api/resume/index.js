import { connectMongoDB } from '@util/mongodb';
import Resume from '@models/resume';

export default async function handler(req, res) {
  try {
    await connectMongoDB();

    switch (req.method) {
      case "GET":
        const resumes = await Resume.find();
        res.status(200).json(resumes);
        break;

      case "POST":
        try {
          const newResumeData = req.body

          // Buat instance Resume baru dari data yang diterima
          const newResume = new Resume({
            education: newResumeData.education,
            experience: newResumeData.experience,
            certificates: newResumeData.certificates,
            skills: newResumeData.skills,
          })

          // Simpan instance Resume baru ke database
          await newResume.save()

          res.status(201).json(newResume);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
        break;

      default:
        res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
