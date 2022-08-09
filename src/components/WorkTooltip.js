export const WorkTooltip = ({ identifier, ...props }) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDate();
  const currentDate = [currentMonth, currentDay, currentYear];
  const startDateUDO = [9, 11, 2020];
  const monthsSinceStartUDO =
    (currentDate[2] - startDateUDO[2]) * 12 +
    (currentDate[0] - startDateUDO[0]);

  const workInformation = {
    Objectively: {
      company: "SRF Enterprises",
      techJob: true,
      product: "Objectively",
      title: "UX Developer",
      startDate: "May 2022",
      endDate: "Aug 2022",
      totalTime: "4 Months",
      description: "",
      resposibilities: [],
    },
    UDO: {
      company: "User Design One",
      techJob: false,
      product: "",
      title: "Founder & CEO",
      startDate: "Sep 2020",
      endDate: "-",
      totalTime: `${monthsSinceStartUDO} Months`,
      description: "",
      resposibilities: [],
    },
    Cloudentity: {
      company: "Cloundentity",
      techJob: true,
      product: "Open Banking APIs",
      title: "Design Intern",
      startDate: "Jul 2021",
      endDate: "Sep 2021",
      totalTime: "3 Months",
      description: "",
      resposibilities: [],
    },
    Addition: {
      company: "Addition Financial",
      techJob: false,
      product: "",
      title: "Bank Teller",
      startDate: "May 2019",
      endDate: "Oct 2019",
      totalTime: "6 Months",
      description: "",
      resposibilities: [],
    },
    FabLab: {
      company: "Murph Media",
      techJob: true,
      product: "The Fab Lab",
      title: "Personal Assistant",
      startDate: "Aug 2018",
      endDate: "Jan 2019",
      totalTime: "6 Months",
      description: "",
      resposibilities: [],
    },
    AmEx: {
      company: "American Express",
      techJob: true,
      product: "Blue Cash Card",
      title: "Sales Representative",
      startDate: "Sep 2017",
      endDate: "Feb 2018",
      totalTime: "6 Months",
      description: "",
      resposibilities: [],
    },
    Syntegrity: {
      company: "Syntegrity (SNI)",
      techJob: true,
      product: "JIRA",
      title: "Help Desk Technician",
      startDate: "Jul 2013",
      endDate: "Jul 2015",
      totalTime: "25 Months",
      description: "",
      resposibilities: [],
    },
  };

  return (
    <>
      <div className="mb-4 p-16 w-248 ">
        <div className="grid grid-cols-1 divide-y text-16">
          <div className="">
            <div className="flex">
              <span className="font-bold">Company:</span>
              <span className="pl-4">
                {workInformation[identifier].company}
              </span>
            </div>
            {workInformation[identifier].techJob ? (
              <div className="flex">
                <span className="font-bold">Product:</span>
                <span className="pl-4">
                  {workInformation[identifier].product}
                </span>
              </div>
            ) : null}

            <div className="flex">
              <span className="font-bold">Title:</span>
              <span className="pl-4">{workInformation[identifier].title}</span>
            </div>
          </div>
          <div className="mt-16 italic">
            <div className="flex mt-16">
              <span className="font-bold">Start Date:</span>
              <span className="pl-4">
                {workInformation[identifier].startDate}
              </span>
            </div>
            <div className="flex">
              <span className="font-bold">End Date:</span>
              <span className="pl-4">
                {workInformation[identifier].endDate}
              </span>
            </div>
            <div className="flex">
              <span className="font-bold">Total Time:</span>
              <span className="pl-4">
                {workInformation[identifier].totalTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
