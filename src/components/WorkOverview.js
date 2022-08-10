import Link from "next/link";
import { Tooltip, Grid } from "@nextui-org/react";
import { WorkTooltip } from "../components/WorkTooltip";

export default function WorkOverview() {
  return (
    <>
      <hr id="work" class="w-88 h-4 bg-teal mt-40 mb-32" />

      <div className="mb-24">
        <Link href="#work">
          <a className="group mb-24">
            <h1 className=" text-32 mt-0 mb-2 space-x-12">
              <strong className=" text-offGray group-hover:text-offGray/75">
                #
              </strong>
              <strong className="text-offBlack group-hover:text-offBlack/75">
                Work
              </strong>
            </h1>
          </a>
        </Link>
      </div>

      <div className="border-4 rounded-md p-16 border-offBlack mb-20">
        <h3 className="font-bold text-20 text-offBlack mr-0 underline underline-offset-4 hover:underline mb-12">
          Current:
        </h3>
        <ul className="list-disc pl-12 marker:text-offBlack">
          <Grid className="group">
            <Tooltip
              color="invert"
              content={<WorkTooltip identifier="UDO" />}
              enterDelay={225}
            >
              <div className="p-4 rounded hover:bg-offWhite pr-16">
                <li className="m-0 pl-8">
                  <div className="flex justify-between ">
                    <h4 className="text-16 text-offBlack/50 italic">
                      <span className="font-bold text-offBlack">
                        Founder & CEO
                      </span>
                      <span className="pl-4 font-medium">@ UDO</span>
                      {/* <span className="pl-4 pr-4"> — </span> 2021 */}
                    </h4>
                  </div>
                </li>
              </div>
            </Tooltip>
          </Grid>
        </ul>
      </div>

      <div className="border-4 rounded-lg p-16 border-offWhite">
        <h3 className="font-bold text-16 text-offGray mr-0">Previous:</h3>

        <hr className="h-4 bg-offWhite mt-8 mb-16" />

        <ul className="list-disc pl-12 marker:text-offGray">
          <Grid className="group">
            <Tooltip
              color="invert"
              content={<WorkTooltip identifier="Objectively" />}
              enterDelay={225}
            >
              <div className="p-4 rounded hover:bg-offWhite pr-16">
                <li className="m-0 pl-8">
                  <div className="flex justify-between ">
                    <h4 className="text-16 text-offGray/50 italic">
                      <span className="font-bold text-offGray group-hover:text-offBlack">
                        UX Developer
                      </span>
                      <span className="pl-4 font-medium group-hover:text-offBlack">
                        @ Objectively
                      </span>
                      {/* <span className="pl-4 pr-4"> — </span> 2021 */}
                    </h4>
                  </div>
                </li>
              </div>
            </Tooltip>
          </Grid>

          <Grid className="group">
            <Tooltip
              color="invert"
              content={<WorkTooltip identifier="Cloudentity" />}
              enterDelay={225}
            >
              <div className="p-4 rounded hover:bg-offWhite pr-16">
                <li className="m-0 pl-8">
                  <div className="flex justify-between">
                    <h4 className="text-16 text-offGray/50 italic">
                      <span className="font-bold text-offGray group-hover:text-offBlack">
                        Design Intern
                      </span>
                      <span className="pl-4 font-medium group-hover:text-offBlack">
                        @ Cloudentity
                      </span>
                    </h4>
                  </div>
                </li>
              </div>
            </Tooltip>
          </Grid>

          <Grid className="group">
            <Tooltip
              color="invert"
              content={<WorkTooltip identifier="Addition" />}
              enterDelay={225}
            >
              <div className="p-4 rounded hover:bg-offWhite pr-16">
                <li className="m-0 pl-8">
                  <div className="flex justify-between">
                    <h4 className="text-16 text-offGray/50 italic">
                      <span className="font-bold text-offGray group-hover:text-offBlack">
                        Bank Teller
                      </span>
                      <span className="pl-4 font-medium group-hover:text-offBlack">
                        @ Addition
                      </span>
                    </h4>
                  </div>
                </li>
              </div>
            </Tooltip>
          </Grid>

          <Grid className="group">
            <Tooltip
              color="invert"
              content={<WorkTooltip identifier="FabLab" />}
              enterDelay={225}
            >
              <div className="p-4 rounded hover:bg-offWhite pr-16">
                <li className="m-0 pl-8">
                  <div className="flex justify-between">
                    <h4 className="text-16 text-offGray/50 italic">
                      <span className="font-bold text-offGray group-hover:text-offBlack">
                        Assistant
                      </span>
                      <span className="pl-4 font-medium group-hover:text-offBlack">
                        @ Murph Media
                      </span>
                    </h4>
                  </div>
                </li>
              </div>
            </Tooltip>
          </Grid>

          <Grid className="group">
            <Tooltip
              color="invert"
              content={<WorkTooltip identifier="AmEx" />}
              enterDelay={225}
            >
              <div className="p-4 rounded hover:bg-offWhite pr-16">
                <li className="m-0 pl-8">
                  <div className="flex justify-between">
                    <h4 className="text-16 text-offGray/50 italic">
                      <span className="font-bold text-offGray group-hover:text-offBlack">
                        Sales
                      </span>
                      <span className="pl-4 font-medium group-hover:text-offBlack">
                        @ American Express
                      </span>
                    </h4>
                  </div>
                </li>
              </div>
            </Tooltip>
          </Grid>

          <Grid className="group">
            <Tooltip
              color="invert"
              content={<WorkTooltip identifier="Syntegrity" />}
              enterDelay={225}
            >
              <div className="p-4 rounded hover:bg-offWhite pr-16">
                <li className="m-0 pl-8">
                  <div className="flex justify-between">
                    <h4 className="text-16 text-offGray/50 italic">
                      <span className="font-bold text-offGray group-hover:text-offBlack">
                        Help Desk Tech
                      </span>
                      <span className="pl-4 font-medium group-hover:text-offBlack">
                        @ Syntegrity
                      </span>
                    </h4>
                  </div>
                </li>
              </div>
            </Tooltip>
          </Grid>
        </ul>
      </div>
    </>
  );
}
