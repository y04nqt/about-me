import { useState, useEffect } from 'react';
import { Frame } from '@react95/core';


export default function TheDoor(){
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) {
      let timer = window.setTimeout(() => {
        setOpen(true);
      }, 500000);
      return () => {
        clearTimeout(timer);
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
              <h1 className='self-center'>
                Thank you for stopping by!
              </h1>
            </div>
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