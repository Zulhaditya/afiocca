import Link from 'next/link';
import { useState } from 'react';

const Resume = () => {

  const [educationData, setEducationData] = useState({
    degree: "",
    study: "",
    address: "",
    years: "",
  });

  const [experienceData, setExperienceData] = useState({
    jobDesk: "",
    years: "",
    company: "",
    tech: [""],
  });

  const [certificatesData, setCertificatesData] = useState({
    title: "",
    years: "",
    credential: "",
  });

  const [skillsData, setSkillsData] = useState({
    skillName: "",
    interest: "",
    languages: [""],
  });

  const handleInputChange = (e, section) => {
    const { name, value } = e.target;
    switch (section) {
      case "education":
        setEducationData({
          ...educationData,
          [name]: value,
        });
        break;
      case "experience":
        setExperienceData({
          ...experienceData,
          [name]: value,
        });
        break;
      case "certificates":
        setCertificatesData({
          ...certificatesData,
          [name]: value,
        });
        break;
      case "skills":
        setSkillsData({
          ...skillsData,
          [name]: value,
        });
        break;
      default:
        break;
    }
  };

  // handle education data submit
  const handleEducationSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/resume/education", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(educationData),
      });

      if (response.ok) {
        // Tangani keberhasilan, misalnya, reset bidang formulir atau tampilkan pesan sukses
        setEducationData({
          degree: "",
          study: "",
          address: "",
          years: "",
        });
        alert("Data education berhasil ditambahkan");
      } else {
        // Tangani kesalahan, misalnya, tampilkan pesan kesalahan
        console.error("Kesalahan menambahkan data pendidikan");
      }
    } catch (error) {
      console.error("Kesalahan:", error);
    }
  };

  // handle experience data submit
  const handleExperienceSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/resume/experience", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(experienceData),
      });

      if (response.ok) {
        // Tangani keberhasilan, misalnya, reset bidang formulir atau tampilkan pesan sukses
        setExperienceData({
          jobDesk: "",
          years: "",
          company: "",
          tech: "",
        });
        alert("Data experience berhasil ditambahkan");
      } else {
        // Tangani kesalahan, misalnya, tampilkan pesan kesalahan
        console.error("Kesalahan menambahkan data experience");
      }
    } catch (error) {
      console.error("Kesalahan:", error);
    }
  };

  // handle certificates data submit
  const handleCertificatesSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/resume/certificates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(certificatesData),
      });

      if (response.ok) {
        // Tangani keberhasilan, misalnya, reset bidang formulir atau tampilkan pesan sukses
        setCertificatesData({
          title: "",
          years: "",
          credential: "",
        });
        alert("Data certificates berhasil ditambahkan");
      } else {
        // Tangani kesalahan, misalnya, tampilkan pesan kesalahan
        console.error("Kesalahan menambahkan data sertifikat");
      }
    } catch (error) {
      console.error("Kesalahan:", error);
    }
  };

  // handle skills data submit
  const handleSkillSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/resume/skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(skillsData),
      });

      if (response.ok) {
        // Tangani keberhasilan, misalnya, reset bidang formulir atau tampilkan pesan sukses
        setSkillsData({
          skillName: "",
          interest: "",
          languages: "",
        });
        alert("Data skills berhasil ditambahkan");
      } else {
        // Tangani kesalahan, misalnya, tampilkan pesan kesalahan
        console.error("Kesalahan menambahkan data skill");
      }
    } catch (error) {
      console.error("Kesalahan:", error);
    }
  };

  return (
    <div className="mx-auto w-1/2 my-10">
      <h1 className="text-4xl text-center font-bold text-white">Add Resume</h1>
      <div className="mx-auto mt-2 w-16 border-t-2 border-green-300"></div>
      <div className="form-bg p-8 mt-8 grid grid-cols-2 grid-rows-2 gap-10">
        <div>
          <h2 className="text-xl font-semibold text-cyan-200 mb-2">Education</h2>
          <div className="w-16 border-t-2 border-cyan-500 mb-4"></div>
          <form onSubmit={handleEducationSubmit}>
            <div className="mb-4">
              <label htmlFor="degree" className="block text-gray-200 font-semibold">Your Degree</label>
              <input
                type="text"
                id="degree"
                name="degree"
                value={educationData.degree}
                onChange={(e) => handleInputChange(e, "education")}
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter your degree"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="study" className="block text-gray-200 font-semibold">Your Study</label>
              <input
                type="text"
                id="study"
                name="study"
                value={educationData.study}
                onChange={(e) => handleInputChange(e, "education")}
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter your study field"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="eduAddress" className="block text-gray-200 font-semibold">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={educationData.address}
                onChange={(e) => handleInputChange(e, "education")}
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter your education address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="years" className="block text-gray-200 font-semibold">Years</label>
              <input
                type="text"
                id="years"
                name="years"
                value={educationData.years}
                onChange={(e) => handleInputChange(e, "education")}
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter years of study"
              />
            </div>
            <button
              type="submit"
              className="bg-cyan-500 font-bold text-white py-2 px-4 rounded-full"
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-cyan-200 mb-2">Experience</h2>
          <div className="w-16 border-t-2 border-cyan-500 mb-4"></div>
          <form onSubmit={handleExperienceSubmit}>
            <div className="mb-4">
              <label htmlFor="jobDesk" className="block text-gray-200 font-semibold">Job Desk</label>
              <input
                type="text"
                id="jobDesk"
                name="jobDesk"
                value={experienceData.jobDesk}
                onChange={(e) => handleInputChange(e, "experience")}
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter job desk"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="years" className="block text-gray-200 font-semibold">Years</label>
              <input
                type="text"
                id="years"
                name="years"
                value={experienceData.years}
                onChange={(e) => handleInputChange(e, "experience")}
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter years of experience"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-200 font-semibold">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={experienceData.company}
                onChange={(e) => handleInputChange(e, "experience")}
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter company name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="tech" className="block text-gray-200 font-semibold">Technology Used</label>
              <input
                type="text"
                id="tech"
                name="tech"
                value={experienceData.tech}
                onChange={(e) => handleInputChange(e, "experience")}
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter technology used"
              />
            </div>
            <button
              type="submit"
              className="bg-cyan-500 font-bold text-white py-2 px-4 rounded-full"
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-cyan-200 mb-2">Certificates</h2>
          <div className="w-16 border-t-2 border-cyan-500 mb-4"></div>
          <form onSubmit={handleCertificatesSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-200 font-semibold">Titles</label>
              <input
                type="text"
                id="title"
                name="title"
                value={certificatesData.title}
                onChange={(e) => handleInputChange(e, "certificates")}
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter certificate titles"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="years" className="block text-gray-200 font-semibold">Years</label>
              <input
                type="text"
                id="years"
                name="years"
                value={certificatesData.years}
                onChange={(e) => handleInputChange(e, "certificates")}
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter years of certification"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="credentials" className="block text-gray-200 font-semibold">Credentials ID</label>
              <input
                type="text"
                id="credential"
                name="credential"
                value={certificatesData.credential}
                onChange={(e) => handleInputChange(e, "certificates")}
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter credentials ID"
              />
            </div>
            <button
              type="submit"
              className="bg-cyan-500 font-bold text-white py-2 px-4 rounded-full"
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-cyan-200 mb-2">Skills</h2>
          <div className="w-16 border-t-2 border-cyan-500 mb-4"></div>
          <form onSubmit={handleSkillSubmit}>
            <div className="mb-4">
              <label htmlFor="skillName" className="block text-gray-200 font-semibold">Your Skills</label>
              <input
                type="text"
                id="skillName"
                name="skillName"
                value={skillsData.skillName}
                onChange={(e) => handleInputChange(e, "skills")}
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter your skills"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="interest" className="block text-gray-200 font-semibold">Interests</label>
              <input
                type="text"
                id="interest"
                name="interest"
                value={skillsData.interest}
                onChange={(e) => handleInputChange(e, "skills")}
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter your interests"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="languages" className="block text-gray-200 font-semibold">Languages</label>
              <input
                type="text"
                id="languages"
                name="languages"
                value={skillsData.languages}
                onChange={(e) => handleInputChange(e, "skills")}
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter languages"
              />
            </div>
            <button
              type="submit"
              className="bg-cyan-500 font-bold text-white py-2 px-4 rounded-full"
            >
              Submit
            </button>
          </form>
          <div className="flex justify-end mt-7">
            <Link href="/edit-resume">
              <button
                type="button"
                className="bg-gray-600 text-white py-2 px-4 rounded-full mr-2"
              >
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
