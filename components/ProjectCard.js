import React from "react";
import {
  Avatar,
  Row,
  Col,
  Text,
  Button,
  Spacer,
  Grid,
} from "@nextui-org/react";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const ProjectCard = ({ identifier, ...props }) => {
  const projectInformation = {
    Objectively: {
      projectName: "Objectively",
      projectDescription: `A web application "deliberation platform", helping host political discussion between academics, popular figures, and opposing political pundits.`,
      projectLink: "https://objectively.info/",
      projectAward: false,
      awardDescription: ``,
      projectImage: "/project_banner_objectively.png",
      projectTech: [
        "React Native",
        "Firebase",
        "Express",
        "MongoDB",
        "Mongoose",
        "Socket.io",
      ],
    },
    FamilyChat: {
      projectName: "FamilyChat",
      projectDescription:
        "Mobile chat application created for families; pairing five interactive features, alongside standard messaging functionality.",
      projectLink: "https://familychat.app/",
      projectAward: true,
      awardDescription: `Winner of UCF's Spring 2022 Senior Design "Best in Show"`,
      projectImage: "/project_banner_familychat.png",
      projectTech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Socket.io",
      ],
    },
    Notes: {
      projectName: "Notes",
      projectDescription: `A free "mobile-first" designed web application, allowing users to create, edit, organize, and categorize custom notes.`,
      projectLink: "https://familychat.app/",
      projectAward: false,
      awardDescription: ``,
      projectImage: "/project_banner_familychat.png",
      projectTech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Socket.io",
      ],
    },
  };

  return (
    <>
      <div className="group flex justify-center items-center mb-24">
        <div className="h-fit w-full rounded-lg transition-all ease-in duration-225 border-4 border-offGray bg-white group-hover:shadow-lg group-hover:border-offBlack">
          {projectInformation[identifier].projectAward ? (
            <div>
              <div className="w-full h-80 bg-white rounded-t-lg drop-shadow-lg flex items-center">
                <h3 className="w-296 p-20 text-16 text-offBlack font-bold">
                  {projectInformation[identifier].awardDescription}
                </h3>
              </div>

              <div className="w-full h-160 rounded-t bg-offBeige"></div>
            </div>
          ) : (
            <div className="w-full h-240 rounded-t bg-offBeige"></div>
          )}

          <div className="m-20">
            <h2 className="font-bold text-24">
              {projectInformation[identifier].projectName}
            </h2>

            <div className="mt-16">
              <h3 className="font-medium text-16 text-offGray">
                {projectInformation[identifier].projectDescription}
              </h3>
            </div>

            <button className="flex mt-24 mb-24 pt-8 pb-8 pl-16 pr-16 bg-offWhite text-offBlack rounded transition-all ease-in duration-225 border-offGray/0 border-2 group-hover:opacity-100 group-hover:border-offBlack group-hover:shadow-md items-center">
              <span className="font-bold text-16 pr-12">Read More</span>
              <MdArrowForward className="" size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
