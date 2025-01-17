"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCode } from "react-icons/fa6";
import Image from "next/image";

export default function Timeline() {
  return (
    <div className="mt-10">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(254, 243, 199)", color: "black" }} // bg-amber-100 in RGB
          contentArrowStyle={{ borderRight: "7px solid rgb(254, 243, 199)" }} // bg-amber-100 in RGB
          date="Feb 2023"
          dateClassName="text-white" // Set the date text to white
          iconStyle={{ background: "#111827", color: "#fff" }} // Icon background black, text white
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">Fintechstico Hackathon winner</h3>
          <h4 className="vertical-timeline-element-subtitle">Delhi</h4>
          <p>
            Winner of Fintechstico hackathon organised by FES NSUT participated by over 50 teams.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(254, 243, 199)", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(254, 243, 199)" }}
          date="Dec 2023"
          dateClassName="text-white" // Set the date text to white
          iconStyle={{ background: "#111827", color: "#fff" }} // Icon background black, text white
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">Winner of productivity track in Glitch hackathon</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Delhi NCR
          </h4>
          <p>
            Winner of the producivity track in Glitch Hackathon organised by Google Developer Student Club, Shiv Nadar University
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(254, 243, 199)", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(254, 243, 199)" }}
          date="Jun 2024 - Jul 2024"
          dateClassName="text-white" // Set the date text to white
          iconStyle={{ background: "#111827", color: "#fff" }} // Icon background black, text white
          icon={
            <Image
              src="/twilio.png" // Ensure the image is placed in the public folder
              alt="Twilio Logo"
              width={70}
              height={70}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bengaluru, Karnataka
          </h4>
          <p>Worked on Segment Customer Data Platform to integrate Oauth Client Crededntials for Action Destinations</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
