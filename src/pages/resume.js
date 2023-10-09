import Link from 'next/link';

const Resume = () => {
  return (
    <div className="mx-auto w-1/2 my-10">
      <h1 className="text-4xl text-center font-bold text-white">Add Resume</h1>
      <div className="mx-auto mt-2 w-16 border-t-2 border-green-300"></div>

      <div className="bg-white rounded p-8 mt-8 grid grid-cols-2 grid-rows-3 gap-10">
        <div>
          <h2 className="text-xl font-semibold text-blue-400 mb-2">Profile</h2>
          <div className="w-16 border-t-2 border-blue-400 mb-4"></div>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 font-semibold">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-600 font-semibold">Your Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter your address"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-semibold">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="website" className="block text-gray-600 font-semibold">Your Website</label>
              <input
                type="text"
                id="website"
                name="website"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter your website"
              />
            </div>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-400 mb-2">Social</h2>
          <div className="w-16 border-t-2 border-blue-400 mb-4"></div>
          <form>
            <div className="mb-4">
              <label htmlFor="linkedin" className="block text-gray-600 font-semibold">Linkedin</label>
              <input
                type="text"
                id="linkedin"
                name="linkedin"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter your Linkedin URL"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="twitter" className="block text-gray-600 font-semibold">Twitter</label>
              <input
                type="text"
                id="twitter"
                name="twitter"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter your Twitter URL"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="github" className="block text-gray-600 font-semibold">GitHub</label>
              <input
                type="text"
                id="github"
                name="github"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="GitHub Account"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="instagram" className="block text-gray-600 font-semibold">Email</label>
              <input
                type="instagram"
                id="instagram"
                name="instagram"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter your email"
              />
            </div>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-400 mb-2">Education</h2>
          <div className="w-16 border-t-2 border-blue-400 mb-4"></div>
          <form>
            <div className="mb-4">
              <label htmlFor="degree" className="block text-gray-600 font-semibold">Your Degree</label>
              <input
                type="text"
                id="degree"
                name="degree"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter your degree"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="study" className="block text-gray-600 font-semibold">Your Study</label>
              <input
                type="text"
                id="study"
                name="study"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter your study field"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="eduAddress" className="block text-gray-600 font-semibold">Address</label>
              <input
                type="text"
                id="eduAddress"
                name="eduAddress"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter your education address"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="years" className="block text-gray-600 font-semibold">Years</label>
              <input
                type="text"
                id="years"
                name="years"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter years of study"
              />
            </div>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-400 mb-2">Experience</h2>
          <div className="w-16 border-t-2 border-blue-400 mb-4"></div>
          <form>
            <div className="mb-4">
              <label htmlFor="jobDesk" className="block text-gray-600 font-semibold">Job Desk</label>
              <input
                type="text"
                id="jobDesk"
                name="jobDesk"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter job desk"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="expYears" className="block text-gray-600 font-semibold">Years</label>
              <input
                type="text"
                id="expYears"
                name="expYears"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter years of experience"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-600 font-semibold">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter company name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="techUsed" className="block text-gray-600 font-semibold">Technology Used</label>
              <input
                type="text"
                id="techUsed"
                name="techUsed"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter technology used"
              />
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-blue-400 mb-2">Certificates</h2>
          <div className="w-16 border-t-2 border-blue-400 mb-4"></div>
          <form>
            <div className="mb-4">
              <label htmlFor="certTitles" className="block text-gray-600 font-semibold">Titles</label>
              <input
                type="text"
                id="certTitles"
                name="certTitles"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter certificate titles"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="certYears" className="block text-gray-600 font-semibold">Years</label>
              <input
                type="text"
                id="certYears"
                name="certYears"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter years of certification"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="credentials" className="block text-gray-600 font-semibold">Credentials ID</label>
              <input
                type="text"
                id="credentials"
                name="credentials"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter credentials ID"
              />
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-blue-400 mb-2">Skills</h2>
          <div className="w-16 border-t-2 border-blue-400 mb-4"></div>
          <form>
            <div className="mb-4">
              <label htmlFor="skills" className="block text-gray-600 font-semibold">Your Skills</label>
              <input
                type="text"
                id="skills"
                name="skills"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter your skills"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="interests" className="block text-gray-600 font-semibold">Interests</label>
              <input
                type="text"
                id="interests"
                name="interests"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter your interests"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="languages" className="block text-gray-600 font-semibold">Languages</label>
              <input
                type="text"
                id="languages"
                name="languages"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Enter languages"
              />
            </div>
          </form>
          <div className="flex justify-end mt-7">
            <Link href="/dashboard">
              <button
                type="button"
                className="bg-gray-400 text-white py-2 px-4 rounded-full mr-2"
              >
                Back
              </button>
            </Link>
            <button
              type="submit"
              className="bg-green-500 font-bold text-white py-2 px-4 rounded-full"
            >
              Update
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Resume;
