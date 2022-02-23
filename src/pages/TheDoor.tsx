import { useState, useEffect } from 'react';
import { Frame, ProgressBar } from '@react95/core';

const TIME = 500000;
export default function TheDoor(){
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!open) {
      let timer = window.setTimeout(() => {
        setOpen(true);
      }, TIME);

      let ticker = TIME;
      let interval = window.setInterval(() => {
        ticker -= 1000;
        const prog = Math.abs((ticker/TIME) - 1) * 100;
        setProgress(Number(prog.toFixed(2)));
      }, 1000);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [open]);

  return(
    <Frame
      className="mx-12"
      bg="green"
      padding={8}
      style={{
        height: 'calc(100% - 124px)',
      }}
    >
      <Frame
        boxShadow="in"
        bg="black"
        height={"100%"}
        className="text-left overflow-x-auto"
        padding={8}
      >
        <h2
          className="text-white text-3xl text-center font-bold text-green-500"
        >
          Here's the beginning of your journey into the truth.
        </h2>
        {!open && (
          <Frame
            bg="aliceblue"
            width="250px"
            height="250px"
            className='p-4 rounded-full mx-auto absolute'
            style={{
              top: 'calc(50% - 125px)',
              left: 'calc(50% - 125px)',
            }}
            boxShadow="in"
          >
            <div
              id="pikachu"
              className='circles mx-auto rounded-full flex align-middle justify-center'
            >
              <h1
                className='self-center rounded-lg'
              >
                Thank you<br/>for<br/>stopping by!
              </h1>
            </div>
            <section
              className={`mt-8 mx-auto text-lg py-8 bg-color-green text-center flex justify-center font-bold`}
            >
              <ProgressBar
                width={window.innerWidth/2}
                percent={progress}
              />
            </section>
          </Frame>
        )}
        {open && (
          <Frame
            bg="#F7F7F7"
            width="250px"
            height="250px"
            className='p-4 rounded-full mx-auto absolute'
            style={{
              top: 'calc(50% - 125px)',
              left: 'calc(50% - 125px)',
            }}
          >
            <div
              id="doge"
              className='circles mx-auto rounded-full flex align-middle justify-center'
            >
              <h1
                className='self-center'
              >
                My friend hates timers so I made one to spite him!
              </h1>
            </div>
          </Frame>
        )}
      </Frame>
    </Frame>
  )
}