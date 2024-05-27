import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Tube from "../assets/service/3dtube.png";
import Cone from "../assets/service/3dtriangle.png";
import Capsule from "../assets/service/3dcapsule.png";

import TextBlock from "./TextBlock";
import SvgBlock from "./SvgBlock";

gsap.registerPlugin(ScrollTrigger);

const serviceSectionStyles = {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingTop: "20rem",
};

const backgroundStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "100vw",
    height: "85vh",
    zIndex: -1,
    backgroundColor: "#0a0b10",
    backgroundSize: "auto 100vh",
    backgroundRepeat: "no-repeat",
};

const titleStyles = {
    color: "var(--white)",
    display: "inline-block",
    fontSize: "2rem",
    marginTop: "1rem",
    position: "relative",
};

const titleBeforeStyles = `
  .title::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--pink);
  }
`;

const lineStyles = {
    borderLeft: "4px solid var(--background)",
    height: "15rem",
    marginTop: "2rem",
    borderRadius: "20px 20px 0 0",
};

const triangleStyles = {
    width: 0,
    height: 0,
    borderLeft: "1.2rem solid transparent",
    borderRight: "1.2rem solid transparent",
    borderTop: "2rem solid var(--background)",
};

const contentStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10rem 10rem",
    position: "relative",
};

const contentMediaStyles = `
  @media only screen and (max-width: 64em) {
    .content {
      margin: 10rem calc(4rem + 5vw);
    }
  }
  @media only screen and (max-width: 48em) {
    .content {
      display: block;
    }
    .content:last-child {
      margin-bottom: 2rem;
    }
  }
  @media only screen and (max-width: 40em) {
    .content {
      margin: 10rem calc(2rem + 3vw);
    }
    .content:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const objStyles = {
    position: "absolute",
    top: "80%",
    right: "35%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20vw",
};

const objMediaStyles = `
  @media only screen and (max-width: 48em) {
    .obj {
      opacity: 0.5;
    }
  }
`;

const Services = () => {
    const ref = useRef(null);
    const revealRefs = useRef([]);
    revealRefs.current = [];

    useEffect(() => {
        const element = ref.current;
        const mq = window.matchMedia("(max-width: 48em)");
        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: document.getElementById("services"),
                start: "top top+=180",
                end: "bottom bottom",
                pin: element,
                pinReparent: true,
            },
        });

        t1.fromTo(
            document.getElementById("line"),
            { height: "15rem" },
            {
                height: "3rem",
                duration: 2,
                scrollTrigger: {
                    trigger: document.getElementById("line"),
                    start: "top top+=200",
                    end: "bottom top+=220",
                    scrub: true,
                },
            }
        );

        revealRefs.current.forEach((el, index) => {
            if (mq.matches) {
                t1.from(el.childNodes[0], {
                    x: -300,
                    opacity: 0,
                    duration: 2,
                    ease: "power2",
                    scrollTrigger: {
                        id: `section-${index + 1}`,
                        trigger: el,
                        start: "top center+=200",
                        end: "bottom bottom-=100",
                        scrub: true,
                        snap: true,
                    },
                })
                    .to(el.childNodes[1], {
                        transform: "scale(0)",
                        ease: "power2.inOut",
                        scrollTrigger: {
                            id: `section-${index + 1}`,
                            trigger: el.childNodes[1],
                            start: "top center",
                            end: "bottom center",
                            scrub: true,
                            snap: true,
                        },
                    })
                    .from(el.childNodes[2], {
                        y: 400,
                        duration: 2,
                        ease: "power2",
                        scrollTrigger: {
                            id: `section-${index + 1}`,
                            trigger: el,
                            start: "top center+=100",
                            end: "bottom bottom-=200",
                            scrub: true,
                            snap: true,
                        },
                    })
                    .to(el, {
                        opacity: 0,
                        ease: "power2",
                        scrollTrigger: {
                            id: `section-${index + 1}`,
                            trigger: el,
                            start: "top top+=300",
                            end: "center top+=300",
                            scrub: true,
                        },
                    });
            } else {
                t1.from(el.childNodes[0], {
                    x: -300,
                    opacity: 0,
                    duration: 2,
                    ease: "power2",
                    scrollTrigger: {
                        id: `section-${index + 1}`,
                        trigger: el,
                        start: "top center+=100",
                        end: "bottom bottom-=200",
                        scrub: true,
                        snap: true,
                    },
                })
                    .to(el.childNodes[1], {
                        transform: "scale(0)",
                        ease: "power2.inOut",
                        scrollTrigger: {
                            id: `section-${index + 1}`,
                            trigger: el.childNodes[1],
                            start: "top center",
                            end: "bottom center",
                            scrub: true,
                            snap: true,
                        },
                    })
                    .from(el.childNodes[2], {
                        y: 400,
                        duration: 2,
                        ease: "power2",
                        scrollTrigger: {
                            id: `section-${index + 1}`,
                            trigger: el,
                            start: "top center+=100",
                            end: "bottom bottom-=200",
                            scrub: true,
                            snap: true,
                        },
                    })
                    .to(el, {
                        opacity: 0,
                        ease: "power2",
                        scrollTrigger: {
                            id: `section-${index + 1}`,
                            trigger: el,
                            start: "top top+=200",
                            end: "center top+=300",
                            scrub: true,
                        },
                    });
            }
        });
    }, []);

    const addToRefs = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    return (
        <>
            <style>
                {titleBeforeStyles}
                {contentMediaStyles}
                {objMediaStyles}
            </style>
            <section id="services" style={serviceSectionStyles}>
                <div style={backgroundStyles} ref={ref}>
                    <h1 className="title" style={titleStyles}>What We Do</h1>
                    <span id="line" style={lineStyles} />
                    <span id="triangle" style={triangleStyles} />
                </div>
                <div className="content" style={contentStyles} ref={addToRefs}>
                    <TextBlock
                        topic="Design"
                        title={<h1>We build award winning Designs</h1>}
                        subText={<h5>We help clients to build great design to attract more customers</h5>}
                    />
                    <div className="obj" style={objStyles}>
                        <img src={Tube} alt="Tube Object" width="400" height="400" />
                    </div>
                    <SvgBlock svg="Design.svg" />
                </div>
                <div className="content" style={contentStyles} ref={addToRefs}>
                    <TextBlock
                        topic="Develop"
                        title={<h1>We Develope high quality Web & App</h1>}
                        subText={<h5>We build appropriate solution to develope your website & app with best tools available</h5>}
                    />
                    <div className="obj" style={objStyles}>
                        <img src={Cone} alt="Cone Object" width="400" height="400" />
                    </div>
                    <SvgBlock svg="Develope.svg" />
                </div>
                <div className="content" style={contentStyles} ref={addToRefs}>
                    <TextBlock
                        topic="Support"
                        title={<h1>We provide support for your digital presence</h1>}
                        subText={<h5>Once your system is online, we will stay on hand to help you use it and provide technical support and maintenance for your business</h5>}
                    />
                    <div className="obj" style={objStyles}>
                        <img src={Capsule} alt="Capsule Object" width="400" height="400" />
                    </div>
                    <SvgBlock svg="Support.svg" />
                </div>
            </section>
        </>
    );
};

export default Services;
