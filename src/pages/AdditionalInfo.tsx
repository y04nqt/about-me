import { useState } from "react";
import { Frame, RadioButton, Button, TitleBar } from "@react95/core"
import styled from 'styled-components';
import { Bookmark } from "@react95/icons";

const RadioButtonList = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ILink {
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
  email: {
    btnText: 'Hello Aaron, let\'s talk!',
    labelText: 'Email me',
    name: 'Email',
    link: 'mailto:akr.git.receiver@gmail.com?subject=Hello%20Aaron%20From%20Website',
    description: "My email address that you can reach me."
  },
  resume: {
    btnText: 'Download it!',
    labelText: 'Get my Résumé',
    name: 'Résumé',
    link: '/aaron_krueger_resume.pdf',
    description: "My résumé that contains my education and work experience."
  },
  github: {
    btnText: 'Check out my GitHub',
    labelText: 'Explore my Github',
    name: 'GitHub',
    link: 'https://www.github.com/y04nqt',
    description: "My Github profile that contains my projects and other information.",
  },
  linkedin: {
    btnText: 'Check out my LinkedIn',
    labelText: 'My Professional Experience',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/aaron-krueger-s117/',
    description: "My LinkedIn profile contains my professional experience and recommendations."
  },
  soundcloud: {
    btnText: 'Listen my songs on SoundCloud',
    labelText: 'Find the beats on SoundCloud',
    name: 'SoundCloud',
    link: 'https://soundcloud.com/mag_landrace',
    description: "My SoundCloud profile that contains my music."
  },
  youtube: {
    btnText: 'Watch my sends on Youtube',
    labelText: 'Youtube Rock Climbing Channel',
    name: 'Youtube',
    link: 'https://www.youtube.com/channel/UC_Cazf0InKheWZYtSEtz0Og',
    description: "My SoundCloud profile that contains my music."
  }
}


export default function AdditionalInfo(){
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (e: any) => {
    setSelectedOption(e.target.value);
  }

  const handleRadioButtonSubmit = (e: any) => {
    window.open(ADDITIONAL_INFO_ENUM[selectedOption].link);
  }

  console.log(selectedOption, ADDITIONAL_INFO_ENUM[selectedOption]);
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
          >{ADDITIONAL_INFO_ENUM[selectedOption].btnText}</Button>
        )}
      </Frame>
    </Frame>
  )
}