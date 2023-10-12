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
        const { section, data } = req.body;

        if (!section || !data) {
          res.status(400).json({ message: "Bad Request" });
          return;
        }

        const existingResume = await Resume.findOne(); // Mengambil dokumen pertama dalam koleksi

        if (!existingResume) {
          res.status(404).json({ message: "Resume not found" });
          return;
        }

        if (section === "education" || section === "experience" || section === "certificates" || section === "skills") {
          // Tambahkan data ke bagian yang sesuai dalam dokumen
          existingResume[section].push(data);

          // Simpan perubahan ke dalam dokumen
          await existingResume.save();

          res.status(201).json({ success: true });
        } else {
          res.status(400).json({ message: "Invalid section" });
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
