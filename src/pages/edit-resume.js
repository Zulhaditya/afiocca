import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function EditResume() {
  const [resumeData, setResumeData] = useState([]);

  useEffect(() => {
    fetch('/api/resume/')
      .then((response) => response.json())
      .then((data) => setResumeData(data))
      .catch((error) => console.error('Failed to fetch data:', error));
  }, []);

  return (
    <div className="form-bg max-w-3xl mx-auto mt-10 my-10 p-4">
      <h1 className="text-2xl font-bold mb-4 text-white text-center">Edit Resume</h1>
      <div className='flex justify-center mb-7'>
        <Link href="/dashboard">
          <button className="mt-4 mx-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
            🗃️&nbsp;Dashboard
          </button>
        </Link>
        <Link href="/resume">
          <button className="mt-4 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded">
            📃&nbsp;Add Resume
          </button>
        </Link>
      </div>

      {/* Education Section */}
      <div className="mb-7 bg-zinc-700 p-7 rounded">
        <h2 className="text-xl text-white font-semibold mb-2">Education</h2>
        {resumeData.map((resume, index) => (
          <div key={index}>
            {resume.education.map((edu, eduIndex) => (
              <div key={eduIndex} className='my-5'>
                <form>
                  <label className="text-gray-200">Degree</label>
                  <input className="form-resume"
                    type="text" value={edu.degree} />
                  <label className="text-gray-200 mt-4">Study</label>
                  <input type="text" className="form-resume" value={edu.study} />
                  <label className="text-gray-200 mt-4">Education Address</label>
                  <input type="text" className='form-resume' value={edu.address} />
                  <label className="text-gray-200 mt-4">Years</label>
                  <input type="text" className='form-resume' value={edu.years} />
                </form>
                <div className="flex justify-end mt-4">
                  <button className="bg-gray-500 p-2 rounded font-semibold text-white mt-2" type="submit">Update</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <div className="mb-7 bg-zinc-600 p-7 rounded">
        <h2 className="text-xl text-white font-semibold mb-2">Experience</h2>
        {resumeData.map((resume, index) => (
          <div key={index} className="my-5">
            {resume.experience.map((exp, expIndex) => (
              <div key={expIndex}>
                <form>
                  <label className="text-gray-200">Job Desk</label>
                  <input className="form-resume" type="text" value={exp.jobDesk} />
                  <label className="text-gray-200 mt-4">Experience</label>
                  <input type="text" className="form-resume" value={exp.years} />
                  <label className="text-gray-200 mt-4">Company</label>
                  <input type="text" className='form-resume' value={exp.company} />
                  <label className="text-gray-200 mt-4">Technology Used</label>
                  <input type="text" className='form-resume' value={exp.tech.join(', ')} />
                </form>
                <div className="flex justify-end mt-4">
                  <button className="bg-gray-500 p-2 rounded font-semibold text-white mt-2" type="submit">Update</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Certificates Section */}
      <div className="mb-7 bg-zinc-700 p-7 rounded">
        <h2 className="text-xl text-white font-semibold mb-2">Certificates</h2>
        {resumeData.map((resume, index) => (
          <div key={index} className="my-5">
            {resume.certificates.map((cert, certIndex) => (
              <div key={certIndex}>
                <form>
                  <label className="text-gray-200">Title</label>
                  <input className="form-resume" type="text" value={cert.title} />
                  <label className="text-gray-200 mt-4">Certification Years</label>
                  <input type="text" className="form-resume" value={cert.years} />
                  <label className="text-gray-200 mt-4">Credential ID</label>
                  <input type="text" className='form-resume' value={cert.credential} />
                </form>
                <div className="flex justify-end mt-4">
                  <button className="bg-gray-500 p-2 rounded font-semibold text-white mt-2" type="submit">Update</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mb-7 bg-zinc-600 p-7 rounded">
        <h2 className="text-xl text-white font-semibold mb-2">Skills</h2>
        {resumeData.map((resume, index) => (
          <div key={index} className='my-5'>
            {resume.skills.map((skill, skillIndex) => (
              <div key={skillIndex}>
                <form>
                  <label className="text-gray-200">Skill</label>
                  <input className="form-resume" type="text" value={skill.skillName} />
                  <label className="text-gray-200 mt-4">Interest</label>
                  <input type="text" className="form-resume" value={skill.interest} />
                  <label className="text-gray-200 mt-4">Languages</label>
                  <input type="text" className='form-resume' value={skill.languages.join(', ')} />
                </form>
                <div className="flex justify-end mt-4">
                  <button className="bg-gray-500 p-2 rounded font-semibold text-white mt-2" type="submit">Update</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Link href="/dashboard">
          <button className="bg-gray-700 p-2 rounded font-semibold text-white" type="submit">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default EditResume;
