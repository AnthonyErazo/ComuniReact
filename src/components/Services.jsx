import { useEffect, useRef } from "react";
import Tube from "../assets/service/3dtube.png";
import Cone from "../assets/service/3dtriangle.png";
import Capsule from "../assets/service/3dcapsule.png";
import TextBlock from "./TextBlock";
import SvgBlock from "./SvgBlock";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import './Service.css'

const Services = ({ id }) => {
    const ref = useRef(null);
    const revealRefs = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const mq = window.matchMedia("(max-width: 48em)");
        const element = ref.current;

        if (!element) {
            console.error("ServiceSection: ref not found");
            return;
        }

        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: document.getElementById("services"),
                start: "top top+=180",
                end: "bottom bottom",
                pin: element,
                pinReparent: true,
            },
        });

        revealRefs.current.forEach((el, index) => {
            if (!el) {
                console.error(`ServiceSection: ref for section ${index} not found`);
                return;
            }

            const children = el.childNodes;
            if (!children || children.length < 3) {
                console.error(`ServiceSection: insufficient child nodes for section ${index}`);
                return;
            }

            const [text, img, svg] = children;

            t1.from(text, {
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
            }).to(img, {
                transform: "scale(0)",
                ease: "power2.inOut",
                scrollTrigger: {
                    id: `section-${index + 1}`,
                    trigger: img,
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                    snap: true,
                },
            }).from(svg, {
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
            }).to(el, {
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
        });
    }, []);

    const addToRefs = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    return (
        <section style={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            paddingTop: '20rem',
        }} id={id}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'absolute',
                top: '0',
                left: '0',
                bottom: '0',
                width: '100vw',
                height: '85vh',
                zIndex: '-1',
                backgroundColor: '#0a0b10',
                backgroundSize: 'auto 100vh',
                backgroundRepeat: 'no-repeat'
            }} ref={ref}>
                <span style={{
                    width: '0',
                    height: '0',
                    borderLeft: '1.2rem solid transparent',
                    borderRight: '1.2rem solid transparent',
                    borderTop: '2rem solid var(--background)',
                }} />
            </div>

            <div ref={addToRefs} className="content-text-block" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10rem 10rem", position: "relative" }}>
                <TextBlock
                    topic="Design"
                    title={<h1>We build award winning Designs</h1>}
                    subText={<h5>We help clients to build great design to attract more customers</h5>}
                />
                <div className="text-block-img" style={{ position: "absolute", top: "80%", right: "35%", display: "flex", justifyContent: "center", alignItems: "center", width: "20vw" }}>
                    <img src={Tube} alt="Tube Object" width="400" height="400" />
                </div>
                <SvgBlock svg="Design.svg" />
            </div>

            <div ref={addToRefs} className="content-text-block" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10rem 10rem", position: "relative" }}>
                <TextBlock
                    topic="Develope"
                    title={<h1>We Develop high quality Web & App</h1>}
                    subText={<h5>We build appropriate solution to develop your website & app with best tools available</h5>}
                />
                <div className="text-block-img" style={{ position: "absolute", top: "80%", right: "35%", display: "flex", justifyContent: "center", alignItems: "center", width: "20vw" }}>
                    <img src={Cone} alt="Cone Object" width="400" height="400" />
                </div>
                <SvgBlock svg="Develope.svg" />
            </div>
            <div ref={addToRefs} className="content-text-block" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10rem 10rem", position: "relative" }}>
                <TextBlock
                    topic="Develope"
                    title={<h1>We Develop high quality Web & App</h1>}
                    subText={<h5>We build appropriate solution to develop your website & app with best tools available</h5>}
                />
                <div className="text-block-img" style={{ position: "absolute", top: "80%", right: "35%", display: "flex", justifyContent: "center", alignItems: "center", width: "20vw" }}>
                    <img src={Cone} alt="Cone Object" width="400" height="400" />
                </div>
                <SvgBlock svg="Develope.svg" />
            </div>
            <div ref={addToRefs} className="content-text-block" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10rem 10rem", position: "relative" }}>
                <TextBlock
                    topic="Develope"
                    title={<h1>We Develop high quality Web & App</h1>}
                    subText={<h5>We build appropriate solution to develop your website & app with best tools available</h5>}
                />
                <div className="text-block-img" style={{ position: "absolute", top: "80%", right: "35%", display: "flex", justifyContent: "center", alignItems: "center", width: "20vw" }}>
                    <img src={Cone} alt="Cone Object" width="400" height="400" />
                </div>
                <SvgBlock svg="Develope.svg" />
            </div>

            <div className="content-text-block" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10rem 10rem", position: "relative" }}>
                <TextBlock
                    topic="Support"
                    title={<h1>We provide support for your digital presence</h1>}
                    subText={<h5>Once your system is online, we will stay on hand to help you use it and provide technical support and maintenance <br /> your business</h5>}
                />
                <div className="text-block-img" style={{ position: "absolute", top: "80%", right: "35%", display: "flex", justifyContent: "center", alignItems: "center", width: "20vw" }}>
                    <img src={Capsule} alt="Capsule Object" width="400" height="400" />
                </div>
                <SvgBlock svg="Support.svg" />
            </div>
        </section>
    );
};

export default Services;
