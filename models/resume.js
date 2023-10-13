import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  education: [
    {
      degree: String,
      study: String,
      address: String,
      years: String,
      description: String,
    }
  ],
  experience: [
    {
      jobDesk: String,
      years: String,
      company: String,
      address: String,
      description: String,
    }
  ],
  certificates: [
    {
      title: String,
      years: String,
      credential: String
    }
  ],
  skills: [
    {
      skillName: String,
    }
  ],
})

const Resume = mongoose.models.Resume || mongoose.model('Resume', resumeSchema)

export default Resume
