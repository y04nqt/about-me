import { useState } from "react";
import { Frame, RadioButton, Button, TitleBar } from "@react95/core"
import styled from 'styled-components';
import { Bookmark } from "@react95/icons";
import { openLink } from "../helpers";

const RadioButtonList = styled.div({
  display: "flex",
  flexDirection: "column",
});

interface ILink {
  emoji: string,
  btnText: string;
  labelText: string;
  name: string;
  link: string;
  description: string;
}

interface IInfo {
  [path: string]: ILink
}

const ADDITIONAL_INFO_ENUM: IInfo = {
  resume: {
    emoji: '📝',
    btnText: 'Download it',
    labelText: 'Get My Résumé',
    name: 'Résumé',
    link: 'https://github.com/y04nqt/about-me/raw/main/public/aaron_krueger_resume.pdf',
    description: "My résumé that contains my work experience and education. 📝"
  },
  email: {
    emoji: '📧',
    btnText: 'Hello Aaron, let\'s talk!',
    labelText: 'Email Me',
    name: 'Email (akr.git.receiver@gmail.com)',
    link: 'mailto:akr.git.receiver@gmail.com?subject=Hello%20Aaron%20From%20Website',
    description: "Copy the email address above to contact me."
  },
  github: {
    emoji: '💾',
    btnText: 'Explore My GitHub',
    labelText: 'Read My Code On Github',
    name: 'GitHub',
    link: 'https://www.github.com/y04nqt',
    description: "My Github profile that contains my projects and other information. 💾",
  },
  linkedin: {
    emoji: '👤',
    btnText: 'Checkout My LinkedIn',
    labelText: 'My Professional Experience',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/aaron-krueger-s117/',
    description: "My LinkedIn profile contains my professional experience and recommendations. 👤"
  },
  soundcloud: {
    emoji: '📻',
    btnText: 'Jam To My Music',
    labelText: 'Peruse My SoundCloud',
    name: 'SoundCloud',
    link: 'https://soundcloud.com/mag_landrace',
    description: "My SoundCloud profile that contains my music. 📻"
  },
  youtube: {
    emoji: '📺',
    btnText: 'Watch My Sends',
    labelText: 'Youtube Rock Climbing Channel',
    name: 'Youtube',
    link: 'https://www.youtube.com/channel/UC_Cazf0InKheWZYtSEtz0Og',
    description: "My Youtube channel with rock climbing videos. 📺"
  }
}


export default function AdditionalInfo(){
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (e: any) => {
    setSelectedOption(e.target.value);
  }

  const handleRadioButtonSubmit = (e: any) => {
    openLink(ADDITIONAL_INFO_ENUM[selectedOption].link);
  }

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
        {!selectedOption && (
          <Frame>
            <TitleBar
              title="Additional Info"
              icon={<Bookmark />}
            />
            <Frame
              padding={16}
              color='white'
            >
              <h1>Check out the items below to learn more or contact me</h1>
            </Frame>
          </Frame>
        )}
        {selectedOption && (
          <Frame>
            <TitleBar
              title={ADDITIONAL_INFO_ENUM[selectedOption].name}
              className="pb-4"
              icon={<Bookmark />}
            />
            <Frame
              padding={16}
              color="white"
            >
              <h1>{ADDITIONAL_INFO_ENUM[selectedOption].description}</h1>
            </Frame>
          </Frame>
        )}
        <hr
          className="my-8"
        />
        <RadioButtonList>
          {Object.keys(ADDITIONAL_INFO_ENUM).map((key: string) => (
            <RadioButton
              key={key}
              value={key}
              name={key}
              checked={selectedOption === key}
              onChange={handleChange}
              >{ADDITIONAL_INFO_ENUM[key].labelText}</RadioButton>
          ))}
        </RadioButtonList>
        {selectedOption && (
          <Button
            onClick={() => handleRadioButtonSubmit(selectedOption)}
          >{ADDITIONAL_INFO_ENUM[selectedOption].emoji} &nbsp; {ADDITIONAL_INFO_ENUM[selectedOption].btnText}</Button>
        )}
      </Frame>
    </Frame>
  )
}