import { Button } from "@react95/core";
import { useEffect, useState } from "react";

const FULL_WELCOME_TEXT = `My name is Aaron Krueger & welcome to my website!`

const Introduction = () => {
  const [welcomeText, setWelcomeText] = useState('');
  const [baseText, setBaseText] = useState(FULL_WELCOME_TEXT);
  const [animate, setAnimate] = useState('animate-typewriter');
  const [delay, setDelay] = useState(3250);
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  const counts = counter === 5 && counter2 === 4 && counter3 === 3; // password for special message

  useEffect(() => {
    if (!!localStorage.getItem('welcomeTextActive')) {
      const json = JSON.parse(localStorage.getItem('welcomeTextActive') ?? ''); //fixes typescript type error with ??
      if (new Date(json?.expiry) > new Date() && baseText.length === json?.value?.length) {
        setWelcomeText(json?.value);
        setAnimate('');
        return;
      }
    }

    // I want to wait some amount of time before executing animation
    if(delay !== 0){
      window.setTimeout(() => {
        setDelay(0);
      }, delay);
    }

    if (delay === 0 && welcomeText.length < baseText.length) {
      let timer = setTimeout(() => {
        setWelcomeText(baseText.substring(0, welcomeText.length+1));
      }, Math.floor(Math.random() * 200)+100); // creates a pseudo-random delay between 100 and 300 ms, looks humanish

      return () => {
        clearTimeout(timer);
      };
    }else if (welcomeText.length === baseText.length) {
      setAnimate('');
      localStorage.setItem('welcomeTextActive', JSON.stringify({value: welcomeText, expiry: new Date(Date.now() + (30 * 60 * 1000))}));
    }
  }, [delay, welcomeText, baseText]);

  useEffect(() => {
    if (counter === 5) {
      // alert('I am not a cat! But b4 you go, there are more like me.');
    }
    if (counter2 === 4) {
      // alert('Bah!');
    }
    if (counter3 === 3) {
      // alert('Nice!');
    }
  }, [counter, counter2, counter3]);

  return (
    <div className="text-left">
      <div
        className="mb-4 font-bold"
      >
        <h1
          className={`text-4xl text-white`}
          onClick={() => setCounter(counter+1)}
        >
          Hello friend,
        </h1>
        <h1
          className={`text-2xl ${animate}`}
        >
          {welcomeText}
        </h1>
      </div>
      <p
        className="ml-4"
        onClick={() => setCounter2(counter2+1)}
      >
        Let me introduce myself to you. I am a software engineer that rock climbs, cooks BBQ, and produces music.
      </p>
      <p
        className="ml-4"
        onClick={() => setCounter3(counter3+1)}
      >
        I like to build products and architect technical solutions to real-world problems that generate profit.
      </p>
      {counts && (
        <Button
          className="my-4 mx-auto"
          onClick={() => {
            const newText = `${baseText} Wow, did you look at the github repo for this site? We should talk. You've impressed me. In the subject or title say, 'I am a Super Sleuth!'.`;
            if (baseText === FULL_WELCOME_TEXT) { // do this just once
              setAnimate('animate-typewriter');
              setDelay(1250);
              setBaseText(newText);
            }
          }}
        >
          Super Sleuths Click Here
        </Button>
      )}
    </div>
  )
}

export default Introduction;