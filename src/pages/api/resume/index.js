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

      default:
        res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
