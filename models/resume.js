import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  education: [
    {
      degree: String,
      study: String,
      address: String,
      years: String,
    }
  ],
  experience: [
    {
      jobDesk: String,
      years: String,
      company: String,
      tech: [String]
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
      interest: String,
      languages: [String]
    }
  ],
})

const Resume = mongoose.models.Resume || mongoose.model('Resume', resumeSchema)

export default Resume
