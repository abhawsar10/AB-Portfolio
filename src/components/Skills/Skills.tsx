import React,{useRef,useState,useEffect} from "react";
import { useSpring, a } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { TreeTitle, Frame, Content } from './skills_styles'
import Title from "../Title";


const Minus = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1.75em" viewBox="0 0 448 512">
    <path fill="#b3160e" d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM152 232H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
  )
  
  const Plus = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1.75em" viewBox="0 0 448 512">
    <path fill="#abd92e" d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
  )
  
  const Close = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1.75em" viewBox="0 0 448 512">
    <path fill="#78716c" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
)




function usePrevious<T>(value: T) {
    const ref = useRef<T>()
    useEffect(() => void (ref.current = value), [value])
    return ref.current
  }

const Tree = React.memo<
    React.HTMLAttributes<HTMLDivElement> & {
        defaultOpen?: boolean;
        name: string | JSX.Element;
        style?: React.CSSProperties;
    }
    >(({ children, name, style, defaultOpen = false }) => {

        const [isOpen, setOpen] = useState(defaultOpen)
        const previous = usePrevious(isOpen)
        const [ref, { height: viewHeight }] = useMeasure()
        const { height, opacity, y } = useSpring({
            from: { height: 0, opacity: 0, y: 0 },
            to: {
            height: isOpen ? viewHeight : 0,
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 20,
            },
        })

        // @ts-ignore
        const Icon = children ? (isOpen ? Minus : Plus) : Close;

        return (
            // <div className="relative p-1 overflow-hidden whitespace-nowrap text-white">
            <Frame>
                <div className="flex">
                    <div className=" flex-none p-2 cursor-pointer justify-center items-center" onClick={() => setOpen(!isOpen)} >
                        {Icon}
                    </div>
                    <div className="flex-auto p-2">
                        <TreeTitle style={style}>{name}</TreeTitle>
                    </div>
                </div>
                <Content
                    style={{
                    opacity,
                    height: isOpen && previous === isOpen ? 'auto' : height,
                    }}>
                    <a.div ref={ref} style={{ y }} children={children} />
                </Content>
             </Frame>
            // </div>
        )
    })  



export default function Skills(){

    return (
        <>        
            <div className="h-10"></div>
            <div className="flex flex-col mt-6 mb-4 md:flex-row item-center ">
                <div className="grid grid-cols-2 ml-52 flex-container" >
                    
                </div>
                <Title id={"Skills"}>Skills</Title>
            </div>
            <div className="flex flex-wrap h-auto justify-left p-2" style={{ minHeight: '50em' }}>

                <div className="m-0 p-2">
                    <Tree name="Languages" style={{fontWeight:'bold'}} defaultOpen>
                        <Tree name="Python" />
                        <Tree name="JavaScript" />
                        <Tree name="TypeScript" />
                        <Tree name="Java" />
                        <Tree name="R" />
                        <Tree name="C++" />
                        <Tree name="Java" />
                    </Tree>
                </div>
                    

                
                <div className="m-0 p-2">
                    <Tree name="Frameworks" style={{fontWeight:'bold'}} defaultOpen>
                        <Tree name="Django" />
                        <Tree name="React" />
                        <Tree name="Node.JS" />
                        <Tree name="Angular" />
                        <Tree name="ExpressJS" />
                        <Tree name="Bootstrap" />
                        <Tree name="Android SDK" />
                        <Tree name="Flask"/>
                        <Tree name="Tailwind" />
                    </Tree>
                </div>


                
                <div className="m-0 p-2">
                    <Tree name="Technologies" style={{fontWeight:'bold'}} defaultOpen>
                        <Tree name="REST API" />
                        <Tree name="Jira" />
                        <Tree name="Git" />
                        <Tree name="Docker" />
                        <Tree name="Database">
                            <Tree name="MySQL" />
                            <Tree name="PostgreSQL" />
                            <Tree name="MongoDB" />
                        </Tree>
                    </Tree>
                </div>

                <div className="m-0 p-2">
                    <Tree name="Cloud" style={{fontWeight:'bold'}} defaultOpen>
                        <Tree name="AWS" >
                            <Tree name="Lambda" />
                            <Tree name="EB" />
                            <Tree name="EC2" />
                            <Tree name="S3" />
                            <Tree name="RDS" />
                        </Tree>
                        <Tree name="GCP" >
                            <Tree name="App Engine" />
                            <Tree name="Cloud Compute" />
                        </Tree>
                    </Tree>
                </div>

                <div className="m-0 p-2">
                    <Tree name="AI/ML" style={{fontWeight:'bold'}} defaultOpen>
                        <Tree name="OpenCV" />
                        <Tree name="PyTorch" />
                        <Tree name="Pandas" />
                        <Tree name="SciKit" />
                        <Tree name="Keras" />
                        <Tree name="TensorFlow" />
                    </Tree>
                </div>

            </div>
        </>
      )

}
