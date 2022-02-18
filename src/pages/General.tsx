import { useState } from "react";
import { Link } from "react-router-dom";
import { Frame, Tree, Button } from "@react95/core"
import { openLink } from "../helpers";
const { icons } = Tree;

export default function General(){
  const [counter, setCounter] = useState(0);
  const [infinityStoneGauntlet, setInfinityStoneGauntlet] = useState({
    red: false,
    blue: false,
    yellow: false,
    green: false,
    purple: false,
    orange: false,
  })

  const easterTracker = (stone: string) => {
    const num = counter + 1
    setInfinityStoneGauntlet({
      ...infinityStoneGauntlet,
      [stone]: true
    })
    setCounter(num);
    console.log(`${num} clicks! You added the ${stone} stone!`);
  }

  console.log(icons)
  const treeNodes = {
    data: [
      {
        id: 123,
        label: 'Employed App Builds',
        children: [
          {
            id: 12,
            label: 'I9 Verification App',
            icon: <icons.FILE_EXECUTABLE />,
          },
          {
            id: 23,
            label: 'Worker App to Manage Shifts',
            icon: <icons.FILE_EXECUTABLE />,
          },
          {
            id: 34,
            label: 'A-B Ride Share App',
            icon: <icons.FILE_EXECUTABLE />,
          },
          {
            id: 45,
            label: 'Subscription Tracker Hackathon Project',
            icon: <icons.FILE_EXECUTABLE />,
          },
          {
            id: 56,
            label: 'React/Redux Templates',
            children: [
              {
                id: 1,
                label: 'GitHub',
                icon: <icons.FILE_PEN />,
                onClick: () => openLink('https://www.github.com/y04nqt')
              }
            ]
          },
        ],
      },
      {
        id: 1039,
        label: 'Activities',
        children: [
          {
            id: 17,
            label: 'Rock Climbing',
            children: [
              {
                id: 43,
                label: 'RRG',
                icon: <icons.FILE_MEDIA />,
                onClick: () => easterTracker('green'),
              },
              {
                id: 52,
                label: 'GYM',
                icon: <icons.FILE_MEDIA />,
                onClick: () => easterTracker('blue'),
              },
            ],
          },
          {
            id: 22,
            label: 'Smoking Meats',
            children: [
              {
                id: 41,
                label: 'Beef Jerky',
                icon: <icons.FILE_MEDIA />,
                onClick: () => easterTracker('purple'),
              },
              {
                id: 51,
                label: 'Pork Butt',
                icon: <icons.FILE_MEDIA />,
                onClick: () => easterTracker('orange'),
              },
            ],
          },
          {
            id: 21,
            label: 'Producing Music',
            children: [
              {
                id: 49,
                label: 'SoundCloud',
                icon: <icons.FILE_MEDIA />,
                onClick: () => easterTracker('red'),
              },
              {
                id: 491,
                label: 'Check out my SoundCloud',
                icon: <icons.FILE_MEDIA />,
                onClick: () => openLink('https://soundcloud.com/mag_landrace/tracks'),
              },
              {
                id: 59,
                label: 'DAW - Native Instruments',
                icon: <icons.FILE_MEDIA />,
                onClick: () => easterTracker('yellow'),
              },
            ],
          },
        ],
      },
      {
        id: 3,
        label: 'Other',
      },
      {
        id: 4,
        label: 'config.cfg',
        icon: <icons.FILE_SETTINGS />,
      },
      {
        id: 5,
        label: 'random_file',
        icon: <icons.FILE_UNKNOWN />,
      },
    ],
  };
  const isg = infinityStoneGauntlet;
  const activated = isg.red && isg.green && isg.blue && isg.purple && isg.orange && isg.yellow;
  return(
    <Frame
      padding={8}
      className="mx-12"
      style={{
        height: 'calc(100% - 124px)',
      }}
    >
      <Frame
        height="100%"
        boxShadow="in"
        bg="green"
        className="text-left overflow-x-auto"
        padding={8}
      >
        <h1
          className="text-2xl font-bold mb-4"
        >
          Hello,<br/>I am Aaron Krueger & welcome to my website!
        </h1>
        <p className="ml-4">Let me introduce myself to you. I am a software engineer that rock climbs, cooks BBQ, and produces music.</p>
        <p className="ml-4">I like to build products and architect technical solutions to real-world problems that generate profit.</p>
        <hr
          className="my-4"
        />
        {activated && (
          <>
            <p
              className="text-center my-4 text-lg"
            >
              I Can Only Show You The Door. You're The One That Has To Walk Through It.
            </p>
            <Link
              className="text-center text-lg block mb-4"
              to='/through-the-door'
            >
              <Button
                className="rounded-full"
              >
                Do you wish to enter?
              </Button>
            </Link>
          </>
        )}
        <Tree {...treeNodes}/>
      </Frame>
    </Frame>
  )
}