import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import proj2 from "../../public/images/projects/nft-collection-website-cover-image.jpg";

const FramerImage = motion(Image);

const Project = ({ projectTitle, projectCategory, uploadImage, projectLink, projectId }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark
      xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]"
      />

      <Link
        href={`/projects-detail/${projectId}`}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={uploadImage}
          alt={projectTitle}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {projectCategory}
        </span>

        <Link
          href={`/projects-detail/${projectId}`}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {projectTitle}
          </h2>
        </Link>
        <div className="flex w-full items-center justify-between">
          <Link
            href={projectLink}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base"
            aria-label={projectLink}
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from the server
    fetch("/api/project/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching project data:", error));
  }, []);

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Projects"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {projects.map((project, index) => (
              <div key={index} className="col-span-6 sm:col-span-12">
                <Project
                  projectId={project._id}
                  projectCategory={project.projectCategory}
                  projectTitle={project.projectTitle}
                  uploadImage={proj2}
                  projectLink={project.projectLink}
                />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
}
