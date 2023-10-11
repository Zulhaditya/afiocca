import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
  projectTitle: String,
  projectCategory: String,
  projectDescription: String,
  projectTags: [String],
  projectLink: String,
  projectFeature: [String],
  uploadImage: String
})

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema)
export default Project
