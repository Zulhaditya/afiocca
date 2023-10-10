import { connectMongoDB } from "@util/mongodb"
import Project from "@models/projects"

export default async function handler(req, res) {
  await connectMongoDB()

  switch (req.method) {
    case "POST":
      try {
        const {
          projectTitle,
          projectCategory,
          projectDescription,
          projectTags,
          uploadVideo,
          uploadImage
        } = req.body

        const project = new Project({
          projectTitle,
          projectCategory,
          projectDescription,
          projectTags,
          uploadVideo,
          uploadImage
        })

        await project.save()

        res.status(201).json({ message: "Project added successfully" })
      } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
      }
      break

    case "GET":
      try {
        const projects = await Project.find()
        res.status(200).json(projects)
      } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
      }
      break;

    default:
      res.status(405).json({ message: "Method not allowed" })
      break
  }
}

