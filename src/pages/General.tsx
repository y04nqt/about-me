import { useState } from "react";
import { Frame } from "@react95/core"
import { Computer } from '@react95/icons';
import TreeStructure from "../components/TreeStructure";
import Modal from "../components/Modal";
import Eli from "../components/Eli";
import MusicPlayer from "../components/MusicPlayer";
import Portal from "../components/Portal";
import Introduction from "../components/Introduction";

interface IStoneMap {
  [key: string]: string
}

interface IGauntletMap {
  [key: string]: boolean
}

interface IModalItem {
  title: string,
  w: string,
  h: string,
  btns: Array<{
    value: string,
    onClick: () => void
  }>,
  icon?: JSX.Element,
  dPos?: {
    x: number,
    y: number
  },
  children?: JSX.Element | null
}

interface IMIMap {
  [key: string]: IModalItem
}

export default function General(){
  const [modalItem, setModalItem] = useState<IModalItem>({
    w: '400',
    h: '400',
    title: 'Information',
    icon: <Computer variant="32x32_4" />,
    btns: [],
    dPos: {x: 0, y: 20},
    children: null,
  });
  const [showModal, setShowModal] = useState(false);
  const [counter, setCounter] = useState(0);
  const [infinityStoneGauntlet, setInfinityStoneGauntlet] = useState<IGauntletMap>({
    red: false,
    blue: false,
    yellow: false,
    green: false,
    purple: false,
    orange: false,
  })

  const alertUser = (num:number, stone: string) => {
    const numArr = [
      'You have found the first stone!',
      'You have found the second stone!',
      'You have found the third stone!',
      'You have found the fourth stone!',
      'You have found the fifth stone!',
      'You have found the sixth stone!',
    ]
    const stoneMap:IStoneMap = {
      red: 'That\'s a beauty. Becareful! It may become a part of you',
      blue: 'Ah, the Space Stone has been located, great work!',
      yellow: 'The Mind Stone. Press F to pay respects.',
      green: 'Yes! The Time Stone has been located! Something around you feels strange...',
      purple: 'With great power comes great responsibility. May the power stone bring strength to you!',
      orange: 'The Soul Stone\'s energy imminates around you and you can feel the sacrifices of others.',
    }

    alert(`${numArr[num]}\n${stoneMap[stone]}`);
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const getModal = (item: string) => {
    const width = window.innerWidth / 1.25;
    const height = window.innerHeight / 1.25;
    const content:IMIMap = {
      eli: {
        w: `${(width < 500) ? width : 500}`,
        h: `${height}`,
        title: 'Eli, The Legendary One',
        children: <Eli />,
        btns: [{
          value: 'Pet',
          onClick: () => setShowModal(false), // showModal state var in toggleModal is always false when called this way :/ so using the setter is secure
        }, {
          value: 'Scratch',
          onClick: () => setShowModal(false), // showModal state var in toggleModal is always false when called this way :/ so using the setter is secure
        }],
        dPos: {
          x: Math.floor(Math.random() * 84) - 64, // pseudo randomly set position
          y: Math.floor(Math.random() * 50), // pseudo randomly set position
        },
      },
      music: {
        w: `${(width < 500) ? width : 500}`,
        h: `${height}`,
        title: 'Wanna buy my album?',
        children: <MusicPlayer />,
        btns: [{
          value: 'Nice Jams',
          onClick: () => setShowModal(false), // showModal state var in toggleModal is always false when called this way :/ so using the setter is secure
        }, {
          value: 'Good Vibes',
          onClick: () => setShowModal(false), // showModal state var in toggleModal is always false when called this way :/ so using the setter is secure
        }],
        dPos: {
          x: Math.floor(Math.random() * 84) - 64, // pseudo randomly set position
          y: Math.floor(Math.random() * 50), // pseudo randomly set position
        },
      },
      climbing: {
        w: `${(width < 500) ? width : 500}`,
        h: `${height}`,
        title: 'Climbing',
        children: (<GenericPopupContent
          title="My Climbing"
          textContent="Outside climbing for me is where I find a challenge and the strength to conquer it."
          imgArr={[
            require('../assets/slides/climbing_tall.JPG'),
            require('../assets/slides/frantically_climbing_lol.png')
          ]}
          altArr={[
            'Climbing Tall',
            'Frantically Climbing Lol'
          ]}
        />),
        btns: [{
          value: 'Climb Hard',
          onClick: () => setShowModal(false), // showModal state var in toggleModal is always false when called this way :/ so using the setter is secure
        }, {
          value: 'Climb Harder',
          onClick: () => setShowModal(false), // showModal state var in toggleModal is always false when called this way :/ so using the setter is secure
        }],
        dPos: {
          x: Math.floor(Math.random() * 84) - 64, // pseudo randomly set position
          y: Math.floor(Math.random() * 50), // pseudo randomly set position
        },
      },
      drinks: {
        w: `${(width < 500) ? width : 500}`,
        h: `${height}`,
        title: 'Drinks',
        children: (<GenericPopupContent
          title="Favorite Drinks"
          textContent="Tik Tak Taxis, Old Fashioned, and watermelon redbull vodkas (for partying)."
          imgArr={[
            require('../assets/slides/lost_lake_drink.png'),
            require('../assets/slides/old_fashioned.jpg'),
          ]}
          altArr={[
            'Lost Lake Tic Tak Taxi Tribute',
            'The Old Fashioned',
          ]}
        />),
        btns: [{
          value: 'Cheers',
          onClick: () => setShowModal(false), // showModal state var in toggleModal is always false when called this way :/ so using the setter is secure
        }, {
          value: 'Salud',
          onClick: () => setShowModal(false), // showModal state var in toggleModal is always false when called this way :/ so using the setter is secure
        }],
      },
      mushrooms: {
        w: `${(width < 500) ? width : 500}`,
        h: `${height}`,
        title: 'Mushrooms!',
        children: (<GenericPopupContent
          title="Some mushrooms I've found during my travels."
          textContent="Finding mushrooms of all varieties is a lot of fun. Also, they're only one of the coolest kinds of organisms of all time."
          imgArr={[
            require('../assets/slides/mushroom_rrg.png'),
            require('../assets/slides/line_of_shrooms.png'),
          ]}
          altArr={[
            'A big mushroom I found while on a hike.',
            'These mushrooms were lined up on the way to Infirmary.',
          ]}
        />),
        btns: [{
          value: 'Forage',
          onClick: () => setShowModal(false), // showModal state var in toggleModal is always false when called this way :/ so using the setter is secure
        }, {
          value: 'Pick Up',
          onClick: () => setShowModal(false), // showModal state var in toggleModal is always false when called this way :/ so using the setter is secure
        }],
      },
    };

    setModalItem(content[item])
    toggleModal();
  }

  const easterTracker = (stone: string) => {
    if (infinityStoneGauntlet[stone] === false) {
      alertUser(counter, stone); // alert user of stone and their inventory count

      const num = counter + 1
      setInfinityStoneGauntlet({
        ...infinityStoneGauntlet,
        [stone]: true
      })
      setCounter(num);
      console.log(`${num} clicks! You added the ${stone} stone!`);
    }else{
      console.log('You have already found this stone!');
      alert('Nothing is here anymore... Continue your journey forward!');
    }
  }


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
        h="100%"
        boxShadow="in"
        bg="green"
        className="text-left overflow-x-auto"
        padding={8}
      >
        <Introduction />
        <hr
          className={`my-8 ${activated && "w-4/6"} mx-auto`}
        />
        {showModal && modalItem && (
          <Modal
            width={modalItem?.w}
            height={modalItem?.h}
            title={modalItem?.title}
            icon={modalItem?.icon}
            buttons={modalItem?.btns}
            defaultPosition={modalItem?.dPos}
            toggleModal={toggleModal}
            children={modalItem?.children}
          />
        )}
        {activated && (
          <Portal />
        )}
        <TreeStructure
          easterTracker={easterTracker}
          getModal={getModal}
        />
      </Frame>
    </Frame>
  )
}

function GenericPopupContent({
  title = 'Generic Popup Content',
  textContent = 'Generic Text Content',
  imgArr = ['https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'],
  altArr = ['I am not a cat!'],
  bg = 'gray',
}) {
  if (imgArr.length !== altArr.length) {
    throw new Error('imgArr and altArr must be the same length!');
  }

  const randIndex = Math.floor(Math.random() * imgArr.length);
  return (
    <Frame
      bg={bg}
      padding={8}
    >
      <h1
        className="text-center text-2xl font-bold my-2"
      >
        {title}
      </h1>
      <img
        className="rounded-lg h-[250px] mx-auto border-2 border-t-gray-800 border-l-gray-800 border-b-white"
        src={imgArr[randIndex]}
        alt={altArr[randIndex]}
      />
      <p
        className="text-center text-xl my-2"
      >{textContent}</p>
    </Frame>
  )
}