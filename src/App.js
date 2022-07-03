import Marquee from "react-fast-marquee";
import rainbow from './img/rainbow.png';
import kilt from './img/twitter_wrestler_kiltpunk.jpg';
import parrot from './img/twitter_wrestler_parrotchair.jpg';
import welcomeMarquee from './img/welcomefriend_marquee.png';
import questionMarquee from './img/question_marquee.png';
import introText from './img/are you ready.png';
import largeTitle from './img/frickinfit_large.png';
import credit from './img/credit.png';
import insertCoin from './img/insertcoin.png';
import start from './img/start button.png';
import './App.css';
import clsx from "clsx";
import MoveExample from "./move-example";

function App() {
  function generateRandomPointOnScreen() {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    };
  }


  const parentClass = 'App-header flex flex-col mx-auto w-full pb-14  min-h-screen overflow-hidden'
  return (
      <div
          className={clsx(parentClass, 'bg-black bg-iphonex bg-contain bg-repeat bg-center')}
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
        <Marquee className={" mt-10 w-full sm:w-2/3"} direction={"right"} gradient={true} gradientColor={[0,0,0]} speed={30} gradientWidth={100} >
          {Array.from(Array(5).keys()).map(i =>
              <img key={i} src={questionMarquee} alt="Welcome Friend" className="h-5"/>)}}
        </Marquee>
        </div>

       <div className="flex flex-col justify-center items-center mt-24 ">
          <img src={start} alt="start" className="h-32 cursor-pointer hover:shadow-white rounded-full hover:shadow-md"/>
        </div>
        {/*<MoveExample/>*/}

        {/*Footer:*/}
        <div className={"flex-col flex justify-center gap-5 my-8 absolute bottom-0 text-center w-full"}>

          <div className={"flex flex-row w-full justify-center gap-16 items-end sm:gap-20"}>
          <img src={credit} alt="credits" className="h-2.5 sm:h-4 sm:ml-14 ml-4"/>
          <img src={insertCoin} alt="credits" className="h-3 sm:h-5"/>
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
