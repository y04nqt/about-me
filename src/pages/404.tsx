import { Frame, TitleBar } from "@react95/core";
import { Confcp118 } from "@react95/icons";

export default function FourOhFour(){
  console.log('boom')
  return(
    <Frame
      className="mx-12"
    >
      <Frame
        boxShadow="in"
        bg="green"
        className="text-left overflow-x-auto"
        padding={8}
      >
        <Frame>
          <TitleBar
            title="404"
            icon={<Confcp118 variant="32x32_4"/>}
          />
          <Frame
            padding={16}
            color='white'
          >
            <h1>Page not found</h1>
          </Frame>
        </Frame>
      </Frame>
    </Frame>
  )
}