import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Zoom from "react-reveal/Zoom";

import { ExperienceContainer, Heading } from "./ExperienceElements";
import { experience } from "../../Data";

function Experience() {
    return (
        <ExperienceContainer id="experience">
            <Heading>
                <Zoom>EXPERIENCE & EDUCATION</Zoom>
            </Heading>
            <VerticalTimeline>
                {experience
                    .slice()
                    .reverse()
                    .map((values) => (
                        <VerticalTimelineElement
                            className={`vertical-timeline-element--${values.type}`}
                            contentStyle={
                                values.bckgrnd
                                    ? { background: "#fa901e", color: "#fff" }
                                    : {}
                            }
                            contentArrowStyle={
                                values.bckgrnd
                                    ? { borderRight: "7px solid  #fa901e" }
                                    : {}
                            }
                            date={values.date}
                            dateClassName="dateClass"
                            iconStyle={{ background: "#333333", color: "#fff" }}
                            icon={values.icon}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {values.title}
                            </h3>

                            <h4 className="vertical-timeline-element-subtitle">
                                {values.subtitle}
                            </h4>

                            <p>
                                {values.desc}
                                <br />
                                {values.workdesc.length > 0 ? (
                                    <ul>
                                        {values.workdesc
                                            .reverse()
                                            .map((work) => (
                                                <li>{work}</li>
                                            ))}
                                    </ul>
                                ) : (
                                    <></>
                                )}
                            </p>
                        </VerticalTimelineElement>
                    ))}
            </VerticalTimeline>
        </ExperienceContainer>
    );
}

export default Experience;
