import React,{useEffect,useState, useRef} from 'react'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Skills from './components/Skills/Skills'
import ChatPopup from './components/ChatPopup'


import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Zoom from '@mui/material/Zoom';

import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

function App() {

	const [theme, setTheme] = useState(null);
	const [showChat, setShowChat] = useState(false);
	
	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	const handleChatToggle = () => {
		setShowChat(!showChat);
	};
	

	const MyTooltip = styled(({ className, mytheme, ...props }) => (
		<Tooltip {...props} arrow classes={{ popper: className }} />
	  ))(({mytheme }) => ({
		[`& .${tooltipClasses.arrow}`]: {
		  	color: mytheme=== 'dark'? '#D1D1D1':'#616161',
		},
		[`& .${tooltipClasses.tooltip}`]: {
			backgroundColor: mytheme=== 'dark'? '#D1D1D1':'#616161',
			color: mytheme=== 'dark'? '#616161':'#D1D1D1',
			fontSize: '0.75rem',
			fontWeight: 'bold',
    		boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
		},
	  }));

  	return (
    <>
			<div className='fixed right-20 top-4 m-2 z-10 rounded-md bg-violet-300 dark:bg-orange-300' 
				onClick={handleThemeSwitch}>
				<MyTooltip title={theme === 'dark'? "Light Mode" : "Dark Mode" } mytheme={theme} placement="left" TransitionComponent={Zoom} arrow>
					<Button  style={{ minWidth:'auto' }}>
						{theme === 'dark' ? 
						<LightModeOutlinedIcon style={{fontSize:'2em', color: theme === 'dark' ? 'Black' : 'White' }} /> 
						: 
						<DarkModeOutlinedIcon style={{fontSize:'2em', color: theme === 'dark' ? 'Black' : 'White' }}n />}
					</Button>
				</MyTooltip>
			</div>
			

			<div className='fixed right-20 top-20 m-2 z-10 rounded-md bg-violet-300 dark:bg-orange-300' 
				onClick={handleChatToggle}>
				<MyTooltip title={showChat? "Close Chat" : "Chat with Me" } mytheme={theme}  placement="left" TransitionComponent={Zoom}  arrow>
					<Button  style={{ minWidth:'auto' }}>
							{showChat ? 
							<CancelOutlinedIcon style={{fontSize:'2em', color: theme === 'dark' ? 'Black' : 'White' }}/>
							: 
							<QuestionAnswerOutlinedIcon style={{fontSize:'2em', color: theme === 'dark' ? 'Black' : 'White' }}/>}
					</Button>
				</MyTooltip>
			</div>
			


			{showChat && <ChatPopup onClose={handleChatToggle}/>}

		<div className='bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter '>
			<div className='max-w-5xl w-11/12 mx-auto'>
			<Intro/>
			<Skills/>
			<Timeline theme={theme}/>
			<Portfolio/>
			<Contact id="contactesh"/>
			<Footer/>
			</div>
      </div>
    </>
  )
}

export default App
