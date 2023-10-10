import { connectMongoDB } from "@util/mongodb"
import Project from "@models/projects"

export default async function handler(req, res) {
  await connectMongoDB()

  const projectId = req.query.projectId

  switch (req.method) {
    case "DELETE":
      try {
        await Project.findByIdAndDelete(projectId)
        res.status(200).json({ message: "Project deleted successfully" })
      } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
      }
      break
    default:
      res.status(405).json({ message: "Method not allowed" })
      break
  }
}
