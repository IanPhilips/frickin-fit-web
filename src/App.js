import rainbow from './img/rainbow.png';
import kilt from './img/twitter_wrestler_kiltpunk.jpg';
import parrot from './img/twitter_wrestler_parrotchair.jpg';


import './App.css';

function App() {
  return (
      <div
          className={'App-header flex flex-col mx-auto w-full pb-14 bg-black min-h-screen justify-center overflow-hidden'}
      >
        <div className="flex gap-3 flex-col items-center justify-center mt-20 md:mt-2 md:flex-row w-full h-100">
        <img src={rainbow} className="App-logo" height={40} alt="logo" />
        <img src={parrot} className="App-logo"  height={40} alt="logo" />
        <img src={kilt} className="App-logo" height={40} alt="logo" />
        </div>
        <p className={"md:text-4xl text-2xl mt-24 text-white text-center"}>
          Welcome to The Frickin Fit Gymnasium
        </p>
        <div className={"flex-row flex justify-center gap-5 my-12 md:absolute md:bottom-0 text-center w-full"}>
        <a
          className="App-link hover:underline md:text-3xl text-2xl"
          href="https://twitter.com/FrickinFit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>        <a
          className="App-link hover:underline md:text-3xl text-2xl"
          href="https://discord.gg/pFt75rGGsz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>
        </div>
    </div>
  );
}

export default App;
