import React,{useState,useEffect} from "react";
import { Link } from "react-scroll";
import { ReactSVG } from "react-svg";

function Intro(){

    const [timer1, settimer1] = useState(false);
    const [timer2, settimer2] = useState(false);
    const [timer3, settimer3] = useState(false);
    const [timer4, settimer4] = useState(false);
    const [timer5, settimer5] = useState(false);

    const gh = (
        <svg className={`${timer4 ? 'fill-black dark:fill-white' : 'fill-transparent'} transition-color ease-in-out duration-300`} 
            height="1em" 
            viewBox="0 0 496 512"
            >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
        </svg>
    );

    const linkedin = (
        <svg className={`${timer4 ? 'fill-black dark:fill-white' : 'fill-transparent'} transition-all ease-in-out duration-300`} 
            height="1em" 
            viewBox="0 0 448 512"
            >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
        </svg>
    );

    const email = (
        <svg className={`${timer4 ? 'fill-black dark:fill-white' : 'fill-transparent'} transition-all ease-in-out duration-300`} 
            height="1em" 
            viewBox="0 0 512 512"
            >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
        </svg>
    );

    
    const pdf_icon = (
        <svg
            className={`${timer4 ? 'fill-black dark:fill-white' : 'fill-transparent'} transition-all ease-in-out duration-300`} 
            height="1em"
            viewBox="0 0 482.14 482.14"
            >
            <g>
                <path d="M142.024,310.194c0-8.007-5.556-12.782-15.359-12.782c-4.003,0-6.714,0.395-8.132,0.773v25.69
                    c1.679,0.378,3.743,0.504,6.588,0.504C135.57,324.379,142.024,319.1,142.024,310.194z"/>
                <path d="M202.709,297.681c-4.39,0-7.227,0.379-8.905,0.772v56.896c1.679,0.394,4.39,0.394,6.841,0.394
                    c17.809,0.126,29.424-9.677,29.424-30.449C230.195,307.231,219.611,297.681,202.709,297.681z"/>
                <path d="M315.458,0H121.811c-28.29,0-51.315,23.041-51.315,51.315v189.754h-5.012c-11.418,0-20.678,9.251-20.678,20.679v125.404
                    c0,11.427,9.259,20.677,20.678,20.677h5.012v22.995c0,28.305,23.025,51.315,51.315,51.315h264.223
                    c28.272,0,51.3-23.011,51.3-51.315V121.449L315.458,0z M99.053,284.379c6.06-1.024,14.578-1.796,26.579-1.796
                    c12.128,0,20.772,2.315,26.58,6.965c5.548,4.382,9.292,11.615,9.292,20.127c0,8.51-2.837,15.745-7.999,20.646
                    c-6.714,6.32-16.643,9.157-28.258,9.157c-2.585,0-4.902-0.128-6.714-0.379v31.096H99.053V284.379z M386.034,450.713H121.811
                    c-10.954,0-19.874-8.92-19.874-19.889v-22.995h246.31c11.42,0,20.679-9.25,20.679-20.677V261.748
                    c0-11.428-9.259-20.679-20.679-20.679h-246.31V51.315c0-10.938,8.921-19.858,19.874-19.858l181.89-0.19v67.233
                    c0,19.638,15.934,35.587,35.587,35.587l65.862-0.189l0.741,296.925C405.891,441.793,396.987,450.713,386.034,450.713z
                    M174.065,369.801v-85.422c7.225-1.15,16.642-1.796,26.58-1.796c16.516,0,27.226,2.963,35.618,9.282
                    c9.031,6.714,14.704,17.416,14.704,32.781c0,16.643-6.06,28.133-14.453,35.224c-9.157,7.612-23.096,11.222-40.125,11.222
                    C186.191,371.092,178.966,370.446,174.065,369.801z M314.892,319.226v15.996h-31.23v34.973h-19.74v-86.966h53.16v16.122h-33.42
                    v19.875H314.892z"/>
            </g>
        </svg>
    );

    const darrow = (
        <svg
            className={`${timer5 ? 'fill-black dark:fill-white' : 'fill-transparent'} hover:scale-150 transition-all ease-in-out duration-1000`} 
            height="1em" 
            viewBox="0 0 384 512"
            >
            <path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"/>
        </svg>
    );


    useEffect(() => {
        
        const timer1 = setTimeout(() => {
            settimer1(true);
        }, 1000);
        
        const timer2 = setTimeout(() => {
            settimer2(true);
        }, 2000);

        const timer3 = setTimeout(() => {
            settimer3(true);
        }, 3000);

        const timer4 = setTimeout(() => {
            settimer4(true);
        }, 4000);

        const timer5 = setTimeout(() => {
            settimer5(true);
        }, 5000);

    }, []);



    return(
        <div className={`flex items-center justify-center flex-col text-center pt-20 pb-12 h-screen relative cursor-default`}>
            
            <ReactSVG src="/logos/logo.svg" />

            <div className={`text-5xl md:text-7xl mb-1 md:mb-3 font-bold 
                ${timer1 ? 'text-black dark:text-white' : 'text-transparent'} 
                transition-all ease-in-out duration-1000 font-kanit`}
                >
                Ankit Bhawsar
            </div>

            <p className={`text-base md:text-xl mb-3 font-medium ${timer2 ? 'text-black dark:text-stone-300' : 'text-transparent'} transition-all ease-in-out duration-1000`}>
                Full Stack Software Developer
            </p>

            <p className={` text-sm max-w-2xl mb-6 font-bold ${timer3 ? 'text-black dark:text-stone-300' : 'text-transparent'} transition-all ease-in-out duration-1000`}>
                I'm a software engineer with a strong foundation in web technologies 
                <br/>and a deep enthusiasm for &nbsp;

                <span className="hover:text-blue-500 transition-colors ease-out duration-300">Machine Learning</span>,&nbsp;
                <span className="hover:text-yellow-500 transition-colors ease-out duration-300">Computer Vision </span>, and&nbsp;
                <span className="hover:text-green-500 transition-colors ease-out duration-300">Data Analytics</span>.

                <br/><br/>
                <span className={`flex`}>
                    Open to explore compelling full-time career prospects that align with my interests.
                </span>
            </p>

            <div className={`flex`}>
                <div className="group h-10">
                    <div className="intro-icon">
                        <a href="https://github.com/abhawsar10" className="flex items-center justify-center h-full w-full" target="_blank">
                            {gh}
                        </a>
                    </div>
                    <div className="tooltip group-hover:scale-100 transition-all duration-200 ease-linear">
                        GitHub
                    </div>
                </div>
                <div className="group h-10">
                    <div className="intro-icon ">
                        <a href="https://www.linkedin.com/in/ankitbhawsar/" className="flex items-center justify-center h-full w-full"  target="_blank">
                            {linkedin}
                        </a>
                    </div>
                    <div className="tooltip group-hover:scale-100 transition-all duration-200 ease-linear">
                        LinkedIn
                    </div>
                </div>
                <div className="group h-10">
                    <div className="intro-icon ">
                        <Link to="contactesh" activeClass="active" spy={true} smooth={true} className="flex items-center justify-center h-full w-full" >
                            {email}
                        </Link>
                    </div>
                    <div className="tooltip group-hover:scale-100 transition-all duration-200 ease-linear">
                        Email Me
                    </div>
                </div>
                <div className="group h-10">
                    <div className="intro-icon ">
                        <a href="./assets/Ankit_Bhawsar_CV_9_1__SDE_.pdf" download="Ankit_Bhawsar_CV.pdf" className="flex items-center justify-center h-full w-full" target="_blank">
                            {pdf_icon}
                        </a>
                    </div>
                    <div className="tooltip group-hover:scale-100 transition-all duration-200 ease-linear">
                        Resume
                    </div>
                </div>
            </div>
            <div className={`opacity-${timer5} transition-opacity ease-in-out duration-1000`}>
                <div className="absolute bottom-16 mb-16 text-2xl md:text-xl animate-bounce cursor-pointer">
                    <Link to="skillesh" activeClass="active" spy={true} smooth={true} >
                        {darrow}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Intro;