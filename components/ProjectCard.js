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
      projectTech: ["Figma", "Vue", "UIKit", "UX", "Personas", "Web App"],
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
        "Figma",
        "React Native",
        "iOS",
        "Expo",
        "Firebase",
        "Mobile",
      ],
    },
    Notes: {
      projectName: "Notes",
      projectDescription: `A free "mobile-first" designed web application, allowing users to create, edit, organize, and categorize custom notes.`,
      projectLink: "https://familychat.app/",
      projectAward: false,
      awardDescription: ``,
      projectImage: "/project_banner_familychat.png",
      projectTech: ["Figma", "MUI", "NextJS", "Framer", "Node", "CosmosDB"],
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

              <div className="flex w-full h-160 bg-offBeige group-hover:bg-offBlack transition-all ease-in duration-225 justify-center">
                <img
                  src="/project_banner_familyChat.png"
                  alt="FamilyChat Project Banner"
                  className="w-fit h-160 pl-20 pr-20"
                />
              </div>
            </div>
          ) : (
            <div className="flex w-full h-240 bg-offBeige rounded-t transition-all ease-in duration-225 group-hover:bg-offBlack justify-center">
              {projectInformation[identifier].projectName == "Objectively" ? (
                <img
                  src="/objectively.png"
                  alt="Objectively Project Banner"
                  className="w-fit h-240 p-16 ml-8 object"
                />
              ) : (
                <img
                  src="/project_banner_notes.png"
                  alt="Notes Project Banner"
                  className="w-fit h-240"
                />
              )}
            </div>
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

            <div className="flex flex-wrap mt-16">
              {projectInformation[identifier].projectTech.map((listOfTech) => (
                <div
                  key={listOfTech.id}
                  className="w-fit h-fit pt-8 pb-8 pl-12 pr-12 mr-8 mb-8 rounded-full bg-offGray transition-all ease-in duration-225 group-hover:bg-offBlack text-12"
                >
                  <div className="font-medium text-offWhite">{listOfTech}</div>
                </div>
              ))}
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
