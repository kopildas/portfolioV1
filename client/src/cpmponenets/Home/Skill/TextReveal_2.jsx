import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


function TextReveal() {
    const [lettersRef, setlettersRef] = useArrayRef();
    const triggerRef = useRef(null)


    function useArrayRef() {
        const lettersRef = useRef([]);
        lettersRef.current = [];
        return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
    }

    gsap.registerPlugin(ScrollTrigger);
    const text = "sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"

    useEffect(() => {
        const anim = gsap.to(
            lettersRef.current,
            {
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    start: "top center",
                    end: "bottom 5%"

                },
                color: "#c72727",
                duration: 5,
                stagger: 1,
            }
        );
        return (() => {
            anim.kill()
        })
    }, []);

    return (
        <>
            {/* <div className="spacing-small"></div> */}
            <div className="reveal bg-green-300">
                <div ref={triggerRef}>
                    {text.split("").map((letter, index) => (
                        <span className="reveal-text text-7xl" key={index} ref={setlettersRef}>
                            {letter}
                        </span>
                    ))}
                </div>
            </div>
            {/* <div className="spacing"></div> */}
        </>
    )
}

export default TextReveal