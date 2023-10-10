import Image from "next/image";
import proj1 from "../../public/images/projects/portfolio-cover-image.jpg";
import TransitionEffect from "@/components/TransitionEffect";

export default function ProjectDetail() {
  return (
    <main className="min-h-screen p-10">
      <TransitionEffect />
      <div className="max-w-3xl form-bg mx-auto">
        <h1 className="text-2xl text-white font-bold mb-2 text-center">Payment Gateway Website</h1>
        <p className="text-gray-400 mb-4 text-center">Web Development</p>
        <Image
          src={proj1} // Replace URL with your project image
          alt="Payment Gateway Website"
          className="mb-4 rounded-lg mx-auto"
        />
        <div className="mb-4">
          <p className="text-gray-300">
            The Payment Gateway Website is a project developed to provide
            online payment solutions for businesses and e-commerce. This
            website allows users to securely and conveniently make payments
            using various payment methods, such as credit cards, bank transfers,
            and digital wallets.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl text-gray-100 font-semibold mb-2">Key Features:</h2>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Integration with various payment methods.</li>
            <li>High-level security system to protect user data.</li>
            <li>User transaction history for payment tracking.</li>
            <li>Responsive and user-friendly user interface.</li>
            <li>User account management and profile settings.</li>
          </ul>
        </div>
        <div className="flex flex-wrap mx-auto">
          <span className="mr-3 mb-2 py-1 px-3 bg-gray-700 text-white rounded-full text-sm">
            Web Development
          </span>
          <span className="mr-3 mb-2 py-1 px-3 bg-gray-700 text-white rounded-full text-sm">
            E-commerce
          </span>
          <span className="mr-3 mb-2 py-1 px-3 bg-gray-700 text-white rounded-full text-sm">
            Payment Gateway
          </span>
          <span className="mr-3 mb-2 py-1 px-3 bg-gray-700 text-white rounded-full text-sm">
            Security
          </span>
          {/* Add more tags if needed */}
        </div>
      </div>
    </main>
  );
}
