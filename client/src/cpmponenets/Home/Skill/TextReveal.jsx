import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


function TextReveal() {
    const [heddingLettersRef, setHeddingLettersRef] = useArrayRef();
    const [lettersRef, setlettersRef] = useArrayRef();
    const triggerRef = useRef(null)


    function useArrayRef() {
        const lettersRef = useRef([]);
        lettersRef.current = [];
        return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
    }

    gsap.registerPlugin(ScrollTrigger);
    const text = "HTML, CSS, Javascript, BootStrap, Tailwind CSS, React"
    const back_text = "Node.js, Express.js, Postman"
    const data_text = "MongoDB, Mongoose ODM, Firebase"
    const ml_text = "Python, OpenCV, Numpy, Pandas, Scikit-Learn, TensorFlow, MatplotLib"
    const vr_c_text = "Git, Github"
    const other_text = "Vercel, Render, Github pages, C, C++, Java"

    const front = "Front-end"
    const backend = "Back-end"
    const database = "Database"
    const ml = "Machine Learning"
    const version = "Version Control"
    const other = "Others"


    // for hedding text
    useEffect(() => {
        const anim = gsap.to(
            heddingLettersRef.current,
            {
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    start: "top 140%",
                    end: "bottom 30%"

                },
                color: "#F59433",
                duration: 5,
                stagger: 1,
            }
        );
        return (() => {
            anim.kill()
        })
    }, []);


    useEffect(() => {
        const anim = gsap.to(
            lettersRef.current,
            {
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    start: "top 145%",
                    end: "bottom 55%"

                },
                color: "#81888B",
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
            <div className="reveal bg-green-00 w-[80%] lg:w-[100%] text-shades-1">
                <div ref={triggerRef} className="">
                    {front.split("").map((letter, index) => (
                        <span className="reveal-text text-xl lg:text-3xl font-bold" key={index} ref={setHeddingLettersRef}>
                            {letter}
                        </span>
                    ))}
                    <br />
                    {text.split("").map((letter, index) => (
                        <span className="reveal-text text-md lg:text-xl font-semibold" key={index} ref={setlettersRef}>
                            {letter}
                        </span>
                    ))}
                </div>

                {/* backend */}
                <div ref={triggerRef} className="mt-5">
                    {backend.split("").map((letter, index) => (
                        <span className="reveal-text text-xl lg:text-3xl font-bold" key={index} ref={setHeddingLettersRef}>
                            {letter}
                        </span>
                    ))}
                    <br />
                    {back_text.split("").map((letter, index) => (
                        <span className="reveal-text text-md lg:text-xl font-semibold" key={index} ref={setlettersRef}>
                            {letter}
                        </span>
                    ))}
                </div>


                {/* databse */}
                <div ref={triggerRef} className="mt-5">
                    {database.split("").map((letter, index) => (
                        <span className="reveal-text text-xl lg:text-3xl font-bold" key={index} ref={setHeddingLettersRef}>
                            {letter}
                        </span>
                    ))}
                    <br />
                    {data_text.split("").map((letter, index) => (
                        <span className="reveal-text text-md lg:text-xl font-semibold" key={index} ref={setlettersRef}>
                            {letter}
                        </span>
                    ))}
                </div>


                {/* ml */}
                <div ref={triggerRef} className="mt-5">
                    {ml.split("").map((letter, index) => (
                        <span className="reveal-text text-xl lg:text-3xl font-bold" key={index} ref={setHeddingLettersRef}>
                            {letter}
                        </span>
                    ))}
                    <br />
                    {ml_text.split("").map((letter, index) => (
                        <span className="reveal-text text-md lg:text-xl font-semibold" key={index} ref={setlettersRef}>
                            {letter}
                        </span>
                    ))}
                </div>


                {/* version */}
                <div ref={triggerRef} className="mt-5 ml-5 lg:ml-0">
                    {version.split("").map((letter, index) => (
                        <span className="reveal-text text-xl lg:text-3xl font-bold" key={index} ref={setHeddingLettersRef}>
                            {letter}
                        </span>
                    ))}
                    <br />
                    {vr_c_text.split("").map((letter, index) => (
                        <span className="reveal-text text-md lg:text-xl font-semibold" key={index} ref={setlettersRef}>
                            {letter}
                        </span>
                    ))}
                </div>


                {/* other */}
                <div ref={triggerRef} className="mt-5 ml-5 lg:ml-0">
                    {other.split("").map((letter, index) => (
                        <span className="reveal-text text-xl lg:text-3xl font-bold" key={index} ref={setHeddingLettersRef}>
                            {letter}
                        </span>
                    ))}
                    <br />
                    {other_text.split("").map((letter, index) => (
                        <span className="reveal-text text-md lg:text-xl font-semibold" key={index} ref={setlettersRef}>
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