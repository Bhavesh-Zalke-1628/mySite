import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import {
  ReactOriginal,
  NodejsOriginal,
  MongodbOriginal,
  NextjsOriginal,
  JavascriptOriginal,
  ReduxOriginal,
  TailwindcssOriginal,
  ExpressOriginal,
  JavaOriginal,
} from "devicons-react";

function SkillComponent() {
  const skills = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and interactive UIs using React, Next.js, and Tailwind CSS. Focused on performance and accessible design.",
      link: "#",
      icon: <ReactOriginal size={40} />,
    },
    {
      title: "Backend Architecture",
      description:
        "Developing scalable server-side applications with Node.js and Express. Designing RESTful APIs and microservices.",
      link: "#",
      icon: <NodejsOriginal size={40} />,
    },
    {
      title: "Database Management",
      description:
        "Designing efficient data models in MongoDB and SQL databases. Optimizing queries for large-scale data handling.",
      link: "#",
      icon: <MongodbOriginal size={40} />,
    },
    {
      title: "State Management",
      description:
        "Managing complex application states using Redux Toolkit and React Context API for seamless data flow.",
      link: "#",
      icon: <ReduxOriginal size={40} />,
    },
    {
      title: "Modern JavaScript",
      description:
        "Deep expertise in ES6+, TypeScript, and asynchronous programming patterns for clean, maintainable code.",
      link: "#",
      icon: <JavascriptOriginal size={40} />,
    },

    {
      title: "Java - (Spring Boot)",
      description:
        "Building robust, enterprise-grade backend services with Java and Spring Boot. Skilled in developing REST APIs, microservices, and secure database integrations.",
      link: "#",
      icon: <JavaOriginal size={40} />,
    },
    // {
    //   title: "Full-Stack Integration",
    //   description:
    //     "Connecting frontend and backend seamlessly using best practices in security and authentication (JWT, OAuth).",
    //   link: "#",
    //   icon: <NextjsOriginal size={40} />,
    // },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <HoverEffect
        items={skills.map((skill) => ({
          ...skill,
          title: (
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                {skill.icon}
              </div>
              <span className="text-xl font-bold">{skill.title}</span>
            </div>
          ),
        }))}
      />
    </div>
  );
}

export default SkillComponent;
