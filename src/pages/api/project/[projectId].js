import { connectMongoDB } from "@util/mongodb"
import Project from "@models/projects"

export default async function handler(req, res) {
  await connectMongoDB()

  const projectId = req.query.projectId

  switch (req.method) {
    case "GET":
      try {
        const project = await Project.findById(projectId)

        if (!project) {
          console.log("Error!")
          return res.status(404).json({ message: "Project not found" })
        }

        res.status(200).json(project)
      } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
      }
      break

    case "DELETE":
      try {
        await Project.findByIdAndDelete(projectId)
        res.status(200).json({ message: "Project deleted successfully" })
      } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
      }
      break

    case "PUT":
      try {
        const {
          projectTitle,
          projectCategory,
          projectDescription,
          projectTags,
          projectLink,
          projectFeature,
          uploadImage,
        } = req.body

        const existingProject = await Project.findById(projectId)

        if (!existingProject) {
          return res.status(404).json({ message: "Project not found" })
        }

        existingProject.projectTitle = projectTitle
        existingProject.projectCategory = projectCategory
        existingProject.projectDescription = projectDescription
        existingProject.projectTags = projectTags
        existingProject.projectLink = projectLink
        existingProject.projectFeature = projectFeature
        existingProject.uploadImage = uploadImage

        await existingProject.save()
        res.status(200).json({ message: "Project updated successfully" })
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
