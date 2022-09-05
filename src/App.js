import Marquee from "react-fast-marquee";
import welcomeMarquee from './img/welcomefriend_marquee.png';
import questionMarquee from './img/question_marquee.png';
import introText from './img/are you ready.png';
import largeTitle from './img/frickinfit_large.png';
import credit from './img/credit.png';
import insertCoin from './img/insertcoin.png';
import insertCoinHover from './img/insert_coin_hover.png';
import start from './img/start button.png';
import startHover from './img/start_hover.png';
import './App.css';
import clsx from "clsx";
import {useState} from "react";
import head1 from './img/transparent_wrestlers/80s_head.png'
import head2 from './img/transparent_wrestlers/pinkkisshead.png'
import head3 from './img/transparent_wrestlers/punkhead.png'
import head4 from './img/transparent_wrestlers/tiarafloatinghead.png'

function App() {
  const [buttonPressed, setButtonPressed] = useState(false);
  const wrestlers = [ head1,head2,head3,head4]
  const [wrestler, setWrestler] = useState(head1);
  const [wrestlerVisible, setWrestlerVisible] = useState(false);
  const [wrestlerCount, setWrestlerCount] = useState(0);
    function generateRandomPointOnScreen() {
        return {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
        };
    }
    const [wrestlerPosition, setWrestlerPosition] = useState(generateRandomPointOnScreen());
  const generateWrestler = () => {
      if (wrestlerVisible)
          return
      setWrestlerPosition(generateRandomPointOnScreen())
      // count from 0 to wrestlers.length and then reset to 0
        if (wrestlerCount === wrestlers.length - 1) {
            setWrestlerCount(0);
        }
        else {
            setWrestlerCount(wrestlerCount+1)
        }
    setWrestler(wrestlers[wrestlerCount])
    setWrestlerVisible(true)
  }

  const parentClass = 'App-header flex flex-col mx-auto w-full pb-14  min-h-screen overflow-hidden'
  return (
      <div
          className={clsx(parentClass, 'bg-black bg-[length:250px_250px] bg-iphonex bg-repeat overflow-x-hidden')}
      >

        <Marquee className={" mt-10"} gradient={false} speed={60} >
          {Array.from(Array(10).keys()).map(i =>
              <img key={i} src={welcomeMarquee} alt="Welcome Friend" className="h-5"/>)}}
        </Marquee>

        <div className="flex flex-col justify-center items-center mt-20">
          <img src={introText} alt="Are you ready" className="w-full sm:max-w-md max-w-sm mx-auto px-10"/>
        </div>

        <div className="flex flex-col justify-center items-center mt-24">
          <img src={largeTitle} alt="Frickin fit" className="w-full max-w-2xl mx-auto px-2"/>
        </div>

        <div className={'flex flex-row w-full justify-center'}>
        <Marquee className={" mt-10 w-full sm:w-2/3"} direction={"right"}  gradient={true} gradientColor={[0,0,0]} speed={30} gradientWidth={100} >
          {Array.from(Array(5).keys()).map(i =>
              <img key={i} src={questionMarquee} alt="Welcome Friend" className="h-5"/>)}}
        </Marquee>
        </div>

       <div className="flex flex-col justify-center items-center mt-24">
         <div className={clsx("w-32 group z-10", buttonPressed && "animate-wiggle")}
              onClick={() =>{
                setButtonPressed(true)
                generateWrestler()
              }}
              onAnimationEnd={() => setButtonPressed(false)}
         >
          <img src={start} alt="start" className="h-32 cursor-pointer rounded-full group-hover:hidden"/>
          <img src={startHover} alt="start" className="h-32 cursor-pointer rounded-full hidden group-hover:block"/>
         </div>
        </div>

        {/*WRESTLERS*/}
        <div className={'absolute right-0 top-[10vh] -left-32 bottom-0 flex justify-start items-start overflow-hidden'}>
          <img src={wrestler} alt="wrestler" style={{transform: `translate(${wrestlerPosition.x}px, ${wrestlerPosition.y}px)`}}
               className={clsx(`w-32`,
              wrestlerVisible ? `block animate-launch md:animate-launchBig` : 'hidden')}
               onAnimationEnd={() => setWrestlerVisible(false)}
          />
        </div>

        {/*Footer:*/}
        <div className={"flex-col flex justify-center gap-5 my-8 text-center w-full"}>

          <div className={"flex flex-row w-full justify-center gap-16 items-end sm:gap-20"}>
          <img src={credit} alt="credits" className="h-2.5 sm:h-4 sm:ml-14 ml-4"/>
            <div className={clsx("h-3 sm:h-5 group cursor-pointer z-10")}>
            <img src={insertCoin} alt="credits" className="h-3 sm:h-5 group-hover:hidden"/>
            <img src={insertCoinHover} alt="credits" className="h-3 sm:h-5 hidden group-hover:block"/>
            </div>
          </div>

          <div className={"flex flex-row justify-center gap-5"}>
            <a
                className="App-link hover:underline text-sm"
                href="https://twitter.com/FrickinFit"
                target="_blank"
                rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              className="App-link hover:underline text-sm"
              href="https://discord.gg/pFt75rGGsz"
              target="_blank"
              rel="noopener noreferrer"
            >
            Discord
          </a>
          </div>

        </div>
    </div>
  );
}

export default App;
