import React,{useState,useEffect} from "react";
import { Link } from "react-scroll";

function Intro(){

    const gh = (
        <svg className="dark:fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
        </svg>
    );

    const linkedin = (
        <svg className="dark:fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
        </svg>
    );

    const email = (
        <svg className="dark:fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
        </svg>
    );

    const darrow = (
        <svg className="dark:fill-white hover:scale-150 transition-all ease-in-out duration-200" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
            <path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"/>
        </svg>
    );

    const [opacity1, setOpacity1] = useState(0);
    console.log(opacity1)
    const [opacity2, setOpacity2] = useState(0);
    const [opacity3, setOpacity3] = useState(0);
    const [opacity4, setOpacity4] = useState(0);
    const [opacity5, setOpacity5] = useState(0);

    useEffect(() => {
        
        const timer1 = setTimeout(() => {
            setOpacity1(1);
        }, 1000);
        
        const timer2 = setTimeout(() => {
            setOpacity2(1);
        }, 2000);

        const timer3 = setTimeout(() => {
            setOpacity3(1);
        }, 3000);

        const timer4 = setTimeout(() => {
            setOpacity4(1);
        }, 4000);

        const timer5 = setTimeout(() => {
            setOpacity5(1);
        }, 5000);

    }, []);



    return(
        <div className={`flex items-center justify-center flex-col text-center pt-20 pb-12 h-screen relative cursor-default`}>
            <div className={`text-5xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white opacity-${opacity1} transition-opacity ease-in-out duration-1000`}>Ankit Bhawsar</div>
            <p className={`text-base md:text-xl mb-3 font-medium opacity-${opacity2} transition-opacity ease-in-out duration-1000`}>Full Stack Software Developer</p>
            <p className={` text-sm max-w-2xl mb-6 font-bold  opacity-${opacity3} transition-opacity ease-in-out duration-1000`}>
                I'm a software engineer with a strong foundation in web technologies 
                <br/>and a deep enthusiasm for &nbsp;

                <span className="hover:text-blue-500 transition-all ease-in-out duration-500">Machine Learning</span>,&nbsp;
                <span className="hover:text-yellow-500 transition-all ease-in-out duration-500">Computer Vision </span>, and&nbsp;
                <span className="hover:text-green-500 transition-all ease-in-out duration-500">Data Analytics</span>.

                <br/><br/>
                <span className={`flex opacity-${opacity4} transition-opacity ease-in-out duration-1000`}>
                    Open to explore compelling full-time career prospects that align with my interests.
                </span>
            </p>
            <div className={`flex opacity-${opacity5} transition-opacity ease-in-out duration-1000`}>
                <span className="intro-icon ">
                    <a href="https://github.com/abhawsar10" className="flex items-center justify-center h-full w-full" target="_blank">
                        {gh}
                    </a>
                </span>
                <span className="intro-icon ">
                    <a href="https://www.linkedin.com/in/ankitbhawsar/" className="flex items-center justify-center h-full w-full"  target="_blank">
                        {linkedin}
                    </a>
                </span>
                <span className="intro-icon ">
                    <Link to="contactesh" activeClass="active" spy={true} smooth={true} className="flex items-center justify-center h-full w-full" >
                        {email}
                    </Link>
                </span>
            </div>
            <div className={`flex opacity-${opacity5}  transition-opacity ease-in-out duration-1000`}>
                <a href="./assets/Ankit_Bhawsar_CV_8_6__SDE_.pdf" download="Ankit_Bhawsar_CV.pdf" className="flex items-center justify-center h-full w-full" target="_blank">
                    <div className="px-3 py-1 my-5 rounded-xl hover:scale-110 transition-all ease-in-out duration-200 text-sm  bg-black text-stone-100 dark:bg-white dark:text-black">
                            RESUME
                    </div>
                </a>
            </div>
            <div className={`opacity-${opacity5} transition-opacity ease-in-out duration-1000`}>
                <div className="absolute bottom-16 mb-16 text-2xl md:text-xl animate-bounce cursor-pointer">
                    <Link to="timelinesh" activeClass="active" spy={true} smooth={true} >
                        {darrow}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Intro;