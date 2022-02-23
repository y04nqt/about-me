import { openLink } from "../helpers";
import { Tree } from "@react95/core"
const { icons } = Tree;

interface IProps {
  easterTracker: (stone: string) => void;
  getModal: (modal: string) => void;
}


export default function TreeStructure({
  easterTracker, getModal
}: IProps) {
  const treeNodes = {
    data: [
      {
        id: 0,
        label: 'Employed App Builds',
        className: 'increase-folder-status',
        children: [
          {
            id: 1,
            label: 'I9 Verification App',
            icon: <icons.FILE_EXECUTABLE />,
          },
          {
            id: 2,
            label: 'Worker App to Manage Shifts',
            icon: <icons.FILE_EXECUTABLE />,
          },
          {
            id: 3,
            label: 'A-B Ride Share',
            icon: <icons.FILE_EXECUTABLE />,
          },
          {
            id: 4,
            label: 'Subscription Tracker',
            icon: <icons.FILE_EXECUTABLE />,
          },
          {
            id: 5,
            label: 'Outbound Call Center',
            icon: <icons.FILE_EXECUTABLE />,
          },
          {
            id: 6,
            label: 'React/Redux Templates',
            className: 'increase-folder-status',
            children: [
              {
                id: 7,
                label: 'GitHub',
                icon: <icons.FILE_PEN />,
                onClick: () => openLink('https://www.github.com/y04nqt')
              }
            ]
          },
        ],
      },
      {
        id: 8,
        label: 'Activities',
        className: 'increase-folder-status',
        children: [
          {
            id: 9,
            label: 'Rock Climbing Adventures',
            className: 'increase-folder-status',
            children: [
              {
                id: 10,
                label: 'RRG',
                icon: <icons.FILE_PEN />,
                onClick: () => easterTracker('green'),
              },
              {
                id: 11,
                label: 'climbing_pics',
                icon: <icons.FILE_EXECUTABLE />,
                onClick: () => getModal('climbing'),
              },
              {
                id: 12,
                label: 'gym_training+progams',
                icon: <icons.FILE_PEN />,
                onClick: () => easterTracker('blue'),
              },
              {
                id: 13,
                label: 'Mushrooms!',
                icon: <icons.FILE_FONT />,
                onClick: () => getModal('mushrooms'),
              },
            ],
          },
          {
            id: 14,
            label: 'meats_&_drinks_collection',
            className: 'increase-folder-status',
            children: [
              {
                id: 15,
                label: 'Drinks',
                icon: <icons.FILE_UNKNOWN />,
                onClick: () => getModal('drinks'),
              },
              {
                id: 16,
                label: 'Beef Jerky',
                icon: <icons.FILE_PEN />,
                onClick: () => easterTracker('purple'),
              },
              {
                id: 17,
                label: 'Pork Butt',
                icon: <icons.FILE_PEN />,
                onClick: () => easterTracker('orange'),
              },
            ],
          },
          {
            id: 18,
            label: 'Producing Music',
            className: 'increase-folder-status',
            children: [
              {
                id: 19,
                label: 'SoundCloud',
                icon: <icons.FILE_MEDIA />,
                onClick: () => easterTracker('red'),
              },
              {
                id: 20,
                label: 'Check this out',
                icon: <icons.FILE_MEDIA />,
                onClick: () => openLink('https://soundcloud.com/mag_landrace/tracks'),
              },
              {
                id: 21,
                label: 'DAW - Native Instruments',
                icon: <icons.FILE_SETTINGS />,
                onClick: () => openLink('https://www.native-instruments.com/en/catalog/maschine/'),
              },
              {
                id: 22,
                label: 'Electronic | Trap | Experimental',
                icon: <icons.FILE_SETTINGS />,
                onClick: () => easterTracker('yellow'),
              },
            ],
          },
        ],
      },
      {
        id: 23,
        label: 'landrace.WAV',
        icon: <icons.FILE_MEDIA />,
        onClick: () => getModal('music'),
      },
      {
        id: 24,
        label: 'config.yml',
        icon: <icons.FILE_SETTINGS />,
      },
      {
        id: 25,
        label: 'eli.jpg',
        icon: <icons.FILE_UNKNOWN />,
        onClick: () => getModal('eli'),
      },
    ],
  };

  return (
    <section className="px-4 ml-1 md:px-0">
      <Tree {...treeNodes}/>
    </section>
  )
}