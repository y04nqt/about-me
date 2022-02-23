import { Modal as Modal95 } from '@react95/core';
import { Computer } from '@react95/icons';

interface IModalProps {
  width: string,
  height: string,
  title: string,
  icon?: JSX.Element,
  buttons: Array<
    {
      value:string,
      onClick: () => void
    }
  >,
  defaultPosition?: {
    x:number,
    y:number
  },
  toggleModal: () => void,
  children?: JSX.Element | null,
}


export default function Modal({
  width = '400',
  height = '400',
  title = 'Information',
  icon = <Computer variant="32x32_4" />,
  buttons = [],
  defaultPosition = {x: 0, y: 20},
  toggleModal = () => {},
  children = null,
}: IModalProps) {

  const closeModal = () => {
    toggleModal();
  };
  console.log(defaultPosition);
  return (
    <Modal95
      width={width}
      height={height}
      title={title}
      defaultPosition={defaultPosition}
      icon={icon}
      closeModal={closeModal}
      buttons={buttons}
    >
      {children}
    </Modal95>
  )
}