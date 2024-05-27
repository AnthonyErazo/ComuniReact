import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Tube from "../assets/service/3dtube.png";
import Cone from "../assets/service/3dtriangle.png";
import Capsule from "../assets/service/3dcapsule.png";

import TextBlock from "./TextBlock";
import SvgBlock from "./SvgBlock";

gsap.registerPlugin(ScrollTrigger);

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
            { height: "15rem"},
            {
                height: "3rem",
                duration: 2,
                scrollTrigger: {
                    trigger: document.getElementById("line"),
                    start: "top top+=200",
                    end: "bottom top+=220",
                    scrub: true
                },
            }
        );

        revealRefs.current.forEach((el, index) => {
            if (mq.matches) {
                t1.from(el.childNodes[0], {
                    x: -100,
                    opacity: 0,
                    duration: 2,
                    ease: "power2",
                    background:'green',
                    scrollTrigger: {
                        id: `section-${index + 1}`,
                        trigger: el,
                        start: "top center+=100",
                        end: "bottom bottom-=50",
                        scrub: true,
                        snap: true
                    },
                })
                    .to(el.childNodes[1], {
                        transform: "scale(0)",
                        ease: "power2.inOut",
                        background:'green',
                        scrollTrigger: {
                            id: `section-${index + 1}`,
                            trigger: el.childNodes[1],
                            start: "top center",
                            end: "bottom center",
                            scrub: true,
                            snap: true
                        },
                    })
                    .from(el.childNodes[2], {
                        y: 400,
                        duration: 2,
                        ease: "power2",
                        background:'green',
                        scrollTrigger: {
                            id: `section-${index + 1}`,
                            trigger: el,
                            start: "top center+=100",
                            end: "bottom bottom-=200",
                            scrub: true,
                            snap: true
                        },
                    })
                    .to(el, {
                        opacity: 0,
                        ease: "power2",
                        background:'green',
                        scrollTrigger: {
                            id: `section-${index + 1}`,
                            trigger: el,
                            start: "top top+=300",
                            end: "center top+=300",
                            scrub: true
                        },
                    });
            } else {
                t1.from(el.childNodes[0], {
                    x: -300,
                    opacity: 0,
                    duration: 2,
                    ease: "power2",
                    background:'green',
                    scrollTrigger: {
                        id: `section-${index + 1}`,
                        trigger: el,
                        start: "top center+=200",
                        end: "bottom bottom-=300",
                        scrub: true,
                        snap: true,
                        background:'green',
                    },
                })
                    .to(el.childNodes[1], {
                        transform: "scale(0)",
                        ease: "power2.inOut",
                        background:'green',
                        scrollTrigger: {
                            id: `section-${index + 1}`,
                            trigger: el.childNodes[1],
                            start: "top center",
                            end: "bottom center",
                            scrub: true,
                            snap: true,
                            background:'green',
                        },
                    })
                    .from(el.childNodes[2], {
                        y: 400,
                        duration: 2,
                        ease: "power2",
                        background:'green',
                        scrollTrigger: {
                            id: `section-${index + 1}`,
                            trigger: el,
                            start: "top center+=100",
                            end: "bottom bottom-=200",
                            scrub: true,
                            snap: true,
                            background:'green',
                        },
                    })
                    .to(el, {
                        opacity: 0,
                        ease: "power2",
                        background:'green',
                        scrollTrigger: {
                            id: `section-${index + 1}`,
                            trigger: el,
                            start: "top top+=200",
                            end: "center top+=300",
                            scrub: true,
                            background:'green',
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
        <section id="services" className="w-screen flex flex-col items-center justify-center relative pt-80 bg-red-500">
            <div className="absolute flex flex-col items-center top-0 left-0 bottom-0 w-screen h-[85vh] z-[-1] bg-blue-500" ref={ref}>
                <h1 className="text-white text-2xl mt-4 relative inline-block before:content-[''] before:h-[1px] before:w-[50%] before:absolute before:left-1/2 before:bottom-0 before:transform before:-translate-x-1/2 before:border-b-2 before:border-pink-500">What We Do</h1>
                <span id="line" className="border-l-4 border-background h-60 mt-8 rounded-t-3xl"></span>
                <span id="triangle" className="w-0 h-0 border-l-[1.2rem] border-r-[1.2rem] border-t-[2rem] border-t-background"></span>
            </div>
            <div className="content flex justify-between items-center mx-[10rem] my-[10rem] relative bg-blue-500" ref={addToRefs}>
                <TextBlock
                    topic="Design"
                    title={<h1>We build award winning Designs</h1>}
                    subText={<h5>We help clients to build great design to attract more customers</h5>}
                />
                <div className="obj absolute top-[80%] right-[35%] flex justify-center items-center w-[20vw]">
                    <img src={Tube} alt="Tube Object" width="400" height="400" />
                </div>
                <SvgBlock svg="Design.svg" />
            </div>
            <div className="content flex justify-between items-center mx-[10rem] my-[10rem] relative" ref={addToRefs}>
                <TextBlock
                    topic="Develop"
                    title={<h1>We Develope high quality Web & App</h1>}
                    subText={<h5>We build appropriate solution to develope your website & app with best tools available</h5>}
                />
                <div className="obj absolute top-[80%] right-[35%] flex justify-center items-center w-[20vw]">
                    <img src={Cone} alt="Cone Object" width="400" height="400" />
                </div>
                <SvgBlock svg="Develope.svg" />
            </div>
            <div className="content flex justify-between items-center mx-[10rem] my-[10rem] relative" ref={addToRefs}>
                <TextBlock
                    topic="Support"
                    title={<h1>We provide support for your digital presence</h1>}
                    subText={<h5>Once your system is online, we will stay on hand to help you use it and provide technical support and maintenance for your business</h5>}
                />
                <div className="obj absolute top-[80%] right-[35%] flex justify-center items-center w-[20vw]">
                    <img src={Capsule} alt="Capsule Object" width="400" height="400" />
                </div>
                <SvgBlock svg="Support.svg" />
            </div>
        </section>
    );
};

export default Services;
