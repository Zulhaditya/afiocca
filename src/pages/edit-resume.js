import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';

function EditResume() {
  const [resumeData, setResumeData] = useState([]);
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/resume/');
        if (response.ok) {
          const data = await response.json();
          setResumeData(data);
        } else {
          console.error('Error fetching resume data');
        }
      } catch (error) {
        console.error('Error fetching resume data: ', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (section, index) => {
    try {
      const response = await fetch(`/api/resume/delete/${section}/${index}`, {
        method: 'DELETE',
      });

      if (response.status === 200) {
        alert("Succesfully deleted data!")
        window.location.reload();
      } else {
        console.error('Error deleting data');
      }
    } catch (error) {
      console.error('Error deleting data!', error);
    }
  };

  const handleUpdate = async (section, index) => {
    try {
      const response = await fetch(`/api/resume/update/${section}/${index}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.status === 200) {
        alert('Successfully updated data!');
        window.location.reload();
      } else {
        console.error('Error updating data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  return (
    <>
      <Head>
        <title>Edit Resume</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by Afiocca. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>
      <div className="form-bg max-w-3xl mx-auto mt-10 my-10 p-4">
        <TransitionEffect />
        <h1 className="text-2xl font-bold mb-4 text-white text-center">Edit Resume</h1>
        <div className='flex justify-center mb-7'>
          <Link href="/dashboard">
            <button className="mt-4 mx-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
              🗃️&nbsp;Dashboard
            </button>
          </Link>
          <Link href="/add-resume">
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
                      type="text" name="degree" value={updatedData.degree || edu.degree} onChange={handleInputChange} />
                    <label className="text-gray-200 mt-4">Study</label>
                    <input type="text" className="form-resume" name="study" value={updatedData.study || edu.study} onChange={handleInputChange} />
                    <label className="text-gray-200 mt-4">Education Address</label>
                    <input type="text" className='form-resume' name="address" value={updatedData.address || edu.address} onChange={handleInputChange} />
                    <label className="text-gray-200 mt-4">Years</label>
                    <input type="text" className='form-resume' name="years" value={updatedData.years || edu.years} onChange={handleInputChange} />
                    <label className="text-gray-200 mt-4">Description</label>
                    <textarea type="text" className='form-resume' name="description" value={updatedData.description || edu.description} onChange={handleInputChange} />
                  </form>
                  <div className="flex justify-end gap-3 mt-4">
                    <button onClick={() => handleDelete("education", eduIndex)} className="bg-red-500 p-2 rounded font-semibold text-white mt-2" type="button">Delete</button>
                    <button onClick={() => handleUpdate("education", eduIndex)} className="bg-gray-800 p-2 rounded font-semibold text-white mt-2" type="submit">Update</button>
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
                    <input className="form-resume" type="text" value={exp.jobDesk} onChange={handleInputChange} />
                    <label className="text-gray-200 mt-4">Years</label>
                    <input type="text" className="form-resume" value={updatedData.years || exp.years} onChange={handleInputChange} />
                    <label className="text-gray-200 mt-4">Company</label>
                    <input type="text" className='form-resume' value={updatedData.company || exp.company} onChange={handleInputChange} />
                    <label className="text-gray-200 mt-4">Address</label>
                    <input type="text" className='form-resume' value={updatedData.address || exp.address} onChange={handleInputChange} />
                    <label className="text-gray-200 mt-4">Description</label>
                    <textarea type="text" className='form-resume' value={updatedData.description || exp.description} onChange={handleInputChange}></textarea>
                  </form>
                  <div className="flex justify-end mt-4 gap-3">
                    <button onClick={() => handleDelete("experience", expIndex)} className="bg-red-500 p-2 rounded font-semibold text-white mt-2" type="submit">Delete</button>
                    <button onClick={() => handleUpdate("experience", expIndex)} className="bg-gray-800 p-2 rounded font-semibold text-white mt-2" type="submit">Update</button>
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
                    <input className="form-resume" type="text" value={updatedData.title || cert.title} onChange={handleInputChange} />
                    <label className="text-gray-200 mt-4">Certification Years</label>
                    <input type="text" className="form-resume" value={updatedData.years || cert.years} onChange={handleInputChange} />
                    <label className="text-gray-200 mt-4">Credential ID</label>
                    <input type="text" className='form-resume' value={updatedData.credential || cert.credential} onChange={handleInputChange} />
                  </form>
                  <div className="flex justify-end mt-4 gap-3">
                    <button onClick={() => handleDelete("certificates", certIndex)} className="bg-red-500 p-2 rounded font-semibold text-white mt-2" type="submit">Delete</button>
                    <button onClick={() => handleUpdate("certificates", certIndex)} className="bg-gray-800 p-2 rounded font-semibold text-white mt-2" type="submit">Update</button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-7 bg-zinc-600 p-7 rounded">
          <h2 className="text-xl text-white font-semibold mb-2">Your Skills</h2>
          {resumeData.map((resume, index) => (
            <div key={index} className='my-5'>
              {resume.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <form>
                    <label className="text-gray-200">Skill</label>
                    <input className="form-resume" type="text" value={updatedData.skillName || skill.skillName} onChange={handleInputChange} />
                  </form>
                  <div className="flex justify-end mt-4 gap-3">
                    <button onClick={() => handleDelete("skills", skillIndex)} className="bg-red-500 p-2 rounded font-semibold text-white mt-2" type="submit">Delete</button>
                    <button onClick={() => handleUpdate("skills", skillIndex)} className="bg-gray-500 p-2 rounded font-semibold text-white mt-2" type="submit">Update</button>
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

    </>

  );
}

export default EditResume;
