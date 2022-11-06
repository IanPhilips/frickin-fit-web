import Marquee from "react-fast-marquee";
import welcomeMarquee from './img/welcomefriend_marquee.png';
import questionMarquee from './img/question_marquee.png';
import introText from './img/are you ready.png';
import largeTitle from './img/frickinfit_large.png';
import insertCoin from './img/insertcoin.png';
import insertCoinHover from './img/insert_coin_hover.png';
import start from './img/start button.png';
import startHover from './img/start_hover.png';
import './App.css';
import clsx from "clsx";
import React, { useState} from "react";
import head1 from './img/transparent_wrestlers/80s_head.png'
import head2 from './img/transparent_wrestlers/pinkkisshead.png'
import head3 from './img/transparent_wrestlers/punkhead.png'
import head4 from './img/transparent_wrestlers/tiarafloatinghead.png'
import head5 from './img/transparent_wrestlers/head-1.png'
import head6 from './img/transparent_wrestlers/head-2.png'
import head7 from './img/transparent_wrestlers/head-3.png'
import grunt1 from './audio/grunt1.wav'
import grunt2 from './audio/grunt2.wav'
import {Modal} from "./Modal";
import useSound from 'use-sound';

function App() {
  const [buttonPressed, setButtonPressed] = useState(false);
  const [open, setOpen] = useState(false);
  const [forward, setForward] = useState(true);
    const [play1] = useSound(grunt1);
    const [play2] = useSound(grunt2);
  const wrestlers = [ head1,head2,head3,head4, head5, head6, head7];
  const [wrestler, setWrestler] = useState(head1);
  const [wrestlerVisible, setWrestlerVisible] = useState(false);
  const [wrestlerCount, setWrestlerCount] = useState(0);
  const [wrestlerPosition, setWrestlerPosition] = useState(generateRandomPointOnScreen());
    function generateRandomPointOnScreen() {
        return {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
        };
    }
  const generateWrestler = () => {
      if (wrestlerVisible)
          return
    // count from 0 to wrestlers.length and then reset to 0
    setWrestlerPosition(generateRandomPointOnScreen())
    setWrestlerVisible(true)
      //choose a ranomd number between 1 and 3:
    // const random = Math.floor(Math.random() * 2) + 1;
    //   if (random <= 1)
    //     play1()
    //   else if (random >= 2)
    //     play2()
  }



const parentClass = 'App-header flex flex-col mx-auto w-full pb-14  min-h-screen overflow-hidden'
  return (
      <div
          className={clsx(parentClass, 'relative bg-black bg-[length:250px_250px] bg-iphonex bg-repeat overflow-x-hidden no-scroll-bars')}
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

        <Marquee className={" mt-12 w-full self-center md:w-2/3"} direction={"right"}
                 gradient={true} gradientColor={[0,0,0]} speed={30} gradientWidth={100} >
              <img src={questionMarquee} alt="?????????" className="h-5"/>
              <img src={questionMarquee} alt="?????????" className="h-5"/>
              <img src={questionMarquee} alt="?????????" className="h-5"/>
        </Marquee>

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
        <div className={clsx('absolute right-0 top-0 -left-32 bottom-0 flex justify-start items-start',
            `scaleX(${forward ? -1 : 1})`, 'no-scroll-bars')}
        >
          <img src={wrestler} alt="wrestler" style={{
              transform: `translate(${wrestlerPosition.x}px, ${wrestlerPosition.y}px) scaleY(-1) scaleX(-1)`,
          }}
               className={clsx(`w-32 z-50`,
              wrestlerVisible ? `block animate-launch md:animate-launchBig` : 'hidden'
               )}
               onAnimationEnd={() => {
                   if (wrestlerCount === wrestlers.length - 1)
                       setWrestlerCount(0)
                   else
                       setWrestlerCount(wrestlerCount+1)
                   setWrestler(wrestlers[wrestlerCount])
                   setWrestlerVisible(false)
                   setForward(!forward)
               }}
          />
        </div>

        {/*Footer:*/}
        <div className={"flex-col flex justify-center gap-5 my-8 text-center w-full"}>

          <div className={"flex flex-row w-full justify-center gap-16 items-center sm:gap-20"}>
              <span className={'press-start text-[#ffcc33] text-[.8rem] sm:text-xl sm:mt-0.5 mt-[0.15rem]'}>00 CREDIT</span>
            <div className={clsx("h-3 sm:h-5 group cursor-pointer z-10")}>
            <img src={insertCoin} alt="credits" className="h-3 sm:h-5 group-hover:hidden" />
            <img src={insertCoinHover} alt="credits" className="h-3 sm:h-5 hidden group-hover:block" onClick={()=>setOpen(true)}/>
            </div>
          </div>

          <div className={"flex flex-row justify-center gap-5 mt-8 z-10  sm:text-sm text-xs"}  >
            <a
                className="App-link hover:underline"
                href={"https://twitter.com/FrickinFit"}
            >
              Twitter
            </a>
            <a
              className="App-link hover:underline"
              href={"https://discord.gg/pFt75rGGsz"}
            >
            Discord
          </a>
          </div>
            <Modal open={open} setOpen={setOpen} position={'center'}>
                <div className={"flex flex-col justify-center items-center p-6 bg-[#ffcc33] rounded-md press-start text-sm  "}>
                    Welcome to the FRICKIN FIT GYMNASIUM!
                    <br/>
                    <br/>
                    <span>We'll be releasing a generative NFT collection of super-hot wrestlers soon!
                        <br/>
                        <br/>
                        Follow us on <span> <a className={'text-[#cd3333]'} href={"https://twitter.com/FrickinFit"}>Twitter</a></span> to stay up to date.</span>
                </div>
            </Modal>
        </div>
    </div>
  );
}

export default App;
